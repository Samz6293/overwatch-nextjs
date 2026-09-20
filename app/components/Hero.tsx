
export default function Hero() {
    return (
        <div className="bg-[url(/moira.jpg)] bg-no-repeat bg-position-[75%_top] bg-cover text-white h-[80vh]
        md:bg-top">
            {/* Mobile readability scrim: active on small screens, transparent on desktop */}
            <div className="h-full w-full bg-linear-to-t from-black/95 via-black/80 to-transparent
            md:bg-none">
                <div className="content-box h-full flex flex-col justify-center gap-3 px-6
                sm:gap-6 sm:px-12
                md:px-16">
                    <h1 className="text-2xl text-start tracking-tight leading-7 font-monument
                    sm:text-4xl sm:leading-10
                    md:text-5xl md:leading-11">
                        PICK A HERO.<br />
                        CREATE CHAOS.
                    </h1>

                    <p className="text-start font-apple max-w-100 text-neutral-200
                    sm:text-md md:text-xl md:text-white">
                        Step into a team-based action game where every hero plays by their own rules.
                        Team up with your friends and battle for the objective
                    </p>

                    <div className="flex gap-3 pt-2
                    sm:gap-4 sm:pt-0">

                        <button className="bg-orange-500 px-5 py-2 rounded-lg font-monument text-[10px] cursor-pointer
                        sm:px-6 sm:text-sm
                        hover:bg-orange-600 transition-colors">
                            Heroes
                        </button>

                        <button className="border border-orange-500 px-5 py-2 rounded-lg font-monument text-[10px] cursor-pointer
                        sm:px-6 sm:text-sm
                        hover:bg-orange-500/10 transition-colors">
                            Try Overwatch
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
