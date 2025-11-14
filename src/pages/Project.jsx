import { useEffect, useState } from "react";
import ProjectDetail from "../data/ProjectData";
import { useInView } from "../hooks/useInView";


function ProjectList() {
    const [selectedTech, setSelectedTech] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [ref, isVisible] = useInView();


    const filteredProjects = ProjectDetail.filter((project) => {
        const matchesTech = selectedTech ? project.techStack.includes(selectedTech) : true;
        const matchesType = selectedType ? project.category.includes(selectedType) : true;

        return matchesTech && matchesType;
    });

    useEffect(() => {
        document.title = "Projects";
    }, []);

    return (
        <div ref={ref} className={`mt-5 p-5 md:p-10 ${isVisible ? "animate-floatIn opacity-100" : "opacity-0 translate-y-10"}`}>
            <img
                src="/image/asset/bg.png"
                alt="background pattern"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <section className="px-6 flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">My Projects</h1>

                <div className="flex flex-col md:flex-row justify-evenly gap-4 md:gap-10 mt-10 w-full max-w-3xl ">
                    <select className="px-4 py-3 bg-primary text-white text-base font-normal rounded-md focus:outline-none" name="Technology" id="selectTechnology" 
                     value={selectedTech} onChange={(e) => setSelectedTech(e.target.value)}>
                        <option className="bg-white text-black" value="">Choose the Technology</option>
                        <option className="bg-white text-black" value="Laravel">Laravel</option>
                        <option className="bg-white text-black" value="Figma">Figma</option>
                        <option className="bg-white text-black" value="Javascript">Javascript</option>
                    </select>

                    <select className="px-4 py-3 bg-primary text-white text-base font-normal rounded-md focus:outline-none" name="Type" id="selectType"
                    value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        <option className="bg-white text-black" value="">Project Type</option>
                        <option className="bg-white text-black" value="UI/UX Design">UI/UX</option>
                        <option className="bg-white text-black" value="Web Development">Web Development</option>
                    </select>
                </div>

            </section>

            <section className="px-5 md:px-10 py-24">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-shadow duration-300">
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
                                <br />
                            <div className="text-right">
                                <a href={`/projects/${project.id}`} className="bg-primary font-medium text-white rounded-full px-3 py-2">View Detail</a>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </section>
        </div>
    )
}

export default  ProjectList;