"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function ProjectList({ project }) {
    return (
        <>
            <div className="w-full h-full bg-base-200 rounded-xl">
                <div className="p-4 sm:p-8">
                    <Image
                        src={`/project/${project.image}`}
                        width={800}
                        height={800}
                        alt={project.name}
                        priority={true}
                    />
                </div>

                <div className="px-4 pb-4 sm:px-8 sm:pb-8">
                    <h3 className="card-title font-medium text-lg border">
                        {project.name}
                    </h3>
                    <button
                        onClick={() => {
                            document
                                .getElementById("modal_" + project._id)
                                .showModal();
                        }}
                        className="mt-2 flex border"
                    >
                        <span className="mr-2">See more</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
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
                    className="p-8 md:p-14 modal-box max-w-5xl space-y-6"
                >
                    <h3 className="font-bold text-lg text-center">
                        {project.name}
                    </h3>
                    <p className="">{project.description}</p>
                    <ul className="flex flex-wrap gap-2 border">
                        {project.tags.map((item) => (
                            <li
                                className="px-3 py-2 bg-base-200 rounded-lg text-center text-sm"
                                key={item}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a
                        href={project.github}
                        className="btn btn-ghost normal-case font-normal"
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
