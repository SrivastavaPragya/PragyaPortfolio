import {
  FaBriefcase,
  FaCode,
  FaEnvelopeOpen,
  FaFolderOpen,
  FaGraduationCap,
  FaHome,
  FaUser,
  FaGithub,
} from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import { FiExternalLink, FiFileText, FiUser } from "react-icons/fi";
import { HiCode } from "react-icons/hi";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";
import Work4 from "./assets/project-4.png";
import Work5 from "./assets/project-5.png";
import Work6 from "./assets/project-6.png";
import Work7 from "./assets/project-7.png";
import Work8 from "./assets/project-8.png";
import Work9 from "./assets/project-9.png";
import Work10 from "./assets/project-10.png";
import Work11 from "./assets/project-11.png";
import Work12 from "./assets/project-12.png";
import Work13 from "./assets/project-13.png";
import Work14 from "./assets/project-14.png";
import Work15 from "./assets/project-15.png";
import Work16 from "./assets/project-16.png";
import Work17 from "./assets/project-17.png";
import Work18 from "./assets/project-18.png";
import Work19 from "./assets/project-19.png";
import Work20 from "./assets/project-20.png";
import Work21 from "./assets/project-21.png";
import Work22 from "./assets/project-22.png";
import Work23 from "./assets/project-23.png";
import Work24 from "./assets/project-24.png";
import Work01 from "./assets/img2.png";

import Theme4 from "./assets/blue.png";
import Theme3 from "./assets/blueviolet.png";
import Theme5 from "./assets/goldenrod.png";
import Theme9 from "./assets/green.png";
import Theme6 from "./assets/magenta.png";
import Theme8 from "./assets/orange.png";
import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme10 from "./assets/yellow.png";
import Theme7 from "./assets/yellowgreen.png";
import Work02 from "./assets/food.jpg";
import Work03 from "./assets/work03.png";
import Work04 from "./assets/wallet.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Name : ",
    description: "Pragya Srivastava",
  },

  {
    id: 2,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 3,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 4,
    title: "Address : ",
    description: "Gurugram , Haryana, India",
  },

  {
    id: 5,
    title: "Phone : ",
    description: "+91 8604789802",
  },

  {
    id: 6,
    title: "Email : ",
    description: "Pragya142018@gmail.com",
  },
];

export const stats = [
  {
    id: 1,
    no: "40+",
    title: "Web Development <br /> Projects",
  },

  {
    id: 2,
    no: "4+",
    title: "Stars <br /> Codeshef Coder",
  },

  {
    id: 3,
    no: "20+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "2+",
    title: " Years <br /> Experience",
  },
];

