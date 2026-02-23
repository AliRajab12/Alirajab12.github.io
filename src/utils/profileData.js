export const staticProfile = {
    name: 'Ali Rajab',
    roles: [
        'Software Engineer',
        'Product Manager',
        'Mobile App Engineer',
        'Web3 Developer',
    ],
    tagline: 'Flutter · Laravel · React.js · SUI · Web3',
    location: 'Hama, Syria',
    contact: {
        email: 'alirajab.dev@gmail.com',
        phone: '+963-992840260',
        linktree: 'https://linktr.ee/alirajab',
        github: 'https://github.com/AliRajab12',
    },
    stats: [
        { value: '5+', label: 'Years Experience' },
        { value: '75%', label: 'Team Productivity Boost' },
        { value: '2K+', label: 'Users Served' },
        { value: '95%', label: 'System Uptime' },
    ],
    summary: "Hello and welcome يامرحبا! I'm a software engineer passionate about architecting scalable, high-impact solutions. I combine 5+ years of technical expertise with a relentless focus on performance, user experience, and clean architecture. My work spans web/mobile development (Flutter, Laravel, Next.js) and Web3 (SUI Network, Smart Contracts), with a proven track record of leading teams internationally, optimizing systems, and building cross-platform apps adopted by thousands of users.<br><br>I thrive in Agile environments, bridging stakeholder vision with technical execution — whether refining APIs, mentoring developers, or exploring blockchain's potential.<br><br><strong>Goal: Let the machine automate the tasks.</strong><br><br>📩 <a href='mailto:alirajab.dev@gmail.com'>alirajab.dev@gmail.com</a> &nbsp;|&nbsp; <a href='https://linktr.ee/alirajab' target='_blank' rel='noopener noreferrer'>Linktree</a>",
    experience: [
        {
            job_title: "Web3 Product Manager",
            company: "GBCMobile",
            duration: "11/2024 – 07/2025",
            location: "Remotely (Kuwait)",
            description: "• Deployed gas-optimized Move contracts, distributing 1,000+ tokens and 50+ NFTs to users, directly driving a 70% increase in 45-day user retention.<br><br>• Spearheaded development of a DeFi dApp for real-time analytics, swaps, and Move-based rewards, serving 2,000+ holders with 95% uptime.<br><br>• Integrated 5+ SUI-compatible wallets for seamless user onboarding, achieving 90% successful connection rates."
        },
        {
            job_title: "Technical Project Manager",
            company: "Axis X Group",
            duration: "08/2023 – 02/2024",
            location: "Erbil, Iraq",
            description: "• Mentored a cross-functional team of 9 engineers delivering a delivery system, driving a 75% productivity increase and 50% user base growth.<br><br>• Orchestrated efficient project management using ClickUp and streamlined Git workflows, reducing feature delivery time by 80%.<br><br>• Translated stakeholder requirements into technical specs, slashing customer support calls by 90%.<br><br>• Optimized system architecture by refactoring 10+ critical APIs, achieving an 80% decrease in server load.<br><br><em>Tech: ClickUp, Flutter, Laravel, Linux, Github, JMeter, GetX, Google Maps, Firebase.</em>"
        },
        {
            job_title: "Mobile Engineer",
            company: "Balafrreen",
            duration: "12/2022 – 08/2023",
            location: "Erbil, Iraq",
            description: "• Architected a cross-platform mobile app (Flutter) from the ground up with 30+ screens and responsive UI/UX.<br><br>• Boosted data accessibility by 80% and reduced server latency by 50% through backend optimizations (AWS).<br><br>• Processed 10,000+ rows of flight/airline data, improving app response times by 90% via efficient data modeling.<br><br>• Increased app user base by 35% by integrating social sign-in (Google, Apple, Facebook).<br><br><em>Tech: Flutter, BloC, Clean Architecture, AWS, JavaScript, XCode, HIVE</em>"
        }
    ],
    education: [
        {
            degree: 'Bachelor of Information Engineering',
            institution: 'Al-Baath University',
            duration: 'September 2015 – October 2020',
        }
    ],
    skills: {
        'Project Management': {
            icon: '🧭',
            'Proficient': ['Team Leadership', 'Agile', 'ClickUp'],
            'Familiar': ['Jira']
        },
        'Mobile Development': {
            icon: '📱',
            'Proficient': ['Flutter', 'Dart', 'Java', 'UI/UX Design', 'REST API', 'Firebase', 'Google Play', 'App Store', 'POS (SUNMI)', 'Figma', 'XCode'],
            'Familiar': ['Swift', 'Objective-C']
        },
        'Web Development': {
            icon: '🌐',
            'Proficient': ['PHP', 'Laravel', 'JavaScript', 'Node.js', 'Vue.js', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap', 'Linux', 'AWS', 'Git', 'C#', '.NET Core'],
            'Familiar': ['TypeScript', 'React.js', 'Next.js']
        },
        'Web3 & Blockchain': {
            icon: '⛓️',
            'Proficient': ['SUI Network', 'Move Language', 'Smart Contracts', 'DeFi', 'NFT'],
            'Familiar': ['Solidity', 'Ethereum']
        },
        'Database Management': {
            icon: '🗄️',
            'Proficient': ['MySQL', 'PostgreSQL', 'SQL Server', 'SQLite', 'MongoDB']
        }
    },
    projects: [
        {
            title: "DeFi dApp — SUI Network",
            category: "Web3",
            status: "Live",
            featured: true,
            description: "Spearheaded a real-time DeFi dashboard supporting token swaps, Move-based reward distribution, and multi-wallet integration for 2,000+ holders.",
            highlights: [
                "Distributed 1,000+ tokens & 50+ NFTs via gas-optimized Move contracts",
                "95% uptime with 70% improvement in 45-day user retention",
                "Integrated 5+ SUI-compatible wallets with 90% successful connection rate"
            ],
            githubLink: "",
            liveLink: "",
            technologies: ["SUI Network", "Move", "DeFi", "Smart Contracts", "NFT"]
        },
        {
            title: "Flight Ticket Reservation System",
            category: "Web",
            status: "Completed",
            featured: true,
            description: "Full-stack web application for managing flights, reservations and users with multilingual support (Arabic & English).",
            highlights: [
                "Dashboard for 3+ user roles managing flights and reservations",
                "Code-First approach with 6+ tables in MSSQL",
                "15+ Razor pages with Arabic/English i18n support"
            ],
            githubLink: "",
            liveLink: "",
            technologies: [".NET 6", "Razor Pages", "Bootstrap", "HTML/CSS", "SQL Server"]
        },
        {
            title: "Your Store — Ecommerce App",
            category: "Mobile",
            status: "Completed",
            featured: false,
            description: "Feature-rich cross-platform ecommerce app with product search, favorites, cart management, and order processing.",
            highlights: [
                "BLoC state management for scalable business logic",
                "Offline-first with SQLite local caching",
                "Smooth UI built with Figma-designed screens"
            ],
            githubLink: "https://github.com/AliRajab12/flutter_ecommerce_app",
            liveLink: "https://www.youtube.com/watch?v=rD8zsHczDuM&list=PLVHI1VUbMtuItLu2XErbvLjB3-k8h78ny&index=2",
            technologies: ["Flutter", "Dart", "BLoC", "SQLite", "Figma"]
        },
        {
            title: "Delivery Management System",
            category: "Mobile",
            status: "Completed",
            featured: false,
            description: "Cross-platform delivery app serving merchants, clients, and delivery personnel — led a team of 9 engineers.",
            highlights: [
                "75% productivity boost through Agile team leadership",
                "80% reduction in API server load after refactoring 10+ endpoints",
                "90% reduction in customer support escalations"
            ],
            githubLink: "",
            liveLink: "",
            technologies: ["Flutter", "Laravel", "GetX", "Firebase", "Google Maps", "Linux"]
        }
    ],
    accomplishments: {
        certifications: [
            'AWS Cloud Technical Essentials',
            'IBM Data Science Professional Certificate',
            'Thanks Letter from The General Electricity Company'
        ]
    },
    languages: [
        { name: 'Arabic', level: 'Native' },
        { name: 'English', level: 'Professional' },
    ]
};
