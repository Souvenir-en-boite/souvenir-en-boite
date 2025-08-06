import { Link } from '@tanstack/react-router';

export const Portfolio = () => {
    return (
        <div className="flex flex-col items-center w-full gap-8 mb-10 p-4">
            <div className="grid grid-cols-2 items-center gap-8">
                <div className="flex flex-col items-center mx-auto gap-2">
                    <p className="text-xl md:text-4xl text-[#514033]">MARIAGE</p>
                    <Link to="/portfolio/mariage">
                        <button className="font-mono text-sm text-[#FFFBF4] bg-[#7D7063] px-2.5 py-1.5 md:px-5 md:py-3 border border-[#7D7063] hover:bg-[#FFFBF4] hover:text-[#7D7063] transition-colors duration-300 ease-in-out">Découvrez ici</button>
                    </Link>
                </div>
                <img src="/assets/picture/portfolio-mariage.avif" alt="Mariage" className="h-52 md:h-[560px] object-cover" />
            </div>
            <div className="grid grid-cols-2 items-center gap-8">
                <img src="/assets/picture/portfolio-grossesse.avif" alt="Mariage" className="h-52 md:h-[560px] object-cover" />
                <div className="flex flex-col items-center gap-2">
                    <p className="text-xl md:text-4xl text-[#514033]">GROSSESSE</p>
                    <Link to="/portfolio/grossesse">
                        <button className="font-mono text-sm text-[#FFFBF4] bg-[#7D7063] px-2.5 py-1.5 md:px-5 md:py-3 border border-[#7D7063] hover:bg-[#FFFBF4] hover:text-[#7D7063] transition-colors duration-300 ease-in-out">Découvrez ici</button>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-8">
                   <div className="flex flex-col items-center gap-2">
                    <p className="text-xl md:text-4xl text-[#514033]">NAISSANCE</p>
                    <Link to="/portfolio/naissance">
                        <button className="font-mono text-sm text-[#FFFBF4] bg-[#7D7063] px-2.5 py-1.5 md:px-5 md:py-3 border border-[#7D7063] hover:bg-[#FFFBF4] hover:text-[#7D7063] transition-colors duration-300 ease-in-out">Découvrez ici</button>
                    </Link>
                </div>
                <img src="/assets/picture/portfolio-naissance.avif" alt="Mariage" className="h-52 md:h-[560px] object-cover" />
            </div>
        </div>
    )
}