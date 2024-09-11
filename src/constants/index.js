import { meta, morchiden, shopify, starbucks, tesla, veolia } from "../assets/images";
import {
    azure,
    car,
    contact,
    css,
    dotnet,
    estate,
    express,
    git,
    github,
    html,
    java,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    python,
    react,
    redux,
    salesforce,
    sass,
    snapgram,
    sql,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: azure,
        name: "azure",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "sql",
        type: "Animation",
    },
    {
        imageUrl: java,
        name: "java",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: salesforce,
        name: "salesforce",
        type: "State Management",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: dotnet,
        name: "dotnet",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "IT Engineering Intern",
        company_name: "Morchid Engineering",
        icon: morchiden,
        iconBg: "#accbe1",
        date: "March 2024 - june 2024",
        points: [
            "Designed and developed an integrated solution using JobRouter to digitalize the transportation process.",
            "Created a dynamic multi-step workflow, improving efficiency in logistics operations.",
            "Developed a validation step for managers to review transport proposals.",
            "Integrated a messaging system to facilitate communication between stakeholders.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Veolia Maroc",
        icon: veolia,
        iconBg: "#fbc3bc",
        date: "june 2023 - july 2023",
        points: [
            "Developed a maintenance process management application using Daxium.",
            "Implemented a mobile production interface for maintenance operations and data entry.",
            "Wrote and modified software code to meet specific project requirements.",
            "Collaborated with team members to collect and document user requirements.",
        ],
    },
    {
        title: "Software engineer Internship",
        company_name: "Morchid Engineering",
        icon: morchiden,
        iconBg: "#b7e4c7",
        date: "june 2022 - july 2022",
        points: [
            "Designed and developed an interactive solution using JobRouter to visualize databases as dynamic tree diagrams.",
            "Created an intuitive user interface for representing complex data structures.",
            "Wrote and tested software code to ensure functionality and performance.",
            "Prepared documentation on the operation and maintenance of the developed software.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/soukainamz',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/soukaina-mzabi',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];