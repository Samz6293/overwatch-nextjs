export interface Hero {
    key: string
    name: string
    portrait: string
    role: string
    subrole: string
    gamemodes: string[]
}

export interface HeroCardProps {
    hero: Hero
}

export interface RoleSectionProps {
    title: string
    heroes: Hero[]
}