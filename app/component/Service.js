"use client";

export default function Service() {
    return (
        <section id="service" className="py-24 border border-green-500">
            {/* title */}
            <h3 className="text-center mb-3">My Service</h3>
            <h2 className="text-xl md:text-2xl font-medium text-center">
                What I Offer
            </h2>

            <div className="mx-auto px-8 py-12 border">
                {/* offering */}
                <div
                    className="flex flex-col md:flex-row justify-center gap-5 border"
                    style={{ zIndex: 0 }}
                >
                    <div className="w-full border">
                        <div className="card-body">
                            <h3 className="card-title text-lg">SEO Friendly</h3>
                            <div
                                className="w-28 flex justify-between items-center cursor-pointer border"
                                onClick={() => window.modal_seo.showModal()}
                            >
                                See more
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
                            </div>
                        </div>
                    </div>

                    <div className="w-full border">
                        <div className="card-body">
                            <h3 className="card-title text-lg">UI Designer</h3>
                            <span
                                className="w-28 flex justify-between items-center cursor-pointer border"
                                onClick={() => window.modal_ui.showModal()}
                            >
                                See more
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
                            </span>
                        </div>
                    </div>

                    <div className="w-full border">
                        <div className="card-body">
                            <h3 className="card-title text-lg">
                                Mobile Optimized
                            </h3>
                            <div
                                className="w-28 flex justify-between items-center cursor-pointer border"
                                onClick={() => window.modal_mobile.showModal()}
                            >
                                See more
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open the modal using ID.showModal() method */}
            <dialog
                id="modal_seo"
                className="modal modal-bottom sm:modal-middle"
            >
                <form
                    method="dialog"
                    className="modal-box p-10 md:p-14 max-w-2xl"
                >
                    <h3 className="font-bold text-lg text-center">
                        Search Engine Optimization
                    </h3>
                    <p className="py-6">
                        We make sure your website applies SEO best practices, so
                        that your website will be easily found by Google
                    </p>
                    <ul className="space-y-2">
                        <li>✅ Plan your website structure </li>
                        <li>✅ Use an SEO-Friendly URL Structure</li>
                        <li>✅ Make sure your site is mobile-friendly</li>
                        <li>✅ Make sure you’re using HTTPs </li>
                        <li>✅ Make sure your site loads fast </li>
                    </ul>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <dialog
                id="modal_ui"
                className="modal modal-bottom sm:modal-middle"
            >
                <form
                    method="dialog"
                    className="modal-box p-10 md:p-14 max-w-3xl"
                >
                    <h3 className="font-bold text-lg text-center">
                        UI Designer
                    </h3>
                    <p className="py-6">
                        Service with more than 3 years of experience. Providing
                        quality work to client and companies.
                    </p>
                    <ul className="space-y-2">
                        <li>✅ I develop the user interface.</li>
                        <li>✅ Web page development.</li>
                        <li>✅ I create ux element interaction.</li>
                        <li>✅ I position your company brand.</li>
                        <li>✅ Design and mockups product for companies.</li>
                    </ul>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <dialog
                id="modal_mobile"
                className="modal modal-bottom sm:modal-middle"
            >
                <form
                    method="dialog"
                    className="modal-box p-10 md:p-14 max-w-2xl"
                >
                    <h3 className="font-bold text-lg text-center">
                        Mobile Optimized
                    </h3>
                    <p className="py-6">
                        As you probably know, mobile browsing is on the rise,
                        meaning a lot of people use them as their primary way to
                        navigate the web.
                    </p>
                    <ul className="space-y-2">
                        <li>✅ Test your website at multiple resolutions</li>
                        <li>✅ Navigation display well on smaller screens</li>
                        <li>✅ Images look good at smaller resolutions</li>
                        <li>✅ Test your content for readability</li>
                        <li>✅ Test your website’s loading times</li>
                    </ul>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </section>
    );
}
