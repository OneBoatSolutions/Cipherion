"use client"
import React, { useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';
import type { ReactFlowInstance } from 'reactflow';

import { CipherionNode, ClientDatabaseNode, DeIdentifiedDataNode, EncryptedDataNode, NonSensitiveDataNode, SensitiveDataNode, ThirdPartyLLMNode } from './Nodes';

const nodeTypes = {
  sensitiveData: SensitiveDataNode,
  nonSensitiveData: NonSensitiveDataNode,
  cipherion: CipherionNode,
  encryptedData: EncryptedDataNode,
  deIdentifiedData: DeIdentifiedDataNode,
  clientDatabase: ClientDatabaseNode,
  thirdPartyLLM: ThirdPartyLLMNode,
};

const initialNodes: Node[] = [
  {
    id: 'non-sensitive',
    type: 'nonSensitiveData',
    position: { x: -137, y: -73 },
    data: { label: 'Non Sensitive Data' },
  },
  {
    id: 'sensitive',
    type: 'sensitiveData',
    position: { x: -258, y: 312 },
    data: { label: 'Sensitive Data' },
  },
  {
    id: 'cipherion',
    type: 'cipherion',
    position: { x: 376, y: 175 },
    data: { label: 'Cipherion' },
  },
  {
    id: 'encrypted',
    type: 'encryptedData',
    position: { x: 821, y: 142 },
    data: { label: 'Encrypted Data' },
  },
  {
    id: 'deidentified',
    type: 'deIdentifiedData',
    position: { x: 396, y: 513 },
    data: { label: 'De-identified Data' },
  },
  {
    id: 'client-db',
    type: 'clientDatabase',
    position: { x: 1194, y: -99 },
    data: { label: 'Client Database' },
  },
  {
    id: 'third-party-llm',
    type: 'thirdPartyLLM',
    position: { x: 998, y: 603 },
    data: { label: 'Third Party LLMs' },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'non-sensitive-to-cipherion',
    source: 'non-sensitive',
    target: 'client-db',
    type: 'straight',
    style: { stroke: '#06b6d4', strokeWidth: 2 },
  },
  {
    id: 'sensitive-to-cipherion',
    source: 'sensitive',
    target: 'cipherion',
    type: 'smoothstep',
    style: { stroke: '#3b82f6', strokeWidth: 2 },
  },
  {
    id: 'cipherion-to-encrypted',
    source: 'cipherion',
    target: 'encrypted',
    type: 'smoothstep',
    style: { stroke: '#10b981', strokeWidth: 2 },
  },
  {
    id: 'cipherion-to-deidentified',
    source: 'cipherion',
    sourceHandle: 'cipherion-bottom',
    target: 'deidentified',
    targetHandle: 'deidentified-top',
    type: 'smoothstep',
    style: { stroke: '#f59e0b', strokeWidth: 2 },
  },
  {
    id: 'encrypted-to-client-db',
    source: 'encrypted',
    target: 'client-db',
    type: 'smoothstep',
    style: { stroke: '#64748b', strokeWidth: 2 },
  },
  {
    id: 'deidentified-to-third-party',
    source: 'deidentified',
    target: 'third-party-llm',
    type: 'smoothstep',
    style: { stroke: '#8b5cf6', strokeWidth: 2 },
  },
];

export const ReactFlowCanvas: React.FC = () => {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  /** Center + zoom‑out once on init */
  const onInit = (rf: ReactFlowInstance) => {
    rf.fitView({ padding: 0.2 });
    const isMobile = window.innerWidth < 768; 
    const zoom = isMobile ? 0.22 : 0.6;  
    const x = isMobile? 65 : 380
    rf.setViewport({ x, y: 100, zoom }); // 60 % zoom‑out
  };

  return (
    <div className="w-full h-[70vh] md:h-screen bg-background">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onInit={onInit}
        preventScrolling={false} 
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}   
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}    
        minZoom={0.1}
        maxZoom={1.5}
        className="bg-background"
      >
        <Background gap={20} size={1} color="transparent" />
      </ReactFlow>
    </div>
  );
};