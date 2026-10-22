import movaImage from "@/assets/mova.png.asset.json";
import hirereadyImage from "@/assets/hirereadyai.png.asset.json";
import agrimateImage from "@/assets/agrimate.png.asset.json";
import portrait from "@/assets/portrait.png.asset.json";
import bgIntro from "@/assets/bg-intro.mp4.asset.json";
import bgProject from "@/assets/bg-project.mp4.asset.json";
import bgContact from "@/assets/bg-contact.mp4.asset.json";

export const images = { mova: movaImage.url, hireready: hirereadyImage.url, agrimate: agrimateImage.url, portrait: portrait.url };
export const videos = { intro: bgIntro.url, project: bgProject.url, contact: bgContact.url };

export const profile = {
  fullName: "Deepalakshmi Sakthi Sabari Raman",
  shortName: "Deepalakshmi",
  monogram: "DS",
  roleLabel: "AI & Data Science Engineering Student",
  tagline: "Building meaningful technology. Exploring ideas. Creating real-world impact.",
  heroHeading: "I turn ideas into meaningful digital experiences.",
  heroParagraph:
    "I'm Deepalakshmi Sakthi Sabari Raman, an Artificial Intelligence and Data Science engineering student passionate about software development, intelligent systems, and building technology that solves real-world problems.",
  email: "wmahes991@gmail.com",
  phone: "+91 90435 69280",
  phoneHref: "tel:+919043569280",
  github: "https://github.com/deepalakshmi-ssr",
  linkedin: "https://www.linkedin.com/in/deepalakshmi-sakthisabariraman-0a798137a",
  leetcode: "https://leetcode.com/u/deepalakshmi_sakthiraman/",
  college: "Sri Eshwar College of Engineering",
  degree: "B.E. Artificial Intelligence and Data Science",
  period: "2025–2029",
  cgpa: "9.1",
};

export const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "LeetCode", href: profile.leetcode },
];

export const about = {
  introduction: [
    "Hello, I'm Deepalakshmi Sakthi Sabari Raman, an Artificial Intelligence and Data Science engineering student at Sri Eshwar College of Engineering.",
    "I'm interested in software development, data-driven problem-solving, and building technology that addresses practical challenges. I enjoy exploring new ideas, developing projects, and turning concepts into working solutions.",
    "Through my academic work, internships, and personal projects, I'm continuously developing my technical knowledge and practical experience.",
    "My goal is to become a capable technology professional who can contribute to meaningful products and solve real-world problems through thoughtful engineering.",
  ],
  interests: [
    "Artificial Intelligence & Data Science",
    "Software Development",
    "Problem-Solving",
    "Product Development",
    "Exploring Emerging Technologies",
  ],
};

export const education = [
  {
    institution: "Sri Eshwar College of Engineering",
    credential: "B.E. Artificial Intelligence and Data Science",
    period: "2025–2029",
    score: "CGPA 9.1",
    scoreNote: "As reported up to the 2nd semester",
  },
  {
    institution: "Madurai CEOA Matriculation Higher Secondary School",
    credential: "Schooling",
    period: "2024–2025",
    score: "94%",
    scoreNote: "School academic percentage",
  },
  {
    institution: "Madurai CEOA Matriculation Higher Secondary School",
    credential: "Schooling",
    period: "2022–2023",
    score: "96%",
    scoreNote: "School academic percentage",
  },
];

export type Project = {
  slug: "mova" | "hirereadyai" | "agrimate";
  name: string;
  category: string;
  status?: string;
  image: string;
  shortDescription: string;
  tags: string[];
  accent: string; // tailwind classes for the project's visual identity
  intro: string;
  problem: string;
  motivation: string;
  solution: string;
  features: { title: string; description: string }[];
  technologies: string[];
  contribution?: string;
  statusNote?: string;
};

