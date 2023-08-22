import Image from "next/image";
import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 border border-orange-500">
            {/* title */}
            <h3 className="text-center mb-3">Get in touch</h3>
            <h2 className="text-xl md:text-2xl font-medium text-center">
                Contact Me
            </h2>

            <div className="mx-auto px-8 py-12 border">
                <div className="border">
                    <p className="pb-8 text-center">Write me your message</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 justify-center">
                        <div className="flex flex-col items-center justify-center gap-5 text-center border">
                            <div className="grid justify-center p-5 w-full space-y-2 border">
                                <div className="mx-auto border ">
                                    <Image
                                        src="/social/email.png"
                                        width={30}
                                        height={30}
                                        alt="email"
                                    />
                                </div>
                                <p className="border">Email</p>
                                <p className="border">sakirsyarian@gmail.com</p>
                            </div>
                            <div className="grid justify-center p-5 w-full space-y-2 border">
                                <div className="mx-auto border">
                                    <Image
                                        src="/social/whatsapp.png"
                                        width={30}
                                        height={30}
                                        alt="whatsapp"
                                    />
                                </div>
                                <p className="border">WhatsApp</p>
                                <p className="border">0854123654</p>
                            </div>
                            <div className="grid justify-center p-5 w-full space-y-2 border">
                                <div className="mx-auto border">
                                    <Image
                                        src="/social/messenger.png"
                                        width={30}
                                        height={30}
                                        alt="messenger"
                                    />
                                </div>
                                <p className="border">Messenger</p>
                                <p className="border">sakirsyarian</p>
                            </div>
                        </div>
                        <div className="border">
                            <form action="#" className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="p-3 w-full text-sm rounded-lg focus:outline-0 border"
                                        placeholder="Insert your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="p-3 w-full text-sm rounded-lg focus:outline-0 border"
                                        placeholder="Insert your email"
                                        required
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        rows="6"
                                        className="p-3 w-full text-sm rounded-lg focus:outline-0 border"
                                        placeholder="Write your message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn normal-case"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
