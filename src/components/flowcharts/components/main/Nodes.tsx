'use client'

import React from 'react'
import { Handle, Position, NodeProps } from 'reactflow'
import { CipherionCard, ClientDatabaseCard, DeIdentifiedDataCard, EncryptedDataCard, NonSensitiveDataCard, SensitiveDataCard, ThirdPartyLLMCard } from './Cards'



export interface CipherionNodeData {
  label?: string
}


export const CipherionNode: React.FC<NodeProps<CipherionNodeData>> = ({ xPos, yPos }) => {
  return (
    <div className="relative pointer-events-auto" onPointerDown={(e) => e.stopPropagation()}  >
      <Handle
        id="cipherion-left"
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-primary !border-2 !border-primary-foreground shadow-md"
      />
      
      <CipherionCard />
       <span>{Math.round(xPos)} , {Math.round(yPos)}</span>
      <Handle
        id="cipherion-right"
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-primary !border-2 !border-primary-foreground shadow-md"
      />
      <Handle
        id="cipherion-bottom"
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 !bg-primary !border-2 !border-primary-foreground shadow-md"
      />
    </div>
  );
};
export interface ClientDatabaseNodeData {
  label?: string;
}

export const ClientDatabaseNode: React.FC<NodeProps<ClientDatabaseNodeData>> = ({ xPos, yPos}) => {
  return (
    <div className="relative">
      {/* Input handles */}
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-slate-500 !border-2 !border-white shadow-md"
      />
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 !bg-slate-500 !border-2 !border-white shadow-md"
      />
      
      <ClientDatabaseCard />
      <span>{Math.round(xPos)} , {Math.round(yPos)}</span>
    </div>
  );
};

export interface DeIdentifiedDataNodeData {
  label?: string;
}

export const DeIdentifiedDataNode: React.FC<NodeProps<DeIdentifiedDataNodeData>> = ({ xPos, yPos }) => {
  return (
    <div className="relative">
      {/* Input handle */}
      <Handle
        type="target"
        id="deidentified-top"

        position={Position.Top}
        className="w-3 h-3 !bg-orange-500 !border-2 !border-white shadow-md"
      />
      
      <DeIdentifiedDataCard />
      
      {/* Output handle */}
      
      <Handle
        type="source"
        id="deidentified-right"
        position={Position.Right}
        className="w-3 h-3 !bg-orange-500 !border-2 !border-white shadow-md"
      />
       <span>{Math.round(xPos)} , {Math.round(yPos)}</span>
    </div>
  );
};

export interface EncryptedDataNodeData {
  label?: string;
}

export const EncryptedDataNode: React.FC<NodeProps<EncryptedDataNodeData>> = ({ xPos, yPos }) => {
  return (
    <div className="relative">
      {/* Input handle */}
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-green-500 !border-2 !border-white shadow-md"
      />
      
      <EncryptedDataCard />
       <span>{Math.round(xPos)} , {Math.round(yPos)}</span>
      
      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-green-500 !border-2 !border-white shadow-md"
      />
    </div>
  );
};

export interface NonSensitiveDataNodeData {
  label?: string;
}

export const NonSensitiveDataNode: React.FC<NodeProps<NonSensitiveDataNodeData>> = ({ xPos, yPos}) => {
  return (
    <div className="relative">
      <NonSensitiveDataCard />
      
      {/* Output handle */}
       <span>{Math.round(xPos)} , {Math.round(yPos)}</span>
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-cyan-500 !border-2 !border-white shadow-md"
      />
      
    </div>
  );
};

export interface SensitiveDataNodeData {
  label?: string;
}

export const SensitiveDataNode: React.FC<NodeProps<SensitiveDataNodeData>> = ({ xPos, yPos }) => {
  return (
    <div className="relative pointer-events-auto" onPointerDown={(e) => e.stopPropagation()} >
      {/* Input handles */}
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 !bg-blue-500 !border-2 !border-white shadow-md"
      />
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-blue-500 !border-2 !border-white shadow-md"
      />
      
      {/* Main card component */}
      <SensitiveDataCard />
       <span>{Math.round(xPos)} , {Math.round(yPos)}</span>
      
      {/* Output handles */}
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-blue-500 !border-2 !border-white shadow-md"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 !bg-blue-500 !border-2 !border-white shadow-md"
      />
    </div>
  );
};


export interface ThirdPartyLLMNodeData {
  label?: string;
}

export const ThirdPartyLLMNode: React.FC<NodeProps<ThirdPartyLLMNodeData>> = ({ xPos, yPos }) => {
  return (
    <div className="relative">
      {/* Input handle */}
     
       <Handle
        type="target"
        id="thirdParty-left"
        position={Position.Left}
        className="w-3 h-3 !bg-purple-500 !border-2 !border-white shadow-md"
      />
       <span>{Math.round(xPos)} , {Math.round(yPos)}</span>
      <ThirdPartyLLMCard />
    </div>
  );
};