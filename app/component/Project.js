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
        <section id="project" className="pt-24 pb-10">
            {/* title */}
            <h3 className="mb-3 text-center text-sm text-gray-500">
                My Portofolio
            </h3>
            <h2 className="text-xl md:text-2xl font-medium text-center text-emerald-500">
                Recent Projects
            </h2>

            <div className="mx-auto px-4 md:px-8 xl:px-60 py-12">
                <div className="">
                    <p className="pb-8 text-center text-gray-600">
                        Some of the noteworthy projects I have built:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5">
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
