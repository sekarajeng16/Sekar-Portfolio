import ProjectDetail from "../data/ProjectData";

function Home() {

    return (
        <div className="mt-5">
            <img
                src="/image/asset/bg.png"
                alt="background pattern"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <section className="p-5 py-24 md:py-24 flex flex-col justify-start items-center text-center ">
                <h1 className="font-bold text-3xl">Hello, Everyone</h1>
                <h1 className="font-extrabold text-5xl">I'm Sekar Ajeng</h1>
                <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                    A Web Developer and UI/UX Designer who loves crafting clean, interactive, and responsive user interfaces. <br />
                    I believe great design is not just about looks — it's about creating a seamless experience.
                </p>
                
                <div className="flex justify-center mt-10">
                    <button className="btn font-medium">View Projects</button>
                    <button className="btn-secondary ml-2">Contact me</button>
                </div>
            </section>

            <section className="px-20 py-24">
                <h1 className="font-extrabold text-5xl text-center">My Latest Projects</h1>
                <br />
                <div className="flex flex-col sm:flex-row gap-10 justify-center items-center mt-10">
                    {ProjectDetail.slice(0,3).map((project) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:w-1/3  hover:shadow-2xl transition-shadow duration-300">
                            <img src={project.image} className="rounded-xl mb-5" alt={`${project.title} picture`} />
                            <h3 className="text-2xl text-left font-semibold">{project.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 mt-3">
                                {project.category.map((value, key) => (
                                    <div key={key} className="bg-secondary font-medium text-white py-2 px-3 rounded-full">
                                        {value}
                                    </div>
                                ))}
                                
                            </div>
                            <p className="mt-4 text-justify">{project.shortDesc}</p>
                        </div>
                    ))}
                    
                </div>
            </section>

            <section className="p-5 py-24">
                
                <h2 className="font-semibold text-center text-5xl">Technology I Often Used</h2>
                <div className="flex flex-col sm:flex-row gap-12 justify-center w-full px-4 mt-20">
                    <div className="relative bg-white rounded-2xl pt-16 pb-10 px-10 w-72 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full bg-secondary w-20 h-20 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="currentColor" d="M6 21q-1.125 0-2.225-.55T2 19q.65 0 1.325-.513T4 17q0-1.25.875-2.125T7 14t2.125.875T10 17q0 1.65-1.175 2.825T6 21m0-2q.825 0 1.412-.587T8 17q0-.425-.288-.712T7 16t-.712.288T6 17q0 .575-.137 1.05t-.363.9q.125.05.25.05zm5.75-4L9 12.25l8.95-8.95q.275-.275.688-.288t.712.288l1.35 1.35q.3.3.3.7t-.3.7zM7 17"></path></svg>
                        </div>
                        <h3 className="text-3xl font-semibold">Design</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-base">
                            <li>Figma</li>
                        </ul>
                    </div>

                    <div className="relative bg-white rounded-2xl pt-16 pb-10 px-10 w-72 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full bg-secondary w-20 h-20 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><g fill="none"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M14.62 2.662a1.5 1.5 0 0 1 1.04 1.85l-4.431 15.787a1.5 1.5 0 0 1-2.889-.81L12.771 3.7a1.5 1.5 0 0 1 1.85-1.039ZM7.56 6.697a1.5 1.5 0 0 1 0 2.12L4.38 12l3.182 3.182a1.5 1.5 0 1 1-2.122 2.121L1.197 13.06a1.5 1.5 0 0 1 0-2.12l4.242-4.243a1.5 1.5 0 0 1 2.122 0Zm8.88 2.12a1.5 1.5 0 1 1 2.12-2.12l4.243 4.242a1.5 1.5 0 0 1 0 2.121l-4.242 4.243a1.5 1.5 0 1 1-2.122-2.121L19.621 12z"></path></g></svg>
                        </div>
                        <h3 className="text-3xl font-semibold">Front End</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-base">
                            <li>React</li>
                            <li>Javascript</li>
                            <li>Tailwind</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>

                    <div className="relative bg-white rounded-2xl pt-16 pb-10 px-10 w-72 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full bg-secondary w-20 h-20 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><rect width={18.5} height={15.5} x={2.75} y={4.25} rx={3.5}></rect><path d="m7.25 9l3 3l-3 3m5.5 0h4"></path></g></svg>
                        </div>
                        <h3 className="text-3xl font-semibold">Back End</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-base">
                            <li>Laravel</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="p-5 py-24 mt-10 ">
                <div className="flex flex-col md:flex-row justify-center items-center gap-20 max-w-screen-xl mx-auto">
                    <img className="w-full max-w-sm rounded-2xl object-cover" src="/image/person/me.jpeg" alt="About me picture" />

                    <div className="text-left">
                        <h2 className="font-semibold text-5xl">About me</h2>
                        <p className="max-w-xl text-base leading-relaxed">
                            Hi! I'm <span className="font-semibold">Sekar</span>, a web developer and a UI UX Designer passionate about building beautiful and accessible web interfaces. I love turning ideas into responsive, user-friendly websites using modern tools like React and Tailwind CSS.
                        </p>

                        <button className="btn font-medium mt-5">Download my CV</button>
                    </div>
                </div>
            </section>

            

        </div>
    )
}

export default Home;