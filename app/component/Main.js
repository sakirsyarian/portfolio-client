import Ability from "./Ability";
import About from "./About";
import Hero from "./Hero";

export default function Main() {
    return (
        <main className="sm:container mx-auto border">
            <section className="pt-28 md:pt-40 pb-14 md:pb-20">
                <div className="grid gap-14 md:gap-20">
                    <Hero />
                    <About />
                    <Ability />
                </div>
            </section>
        </main>
    );
}
