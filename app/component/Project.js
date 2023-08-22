import ProjectList from "./ProjectList";

async function getProjects() {
    const res = await fetch("http://localhost:3000/projects", {
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Project() {
    const { data: projects } = await getProjects();
    return (
        <section id="project" className="py-24 border border-yellow-500">
            {/* title */}
            <h3 className="text-center mb-3">My Portofolio</h3>
            <h2 className="text-xl md:text-2xl font-medium text-center">
                Recent Projects
            </h2>

            <div className="mx-auto px-8 py-12 border">
                <div className="border">
                    <p className="pb-8 text-center">
                        Some of the noteworthy projects I have built:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 ">
                        {/* card */}
                        {projects.map((project) => (
                            <ProjectList key={project._id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
