const ProjectDetail  = [
    {
        id: 1,
        title: "Theratalk",
        shortDesc: "A web platform for students to access counseling, share experiences, and get emotional support.",
        description: `Theratalk is a responsive web platform that helps university students connect with campus counselors 
        for online counseling sessions. This thesis project focuses on improving the efficiency of counseling bookings and emotional 
        record-keeping. 
        It is designed with a calm, user-friendly, and responsive interface to ensure comfort in use.`,
        techStack: ["Laravel", "MySQL", "PHP", "Bootstrap", "Javascript", "Figma"],
        category: ["Web Development", "UI/UX Design"],
        problem: "Many college students struggle with mental health issues caused by academic pressure, family expectations, and feelings of loneliness. Despite these challenges, they often don't know where to turn for help or feel uncomfortable seeking support.",
        solution: "Theratalk is a web platform that provides a safe space for students to connect",
        image: "/image/project/theratalk/banner.png",
        link: {
            demo: "https://theratalk.vercel.app/",
            github: "https://github.com/sekarajeng16/CounselingApp/tree/develop-ajeng",
            figma: "https://www.figma.com/design/LJHtSHmH7uOOeJHgyYkhgM/Skripsi---?node-id=1-3&t=U2jWiv1Sdkv8CyOo-1",
        },
        screenShoot: "/image/project/theratalk/screen-shoot/preview.png",
        role: ["Fullstack Developer", "UI/UX Designer"],
        features: [
        "Mental Health Counseling Services",
        "Daily Mood Tracker",
        "Find Your Friend",
        "Responsive, mobile-first interface for better accessibility"
        ],
        processDesign: {
            research: {
                title: "Research",
                description:
                "During research period, our team conducted interviews, Google Form surveys, and competitive analysis to understand user needs and the market landscape about mental health.",
                findings: [
                    "Users prefer accessing the platform via mobile.",
                    "Many students often feel lonely and lack emotional support.",
                    "Most have never joined counseling before.",
                    "Students prefer onsite counseling sessions."
                ],

                icon: "🔍",
                picture: "/image/project/theratalk/screen-shoot/research.png"
            },
            wireframing: {
                title: "Wireframing",
                description:
                "At this stage, our team translated ideas into rough wireframes — simple, black-and-white sketches that mapped out the user journey and page structure. It became our shared blueprint for discussing and refining the flow together.",
                icon: "💻",
                picture: "/image/project/theratalk/screen-shoot/wireframe.png"
            },
            desingSystem: {
                title: "Design System",
                description:`A soothing color palette designed to convey calmness, comfort, and emotional balance—supporting the platform’s focus on mental health and well-being.`,
                icon: "💻",
                picture: "/image/project/theratalk/screen-shoot/design-system.png"
            },
            protyping: {
                title: "Prototyping",
                description: "After finalizing the wireframes, we transformed them into high-fidelity designs using Figma. This stage focused on bringing the product’s visual identity to life — refining colors, typography, and spacing to create a polished and realistic interface.",
                icon: "",
                picture: "/image/project/theratalk/screen-shoot/preview.png",
            },
            coding: {
                title: "Coding",
                description: "We developed the platform using Laravel, following the Agile Scrum approach with tasks managed through Jira. Each sprint focused on building core features and iterating quickly based on feedback.",
                icon: "",
                picture: "/image/project/theratalk/screen-shoot/coding.png"
            },
            testing: {
                title: "Testing",
                description: "Once the development phase was done, we started testing the product using Blackbox and UAT methods. We invited several university students to try the system and share their feedback through direct surveys. From there, our team refined the product based on their input, fixed the issues, and finally deployed the final version.",
                icon: "",
                picture: "/image/project/theratalk/screen-shoot/testing.png"
            }

        },
        challenge: "Time constraints during the development phase due to academic deadlines. Deployment was also limited to using free hosting (Vercel), which came with domain and speed limitations.",
        impact: "Enabled students to access mental health support more easily through a centralized digital platform. Increased awareness of counseling services and made emotional check-ins more approachable and consistent.",
    },

    {
        id: 2,
        title: "Events.io",
        shortDesc: "A mobile-friendly platform to browse and buy tickets for concerts, sports, and other events.",
        description: `
        Events.io is a mobile-first ticketing platform designed to simplify how people discover and purchase event tickets. Whether it's a live concert, a sports match, or a stand-up comedy show, Events.io makes the process fast, easy, and accessible — all from a smartphone.
        With a clean and responsive design, users can browse upcoming events, view event details, and buy tickets with just a few taps. The platform focuses on providing a smooth user experience through intuitive navigation and secure ticket booking.
        Events.io is especially tailored for event enthusiasts who want a hassle-free way to stay updated and never miss out on their favorite live experiences. It aims to bridge the gap between organizers and audiences by making event ticketing more modern, mobile, and user-friendly.`,
        techStack: ["Laravel", "MySQL", "PHP", "Bootstrap", "Javascript", "Figma"],
        category: ["Web Development", "UI/UX Design"],
        problem: "Event ticketing is often plagued by scalpers and fraudulent purchases, making it difficult for genuine fans to access tickets fairly and securely.",
        solution: "Events.io is a platform that provides a secure and user-friendly way to purchase tickets.",
        image: "/image/project/event-io/banner.png",
        screenShoot: "/image/project/event-io/screen-shoot/preview.png",
        link: {
            github: "https://github.com/gavrielsatrio/Events.io",
            figma: "https://www.figma.com/proto/GnRI90fPzo4sytNAozaDbj/Events.io?type=design&node-id=19-1073&t=fI9oMZb1npFC4RHA-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=19%3A1073",
        },
        role: ["Front End Developer", "UI/UX Designer"],
        features: [
        "Browse and purchase event tickets directly through the platform",
        "Submit event proposals (e.g. concert proposals) to admins for review",
        "Responsive, mobile-first interface for better accessibility"
        ],
        processDesign: {
            research: {
                title: "Research",
                description: "Our team conducted user research to map out ideas and define the key features to be developed. We then created a use case description and use case diagram to visualize how each feature would interact with the users.",
                icon: "🔍",
                picture: "/image/project/event-io/screen-shoot/research.png"
            },
            wireframing: {
                title: "Wireframing",
                description: "During the wireframing phase, We began sketching and designing layouts to bring the mapped features from the research stage into a clear and structured interface.",
                icon: "💻",
                picture: "/image/project/event-io/screen-shoot/wireframe.png"
            },
            desingSystem: {
                title: "Design System",
                description: `We used bright and electric colors to bring a fun, vibrant feel, paired with friendly and legible typography for a balanced, approachable look.`,
                icon: "💻",
                picture: "/image/project/event-io/screen-shoot/design-system.png"
            },
            prototyping: {
                title: "Prototyping",
                description: "During the prototyping phase, I used Figma to turn the wireframes into interactive prototypes, allowing us to simulate real user interactions and refine the experience before development.",
                icon: "",
                picture: "/image/project/event-io/screen-shoot/preview.png"
            },
            coding: {
                title: "Coding",
                description: "We implemented the design using Laravel and Tailwind CSS. As the front-end developer, I focused on bringing the Figma prototype to life and maintaining consistency between design and implementation.",
                icon: "",
                picture:"/image/project/event-io/screen-shoot/coding.png"
            },
            testing: {
                title: "Testing",
                description: "In the testing phase, we used Katalon to automate and manage the testing process. This helped us efficiently check the system’s functionality, identify bugs, and ensure that every feature worked as expected before deployment.",
                icon: "",
                picture:"/image/project/event-io/screen-shoot/testing.png"
            }
        },
        challenge: "Limited development time and scope as this was part of an academic project, with constraints on deployment and testing.",
        impact: "Helped simulate an end-to-end ticketing experience, improved understanding of event-user workflows, and demonstrated fullstack web development skills.",

    },
    {
        id: 3,
        title: "Kemenkes RI Website Redesign",
        shortDesc: "A fresh redesign of Kemenkes RI's site to make it more accessible, clear, and user-friendly.",
        description: `
            This academic project involved redesigning the official website of Indonesia's Ministry of Health (Kemenkes RI) to address issues such as outdated visuals, inconsistent layouts, and poor mobile responsiveness. 
            The goal was to create a more accessible, informative, and user-friendly platform for public health services. The redesign was created in Figma and emphasizes clarity, government credibility, and modern usability standards.
        `,
        techStack: ["Figma", "Miro"],
        category: ["UI/UX Design"],
        problem: "The website had an outdated visual design, overly dense information layout, and several non-functional or missing pages. These issues made it difficult for users to navigate and access important public health information efficiently.",
        solution: "Redesigned the website with a cleaner layout, better information hierarchy, improved typography, and responsive design.",
        image: "/image/project/kemenkes/banner.png",
        screenShoot: "/image/project/kemenkes/screen-shoot/preview.png",
        link: {
            figma: "https://www.figma.com/proto/RQEnQYtPLOdQWCtbIRxUjy/FID---Redesign-Kemenkes?type=design&node-id=423-852&scaling=scale-down&page-id=423%3A62&starting-point-node-id=423%3A852&show-proto-sidebar=1",
        },
        role: ["Lead UI/UX Designer"],
        features: [
        "Clean and modern homepage",
        "Improved navigation for easier access to health-related information",
        "Language toggle for Indonesian and English"
        ],
        processDesign: {
            research: {
                title: "Research",
                description:"In the research phase, we conducted user interviews to map out the user journey and user stories. We also used the UEQ (User Experience Questionnaire) to evaluate users’ experiences while interacting with the Kemenkes website, helping us identify key pain points and improvement opportunities.",
                icon: "🔍",
                picture: "/image/project/kemenkes/screen-shoot/research.png",
                findings: ["UEQ score for Kemenkes website is relatively low, especially on attractiveness and stimulation aspects.",
                            "Users find the current website less engaging and not intuitive to navigate.",
                            "Our proposed design shows a higher satisfaction score in usability testing.",]
            },
            ideation: {
                title: "Ideation",
                description: `After conducting user research, we gathered ideas for redesigning the Kemenkes website, including improvements to the navigation bar, homepage, and news section.`,
                picture: "/image/project/kemenkes/screen-shoot/ideation.png",
            },
            informationArchitecture: {
                title: "Information Architecture",
                description: `After ideation, we developed the information architecture to organize content and define the navigation flow before moving to wireframes.`,
                picture: "/image/project/kemenkes/screen-shoot/ia.png"
            },
            wireframing: {
                title: "Wireframing",
                description: "During the wireframing phase, I turned the research findings into rough layouts to define the website’s flow and key components, making sure each element addressed the insights gathered from users.",
                icon: "💻",
                picture: "/image/project/kemenkes/screen-shoot/wireframe.png"
            },
            desingSystem: {
                title: "Design System",
                description: "For the design system, we kept the original Kemenkes color palette for consistency while updating the typography and font styles to make the interface clearer and more readable for users.",
                icon: "",
                picture: "/image/project/kemenkes/screen-shoot/design-system.png"
            },
            prototyping: {
                title: "Prototyping",
                description: "During the prototyping phase, I used Figma to create interactive high-fidelity prototypes, helping us test user flows and refine the interface based on feedback before development.",
                icon: "",
                picture: "/image/project/kemenkes/screen-shoot/prototype.png"
            },
            testing: {
                title: "Testing",
                description: `In the testing phase, we conducted interviews and surveys to evaluate whether the new design provided a better and more seamless experience compared to the previous Kemenkes website. 
                The feedback we gathered helped us validate improvements and ensure the design truly met user expectations.`,
                icon: "",
                picture: "/image/project/kemenkes/screen-shoot/testing.png"
            }
        },
        challenge: "During the redesign process, one of the main challenges was finding participants for usability testing due to time constraints and limited access to users. The project was also developed under a tight academic timeline, which affected the depth of iteration and validation.",
        impact: "Despite the limitations, the final result is an interactive Figma prototype featuring an improved layout and user-friendly design. The redesign introduces new features such as a news portal and easier access to key health information, helping users navigate the Ministry of Health website more efficiently."


    },
    {
        id: 4,
        title: "Zenius Accessibility Redesign",
        shortDesc: "Improving Zenius with accessibility features for deaf students.",
        description: `
            This academic project focused on enhancing accessibility in the Zenius online learning app, which provides video-based education for elementary to high school students (K–12) in Indonesia. As part of a university assignment, my team was tasked with improving an existing application for people with disabilities.
            We chose to support deaf and hard-of-hearing students by adding two key features: Subtitles for all learning videos and Transcript that summarize the lesson content in text format. These features aimed to provide more inclusive and flexible learning experiences.
            Throughout the process, I collaborated as a UI/UX Designer, using tools like Figma for prototyping and Miro for mapping out user problems and solutions. Our goal was to make online learning more accessible without disrupting the existing user interface and experience.
        `,
        techStack: ["Figma", "Miro"],
        category: ["UI/UX Design"],
        problem: "Zenius offers video-based learning but lacks features to support deaf or hard-of-hearing students. Without subtitles, many users with hearing impairments are excluded from effectively engaging with the platform’s core content.",
        solution: "Added subtitles and transcripts to make Zenius videos accessible for deaf students, enabling them to follow and review lessons independently.",
        image: "/image/project/zenius/banner.png",
        screenShoot: "/image/project/zenius/screen-shoot/preview.png",
        link: {
            figma: "https://www.figma.com/proto/PArUdBhsqfzxVBjJIvg49s/Zenius?node-id=17-2&t=7EyniJ119Ka221V3-1",
        },
        role: ["UI/UX Designer"],
        features: [
        "Subtitle toggle integrated into the video player",
        "Provide text transcript for each lesson video",
        ],
        processDesign: {
            research: {
                title: "Research",
                description: `During the research phase, we interviewed stakeholders to determine which features would best support the Deaf community and improve accessibility. Then map it into user journey`,
                icon: "🔍",
                picture: "/image/project/zenius/screen-shoot/research.png",
                findings: [
                    "The subtitle feature helps deaf users and is a first step toward making Zenius more inclusive.",
                    "Added value: Subtitles improve learning comfort for users with special needs.",
                    "A toggle option is needed so subtitles don’t disturb non-disabled users; formulas and similar content remain challenging to subtitle and need further exploration."
                ]
            },
            wireframing: {
                title: "Wireframing",
                description: `Based on the user interviews, we moved into the wireframing phase to design new features such as subtitles and captions for learning videos. 
                Using the Crazy 8 method, we quickly explored multiple layout ideas to improve accessibility for the Deaf community.`,
                icon: "",
                picture: "/image/project/zenius/screen-shoot/wireframe.png"
            },
            desingSystem: {
                title: "Design System",
                description: "For the design system, we kept the Zenius app’s colors and fonts to maintain consistency, focusing only on integrating the new features seamlessly.",
                icon: "",
                picture: "/image/project/zenius/screen-shoot/design-system.png"
            },
            prototyping: {
                title: "Prototyping",
                description: `In the prototyping phase, we used Figma to turn the wireframes into interactive designs and implement the new features. 
                This allowed us to visualize how subtitles and captions would function in the learning videos and ensure the design met user needs.`,
                icon: "",
                picture: "/image/project/zenius/screen-shoot/prototype.png"
            }

        },
        challenge: "Designing an inclusive feature within the constraints of an existing UI while ensuring usability for both hearing and non-hearing users. Time was also limited due to academic deadlines.",
        impact: "The redesigned concept highlights how simple accessibility features can make a significant impact in inclusive education. It also demonstrates the importance of designing with empathy and inclusivity in mind.",
    },
    {
        id: 5,
        title: "HolaVet!",
        shortDesc: "A pet care app concept to help owners track health and clinic visits.",
        description: `
            HolaVet! is an academic project aimed at improving pet healthcare management through a mobile application tailored for pet owners. The goal was to create a solution that bridges the gap between veterinary clinics and pet owners by providing tools for communication, pet health monitoring, and appointment scheduling.
            In this project, my role as a user researcher involved conducting user research through interviews and data analysis to identify the key needs and expectations for the app. These insights helped shape the core features and ensured the app addressed real challenges faced by pet owners.
        `,
        
        techStack: ["Figma", "Miro"],
        category: ["UI/UX Design"],
        problem: "There are still very few mobile applications dedicated specifically to pet healthcare. Pet owners often face difficulties tracking medical history, appointments, and communicating efficiently with veterinary clinics.",
        solution: "Conducted user research and developed user personas to identify key needs. Based on findings, the app was designed with features like appointment scheduling and in-app clinic communication to help pet owners better manage their pets’ wellbeing.",
        image: "/image/project/hola-vet/banner.png",
        screenShoot: "/image/project/theratalk/hola-vet/preview.png",
        link: {
            figma: "https://www.figma.com/proto/bEwa0RahujlavrFIIeyTWE/Design?type=design&node-id=1-2&t=SiCgZiukJ3FG7bQ6-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
        },
        role: ["UX Researcher"],
        features: [
        "Reservation to make appointments with veterinary clinics",
        "Reminder for upcoming appointments",
        ],
        processDesign: {
            research: {
                title: "Research",
                description: `During the research phase, we interviewed stakeholders to gather insights on the features they wanted in the application, 
                ensuring our design decisions aligned with their goals.`,
                icon: "",
                picture:"/image/project/hola-vet/screen-shoot/research.png",
                findings: [
                    "Appointment feature for veterinary consultations",
                    "Schedule feature to book appointments",
                    "Reminder feature",
                    "Register feature"
                ]
            },
            desingSystem: {
                title: "Design System",
                description: "For the design system, we used a pink color palette as requested by stakeholders, giving the app a cheerful and fun feel while maintaining visual consistency.",
                icon: "",
                picture: "/image/project/hola-vet/screen-shoot/design-system.png"
            },
            prototyping: {
                title: "Prototyping",
                description: `During prototyping, we used Figma to bring user-requested features to life, 
                creating interactive designs to test and refine the user experience.`,
                icon: "",
                picture: "/image/project/hola-vet/screen-shoot/preview.png"
            },
            testing: {
                title: "Testing",
                description: `During testing, we ran A/B tests on social media, using polls to determine which home screen design users liked best and guide our final design choices.`,
                icon: "",
                picture:"/image/project/hola-vet/screen-shoot/testing.png"
            },
        },
        challenge: "Understanding a niche user group (pet owners) and ensuring the features aligned with both emotional and practical needs within a limited academic timeframe.",
        impact: "The HolaVet! app concept successfully addresses the gap in pet healthcare by providing an accessible tool for pet owners to consult with veterinarians and schedule appointments more easily. It offers a more organized and user-friendly experience for pet lovers to manage their pets’ well-being.",
    }

]

export default ProjectDetail;