export const resume = [
  {
    id: 101,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Aug 2024 / Present",
    title: "Software Engineer <span> Perceptiviti Data Solutions </span>",
    desc: `
  • Developed an AI agent platform enabling users to create and train agents for automated email workflows, integrating Redux and Google Authentication, resulting in a 40% increase in workflow automation efficiency.
 <br />
  
  • Architected scalable backend services using Python and integrated Stripe and PayPal payment gateways on the client side, improving transaction success rates by 25% and streamlining SaaS subscription management.
  <br />
  
  • Enhanced SaaS dashboards and analytics features using Next.js, React, and Tailwind CSS, leveraging advanced graph libraries and SEO optimization to boost user insights by 35% and increase organic traffic by 20%.
    `,
  },

  {
    id: 100,
    category: "experience",
    icon: <FaBriefcase />,
    year: "feb 2024 / march 2024",
    title: "BackEnd Developer <span> CodingJr Pvt. Ltd </span>",
    desc: `
     • Pioneered the design and development of several user-centric websites, leveraging modern frameworks and cross-functional collaboration. 
     <br />
     • Led the development and deployment of 5 full-stack web applications, driving a 30% increase in user satisfaction and a 20% revenue boost through enhanced functionality and refined user experience. 
     <br />
     • Optimized the platform’s performance and improved intuitive UI/UX workflows, resulting in a 40% increase in overall user interactions.
    `,
  },

  {
    id: 103,
    category: "experience",
    icon: <FaBriefcase />,
    year: " jun 2023 / july 2024",
    title: "Blockchain Developer and Researcher <span>Knit Finance</span>",
    desc: `
  • Worked as a researcher on Bitcoin scaling solutions, exploring Layer 1 and Layer 2 approaches to enhance network throughput and efficiency.
  <br />
  
  • Researched and experimented with integrating zkEVM technology with the Bitcoin Lightning Network to improve scalability, privacy, and interoperability.
  <br />
  
  • Contributed as a Growth Hacker Analyst, helping optimize user acquisition, engagement strategies, and product-market alignment.
  <br />
  
  • Excelled in mastering AWS services at the Solution Architect level and integrated advanced AWS solutions to enhance system performance and scalability.
    `,
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020 - 2024",
    title:
      "Bachelor of Technology <span> Ajay Kumar Garg Engineering College </span>",
    desc: "",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020",
    title: "Higher Secondary <span> Bishop johnson School & College</span>",
    desc: "Percentage - 87%",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018",
    title: "Higher Secondary <span> Bishop johnson School & College</span>",
    desc: "Percentage - 86%",
  },
  {
    id: 21,
    category: "projects",
    icon: <HiCode />,
    year: " NextJS| LLM | JavaScript",
    title: `<a href="https://next-skill-sphere.vercel.app/" target='blank' style="color: inherit; text-decoration: none;">eLearny  <span> Full Stack AI learning hub</span></a>`,
    desc: `• Transformed ’eLearny’ into AI-driven course hub by integrating the latest LLM models to deliver personalized
course recommendations and quiz generation for any course, boosting learner engagement by 45%. <br><br>
    • Integrated a secure Stripe payment gateway, enabling seamless subscription handling and increasing monetiza-
tion potential by 30%.<br><br>
    • Created backend from SQL and optimized authentication with JWT, resulting in a 40% improvement in query
efficiency and strengthened application security.<br><br>
  
    `,
  },
  {
    id: 24,
    category: "projects",
    icon: <HiCode />,
    year: " Django | Langchain | NextJS",
    title: `<a href="https://scope-ai-xi.vercel.app/" target='blank' style="color: inherit; text-decoration: none;">ScopeAI <span>AI-Powered Research Assistant for Market Insights</span></a>`,
    desc: `• Engineered ScopeAI, a Django-powered research API that transforms startup ideas into structured market briefs<br><br>
    •  Integrated cutting-edge LLM capabilities with LangChain and Gemini models to deliver consistent insights<br><br>
    • Built a robust pipeline enabling automated report/PPT generation for scalable research workflows.
    `,
  },
  {
    id: 22,
    category: "projects",
    icon: <HiCode />,
    year: "Node | JavaScript | MongoDB",
    title: `<a href="https://github.com/SrivastavaPragya/FeastFusionApi" target='blank' style="color: inherit; text-decoration: none;">Feast Fusion<span> Cutting-edge food delivery platform </span></a>`,
    desc: `• Tailored experiences for Admins, Customers, Vendors, and Delivery partners, ensuring seamless and person
alized journeys.<br><br> 
    • Leveraged MongoDB for efficient data storage, optimizing platform scalability by handling a 200%
increase in concurrent user traffic.<br><br> 
  
    `,
  },
  {
    id: 23,
    category: "projects",
    icon: <HiCode />,
    year: " MERN",
    title: `<a href="https://utubeclone2.netlify.app/" target='blank' style="color: inherit; text-decoration: none;">Youtube clone <span> Youtube clone
  </span></a>`,
    desc: `• I have created a Youtube clone using reactjs and api .I have used use state hooks in this project<br><br>
   
      `,
  },

  {
    id: 8,
    category: "projects",
    icon: <HiCode />,
    year: "MERN",
    title: `<a href="https://github.com/SrivastavaPragya/QuickWallet" target='blank' style="color: inherit; text-decoration: none;">QuickWallet <span>Paymnet Platform</span></a>`,
    desc: `• Built a scalable payment wallet backend using Node.js, TypeScript, and MongoDB, enabling secure user onboarding, authentication, and seamless wallet operations (add money, transfer, withdraw) <br><br>
      • Implemented transaction-safe wallet updates using MongoDB atomic operations, ensuring 0 data inconsistency during concurrent transfers and improving system reliability.<br><br>
      • Designed and developed a modular microservice-ready architecture with clean TypeScript layers (controllers, services, repositories), achieving high maintainability and reducing code complexity by 40%. <br><br>
     
      .`,
  },
  //   {
  //     id: 7,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "MERN",
  //     title:
  //       '<a href="https://github.com/Omi1804/E-commerse" target=`blank` style="color: inherit; text-decoration: none;">Ø•M•Ī <span> A Fully Dynamic E-Commerse Site</span></a>',
  //     desc: `• Fully Dynamic E-commerce website built using React for frontend and Node Express for backend, with MongoDB for data storage. <br><br>
  //     • Robust login and registration system implemented using <strong>JWT</strong> (JSON Web Tokens) for secure authentication.<br><br>
  //     • Implements an intuitive '<strong>Add to Cart</strong>' functionality, allowing users to easily add desired products for future purchase. <br><br>
  //     • Utilizes MongoDB to store and manage all data, including product listings, user profiles, and order details.<br><br>
  //     • Implements advanced search and filtering functionalities to help users find desired products efficiently.<br><br>
  //     • Implements responsive design principles, ensuring the website looks and functions well across different devices and screen sizes.`,
  //   },
  //   {
  //     id: 18,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "MERN",
  //     title:
  //       '<a href="https://github.com/Omi1804/Workout-buddy" target=`blank` style="color: inherit; text-decoration: none;">WORKOUT PLANNER<span> A Mern application to manage and tracks workouts</span></a>',
  //     desc: `•  Experience a cutting-edge, fully MERN (MongoDB, Express.js, React.js, Node.js) stack application designed for efficient workout management and tracking. <br><br>
  //     • Secure your data with robust authorization and authentication mechanisms, powered by JWT (JSON Web Tokens), ensuring only authorized users can access and modify their workout information..<br><br>
  //     • Each user enjoys their own personalized workout database, empowering them to store, organize, and track their unique fitness journey with ease.<br><br>
  //     • Utilizes MongoDB to store and manage all data, including product listings, user profiles, and order details.<br><br>`,
  //   },

  //   {
  //     id: 19,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "REACT",
  //     title:
  //       '<a href="https://github.com/Omi1804/Buddy_excerise" target=`blank` style="color: inherit; text-decoration: none;">EXERCISE BUDDY<span>An Interactive And Immersive Gym Guide</span></a>',
  //     desc: `• Experience a dynamic React project with Material-UI integration, leveraging Rapid API for a vast exercise collection.<br><br>
  //       • Immerse yourself in an impressive and visually appealing interface that beautifully showcases the fetched exercises, making it easy to browse and select from the available options.<br><br>
  //       • Empower users with a powerful search functionality that allows them to quickly find specific exercises based on their preferences, ensuring a personalized and efficient workout experience.`,
  //   },
  //   {
  //     id: 9,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "REACT",
  //     title:
  //       '<a href=" https://github.com/Omi1804/pwa-Quizz" target=`blank` style="color: inherit; text-decoration: none;">QUIZZICAL <span> Multiple Choice Question Exam Portal</span></a>',
  //     desc: `• A dynamic online portal, offers captivating multiple-choice quizzes to test your general IQ and doubles as a Progressive Web App (PWA) for a seamless mobile experience.<br><br>
  //     •Explore the depths of your intellectual prowess with QUIZZICAL's captivating selection of diverse and challenging quizzes.<br><br>
  //     •Test your intellectual capabilities with QUIZZICAL's diverse range of multiple-page layout, receiving immediate feedback and correct answers on the final page.`,
  //   },

  //   {
  //     id: 20,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "REACT",
  //     title:
  //       '<a href=" https://github.com/Omi1804/DisneyPlus-Clone" target=`blank` style="color: inherit; text-decoration: none;">DisneyPlus Clone <span>Disney-inspired clone with Firebase authentication and Styled Components.</span></a>',
  //     desc: `•  Immerse yourself in a captivating Disney clone multi-page project that replicates the magical experience of the original Disney platform.<br><br>
  //     •  Harness the power of Firebase, a comprehensive platform, for seamless integration of authentication and authorization features, ensuring secure user access and data management.<br><br>
  //     • Allow users to create accounts, log in, and authenticate their identities, enabling personalized experiences and access to exclusive features.<br><br>
  //     • Utilize the versatility of Styled Components, a popular CSS-in-JS library, to create stunning and visually appealing user interfaces, reminiscent of Disney's enchanting aesthetics.`,
  //   },

  //   {
  //     id: 10,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "REACT",
  //     title:
  //       '<a href="https://github.com/Omi1804/Speeder" target=`blank` style="color: inherit; text-decoration: none;">Speeder <span> Immersive Typing Speed Test Site</span></a>',
  //     desc: `• Engaging speed typing test game developed using React for a dynamic and interactive user experience.<br><br>
  //     • Measures and displays the user's typing speed and accuracy in real-time during the game.<br><br>
  //     • Provides a countdown timer to add a sense of urgency and challenge to the typing test.`,
  //   },

  //   {
  //     id: 11,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "REACT",
  //     title:
  //       ' <a href="https://github.com/Omi1804/tenzies" target=`blank` style="color: inherit; text-decoration: none;">TENZIES <span> A Popular Japanese Game</span></a>',
  //     desc: `• Tenzies game developed using React, providing a fun and engaging digital adaptation of the popular dice game.<br><br>
  //     • Utilizes interactive dice rolling animations and responsive design to enhance the visual appeal and user experience.<br><br>
  //     • Includes interactive scoreboards and game statistics to track and display player progress and achievements.`,
  //   },

  //   {
  //     id: 12,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "NODE",
  //     title:
  //       ' <a href="https://github.com/Omi1804/Admin-dashbord" target=`blank` style="color: inherit; text-decoration: none;">ADMIN MANAGER <span> A User Management System</span></a>',
  //     desc: `• User Management System developed using Node Express and MongoDB for efficient CRUD operations on user details.<br><br>
  //     • Utilizes MongoDB to store and manage user data, ensuring scalability and reliability.<br><br>
  //     • Provides an interactive user interface to view, create, update, and delete user records.`,
  //   },

  //   {
  //     id: 13,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "NODE",
  //     title:
  //       '<a href="https://github.com/Omi1804/Full-Modular-Website" target=`blank` style="color: inherit; text-decoration: none;">MODULAR WEBSITE<span> A Fully Modular & Dynamic Website</span></a>',
  //     desc: `• Experience the power of a fully modular and dynamic website, where every aspect, from captivating images to rich data, is seamlessly stored and managed in MongoDB.<br><br>
  //     • Empowering website administrators with a user-friendly content management system that enables real-time updates and modifications, instantly reflecting changes on the website.<br><br>
  //     • Embrace the limitless possibilities of customization as our website architecture offers a modular design, empowering you to add and personalize components and sections effortlessly.`,
  //   },

  //   {
  //     id: 14,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "JAVASCRIPT",
  //     title:
  //       '<a href="https://github.com/Omi1804/Omiflix" target=`blank` style="color: inherit; text-decoration: none;">OMIFLIX<span> A Movie Streaming Platform</span></a>',
  //     desc: `• Explore a vast collection of movies categorized into different genres, offering an extensive range of choices to suit every taste.<br><br>
  //     • Immerse yourself in a visually stunning website, crafted with HTML, CSS, and JavaScript, that replicates the sleek and modern aesthetics of Netflix.<br><br>
  //     •Discover new movies with ease as the platform intelligently organizes content into various categories, such as action, comedy, drama, and more.`,
  //   },

  //   {
  //     id: 15,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "JAVASCRIPT",
  //     title:
  //       ' <a href="https://modern-digitalmedia-website.netlify.app" target=`blank` style="color: inherit; text-decoration: none;">DIGITAL MEDIA WEBSITE<span> A Modern Digital Media Website</span></a>',
  //     desc: `•Elevate your digital media experience with a cutting-edge website that combines HTML, CSS, and JavaScript to create mesmerizing parallax effects, adding depth and interactivity.<br><br>
  //     • Engage with a modern and dynamic user interface that uses parallax effects to create a sense of movement and intrigue, enticing visitors to explore further.`,
  //   },

  //   {
  //     id: 16,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "JAVASCRIPT",
  //     title:
  //       ' <a href="https://music-player-fun.netlify.app" target=`blank` style="color: inherit; text-decoration: none;">AUDIO MEDIA PLAYER<span> A Modern Designed Audio Media Player</span></a>',
  //     desc: `•Discover and play your favorite songs from a vast music library, providing an extensive collection of tracks, albums, and playlists.<br><br>
  //     • Experience smooth and uninterrupted playback, with features such as play, pause, skip, shuffle, and repeat, enhancing your music listening experience.`,
  //   },

  //   {
  //     id: 17,
  //     category: "projects",
  //     icon: <HiCode />,
  //     year: "SASS",
  //     title:
  //       '<a href=" https://classical-portfolio.netlify.app" target=`blank` style="color: inherit; text-decoration: none;">CLASSIC PORTFOLIO<span> A Classical Multipage Portfolio</span></a>',
  //     desc: `• Modular Design: One of the key advantages of using SASS (Syntactically Awesome Style Sheets) for creating a multi-page portfolio is the ability to implement a modular design. <br><br>
  //     • SASS provides variables and mixins, which allow you to define and reuse common styles throughout your portfolio.`,
  //   },
];

