import Image from "next/image";

async function getAbilities() {
    const res = await fetch(process.env.FETCH_URL + "abilities", {
        next: { tags: ["portfolio"] },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

function AbilityList({ ability }) {
    return (
        <div className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 text-center">
                <Image
                    src={`/ability/${ability.icon}`}
                    width={100}
                    height={100}
                    alt={ability.name}
                />
            </div>
            <p className="text-gray-600">{ability.name}</p>
        </div>
    );
}

export default async function Ability() {
    const { data: abilities } = await getAbilities();

    return (
        <section id="ability" className="pt-24 pb-10">
            {/* title */}
            <h3 className="mb-3 text-center text-sm text-gray-500">
                My Abilities
            </h3>
            <h2 className="text-xl md:text-2xl font-medium text-center text-emerald-500">
                Tools Used
            </h2>

            <div className="mx-auto px-4 md:px-8 xl:px-60 py-12">
                <div className="">
                    <p className="pb-8 text-center text-gray-600">
                        The skills, tools and technologies I am really good at:
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 gap-5 md:gap-10 justify-center">
                        {abilities.map((ability) => (
                            <AbilityList key={ability._id} ability={ability} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