export const projects: Project[] = [
  {
    slug: "mova",
    name: "MOVA",
    category: "Assistive Technology",
    status: "Ongoing",
    image: images.mova,
    shortDescription:
      "An intelligent mobility system combining sensors, computer vision and smart navigation to make wheelchair travel safer and more accessible.",
    tags: ["Computer Vision", "Sensors", "Intelligent Navigation", "Accessibility"],
    accent: "from-primary to-violet",
    intro:
      "MOVA is an ongoing project that explores how sensing and intelligence can make wheelchair mobility safer and more independent. It brings together hardware sensing, computer vision and navigation logic in one modular assistive system.",
    problem:
      "Wheelchair users regularly encounter unsafe terrain, unexpected obstacles and routes that are simply not designed for them. Small accessibility failures — a steep ramp, an blocked path, an uneven surface — can turn an ordinary journey into a risky one.",
    motivation:
      "Accessibility technology is often expensive, bulky or generic. MOVA started from a simple question: can an intelligently designed, modular system improve wheelchair safety and day-to-day navigation without adding complexity for the user?",
    solution:
      "MOVA integrates sensors, computer vision and intelligent navigation into a modular assistive mobility system. The system senses the environment, understands terrain and obstacles, and supports wheelchair-friendly route decisions — with mobility risk analysis to inform safer movement.",
    features: [
      { title: "Terrain Detection", description: "Identifies surface conditions so that risky ground can be recognised before it becomes a hazard." },
      { title: "Obstacle Awareness", description: "Computer vision keeps track of obstacles in the environment to support safer movement." },
      { title: "Wheelchair-Friendly Navigation", description: "Navigation that prioritises routes and places that are genuinely accessible." },
      { title: "Mobility Risk Analysis", description: "Analyses mobility patterns to understand and flag situations with elevated risk." },
    ],
    technologies: ["Sensors", "Computer Vision", "Intelligent Navigation"],
    contribution: "I am designing and developing MOVA end-to-end as an ongoing personal project — from the system concept to the sensing and navigation logic.",
    statusNote: "MOVA is in active development. Features described here reflect the project's documented design focus, not a shipped product.",
  },
  {
    slug: "hirereadyai",
    name: "HireReady AI",
    category: "AI Platform",
    image: images.hireready,
    shortDescription:
      "A smart hiring and evaluation platform that automates candidate assessment through AI interviews, coding tests and analytics dashboards.",
    tags: ["Artificial Intelligence", "Automated Interviews", "Analytics", "Web Application"],
    accent: "from-violet to-primary",
    intro:
      "HireReady AI is a smart hiring and evaluation platform that automates candidate evaluation. It brings AI-based interviews, coding assessments and analytics dashboards into a single placement workflow.",
    problem:
      "Screening candidates manually is slow and inconsistent. Recruiters spend significant time on early-stage evaluation, and students often have no structured way to see where they stand or how they are improving.",
    motivation:
      "Placement preparation and hiring evaluation are two sides of the same process. HireReady AI was built to serve both: give recruiters faster, data-backed screening, and give students clear, measurable feedback on their readiness.",
    solution:
      "The platform automates candidate evaluation through AI-based interviews, coding assessments and analytics dashboards — reducing recruiter screening time while improving how student performance is tracked over time.",
    features: [
      { title: "AI-Based Interviews", description: "Automated interview experiences that evaluate candidates without requiring a recruiter for every round." },
      { title: "Coding Assessments", description: "Structured coding evaluations that measure practical problem-solving ability." },
      { title: "Analytics Dashboards", description: "Dashboards that turn evaluation results into clear, comparable insight." },
      { title: "Performance Tracking", description: "Student performance tracking that shows progress across evaluations." },
    ],
    technologies: ["Artificial Intelligence", "Web Application", "Analytics"],
    contribution: "I built HireReady AI as a personal project — designing the evaluation workflow and implementing the platform's core features.",
  },
  {
    slug: "agrimate",
    name: "AgriMate",
    category: "AgriTech",
    image: images.agrimate,
    shortDescription:
      "An AI-based smart farming web application with weather, soil and crop guidance — plus a multilingual voice assistant for rural users.",
    tags: ["AI", "Voice Assistant", "Web Application", "Agriculture"],
    accent: "from-emerald-500 to-primary",
    intro:
      "AgriMate is a responsive web application that gives farmers practical, AI-driven guidance — from weather forecasts and soil information to crop recommendations, pest alerts and market prices — in one accessible place.",
    problem:
      "Farmers often need to juggle multiple disconnected sources for weather, soil advice, crop guidance and market prices. Language barriers and complex interfaces make many digital tools impractical for rural users.",
    motivation:
      "Technology helps farming most when it is genuinely easy to use. AgriMate was designed around accessibility for rural users — including a multilingual voice assistant so farmers can interact by simply speaking.",
    solution:
      "AgriMate combines weather forecasting, soil testing information, crop recommendations, pest alerts and market prices in a responsive web application, with an AI voice assistant supporting 5 languages for voice-based interaction.",
    features: [
      { title: "Weather Forecasting", description: "Weather insights that help farmers plan work around upcoming conditions." },
      { title: "Soil Testing", description: "Soil-related guidance that informs what will grow well and what needs attention." },
      { title: "Crop Recommendations", description: "AI-based crop suggestions matched to the farmer's conditions." },
      { title: "Pest Alerts", description: "Timely pest warnings so problems can be addressed early." },
      { title: "Market Prices", description: "Current market price information to support better selling decisions." },
      { title: "Multilingual AI Voice Assistant", description: "A voice assistant supporting 5 languages: spoken language becomes text, the assistant produces audio output, and speech is visualised through animation." },
    ],
    technologies: ["Artificial Intelligence", "Voice Assistant", "Responsive Web"],
    contribution: "I designed and built AgriMate as a personal project, with particular focus on the voice assistant and on keeping the interface accessible for rural users.",
  },
];

