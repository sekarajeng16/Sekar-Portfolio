import ProjectDetail from "../data/ProjectData"
import { useParams } from 'react-router-dom';

function ProjectDetailPage() {
    const { projectId } = useParams();
    const project = ProjectDetail.find(project => project.id === Number(projectId));

    console.log(project,  projectId)
    
    return (
        <div key={project.id} className="p-20 mt-5">
            <section>
                <h1 className="font-bold text-5xl">{project.title}</h1>
                <div className="flex justify-center">
                    <img className="rounded-xl" src={project.image} alt={`${project.title} picture`} />
                </div>

                <div className="flex flex-row justify-center gap-2 mt-5">
                   {Object.entries(project.link).map(([key, value]) => (
                        <a key={key} href={value} className="btn">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </a>
                    ))}
                </div>
            </section>

            <section className="py-10">
                <h3 className="text-2xl font-bold">Project Overview</h3>
                <p className="text-justify">{project.description}</p>
            </section>

            <section className="py-10">
                <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
                    <div className="flex-1 flex flex-col text-left">
                        <h3 className="text-2xl font-bold border-b">Roles</h3>
                        <p className="text-justify mt-5">{project.role.join(", ")}</p>
                    </div>

                    <div className="flex-1 flex flex-col text-left">
                        <h3 className="text-2xl font-bold border-b">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2 items-center mt-5">
                            {project.techStack.map((value, key) => (
                                <div key={key} className="bg-secondary font-medium text-white py-2 px-3 rounded-full">
                                    {value}
                                </div>
                                
                            ))}
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="py-10">
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
            </section>

            <section className="py-10">
                <div className="flex flex-col bg-white rounded-2xl p-5">
                    <h3 className="text-2xl font-bold border-b">Key Features</h3>
                    <ul className="list-disc list-inside space-y-1 text-justify">
                        {project.features.map((value, key) => (
                            <li>{value}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section>
                {/* ScreenShoot */}
            </section>

            <section className="py-10">
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
            </section>
        </div>
    )
}

export default ProjectDetailPage;
