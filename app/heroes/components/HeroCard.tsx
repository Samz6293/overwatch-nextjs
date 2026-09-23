import { HeroCardProps } from "@/app/types"
import Image from "next/image"
import Link from "next/link"

const HeroCard = ({ hero }: HeroCardProps) => {
  return (
    <div className="hover-3d w-full">
      <Link
        href={`/heroes/${hero.key}`}
        className="group card relative block aspect-square w-full overflow-hidden rounded-2xl bg-neutral-950 text-white  outline outline-white/10 transition-all duration-300 hover:scale-[1.02] hover:outline-orange-500 hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer"
      >
        {/* Background Portrait */}
        <Image
          src={hero.portrait}
          alt={hero.name}
          fill
          sizes="(max-width: 640px) 50vw, 200px"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />

        {/* Gradient for text legibility */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-black/60" />

        {/* Badge */}
        <div className="absolute top-2 left-2 flex flex-wrap items-center gap-1.5">
          {hero.subrole && (
            <div className="mb-0.5">
              <span className="font-apple text-xs rounded-sm uppercase tracking-wider text-orange-400 bg-black/20 outline outline-orange-500/30 p-1">
                {hero.subrole}
              </span>
            </div>
          )}

        </div>

        {/* Info, integrated over the image */}
        <div className="absolute inset-x-0 bottom-0 p-3">

          <h2 className="font-monument text-xl tracking-wide text-white/60 transition-colors duration-200 group-hover:text-orange-400 sm:text-xl">
            {hero.name}
          </h2>
        </div>
      </Link>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default HeroCard