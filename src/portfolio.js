/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sanijae's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Muhammad Sani Portfolio",
    type: "website",
    url: "https://personal-profile-i3h4.vercel.app",
  },
};

//Home Page
const greeting = {
  title: "Muhammad Sani",
  logo_name: "Sanijae",
  nickname: "Scientist || Engineer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1Cvsq_q46UU5-XQcwr8z65nrkLgmXanQl/view?usp=drive_link",
  portfolio_repository: "https://github.com/sanijae/personal_profile",
  githubProfile: "https://github.com/sanijae",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/sanijae",
  // linkedin: "https://www.linkedin.com/in/muhammad-sani-9564a722a",
  // gmail: "muhammadsanijae@gmail.com",

  {
    name: "Github",
    link: "https://github.com/sanijae",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-sani-9564a722a",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:muhammadsanijae@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Science - Analytics & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Complex Dashboard report for  data visualization and analysis using Excel, Power BI and Tableau ",
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
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo iOS and android apps using Kotlin & Swift",
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
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
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
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
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ahamadu Bello University, Zaria",
      subtitle: "M.Sc. in Artificial Intelligent",
      logo_path: "abu.jpg",
      alt_name: "ABU Zaria",
      duration: "2023 - In-View",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Data Mining, Big Data and Hadoop Technologies, Machine Learning, Statistical Analysis and Data Visualization. ",
        "⚡ Apart from this, I have also done research assistant. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
      ],
      website_link: "http://abu.edu.ng",
    },
    {
      title: "Umaru Musa Yar'adua University, Katsina",
      subtitle: "B.Sc. in Computer Science",
      logo_path: "umyu.jpg",
      alt_name: "UMYU Katsina",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on AI, Data Science, Cloud Computing, Software engineering, Computer Networks, Cyber Security and Full Stack Development.",
        "⚡ Probability theory, regression analysis, time series analysis and data manipulation.",
      ],
      website_link: "https://www.umyu.edu.ng",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Complete Frontend Developer",
      subtitle: "- EC-Council University",
      logo_path: "ec-council.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "EC-Council University",
      color_code: "#8C151599",
    },
    {
      title: "C# Fullstack Developer",
      subtitle: "- EC-Council University",
      logo_path: "ec-council.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "EC-Council University",
      color_code: "#00000099",
    },
    {
      title: "Python Developer",
      subtitle: "- EC-Council University",
      logo_path: "ec-council.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "EC-Council University",
      color_code: "#0C9D5899",
    },
    {
      title: "JavaScript Developer",
      subtitle: "- EC-Council University",
      logo_path: "ec-council.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "EC-Council University",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data Hadoop Developer",
      subtitle: "-  Simplilearn",
      logo_path: "simplelearn.jpg",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Python for Data Science",
      subtitle: "- Simplilearn",
      logo_path: "simplelearn.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "Simplilearn",
      color_code: "#1F70C199",
    },
    {
      title: " MongoDB Developer Administrator",
      subtitle: "- Simplilearn",
      logo_path: "simplelearn.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Simplilearn",
      color_code: "#0C9D5899",
    },
    {
      title: "Cyber Security",
      subtitle: "- digital regenesys",
      logo_path: "regenesys.jpg",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "digital regenesys",
      color_code: "#FFBB0099",
    },
    {
      title: "Data Analytics",
      subtitle: "- Accenture",
      logo_path: "accenture.jpg",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: " Accenture",
      color_code: "#1F8ACB",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked on many projects which include ML and DL Application, UI/UX Design, Backend Application, Frontend Application, Full Stack Software and Software Architect. I have also worked with some well established companies mostly as Data Analyst and Dashboard Developer.", 
    // I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Analyst",
          company: "Quantum Analytics",
          company_url: "https://legatohealthtech.com/",
          logo_path: "quntum.jpg",
          duration: "January 2023 - Current",
          location: "Lagos, Nigeria",
          description:
            "As a Data Analyst with five years of experience, I've interpreted and analyzed large datasets to extract valuable insights for business decision-making. Proficient in SQL, Python, and data visualization tools like Tableau, I've consistently delivered actionable recommendations to optimize processes and drive organizational growth.",
          color: "#0879bf",
        },
        {
          title: "Power BI Developer",
          company: "Pwc Switzerland",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "pwc.png",
          duration: "May 2021 - Apr 2022",
          location: "Virtual Work Experience",
          description:
            "Worked as a PowerBI Dashboard Developer for a leading analytics firm, designing and implementing interactive dashboards for clients across various industries. Utilized advanced data visualization techniques to present key insights and facilitate data-driven decision-making processes.",
          color: "#9b1578",
        },
        {
          title: "SQL Developer",
          company: "Nilest",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "nilest.png",
          duration: "May 2018 - Apr 2020",
          location: "Zaria, Nigeria",
          description:
            "Employed as a SQL Developer for three years, specializing in database design, development, and optimization. Proficient in writing complex SQL queries and stored procedures to ensure efficient data retrieval and manipulation.",
          color: "#9b1578",
        },
        {
          title: " IT Support Specialist",
          company: "ICICT, ABU Zaria",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "abu.jpg",
          duration: "january 2017 - Dec 2018",
          location: "ABU, Zaria",
          description:
            "Worked as an IT Support Specialist for two years, providing troubleshooting and technical assistance to users in a corporate environment. Implemented effective solutions for hardware and software issues, maintaining a high level of user satisfaction.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: " Advance Software Engineering",
          company: "Walmart",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "walmart.jpg",
          duration: "DEC 2023",
          location: "Virtual work Experience",
          description:
            "I have experience as a Software Engineer, contributing to the development of scalable web applications using languages such as Java and JavaScript. Skilled in full-stack development, I've collaborated with cross-functional teams to deliver high-quality software solutions aligned with business objectives.",
          color: "#0071C5",
        },
        {
          title: " Data Science Virtual Intenship",
          company: " British Airways",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "brt.png",
          duration: "NOV 2023",
          location: "Virtual Work Experience",
          description:
            "During my Data Science Internship, I collaborated on projects involving data cleaning, analysis, and model building using Python and R. Assisted in the development of predictive models and contributed to insights that informed strategic decision-making processes.",
          color: "#000000",
        },
        {
          title: "Backend Engineer",
          company: "Lyft",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "lyft.png",
          duration: "OCT 2023",
          location: "Virtual work Experience",
          description:
            "During my Backend Engineer Internship, I worked on developing and optimizing server-side functionalities using languages such as Python and Java. Collaborated with senior engineers to implement RESTful APIs, enhance database performance, and ensure the scalability of backend systems.",
          color: "#0071C5",
        },
        {
          title: "Frontend Engineer",
          company: "SkyScanner",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "sky.jpg",
          duration: "SEP 2023",
          location: "Virtual work Experience",
          description:
            "During my Frontend Engineer Internship, I gained experience in developing responsive and interactive user interfaces using HTML, CSS, and JavaScript. Collaborated with the design team to implement UI/UX designs and conducted usability testing to improve user experience.",
          color: "#0071C5",
        },
        {
          title: "Digital Intelligence",
          company: "PwC Switzerland.",
          company_url: "https://www.delhivery.com/",
          logo_path: "pwc.png",
          duration: "AUG 2023 ",
          location: "Virtual work Experience",
          description:
            "During my Digital Intelligence Internship, I worked on analyzing user behavior data to extract actionable insights and improve digital marketing strategies. Utilized tools like Google Analytics and Adobe Analytics to track key metrics and provide recommendations for enhancing online presence and conversion rates.",
          color: "#ee3c26",
        },
        {
          title: "Data Analytics",
          company: "KPMG",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "kpmg.png",
          duration: "JUL 2023",
          location: "Virtual work Experience",
          description:
            "During my Data Analytics Internship, I conducted exploratory data analysis and generated visualizations to support business decision-making processes. Collaborated with team members to clean and preprocess data, contributing to the development of predictive models and actionable insights.",
          color: "#0071C5",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path:  "developer.svg",//"animated_ashutosh.png",
    description:
      "I am available on the following social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, iOS, Cloud and Opensource Development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // }, 
  addressSection: {
    title: "Address",
    subtitle:
      "Bakin dogo, Samaru, Zaria city, Kaduna State Nigeria - 810003",
    locality: "Nigeria",
    country: "NG",
    region: "Kaduna",
    postalCode: "810003",
    streetAddress: " Bakin Dogo, Samaru Zaria City",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  emailSection: {
    title: "muhammadsanijae@gmail.com",
    subtitle: "Email Me",
  },
  phoneSection: {
    title: "+234 8063055417",
    subtitle: "Call Me",
  },
  phone1Section: {
    title: "+234 8089878468",
    subtitle: "Call Me",
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
//  publicationsHeader,
  //publications,
  contactPageData,
};