export const skills = [
  {
    id: 4,
    title: "React",
    percentage: "95",
  },
  {
    id: 2,
    title: "JavaScript",
    percentage: "89",
  },
  {
    id: 5,
    title: "NextJS",
    percentage: "85",
  },

  {
    id: 7,
    title: "Typescript",
    percentage: "90",
  },
  {
    id: 3,
    title: "Tailwind Css",
    percentage: "90",
  },
  {
    id: 6,
    title: "Node",
    percentage: "95",
  },
  {
    id: 8,
    title: "MongoDB",
    percentage: "85",
  },

  {
    id: 9,
    title: "PostgreSQL",
    percentage: "85",
  },

  {
    id: 10,
    title: "AWS",
    percentage: "90",
  },

  {
    id: 12,
    title: "python",
    percentage: "80",
  },
  {
    id: 13,
    title: "Django",
    percentage: "80",
  },
  {
    id: 14,
    title: "LLMs and LangChain",
    percentage: "80",
  },
];

export const portfolio = [
  {
    id: 23,
    img: Work23,
    title: "eLearny",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Website : ",
        desc: `<a href="https://next-skill-sphere.vercel.app/"" target='blank'>https://next-skill-sphere.vercel.app/"</a>`,
      },
    ],
  },
  {
    id: 21,
    img: Work01,
    title: "ScopeAI",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Website : ",
        desc: `<a href="https://scope-ai-xi.vercel.app/" target='blank'>https://scope-ai-xi.vercel.app/</a>`,
      },
    ],
  },
  {
    id: 24,
    img: Work02,
    title: "Feast Fusion",
    details: [
      {
        icon: <FiExternalLink />,
        title: " Github Link: ",
        desc: `<a href="https://github.com/SrivastavaPragya/FeastFusionApi" target='blank'>https://github.com/SrivastavaPragya/FeastFusionApi</a>`,
      },
    ],
  },
  {
    id: 20,
    img: Work03,
    title: "Youtube clone",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Website : ",
        desc: `<a href="https://utubeclone2.netlify.app/" target='blank'>https://utubeclone2.netlify.app/</a>`,
      },
    ],
  },
  {
    id: 20,
    img: Work04,
    title: "QuickWallet",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Github Link: ",
        desc: `<a href="https://github.com/SrivastavaPragya/QuickWallet" target='blank'>https://github.com/SrivastavaPragya/QuickWallet</a>`,
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "#6760A4",
  },
  {
    id: 2,
    img: Theme2,
    color: "#FA3737",
  },
  {
    id: 3,
    img: Theme3,
    color: "#B55DFF",
  },
  {
    id: 4,
    img: Theme4,
    color: "#4C7DFF",
  },
  {
    id: 5,
    img: Theme5,
    color: "#DCA620",
  },
  {
    id: 6,
    img: Theme6,
    color: "#FF6FAB",
  },
  {
    id: 7,
    img: Theme7,
    color: "#80C76A",
  },
  {
    id: 8,
    img: Theme8,
    color: "#FF6532",
  },
  {
    id: 9,
    img: Theme9,
    color: "#69A933",
  },
  {
    id: 10,
    img: Theme10,
    color: "#FFB400",
  },
];
