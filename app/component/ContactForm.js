"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const form = useRef();
    const toast = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ywq3648",
                "template_7rlvksh",
                form.current,
                "Iz_ZTYcxSEZtuyjaR"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.current.classList.remove("hidden");

                    setTimeout(() => {
                        toast.current.classList.add("hidden");
                    }, 5000);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        form.current.reset();
    }

    return (
        <form ref={form} onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-sm text-gray-600"
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    className="p-4 w-full bg-base-100 text-sm rounded-2xl focus:outline-0"
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
                    name="email"
                    className="p-4 w-full bg-base-100 text-sm rounded-2xl focus:outline-0"
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
                    name="message"
                    className="p-4 w-full bg-base-100 text-sm rounded-2xl focus:outline-0"
                    placeholder="Write your message"
                ></textarea>
            </div>
            <button type="submit" className="button emerald">
                Send Message
            </button>

            <div ref={toast} className="hidden toast toast-end toast-top">
                <div className="alert alert-success">
                    <span className="text-base-100">
                        Message sent successfully.
                    </span>
                </div>
            </div>
        </form>
    );
}
