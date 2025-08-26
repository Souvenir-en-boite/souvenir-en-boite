import { Link } from "@tanstack/react-router";

export const TarifsBirth = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {[
          {
            title: "SILVER",
            price: "290 €",
            image: "/assets/picture/naissance-silver.avif",
            reverse: false,
            features: [
              "2 tenues (personnelles ou proposées en studio)",
              "Remise de toutes les photos brut en format numérique",
              "5 photos retouchées au choix",
            ],
          },
          {
            title: "GOLD",
            price: "390 €",
            image: "/assets/picture/naissance-gold.avif",
            reverse: true,
            features: [
              "3 tenues (personnelles ou proposées en studio)",
              "Remise de toutes les photos brut en format numérique",
              "8 photos retouchées",
            ],
          },
          {
            title: "DIAMOND",
            price: "690 €",
            image: "/assets/picture/naissance-diamond.avif",
            reverse: false,
            features: [
              "4 tenues (personnelles ou proposées en studio)",
              "Remise de toutes les photos brut en format numérique",
              "12 photos retouchées",
              "Création d’un livre photo 21 x 28 cm",
            ],
          },
        ].map(({ title, price, image, features, reverse }, index) => (
          <div
            className={`flex items-center md:gap-20 ${
              reverse ? "flex-row-reverse" : ""
            } text-[#514033] mb-10 mx-2`}
            key={index}
          >
            <div className="w-1/2 md:w-[600px] text-[">
              <p className="text-xl md:text-4xl text-center">{title}</p>
              <p className="text-xl md:text-4xl text-center">{price}</p>
              <ul className="list-disc text-[14px] md:text-[22px] mt-4 px-6 md:px-10">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 md:w-[600px]">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 items-center p-4 bg-[#FFE2D6CC]">
        <p className="text-[15px] md:text-[38px]">
          Les formules peuvent être personnalisés
        </p>
        <p className="text-[14px] text-center md:text-[22px] text-[#8B0000]">
          15% de reduction seront offert sur votre formule grossesse pour toute
          prestation naissance reservées.
        </p>
        <Link to="/contact">
          <button className="font-mono text-xs md:text-sm text-[#FFFBF4] bg-[#7D7063] px-2.5 py-1.5 md:px-5 md:py-3 border border-[#7D7063] hover:bg-[#FFFBF4] hover:text-[#7D7063] transition-colors duration-300 ease-in-out">
            Contactez-moi
          </button>
        </Link>
      </div>
    </>
  );
};
