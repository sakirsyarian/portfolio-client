import Image from "next/image";
import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 border border-orange-500">
            {/* title */}
            <h3 className="mb-3 text-center text-sm text-gray-500">
                Get in touch
            </h3>
            <h2 className="text-xl md:text-2xl font-medium text-center text-emerald-500">
                Contact Me
            </h2>

            <div className="mx-auto px-8 py-12 border">
                <div className="border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 justify-center">
                        {/* left */}
                        <div className="flex flex-col items-center justify-center gap-5 text-center border">
                            <div className="grid justify-center p-6 w-full space-y-2 rounded-lg shadow-lg border">
                                <div className="flex justify-center items-center gap-2">
                                    <div className="border">
                                        <Image
                                            src="/social/email.png"
                                            width={30}
                                            height={30}
                                            alt="email"
                                        />
                                    </div>
                                    <p className="font-medium border">Email</p>
                                </div>
                                <p className="text-gray-500 border">
                                    sakirsyarian@gmail.com
                                </p>
                            </div>
                            <div className="grid justify-center p-6 w-full space-y-2 rounded-lg shadow-lg border">
                                <div className="flex justify-center items-center gap-2">
                                    <div className="border">
                                        <Image
                                            src="/social/telegram.png"
                                            width={30}
                                            height={30}
                                            alt="telegram"
                                        />
                                    </div>
                                    <p className="font-medium border">
                                        Telegram
                                    </p>
                                </div>
                                <p className="text-gray-500 border">
                                    @sakirsyarian
                                </p>
                            </div>
                            <div className="grid justify-center p-6 w-full space-y-2 rounded-lg shadow-lg border">
                                <div className="flex justify-center items-center gap-2">
                                    <div className="border">
                                        <Image
                                            src="/social/discord.png"
                                            width={30}
                                            height={30}
                                            alt="discord"
                                        />
                                    </div>
                                    <p className="font-medium border">
                                        Discord
                                    </p>
                                </div>
                                <p className="text-gray-500 border">
                                    @sakirsyarian
                                </p>
                            </div>
                        </div>

                        {/* right */}
                        <div className="border">
                            <form action="#" className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 font-medium text-sm text-gray-600"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="p-4 w-full text-sm rounded-lg focus:outline-0 border-2"
                                        placeholder="Insert your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 font-medium text-sm text-gray-600"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="p-4 w-full text-sm rounded-lg focus:outline-0 border-2"
                                        placeholder="Insert your email"
                                        required
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 font-medium text-sm text-gray-600"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        rows="6"
                                        className="p-4 w-full text-sm rounded-lg focus:outline-0 border-2"
                                        placeholder="Write your message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="button emerald"
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
