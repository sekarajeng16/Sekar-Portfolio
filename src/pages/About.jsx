function About () {
    return (
        <div className="p-10">
            <section className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 max-w-5xl mx-auto">
                <img className="w-full max-w-sm rounded-2xl object-cover" src="/image/person/me.jpeg" alt="About me picture" />
                
                <div className="text-justify">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Hi I'm Sekar</h1>
                    <p className="">
                        I'm currently a senior at Binus University, who loves to create a clean and fun design to applied into my webs design.
                        I specialize in front-end development and UI/UX Design, and love crafting smooth, user-friendly experiences.
                        My favorite tools are Figma for designing, React and Tailwind CSS for building interfaces, and Laravel when I’m working fullstack.
                        I'm always excited to learn new things, collaborate with others, and create meaningful digital experiences that people enjoy using.

                    </p>
                </div>
            </section>

            <section className="mt-10 py-24">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Work Experience</h1>
                <div className="bg-white flex flex-col border-l-8 border-[#8B8FC6] p-6 min-h-[100px] rounded-md shadow-md max-w-3xl">
                    <div className="flex justify-between items-center w-full">
                        <h3 className="text-xl font-semibold">Fullstack Developer Intern</h3>
                        <p className="text-gray font-medium">February 2024 - February 2025</p>
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
            </section>

            <section class="mt-20">
                <h2 class="font-bold text-center text-3xl md:text-4xl lg:text-5xl">
                    What do I do when I’m not working
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:w-1/3  hover:shadow-2xl transition-shadow duration-300">
                        <img src="" className="rounded-xl mb-5" alt="" />
                        <p className="mt-4 text-center">Playing with my cat</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:w-1/3  hover:shadow-2xl transition-shadow duration-300">
                        <img src="" className="rounded-xl mb-5" alt="" />
                        <p className="mt-4 text-center">Go to a cafe</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:w-1/3  hover:shadow-2xl transition-shadow duration-300">
                        <img src="" className="rounded-xl mb-5" alt="" />
                        <p className="mt-4 text-center">Playing Game</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;