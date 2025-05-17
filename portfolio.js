// developerFolio/src/portfolio.js

const portfolio = {
  greeting: {
    title: "Hi 👋, I'm Mauli Patel",
    subtitle:
      "Passionate Data Scientist | M.Sc. Big Data & Analytics | Founder at Scamternship Stories & Tech Data Hub",
    resumeLink:
      "https://leather-ogre-9ed.notion.site/Mauli-Patel-b8da6e0138b94e8dbb65668529100dfd",
    githubProfile: "https://github.com/itsmemauliii",
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/itsmemauliii",
    github: "https://github.com/itsmemauliii",
    email: "maulipatel18112003@gmail.com",
    instagram: "https://instagram.com/techdatahub",
  },

  skillsSection: {
    title: "What I Do",
    subTitle:
      "Aspiring Data Scientist | Community Builder | Python, SQL, Tableau Enthusiast",
    skills: [
      "⚡ Develop and deploy Streamlit apps for real-world issues",
      "⚡ Analyze datasets using Python, Pandas, SQL, and visualize with Matplotlib & Tableau",
      "⚡ Design dashboards for insights using Tableau & Power BI",
      "⚡ Write research-driven case studies and create awareness tools"
    ],
    softwareSkills: [
      { skillName: "Python", fontAwesomeClassname: "logos:python" },
      { skillName: "SQL", fontAwesomeClassname: "vscode-icons:file-type-sql" },
      { skillName: "Tableau", fontAwesomeClassname: "logos:tableau" },
      { skillName: "Streamlit", fontAwesomeClassname: "simple-icons:streamlit" },
      { skillName: "Git", fontAwesomeClassname: "logos:git-icon" },
    ],
  },

  education: [
    {
      schoolName: "St. Xavier's College, Ahmedabad",
      subHeader: "M.Sc. in Big Data & Analytics",
      duration: "Jun 2024 - Jun 2026",
    },
    {
      schoolName: "GLS University, Ahmedabad",
      subHeader: "B.Sc. in Information Technology",
      duration: "Aug 2021 - Apr 2024",
    },
  ],

  experience: [
    {
      role: "Founder & Content Creator",
      company: "Tech Data Hub",
      date: "Mar 2024 – Present",
      desc: "Built a data science community and shared 50+ content pieces on Python, SQL, ML & Analytics.",
    },
    {
      role: "Founder",
      company: "Scamternship Stories",
      date: "May 2025 – Present",
      desc: "Launched an initiative to expose fake internships and empower students via a Streamlit web app.",
    },
    {
      role: "LinkedIn Growth Strategist",
      company: "Freelance",
      date: "Mar 2025 – Present",
      desc: "Helped AI & data professionals grow through optimized profiles, content plans, and prompt engineering.",
    },
  ],

  projects: [
    {
      name: "Scamternship Detector",
      description:
        "Streamlit app to collect and showcase real scam internship stories submitted by students.",
      githubLink: "https://github.com/itsmemauliii",
      liveDemo: "https://scamternship-stories.streamlit.app/",
    },
    {
      name: "British Airways Reviews Dashboard",
      description:
        "Interactive Tableau dashboard analyzing airline passenger feedback and satisfaction metrics.",
      liveDemo:
        "https://public.tableau.com/app/profile/dataqueenmauli/viz/BritishAirwaysReviews_17365980152450/BritishAirwaysReviews",
    },
  ],

  contact: {
    title: "Let's Connect",
    description:
      "I’m open to internships, collaborations, and data science roles. Feel free to connect with me!",
    email: "maulipatel18112003@gmail.com",
  },

  themeConfig: {
    defaultTheme: "dark",
    disableSwitch: false,
    respectPrefersColorScheme: true,
    themes: ["dark", "light"],
    customTheme: {
      primary: "#00bcd4",
      secondary: "#37474f",
      accent: "#ff9800",
      neutral: "#ffffff",
      base100: "#121212",
      base200: "#1f1f1f",
      base300: "#2c2c2c",
      baseContent: "#cfd8dc",
      roundedBox: "1rem",
      animationBtn: "scale",
      animationInput: "pulse",
      buttonText: "#ffffff"
    }
  }
};

export default portfolio;
