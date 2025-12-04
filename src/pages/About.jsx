import { useEffect } from "react";
import { useInView } from "/src/hooks/useInView.js"

function About () {
    const [aboutRef, aboutVisible] = useInView();
    const [expRef, expVisible] = useInView();

    useEffect(() => {
        document.title = "About Me";
    }, []);
    
    return (
        <div className="p-10 mt-20">
            <img
                src="/image/asset/bg.png"
                alt="background pattern"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <section ref={aboutRef} className={`flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 max-w-5xl mx-auto ${
                aboutVisible ? "animate-floatIn opacity-100" : "opacity-0 translate-y-10"
            }`}>
                <img className="w-full max-w-sm rounded-2xl object-cover" src="/image/person/me.jpeg" alt="About me picture" />
                
                <div className="text-justify">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Hi I'm Sekar</h1>
                    <p className="">
                        I love creating clean and enjoyable web experiences that feel good to use.
                        I’m passionate about front-end development and UI/UX design finding that sweet spot between functionality and beautiful design.
                        I enjoy bringing ideas to life with Figma, React, Tailwind CSS, and sometimes Laravel when I go fullstack.
                        I’m always curious to learn new things, collaborate with others, and build digital experiences that make a real difference.
                    </p>

                    <div className="hidden md:flex md:mt-8 justify-center gap-3">
                    <a href="https://linkedin.com/in/sekarajeng643"className="btn">Contact Me</a>
                    <a href="/file/Front End CV.pdf" download={"Sekar_Ajeng_CV.pdf"} className="btn">Download My CV</a>
                </div>
                </div>

                <div className="flex md:hidden justify-center gap-3">
                    <a href=""className="btn">Contact Me</a>
                    <a href="" download={"Sekar_Ajeng_CV.pdf"} className="btn">Download My CV</a>
                </div>
            </section>

            <section ref={expRef} className={`mt-10 py-24 p-5 md:p-10 ${expVisible ? "animate-floatIn opacity-100" : "opacity-0 translate-y-10"}`}>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Work Experience</h1>
                <div className="flex flex-col-reverse md:flex-row-reverse gap-7 mt-15  scroll-smooth overflow-x-auto hide-scrollbar">
                    <div className="bg-white flex  flex-shrink-0 flex-col border-l-10 border-[#8B8FC6] p-6 min-h-[100px] rounded-md shadow-md max-w-3xl">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-1 sm:gap-2">
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                Fullstack Developer Intern
                                </h3>
                                <h4 className="text-sm sm:text-base font-medium text-gray-700">
                                Cyberindo Aditama (CBN)
                                </h4>
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-gray-600">
                                February 2024 - February 2025
                            </p>
                        </div>


                        <ul className="list-disc list-inside space-y-2 text-justify mt-5">
                            <li>
                                Developed and maintained the OMS (Office Management System) website, ensuring seamless functionality and an intuitive user experience.
                            </li>
                            <li>
                                Worked on both frontend and backend, leveraging Laravel, JavaScript, and modern UI frameworks to build and enhance features.
                            </li>
                            <li>
                                Designed and implemented UI/UX improvements to optimize navigation and overall usability.
                            </li>
                            <li>
                                Implemented key functionalities to streamline reservation processes and event management activities, significantly enhancing operational efficiency.
                            </li>
                            <li>
                                Collaborated with the team to debug, test, and optimize performance, ensuring system stability and responsiveness.
                            </li>
                        </ul>

                    </div>

                    <div className="bg-white flex  flex-shrink-0 flex-col border-l-8 border-[#8B8FC6] p-6 min-h-[100px] rounded-md shadow-md max-w-3xl">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-1 sm:gap-2">
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Fullstack Developer Intern - Jakarta</h3>
                                <h4 className="text-sm sm:text-base font-medium text-gray-700">Birudesa Hypermedia</h4>
                            </div>
                            <p className="text-sm sm:text-base font-medium text-gray-700">August 2025 - Now</p>
                        </div>


                        <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-gray-700 mt-5">
                            <li>
                                Developed and maintained a responsive internal company website using 
                                <span className="font-medium"> React.js (frontend) </span> and 
                                <span className="font-medium"> Laravel (backend) </span> to support business operational needs.
                            </li>
                            <li>
                                Designed and refined user interfaces (UI/UX) in 
                                <span className="font-medium"> Figma </span>, focusing on creating modern, intuitive, and device-optimized layouts.
                            </li>
                            <li>
                                Conducted 
                                <span className="font-medium"> User Acceptance Testing (UAT) </span> and 
                                <span className="font-medium"> Blackbox Testing </span> to ensure system reliability, stability, and quality before deployment to the production environment.
                            </li>
                            <li>
                                Collaborated with cross-functional teams to align development outcomes with company objectives and improve workflow efficiency.
                            </li>
                        </ul>


                    </div>
                </div>
                
            </section>

        </div>
    )
}

export default About;