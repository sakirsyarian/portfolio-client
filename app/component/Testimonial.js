import Image from "next/image";

async function getTestimonials() {
    const res = await fetch("http://localhost:3000/testimonials", {
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

function TestimonialList({ testimonial }) {
    return (
        <div className="p-6 space-y-2 rounded-lg shadow-lg border">
            <div className="mx-auto border">
                <Image
                    src={`/avatar/${testimonial.image}`}
                    width={100}
                    height={100}
                    alt={testimonial.name}
                />
            </div>
            <p className="font-medium text-lg">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            <p className="pt-2 text-gray-600">{testimonial.message}</p>
        </div>
    );
}

export default async function Testimonial() {
    const { data: testimonials } = await getTestimonials();

    return (
        <section id="testimonial" className="py-24 border border-indigo-500">
            {/* title */}
            <h3 className="mb-3 text-center text-sm text-gray-500">
                My Clients Say
            </h3>
            <h2 className="text-xl md:text-2xl font-medium text-center text-emerald-500">
                Testimonial
            </h2>

            <div className="mx-auto px-8 py-12 border">
                <div className="border">
                    <p className="pb-8 text-center text-gray-600">
                        Nice things people have said about me:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 justify-center">
                        {testimonials.map((testimonial) => (
                            <TestimonialList
                                key={testimonial._id}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
