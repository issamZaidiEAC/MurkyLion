import ProjectCard from "./projectCard";

export default function Projects() {

    return( 
        <>
            <section className="w-full bg-platinum flex flex-col justify-between items-center">
                <h1 className=" h-64 p-3 text-8xl text-black">PROJECTS</h1>
                <article className="w-full flex flex-row items-center">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </article>
            </section>
        </>
    )
}