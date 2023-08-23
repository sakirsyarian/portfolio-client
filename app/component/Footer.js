import Link from "next/link";

export default function Footer() {
    return (
        <section
            id="testimonial"
            className="py-12 text-base-100 bg-emerald-500 border border-pink-500"
        >
            {/* title */}
            <h2 className="font-bold text-2xl md:text-4xl text-center">
                Ahmad Sarian
            </h2>

            <div className="mx-auto px-8 py-12 border">
                <div className="border">
                    <div className="pb-8 flex gap-5 justify-center items-center font-medium text-center">
                        <Link href="#about">About</Link>
                        <Link href="#ability">Abilities</Link>
                        <Link href="#project">Projects</Link>
                        <Link href="#contact">Contact</Link>
                    </div>

                    <div className="flex justify-center gap-4 md:gap-8">
                        <div className="p-1 bg-base-200 rounded-lg border">
                            <a href="https://facebook.com/sakirsyarian">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#000000"
                                        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="p-1 bg-base-200 rounded-lg border">
                            <a href="https://threads.com/sakirsyarian">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#000000"
                                        d="M16.705 11.108c-.162-2.987-1.794-4.697-4.534-4.714c-1.652-.01-3.033.69-3.879 1.973L9.8 9.4c.634-.961 1.635-1.16 2.36-1.153c.903.006 1.583.268 2.024.78c.32.372.535.887.642 1.536c-.8-.136-1.666-.178-2.59-.125c-2.606.15-4.28 1.67-4.168 3.781c.057 1.071.59 1.993 1.502 2.595c.77.509 1.764.757 2.795.701c1.363-.075 2.432-.595 3.178-1.545c.566-.722.924-1.658 1.082-2.836c.65.392 1.13.907 1.397 1.527c.452 1.054.478 2.786-.935 4.198c-1.238 1.236-2.726 1.772-4.975 1.788c-2.495-.018-4.382-.819-5.608-2.378c-1.15-1.46-1.743-3.57-1.765-6.269c.022-2.7.616-4.809 1.765-6.27c1.226-1.559 3.113-2.359 5.608-2.377c2.513.019 4.432.822 5.706 2.39c.625.768 1.095 1.734 1.406 2.86l1.766-.47c-.377-1.387-.969-2.582-1.774-3.573c-1.633-2.01-4.033-3.039-7.11-3.06c-3.071.021-5.433 1.055-7.019 3.071c-1.411 1.795-2.14 4.306-2.164 7.436c.024 3.13.753 5.627 2.164 7.422c1.587 2.016 3.96 3.05 7.03 3.071c2.731-.019 4.655-.734 6.24-2.317c2.075-2.073 2.012-4.67 1.329-6.264c-.525-1.225-1.57-2.206-2.98-2.81Zm-4.438 4.557c-1.142.064-2.328-.448-2.387-1.546c-.043-.814.58-1.722 2.457-1.83a9.389 9.389 0 0 1 2.533.174c-.216 2.702-1.485 3.14-2.603 3.202Z"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="p-1 bg-base-200 rounded-lg border">
                            <a href="https://twitter.com/sakirsyarian">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#000000"
                                        d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="pt-16">
                        <p className="text-center">
                            © Sarian. All rigths reserved
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
