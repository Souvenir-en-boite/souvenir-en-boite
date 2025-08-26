import { Link } from "@tanstack/react-router";

export const TarifsWedding = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {[
          {
            title: "SILVER",
            price: "1200 €",
            image: "/assets/picture/mariage-silver.avif",
            reverse: false,
            features: [
              "Présence du photographe des préparatifs jusqu'à la pièce montée (jusqu'à 2h du matin maximum, puis 100 € par heure supplémentaire au-delà).",
              "Remise de toutes les photos de l’événement sur clé USB (environ 500 photos).",
              "25 photos retouchées livrées en format numérique.",
            ],
          },
          {
            title: "GOLD",
            price: "1500 €",
            image: "/assets/picture/mariage-gold.avif",
            reverse: true,
            features: [
              "Présence du photographe des préparatifs jusqu'à la pièce montée (jusqu'à 2h du matin maximum, puis 100 € par heure supplémentaire au-delà).",
              "Remise de toutes les photos de l’événement sur clé USB (environ 600 photos).",
              "30 photos retouchées livrées en format numérique.",
              "Livre photo haut de gamme regroupant les photos retouchées, format 28 × 21 cm.",
            ],
          },
          {
            title: "DIAMOND",
            price: "2200 €",
            image: "/assets/picture/mariage-diamond.avif",
            reverse: false,
            features: [
              "Présence du photographe des préparatifs jusqu'à la pièce montée (jusqu'à 2h du matin maximum, puis 100 € par heure supplémentaire au-delà).",
              "Remise de toutes les photos de l’événement sur clé USB (environ 600 photos).",
              "50 photos retouchées livrées en format numérique.",
              "Livre photo haut de gamme regroupant les photos retouchées, format 42 × 28 cm.",
              "Galerie web, permettant à vos invités de visualiser et télécharger directement les photos.",
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
        <p className="text-[9px] md:text-[22px] text-center">
          Vous cherchez d'autres prestataires tels que vidéaste, DJ ou salle ?
          Je suis là pour vous aider ! <br /> Avec mon expérience dans le secteur, j'ai
          établi des partenariats de confiance sur lesquels vous pouvez compter.
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
