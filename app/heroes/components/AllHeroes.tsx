import { Hero } from "@/app/types";

async function getAllHeroes() {
    const response = await fetch("https://overfast-api.tekrop.fr/heroes");
    const data = await response.json();
    return data
}

const AllHeroes = async() => {
    const heroesList: Hero[] = await getAllHeroes();
    const tanks:Hero[] = heroesList.filter(hero=> hero.role === "tank")
    const dps:Hero[] = heroesList.filter(hero=> hero.role === "damage")
    const supports:Hero[] = heroesList.filter(hero=> hero.role === "support")
    return (
        <>
            <h1 className="text-5xl text-orange-500">Tanks</h1>
            {tanks.map((hero: Hero) => (
                <p key={hero.key}>{hero.name}</p>
            ))}

            <h1 className="text-5xl text-orange-500">DPS</h1>
            {dps.map((hero: Hero) => (
                <p key={hero.key}>{hero.name}</p>
            ))}

            <h1 className="text-5xl text-orange-500">Supports</h1>
            {supports.map((hero: Hero) => (
                <p key={hero.key}>{hero.name}</p>
            ))}
        </>
    )
}

export default AllHeroes