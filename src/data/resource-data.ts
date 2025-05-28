export const resourcesData = {
  resources: {
    title: "Resources: Whitepapers, Case Studies, Blogs, Articles",
    description:
      "Explore the minds behind Cipherion and stay updated with the latest in data security, encryption trends, compliance mandates, and real-world case studies.",
    sections: [
      {
        type: "whitepapers",
        title: "Whitepapers",
        intro: "Deep dive into our encryption architecture, threat models, and industry applications.",
        items: [
          {
            title: "Post-Quantum Encryption for Enterprises",
            description:
              "Explore how Cipherion enables quantum-resilient data protection using lattice-based cryptography, preparing organizations for the post-quantum era.",
            author: {
              name: "Dr. Alina Ross",
              bio: "Alina is a cryptographer with 12+ years in quantum-safe encryption research.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            published_date: "2025-01-15",
            reading_time: "12 min",
            tags: ["quantum", "encryption", "future-proofing", "enterprise"],
            technologies: ["Lattice Cryptography", "NIST PQC Algorithms"],
            compliance: ["FIPS 140-3", "ISO/IEC 19790"],
            thumbnail: "/placeholder.svg?height=200&width=300",
            link: "/resources/whitepapers/post-quantum-encryption",
          },
          {
            title: "Zero-Key Architecture: Rethinking Key Management at Scale",
            description:
              "This whitepaper explains Cipherion's Zero-Key infrastructure using secure enclave-based ephemeral key generation, removing the need to store long-term secrets.",
            author: {
              name: "Markus Lang",
              bio: "Chief Security Architect at Cipherion, specializing in distributed keyless systems.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            published_date: "2025-02-10",
            reading_time: "9 min",
            tags: ["keyless", "key management", "cloud security"],
            technologies: ["SGX", "HSM", "Ephemeral Keys"],
            compliance: ["PCI-DSS", "SOC 2"],
            thumbnail: "/placeholder.svg?height=200&width=300",
            link: "/resources/whitepapers/zero-key-architecture",
          },
          {
            title: "End-to-End PII Protection in Healthcare & Fintech",
            description:
              "Learn how Cipherion ensures full PII protection using layered encryption, tokenization, and real-time masking, tailored to industry regulations.",
            author: {
              name: "Priya Nair",
              bio: "Data privacy strategist and regulatory compliance expert.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            published_date: "2025-03-05",
            reading_time: "11 min",
            tags: ["PII", "privacy", "regulations", "data governance"],
            technologies: ["AES-256", "Tokenization", "FPE"],
            compliance: ["GDPR", "HIPAA", "PCI-DSS"],
            thumbnail: "/placeholder.svg?height=200&width=300",
            link: "/resources/whitepapers/pii-protection",
          },
        ],
      },
      {
        type: "case_studies",
        title: "Case Studies",
        intro: "Real impact from Cipherion deployments.",
        items: [
          {
            title: "Fintech Case Study – Reducing PCI-DSS Risk by 96%",
            description:
              "Discover how a top-tier digital payments provider implemented Cipherion's tokenization engine and passed PCI-DSS audits with minimal disruption.",
            industry: "Fintech",
            client: "Confidential Payments Co.",
            impact: "Reduced PCI-DSS audit scope by 96%.",
            technologies_used: ["Vaultless Tokenization", "AES Encryption", "Access Controls"],
            compliance: ["PCI-DSS"],
            published_date: "2025-01-30",
            thumbnail: "/placeholder.svg?height=200&width=300",
            link: "/resources/case-studies/fintech-pci",
            tags: ["fintech", "PCI-DSS", "tokenization", "case study"],
          },
          {
            title: "Healthcare Case Study – Securing EMRs at Field Level",
            description:
              "A large hospital network used Cipherion's real-time tokenization and data masking to secure EMRs at the field level without performance loss.",
            industry: "Healthcare",
            client: "HealthCore Clinics",
            impact: "Protected 3.5M EMR records, reduced insider breach risk by 85%.",
            technologies_used: ["Field-level Masking", "Tokenization", "Audit Trails"],
            compliance: ["HIPAA", "HITRUST"],
            published_date: "2025-02-18",
            thumbnail: "/placeholder.svg?height=200&width=300",
            link: "/resources/case-studies/healthcare-emr",
            tags: ["healthcare", "HIPAA", "EMR", "case study"],
          },
        ],
      },
      {
        type: "blogs_insights",
        title: "Blogs & Insights",
        intro: "Bite-sized expertise and industry updates.",
        items: [
          {
            title: "What the 2025 AT&T Data Breach Taught Us About Compliance Failures",
            excerpt:
              "When compliance is reactive rather than proactive, breaches are inevitable. We analyze where it went wrong.",
            author: {
              name: "Leah Mendoza",
              bio: "Former CISO and writer on cybersecurity failures and resilience.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            published_date: "2025-04-10",
            reading_time: "6 min",
            tags: ["breach analysis", "audit", "data loss"],
            thumbnail: "/placeholder.svg?height=200&width=300",
            link: "/resources/blogs/att-breach-compliance",
          },
          {
            title: "Encryption Isn't Optional in AI Pipelines—Here's Why",
            excerpt:
              "Sensitive data flowing through ML models needs robust protection. This blog explores encryption strategies in AI/ML workflows.",
            author: {
              name: "Derrick Zhao",
              bio: "ML security engineer focused on protecting inference pipelines.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            published_date: "2025-04-21",
            reading_time: "7 min",
            tags: ["AI security", "ML", "pipeline encryption"],
            thumbnail: "/placeholder.svg?height=200&width=300",
            link: "/resources/blogs/encryption-ai",
          },
          {
            title: "5 Things Auditors Look For in Your Data Protection Stack",
            excerpt:
              "Audit season? Here's what experienced auditors want to see before they greenlight your data security practices.",
            author: {
              name: "Meera Singh",
              bio: "Certified InfoSec Auditor & Governance Consultant.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            published_date: "2025-05-01",
            reading_time: "5 min",
            tags: ["auditing", "data protection", "checklist"],
            thumbnail: "/placeholder.svg?height=200&width=300",
            link: "/resources/blogs/auditor-checklist",
          },
          {
            title: "The Future of Zero-Trust Architecture in Cloud Security",
            excerpt:
              "Zero-trust isn't just a buzzword—it's becoming essential. Learn how to implement it effectively in your cloud infrastructure.",
            author: {
              name: "Alex Chen",
              bio: "Cloud security architect with expertise in zero-trust implementations.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            published_date: "2025-05-15",
            reading_time: "8 min",
            tags: ["zero-trust", "cloud security", "architecture"],
            thumbnail: "/placeholder.svg?height=200&width=300",
            link: "/resources/blogs/zero-trust-cloud",
          },
          {
            title: "Quantum Computing Threats: Are You Prepared?",
            excerpt:
              "Quantum computers will break current encryption methods. Here's your roadmap to quantum-safe security.",
            author: {
              name: "Dr. Sarah Kim",
              bio: "Quantum cryptography researcher and security consultant.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            published_date: "2025-05-20",
            reading_time: "10 min",
            tags: ["quantum computing", "encryption", "future-proofing"],
            thumbnail: "/placeholder.svg?height=200&width=300",
            link: "/resources/blogs/quantum-threats",
          },
        ],
      },
      {
        type: "articles",
        title: "Technical Articles",
        intro: "In-depth technical insights and implementation guides.",
        items: [
          {
            title: "Implementing Homomorphic Encryption in Production",
            description:
              "A comprehensive guide to deploying homomorphic encryption for secure computation on encrypted data.",
            author: {
              name: "Dr. Michael Torres",
              bio: "Cryptography researcher specializing in homomorphic encryption systems.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            published_date: "2025-03-20",
            reading_time: "15 min",
            tags: ["homomorphic encryption", "secure computation", "implementation"],
            technologies: ["FHE", "SEAL", "HElib"],
            thumbnail: "/placeholder.svg?height=200&width=300",
            link: "/resources/articles/homomorphic-encryption",
          },
          {
            title: "Building Secure Multi-Party Computation Systems",
            description:
              "Learn how to design and implement secure multi-party computation protocols for collaborative data analysis.",
            author: {
              name: "Elena Rodriguez",
              bio: "Distributed systems engineer with focus on privacy-preserving protocols.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            published_date: "2025-04-05",
            reading_time: "18 min",
            tags: ["MPC", "privacy", "distributed systems"],
            technologies: ["Shamir's Secret Sharing", "Garbled Circuits"],
            thumbnail: "/placeholder.svg?height=200&width=300",
            link: "/resources/articles/secure-mpc",
          },
        ],
      },
    ],
  },
}
