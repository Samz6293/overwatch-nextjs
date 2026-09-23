import { Hero, RoleSectionProps } from "@/app/types"
import HeroCard from "./HeroCard"

const RoleSection = ({ title, heroes }: RoleSectionProps) => {
    return (
        <>
            <section className="mb-20">
                <div className="mb-12 flex items-center gap-4">
                    <h1 className="text-4xl font-monument font-bold text-orange-500 sm:text-4xl">{title}</h1>
                    <div className="h-px flex-1 bg-orange-500/30" />
                    <span className="text-sm font-medium text-zinc-500">{heroes.length}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 ">
                    {heroes.map((hero: Hero) => (
                        <HeroCard key={hero.key} hero={hero} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default RoleSection