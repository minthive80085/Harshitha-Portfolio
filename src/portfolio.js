/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sai Harshitha's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sai Harshitha Portfolio",
    type: "website",
    url: "http://harshithareddy.com/",
  },
};

//Home Page
const greeting = {
  title: "Sai Harshitha",
  logo_name: "Sai Harshitha",
  nickname: "ReadyForTech",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "Harshitha_Resume.pdf",
  portfolio_repository: "https://github.com/harshithareddy/masterPortfolio",
  githubProfile: "https://github.com/harshithareddy",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/harshithareddy",
  // linkedin: "https://www.linkedin.com/in/harshithareddy-pakala-35318334b/",
  // gmail: "sonyharshithareddypakala@gmail.com",
  // gitlab: "https://gitlab.com/harshithareddy",
  // facebook: "https://www.facebook.com/harshithareddy",
  // twitter: "https://twitter.com/harshithareddy",
  // instagram: "https://www.instagram.com/harshithareddy"

  {
    name: "Github",
    link: "https://github.com/harshithareddy",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harshithareddy-pakala-35318334b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sonyharshithareddypakala@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Core Computer Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Malla Reddy Engineering College",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "MRUH.jpg",
      alt_name: "MRUH Hyderabad",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ I am studying basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Artificial Intelligence, Java Programming, Cloud Computing and Full Stack Development.",
        "⚡ I am currently conducting research across several departments while simultaneously developing projects that enhance my skills and contribute to my practical experience.",
      ],
      website_link: "https://www.mrec.ac.in/",
    },
    {
      title: "Alphores Junior College",
      subtitle: "Intermediate Education",
      logo_path: "ALP_Logo.jpg",
      alt_name: "MRUH Hyderabad",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I did my Intermediate by taking MPC stream in Alphores Junior College and did research in Engineering stream.  ",
        "⚡ Apart from this, I have done courses on IIT, JEE Mains and prepared for various Examinations.",
     ],
      website_link: "https://alphorescollege.com/",
    },
    {
      title: "Telangana State Model School",
      subtitle: "Secondary Education",
      logo_path: "TMS_logo.jpg",
      alt_name: "TMS SDPT",
      duration: "2016 - 2021",
      descriptions: [
        "⚡ I did my schooling in Telangana State Model School, as I did expand my horizions to take on various research activities, enhnace my soft skills and interpersonal skills.  ",
        "⚡ Apart from this, I have keen interest in computers, tech, books and various extra curicular activities .",
     ],
      website_link: "https://admissionforms.in/ts-model-school-inter-admission/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      logo_path: "stanford_logo.png",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Java",
      logo_path: "deeplearning_ai_logo.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Data Science",
      logo_path: "ibm_logo.png",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Fullstack Development",
      logo_path: "coursera_logo.png",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Cryptography",
      logo_path: "nptel_logo.png",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      logo_path: "gcp_logo.png",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "Sept 2021 - Present",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "Nov 2018 - Dec 2020",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating automatic software using python and google vision for handling repetitive tasks involving filling of data.",
          color: "#9b1578",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url: "https://opencorporates.com/companies/us_dc/EXTUID_4170287",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I was part of data science team. I have also made visualization dashboard to represent company's business data and online presence of industry using analytics and insights.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "Jun 2022 - Aug 2022",
          location: "San Francisco, CA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt Ltd",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of sending freight present in every location of India (India30) to every location of India (India30) along with 3 third-party courier partners while handling multiple factors. Factors were cost, distance, facilities and performance with some time constraint. I was also involved in live team tracking process (LTT) for the team which can be trackable from android app.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url: "https://opencorporates.com/companies/us_dc/EXTUID_4170287",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I was part of data science team. I have also made visualization dashboard to represent company's business data and online presence of industry using analytics and insights.",
          color: "#fc1f20",
        },
        {
          title: "Data Science Intern",
          company: "GapJumpers",
          company_url: "https://www.gapjumpers.me/",
          logo_path: "gapjumpers_logo.png",
          duration: "Oct 2017 - Nov 2017",
          location: "Work From Home",
          description:
            "I have optimized a Unsupervised Learning model in the field of Deep Learning and built a data pipeline using various AWS products. I have also implemented visualization dashboards for various teams, resulting in a 60% reduction in manual data analysis time. This allowed the team to make data-driven decisions 3x faster.",
          color: "#0078D4",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url: "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects to solve college related issues. We have organised workshops and trainings on android application development, flutter, react and python on weekly basis.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harshitha.webp",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Java, AI, React, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    avatar_image_path: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
