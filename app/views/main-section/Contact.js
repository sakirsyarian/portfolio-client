import ContactForm from "@/app/component/ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="pt-24 pb-10">
            {/* title */}
            <h3 className="mb-3 text-center text-sm text-gray-500">
                Get in touch
            </h3>
            <h2 className="text-xl md:text-2xl font-medium text-center text-emerald-500">
                Contact Me
            </h2>

            <div className="mx-auto px-4 md:px-8 xl:px-60 py-12">
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 justify-center">
                        {/* left */}
                        <div className="flex flex-col items-center justify-around gap-5 text-center">
                            <div className="grid justify-center p-6 w-full bg-base-100 space-y-1 rounded-2xl">
                                <div className="flex justify-center items-center gap-2">
                                    <p className="font-medium">Email</p>
                                </div>
                                <p className="text-sm text-emerald-400">
                                    sakirsyarian@gmail.com
                                </p>
                            </div>
                            <div className="grid justify-center p-6 w-full bg-base-100 space-y-1 rounded-2xl">
                                <div className="flex justify-center items-center gap-2">
                                    <p className="font-medium">Telegram</p>
                                </div>
                                <p className="text-sm text-emerald-400">
                                    @sakirsyarian
                                </p>
                            </div>
                            <div className="grid justify-center p-6 w-full bg-base-100 space-y-1 rounded-2xl">
                                <div className="flex justify-center items-center gap-2">
                                    <p className="font-medium">Discord</p>
                                </div>
                                <p className="text-sm text-emerald-400">
                                    @sakirsyarian
                                </p>
                            </div>
                        </div>

                        {/* right */}
                        <div className="">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
