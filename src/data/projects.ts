export type Project = {
    title: string;
    description: string;
    tech: string[];
    category: "Web" | "Mobile" | "AI" | "Backend" | "Desktop" | "Tooling";
    year: string;
    repo?: string;
    live?: string;
};

const gh = (repo: string) => `https://github.com/HamzaElshennawy/${repo}`;

export const featuredProjects: Project[] = [
    {
        title: "Quorum",
        description:
            "Academic operations platform for QR-based attendance, coursework tracking and exam delivery, with owner/TA/student roles and Stripe-powered subscription plans.",
        tech: ["Next.js 16", "React 19", "Supabase", "Stripe", "Tailwind"],
        category: "Web",
        year: "2026",
        repo: gh("AttendanceQR"),
    },
    {
        title: "Turathy",
        description:
            "Customer mobile app for a live auction house: browse lots, follow auctions and bid in real time through a Socket.IO live room, with notifications and Arabic/English localization.",
        tech: ["Flutter", "Dart", "Socket.IO", "REST"],
        category: "Mobile",
        year: "2026",
        repo: gh("turathy"),
    },
    {
        title: "AI Lawyer",
        description:
            "Arabic legal assistant with a chat interface backed by a hybrid RAG server: BM25 + semantic retrieval over legal texts, answered by Gemini or local Ollama models.",
        tech: ["Next.js", "Python", "Flask", "RAG", "Gemini", "Supabase"],
        category: "AI",
        year: "2026",
        repo: gh("ailawyer"),
    },
    {
        title: "FimgaAI",
        description:
            "Figma plugin that turns text prompts into high-fidelity UI using Gemini, with proper Auto Layout, responsive frames and context-aware redesign of selected elements.",
        tech: ["TypeScript", "Figma Plugin API", "Gemini"],
        category: "AI",
        year: "2026",
        repo: gh("FimgaAI"),
    },
    {
        title: "Aria IoT Middleware",
        description:
            "Industrial IoT middleware bridging factory devices and applications: MQTT ingestion, MongoDB persistence, live WebSocket streams and multi-company topic management.",
        tech: ["ASP.NET Core", "C#", "MQTT", "MongoDB", "WebSockets"],
        category: "Backend",
        year: "2026",
        repo: gh("middleware"),
    },
    {
        title: "Agrly",
        description:
            "Rental platform for North Coast apartments, with a .NET 9 REST API (JWT auth, listings, reviews, transactions, media) and a React admin dashboard.",
        tech: [".NET 9", "Supabase", "JWT", "React", "Flutter"],
        category: "Backend",
        year: "2025",
        repo: gh("AgrlyAPI"),
    },
];

export const otherProjects: Project[] = [
    {
        title: "SSH Explorer",
        description:
            "Desktop SSH/SFTP file explorer with key auth, uploads/downloads and on-demand folder sizes.",
        tech: ["Python", "Tkinter", "Paramiko"],
        category: "Desktop",
        year: "2026",
        repo: gh("SSH-Explorer"),
    },
    {
        title: "Image2Text",
        description:
            "Arabic OCR pipeline for images and PDFs with a fine-tuned AraBERT classifier served over Flask.",
        tech: ["Python", "Tesseract", "Transformers", "Flask"],
        category: "AI",
        year: "2026",
        repo: gh("Image2Text"),
    },
    {
        title: "pyChat",
        description:
            "Multi-threaded LAN chat with private and group messaging, unread badges and SQLite history.",
        tech: ["Python", "Sockets", "CustomTkinter", "SQLite"],
        category: "Desktop",
        year: "2025",
        repo: gh("pyChat"),
    },
    {
        title: "SQLixer",
        description:
            "Compiler front-end for a SQL-like language: lexer, parser and semantic analyzer with error reporting.",
        tech: ["Python", "Compilers"],
        category: "Tooling",
        year: "2025",
        repo: gh("sqlixer"),
    },
    {
        title: "Image to PDF Converter",
        description:
            "Batch image-to-PDF tool with a GUI and Windows context-menu integration.",
        tech: ["Python", "Pillow"],
        category: "Tooling",
        year: "2025",
        repo: gh("Image-to-PDF-Converter"),
    },
    {
        title: "QR Compound System",
        description:
            "QR access management for residential compounds: owners, CSV import, entry points and analytics.",
        tech: ["Next.js 15", "Firebase", "shadcn/ui"],
        category: "Web",
        year: "2025",
        repo: gh("qrsystem"),
    },
    {
        title: "ProVal",
        description:
            "Valorant esports companion app with live, upcoming and completed matches plus a news feed.",
        tech: ["Flutter", "Provider", "REST"],
        category: "Mobile",
        year: "2025",
        repo: gh("proval"),
    },
    {
        title: "AALAA Designs",
        description:
            "E-commerce storefront and admin dashboard for a design brand.",
        tech: ["Next.js", "PostgreSQL", "shadcn/ui"],
        category: "Web",
        year: "2025",
        repo: gh("aalaadesigns"),
    },
];
