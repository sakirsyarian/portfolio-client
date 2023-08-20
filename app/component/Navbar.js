import Theme from "./Theme";

export default function Navbar() {
    return (
        <div className="border">
            <div className="sm:container mx-auto">
                <div className="py-5 flex items-center justify-between gap-5">
                    <h1 className="text-xl font-base">Navbar</h1>
                    <Theme />
                </div>
            </div>
        </div>
    );
}
