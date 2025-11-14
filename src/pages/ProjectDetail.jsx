import ProjectDetail from "../data/ProjectData"
import { useParams } from 'react-router-dom';
import { useInView } from "../hooks/useInView";
import { useEffect } from "react";

function ProjectDetailPage() {
    const { projectId } = useParams();
    const project = ProjectDetail.find(project => project.id === Number(projectId));

    const [picRef, picVisible] = useInView();
    const [overviewRef, overviweVisible] = useInView();
    const [roleRef, roleVisible] = useInView();
    const [problemRef, problemVisible] = useInView();
    const [keyRef, keyVisible] = useInView();
    const [screenPicRef, screenPicVisible] = useInView();
    const [challengeRef, challengeVisible] = useInView();

    useEffect(() => {
        document.title = "Project " + project.title;
    }, []);
    
    return (
        <div key={project.id} className="flex flex-col space-y-10 mt-5">
            <div className="flex items-center-safe gap-3 p-5 md:p-10">
                    <a href="/projects" className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700 hover:text-secondary transition-colors duration-200 cursor-pointer"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    Back
                    </a>
                    
                </div>
            <section>
                

                <div ref={picRef} className={`flex flex-col md:flex-row items-center justify-between gap-10 p-10 bg-[#ffffff] rounded-3xl shadow-sm ${picVisible ? "animate-floatIn opacity-100" : "opacity-0 translate-y-10"}`}>
                    
                    <div className="max-w-lg">
                        <h2 className="font-bold text-3xl text-gray-800 mb-2">
                            {project.title}
                        </h2>
                        <p className="text-gray-600 text-lg mb-5">
                           {project.shortDesc}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-6">
                            {Object.entries(project.link).map(([key, value]) => (
                                <a key={key} href={value} className="btn">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div  className={`flex justify-center mt-5}`}>
                        <img className="rounded-xl" src={project.image} alt={`${project.title} picture`} />
                    </div>
                </div>
            </section>

            <section ref={overviewRef} className={`transition-all duration-700 ease-out transform ${
                overviweVisible ? "animate-floatIn opacity-100 translate-y-0" : "opacity-0 translate-y-10"} my-20`}>
                    <div className="text-center space-y-3 p-5">
                        <h3 className="text-xl md:text-2xl font-bold mb-3">Project Overview</h3>
                        <p className="md:text-lg font-light italic md:mx-50 flex justify-center">{project.description}</p>
                    </div>
            </section>

           <section ref={problemRef} className={`transition-all duration-700 ease-out transform ${
                problemVisible ? "animate-floatIn opacity-100 translate-y-0" : "opacity-0 translate-y-10"} md:px-20`}
            >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 p-5 md:p-10 md:min-h-screen items-center"
            > 
                <div className="w-full md:w-1/2 space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">The Problem</h3>
                    <p className="text-gray-600 text-base md:text-lg mb-5 text-justify leading-relaxed">
                        {project.problem}
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold mb-3">The Solution</h3>
                    <p className="text-gray-600 text-base md:text-lg mb-5 text-justify leading-relaxed">
                        {project.solution}
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                    <div className="bg-white border-3 border-[#C0C9EE] p-5 rounded-xl shadow-md">
                        <h3 className="text-lg md:text-xl font-bold mb-2">My Role</h3>
                            <ul>
                                {(project.role).map((value) => (
                                    <li>- {value}</li>
                                ))}
                            </ul>
                    </div>

                    <div className="bg-white border-3 border-[#C0C9EE] p-5 rounded-xl shadow-md">
                        <h3 className="text-lg md:text-xl font-bold mb-2">Tools</h3>
                        <ul className="grid grid-cols-2 gap-y-2">
                            {(project.techStack).map((value, key) => (
                                <li key={key}>- {value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            </section>

            <div>
                <h2 className="font-bold text-3xl text-gray-800 p-5 md:px-20">Design Process</h2>
                {Object.values(project.processDesign).map((value, index) => {
                    const [refDesign, designVisible] = useInView();

                    const isEven = index % 2;
                    
                    return (
                        <section ref={refDesign} key={index} className={`${designVisible ? "animate-floatIn opacity-100" : "opacity-0 translate-y-10"} p-5 md:px-20 mb-10`}>
                            <div className={`flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""} items-center  justify-between gap-10`}>
                                <div className="flex flex-col w-full md:w-1/2 space-y-3">
                                    <div>
                                        <h3 className="text-xl md:text-xl font-bold">{(index+1) + ". " + value.title}</h3>
                                        <p className="text-gray-600 text-base md:text-lg mb-5 text-justify leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                    
                                    {value.findings?.length > 0 && (
                                        <div className="md:ml-20">
                                            <h3 className="text-base md:text-lg font-bold text-gray-800 italic">Findings</h3>
                                            <ul className="text-base md:text-lg list-disc ml-5 mt-2">
                                                {value.findings.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    
                                </div>

                                <div className="flex justify-center w-full">
                                    <img src={value.picture} className="rounded-md" alt="" />
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
            
            

            {/* <section ref={problemRef} className={`${problemVisible ? "animate-floatIn opacity-100" : "opacity-0 translate-y-10"}`}>
                <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
                    <div className="flex-1 flex flex-col text-left">
                        <h3 className="text-2xl font-bold border-b">Problem</h3>
                        <p className="text-justify mt-5">{project.problem}</p>
                    </div>

                    <div className="flex-1 flex flex-col text-left">
                        <h3 className="text-2xl font-bold border-b">Solution</h3>
                        <p className="text-justify mt-5">{project.solution}</p>
                        
                    </div>
                </div>
            </section> */}

            {/* <section ref={keyRef} className={`${keyVisible ? "animate-floatIn opacity-100" : "opacity-0 translate-y-10"}`}>
                <div className="flex flex-col bg-white rounded-2xl p-5">
                    <h3 className="text-2xl font-bold border-b">Key Features</h3>
                    <ul className="list-disc list-inside space-y-1 text-justify">
                        {project.features.map((value, key) => (
                            <li>{value}</li>
                        ))}
                    </ul>
                </div>
            </section> */}

            {/* <section ref={challengeRef} className={`${challengeVisible ? "animate-floatIn opacity-100" : "opacity-0 translate-y-10"}`}>
                <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
                    <div className="flex-1 flex flex-col text-left">
                        <h3 className="text-2xl font-bold border-b">The Challenge</h3>
                        <p className="text-justify mt-5">{project.challenge}</p>
                    </div>

                    <div className="flex-1 flex flex-col text-left">
                        <h3 className="text-2xl font-bold border-b">Impact</h3>
                        <p className="text-justify mt-5">{project.impact}</p>
                        
                    </div>
                </div>
            </section> */}

            {/* <section ref={screenPicRef} className={`flex flex-col justify-center ${screenPicVisible ? "animate-floatIn opacity-100" : "opacity-0 translate-y-10"}`}>
                <h3 className="text-2xl font-bold border-b py-2">Preview</h3>
                
                <img src={project.screenShoot} className="rounded-xl w-180" alt={project.name + "preview"} />
            </section> */}

            
        </div>
    )
}

export default ProjectDetailPage;
