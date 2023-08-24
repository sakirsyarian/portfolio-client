"use client";

function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);
}

export default function ContactForm() {
    return (
        <form onSubmit={handleSubmit} className="space-y-5">
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
        </form>
    );
}