export const experience = [
  {
    role: "ReactJS Development Intern",
    organisation: "Odisoft Technologies",
    period: "2026",
    duration: "4 weeks",
    bullets: [
      "Developed interactive React components and integrated them into dynamic web applications.",
      "Collaborated with team members to build responsive React features, optimise performance and enhance overall website functionality.",
    ],
    skills: ["ReactJS", "JavaScript", "HTML", "CSS", "Amazon Q", "Prompt Engineering", "Lovable AI", "Prototyping", "UI Design", "UX Basics", "Time Management", "Communication", "Team Collaboration"],
  },
  {
    role: "Frontend Developer Intern",
    organisation: "LearnTricks EduTech",
    period: null,
    duration: "1 month",
    bullets: [
      "Completed a one-month frontend development internship, gaining hands-on experience building user interfaces.",
    ],
    skills: ["Frontend Development", "User Interfaces"],
  },
  {
    role: "Student Partner",
    organisation: "Internshala, Coimbatore",
    period: "2026",
    duration: null,
    bullets: [
      "Promoted internship opportunities and connected students with relevant career programs.",
    ],
    skills: ["Outreach", "Communication", "Community Engagement"],
  },
];

export const achievements = [
  { title: "Createathon — First Prize", organisation: null, year: "2025", detail: "First prize at Createathon." },
  { title: "Self-E Hackathon — Finalist", organisation: null, year: "2025", detail: "Finalist, finishing 7th among 100 teams." },
  { title: "Ossome Hacks 3.0", organisation: "SRMIST", year: null, detail: "Participated in Ossome Hacks 3.0 hosted by SRMIST." },
  { title: "National Building Case Study Competition", organisation: null, year: null, detail: "Participated in the national-level building case study competition." },
];

export const leetcode = {
  solved: "460+",
  rating: "150",
  rank: "242,138",
  note: "Figures as previously recorded on my LeetCode profile — not live statistics.",
};

export const certifications = [
  { course: "C Programming Basics & Internet of Things", provider: "Simplilearn", year: "2025" },
  { course: "HTML5, CSS, JavaScript", provider: "Infosys Springboard", year: "2025" },
  { course: "C Programming", provider: "Udemy", year: "2025" },
  { course: "Software Engineer", provider: "HackerRank", year: "2026" },
  { course: "Design Developer", provider: "HackerRank", year: "2026" },
  { course: "AWS with AI", provider: "Unstop", year: "2026" },
];

export const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Python", "Java", "HTML"],
    context: "Core languages from my academic work and certifications.",
  },
  {
    category: "Web Development",
    skills: ["CSS", "JavaScript", "ReactJS"],
    context: "Applied during my ReactJS internship at Odisoft and in project interfaces.",
  },
  {
    category: "Core Concepts",
    skills: ["Object-Oriented Programming", "Data Structures", "SQL"],
    context: "Foundations that back every project and coding problem I take on.",
  },
  {
    category: "AI & Modern Tooling",
    skills: ["Amazon Q", "Prompt Engineering", "Lovable AI"],
    context: "AI-assisted development skills from my Odisoft internship.",
  },
  {
    category: "Tools & Platforms",
    skills: ["GitHub", "VS Code", "Figma", "Kubernetes", "Flutter", "Canva", "Power BI"],
    context: "Everyday tools for building, designing and analysing.",
  },
];

export const projectLinks: Record<Project["slug"], { label: string; to: string }> = {
  mova: { label: "MOVA", to: "/projects/mova" },
  hirereadyai: { label: "HireReady AI", to: "/projects/hirereadyai" },
  agrimate: { label: "AgriMate", to: "/projects/agrimate" },
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Achievements", to: "/achievements" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];
