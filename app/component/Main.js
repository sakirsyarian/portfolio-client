import Ability from "./Ability";
import About from "./About";
import Hero from "./Hero";
import Project from "./Project";
import Service from "./Service";

export default function Main() {
    return (
        <main className="sm:container mx-auto border">
            <div className="pt-28 md:pt-40 pb-14 md:pb-20">
                <Hero />
                <About />
                <Ability />
                <Service />
                <Project />
            </div>
        </main>
    );
}
