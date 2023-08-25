import Ability from "./main-section/Ability";
import About from "./main-section/About";
import Contact from "./main-section/Contact";
import Hero from "./main-section/Hero";
import Project from "./main-section/Project";
import Service from "./main-section/Service";
import Testimonial from "./main-section/Testimonial";

export default function Main() {
    return (
        <main className="sm:container mx-auto">
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
