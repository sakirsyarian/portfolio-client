export default function About() {
    return (
        <section id="about" className="py-24 border border-red-500">
            {/* title */}
            <h3 className="text-center mb-3">My Intro</h3>
            <h2 className="text-xl md:text-2xl font-medium text-center">
                About Me
            </h2>

            <div className="px-8 py-12 mx-auto border">
                <div className="border">
                    {/* card */}
                    <div className="flex flex-col md:flex-row justify-center gap-5 text-center">
                        <div className="p-5 w-full xl:w-1/4 bg-gray-100 space-y-2 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mx-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                                />
                            </svg>
                            <p className="font-medium text-sm">Experience</p>
                            <p className="text-xs">3 Years Working</p>
                        </div>
                        <div className="p-5 w-full xl:w-1/4 bg-gray-100 space-y-2 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mx-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                                />
                            </svg>
                            <p className="font-medium text-sm">Completed</p>
                            <p className="text-xs">20 + Projetcs</p>
                        </div>
                        <div className="p-5 w-full xl:w-1/4 bg-gray-100 space-y-2 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mx-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                />
                            </svg>
                            <p className="font-medium text-sm">Support</p>
                            <p className="text-xs">Online 24/7</p>
                        </div>
                    </div>
                    {/* description */}
                    <p className="py-8">
                        I have been a professional developer for almost two
                        years, mostly I work professionally with javascript. I
                        like building new stuff and working with other people,
                        my main interest is programming and cloud computing.
                    </p>
                    <button className="btn btn-accent flex mx-auto">
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
}
