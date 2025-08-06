import { Link } from "@tanstack/react-router";

export const Tarifs = () => {
  return (
    <div>
      <h1 className="text-center mx-10 mb-10 text-[16px] md:text-4xl text-[#514033]">
        Des instants précieux, capturés avec amour, <br /> découvrez les
        formules qui subliment vos plus beaux moments.
      </h1>

      <div className="md:gap-5 md:my-4 md:mx-20 hidden md:flex">
        <div>
          <div className="relative">
            <img
              src="/assets/picture/tarif-mariage.avif"
              alt="Mariage"
              className="relative"
            ></img>
            <Link to="/tarifs/mariage">
              <button className="font-mono w-1/2 bg-[#FFE2D6] text-[#7D7063] text-sm px-2 py-3 absolute bottom-0 hover:bg-white left-1/2 transform -translate-x-1/2 transition-colors duration-300 ease-in-out">
                LES FORMULES MARIAGE
              </button>
            </Link>
          </div>
          <Link to="/tarifs/mariage">
            <div className="flex items-center justify-center">
              <button className="font-mono w-1/2 text-xs px-2 py-3 text-[#FFE2D6] bg-[#7D7063] hover:bg-white transition-colors duration-300 ease-in-out">
                Cliquez ici
              </button>
            </div>
          </Link>
        </div>

        <div>
          <div className="relative">
            <img
              src="/assets/picture/tarif-grossesse.avif"
              alt="Grossesse"
              className="relative"
            ></img>
            <Link to="/tarifs/grossesse">
              <button className="font-mono bg-[#FFE2D6] text-[#7D7063] text-sm px-2 py-3 absolute bottom-0 hover:bg-white left-1/2 transform -translate-x-1/2 transition-colors duration-300 ease-in-out">
                LES FORMULES GROSSESSE
              </button>
            </Link>
          </div>
          <Link to="/tarifs/grossesse">
            <div className="flex items-center justify-center">
              <button className="font-mono w-1/2 text-xs px-2 py-3 text-[#FFE2D6] bg-[#7D7063] hover:bg-white transition-colors duration-300 ease-in-out">
                Cliquez ici
              </button>
            </div>
          </Link>
        </div>

        <div>
          <div className="relative">
            <img
              src="/assets/picture/tarif-naissance.avif"
              alt="Naissance"
              className="relative"
            ></img>
            <Link to="/tarifs/naissance">
              <button className="font-mono bg-[#FFE2D6] text-[#7D7063] text-sm px-2 py-3 absolute bottom-0 hover:bg-white left-1/2 transform -translate-x-1/2 transition-colors duration-300 ease-in-out">
                LES FORMULES NAISSANCE
              </button>
            </Link>
          </div>
          <Link to="/tarifs/naissance">
            <div className="flex items-center justify-center">
              <button className="font-mono w-1/2 text-xs px-2 py-3 text-[#FFE2D6] bg-[#7D7063] hover:bg-white transition-colors duration-300 ease-in-out">
                Cliquez ici
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="md:hidden">
        <div className="grid grid-cols-2 items-end p-4">
          <div></div>
          <Link to="/tarifs/mariage">
            <div className="relative flex justify-end">
              <img
                src="/assets/picture/tarif-mariage.avif"
                alt="Mariage"
                className="w-auto h-auto"
              />

              <button
                className="absolute font-mono text-xs bg-[#FFE2D6] text-[#7D7063] px-2 py-1.5"
                style={{
                  bottom: "10%",
                  left: "-75%",
                }}
              >
                LES FORMULES MARIAGE
              </button>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 items-end p-4">
          <Link to="/tarifs/grossesse">
            <div className="relative flex justify-end">
              <img
                src="/assets/picture/tarif-grossesse.avif"
                alt="Mariage"
                className="w-auto h-auto"
              />

              <button
                className="absolute"
                style={{
                  bottom: "10%",
                  right: "-95%",
                  transform: "translateX(-25%)",
                }}
              >
                <span className="font-mono text-xs bg-[#FFE2D6] text-[#7D7063] px-2 py-1.5">
                  LES FORMULES GROSSESSE
                </span>
              </button>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 items-end p-4">
          <div></div>
          <Link to="/tarifs/naissance">
            <div className="relative flex justify-end">
              <img
                src="/assets/picture/tarif-naissance.avif"
                alt="Mariage"
                className="w-auto h-auto"
              />

              <button
                className="absolute font-mono text-xs bg-[#FFE2D6] text-[#7D7063] px-2 py-1.5"
                style={{
                  bottom: "10%",
                  left: "-75%",
                }}
              >
                LES FORMULES NAISSANCE
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
