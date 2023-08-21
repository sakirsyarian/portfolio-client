import Image from "next/image";

async function getAbilities() {
    const res = await fetch("http://localhost:3000/abilities", {
        next: { revalidate: 0 },
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

function AbilityList({ ability }) {
    return (
        <div className="text-center space-y-2 border">
            <div className="mx-auto w-16 h-16 text-center border">
                <Image
                    src={`/ability/${ability.icon}`}
                    width={100}
                    height={100}
                    alt={ability.name}
                />
            </div>
            <p>{ability.name}</p>
        </div>
    );
}

export default async function Ability() {
    const { data: abilities } = await getAbilities();

    return (
        <div id="ability" className="grid items-center justify-center border">
            {/* title */}
            <h3 className="text-center mb-3">My Abilities</h3>
            <h2 className="text-xl md:text-2xl font-medium text-center">
                Tools Used
            </h2>

            <div className="px-8 py-12 mx-auto border">
                <p className="pb-8 text-center">
                    The skills, tools and technologies I am really good at:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 gap-5 md:gap-10 justify-center">
                    {abilities.map((ability) => (
                        <AbilityList key={ability._id} ability={ability} />
                    ))}
                </div>
            </div>
        </div>
    );
}
