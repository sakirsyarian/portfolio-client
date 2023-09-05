"use client";

import Image from "next/image";

export default function ProjectList({ project }) {
    return (
        <>
            <div className="w-full h-full bg-base-100 rounded-2xl shadow-lg">
                <Image
                    src={`/project/${project.image}`}
                    width={800}
                    height={800}
                    alt={project.name}
                    priority={true}
                    className="rounded-t-2xl"
                />

                <div className="p-6">
                    <h3 className="card-title font-medium text-lg">
                        {project.name}
                    </h3>
                    <button
                        onClick={() => {
                            document
                                .getElementById("modal_" + project._id)
                                .showModal();
                        }}
                        className="mt-2 flex"
                    >
                        <span className="mr-2 text-sm text-emerald-400">
                            See more
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-emerald-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Open the modal using ID.showModal() method */}
            <dialog id={"modal_" + project._id} className="modal">
                <form
                    method="dialog"
                    className="p-5 md:p-14 modal-box max-w-5xl space-y-6"
                >
                    <h3 className="font-bold text-xl text-center text-emerald-500">
                        {project.name}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                    <p className="text-gray-600">Tech stack :</p>
                    <ul className="flex flex-wrap gap-2">
                        {project.tags.map((item) => (
                            <li
                                className="px-3 py-2 bg-base-200 rounded-lg text-center text-sm text-gray-600"
                                key={item}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a
                        href={project.github}
                        className="btn btn-ghost hover:bg-emerald-500 hover:text-base-100 normal-case font-normal"
                    >
                        Link to project
                    </a>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}
