import Image from "next/image";

async function getTestimonials() {
    try {
        const res = await fetch(
            "https://portfolio.elgoritme.com/testimonials",
            { next: { tags: ["portfolio"] } }
        );

        if (!res.ok) {
            console.log(res);
            throw new Error("Failed to fetch data");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

function TestimonialList({ testimonial }) {
    return (
        <div className="p-6 space-y-2 bg-base-100 rounded-2xl shadow-lg">
            <div className="mx-auto">
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
        <section id="testimonial" className="pt-24 pb-10">
            {/* title */}
            <h3 className="mb-3 text-center text-sm text-gray-500">
                My Clients Say
            </h3>
            <h2 className="text-xl md:text-2xl font-medium text-center text-emerald-500">
                Testimonial
            </h2>

            <div className="mx-auto px-4 md:px-8 xl:px-60 py-12">
                <div className="">
                    <p className="pb-8 text-center text-gray-600">
                        Nice things people have said about me:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
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
