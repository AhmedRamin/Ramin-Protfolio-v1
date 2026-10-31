export const site = {
  name: "Ramin Ahmed",
  role: "Full-Stack Developer",
  email: "iamraminahmed@gmail.com",
  phone: "01878493067",
  phoneHref: "tel:+8801878493067",
  location: "Palash, Narsingdi · Dhaka, Bangladesh",
  github: "https://github.com/AhmedRamin",
  cv: "/Ramin-Ahmed-CV.pdf",
};

export const skillGroups = [
  {
    title: "Frontend",
    note: "interfaces",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    note: "services",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "EJS", "Socket.IO"],
  },
  {
    title: "Databases",
    note: "storage",
    items: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    title: "3D & Realtime",
    note: "experience",
    items: ["Three.js", "React Three Fiber", "WebGL", "WebSockets"],
  },
  {
    title: "Languages",
    note: "core",
    items: ["JavaScript", "TypeScript", "Python", "C / C++", "Java", "SQL"],
  },
  {
    title: "Tools",
    note: "workflow",
    items: ["Git", "GitHub", "Postman", "VS Code", "Linux", "Vercel"],
  },
];

export const projects = [
  {
    index: "01",
    title: "Space Relics 3D",
    kind: "3D Explorer · Featured",
    description:
      "An interactive 3D solar system where every planet is surrounded by the real hardware sent to it — rovers, landers, orbiters and probes. Includes a 1962→2031 year timeline, a docked explorer rail and a guided first-run tour over a 127-mission NASA-derived dataset.",
    stack: ["Next.js", "React", "Three.js", "R3F", "Static JSON"],
    live: "https://space-relics-3d-v3.vercel.app",
    repo: "https://github.com/AhmedRamin/space-relics-3d_V3",
    featured: true,
  },
  {
    index: "02",
    title: "TICI Course Planner",
    kind: "Full-Stack App",
    description:
      "Course-management platform for BCIC's TICI apprentice programme: weekly routines, lecture-sheet downloads, exam syllabus and a password-protected admin panel with MongoDB GridFS storage.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    live: "https://tici-course-planner-grade-2-group-b-seven.vercel.app/",
    repo: "https://github.com/AhmedRamin/TICI_Course_Planner_Grade-2_Group-B",
  },
  {
    index: "03",
    title: "Real-Time Map Tracking",
    kind: "Realtime Systems",
    description:
      "A live location-tracking web app that streams device coordinates over WebSockets and plots them on an interactive map, with server-rendered views and session handling.",
    stack: ["Node.js", "Express", "Socket.IO", "EJS", "Leaflet"],
    live: "https://real-time-map-tracking-webapp.vercel.app",
    repo: "https://github.com/AhmedRamin/Real_Time_Map_Tracking_webapp",
  },
  {
    index: "04",
    title: "Expenza",
    kind: "Finance Dashboard",
    description:
      "A full-stack expense and investment manager covering income, expenses, loans and multiple accounts, with categorised transactions, monthly breakdowns and interactive charts.",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    live: "https://expenza-nine.vercel.app",
    repo: "https://github.com/AhmedRamin/expenza",
  },
];

export const experience = [
  {
    when: "Jun 2026 — Sep 2026",
    title: "Web Developer Intern",
    org: "Goinnovior Limited · Dhaka, Bangladesh",
    text: "Built responsive React and Next.js interfaces, integrated REST APIs, and handled authentication, form validation and state management. Worked in an agile team with Git and GitHub for version control and code review.",
    active: false,
  },
  {
    when: "Oct 2026 — Present",
    title: "Apprentice Grade-2 (Operator)",
    org: "Bangladesh Chemical Industries Corporation (BCIC)",
    text: "Operating in a continuous-process industrial environment — following plant procedures and safety standards, maintaining shift documentation and coordinating with the technical team. Brings discipline, accuracy and process thinking to engineering work.",
    active: true,
  },
];

export const education = [
  {
    school: "Daffodil International University",
    detail: "B.Sc. in Computer Science & Engineering — Level 3, Term 2",
    when: "2024 — Present",
  },
  {
    school: "Hamdard Public College",
    detail: "Higher Secondary Certificate, Science",
    when: "2021 — 2022 · GPA 5.00",
  },
  {
    school: "Urea Sarkarkhana School & College",
    detail: "Secondary School Certificate, Science",
    when: "2019 — 2020 · GPA 5.00",
  },
];
