import Ability from "./Ability";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Project from "./Project";
import Service from "./Service";
import Testimonial from "./Testimonial";

export default function Main() {
    return (
        <main className="sm:container mx-auto border">
            <div className="pt-28 md:pt-40 pb-14 md:pb-20">
                <Hero />
                <About />
                <Ability />
                <Service />
                <Project />
                <Testimonial />
                <Contact />
            </div>
        </main>
    );
}
