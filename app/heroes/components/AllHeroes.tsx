import { Hero } from "@/app/types";
import RoleSection from "./RoleSection";

async function getAllHeroes() {
    const response = await fetch("https://overfast-api.tekrop.fr/heroes");
    const data = await response.json();
    return data
}

const AllHeroes = async () => {
    const heroesList: Hero[] = await getAllHeroes();
    const tanks: Hero[] = heroesList.filter(hero => hero.role === "tank")
    const dps: Hero[] = heroesList.filter(hero => hero.role === "damage")
    const supports: Hero[] = heroesList.filter(hero => hero.role === "support")

    return (
        <div className="content-box mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-14 lg:px-8">
            <RoleSection title="Tank" heroes={tanks} />
            <RoleSection title="Damage" heroes={dps} />
            <RoleSection title="Support" heroes={supports} />
        </div>
    )
}

export default AllHeroes