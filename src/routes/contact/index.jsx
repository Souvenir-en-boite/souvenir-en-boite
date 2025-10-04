import {
  MapPin,
  Phone,
  ThumbsUp,
  Mail,
  Facebook,
  InstagramIcon,
} from "lucide-react";

export const Contact = () => {
  return (
    <div>
      <div className="px-10 flex flex-col items-center justify-center my-10 text-[#514033]">
        <h1 className="text-4xl mb-3">CONTACT</h1>
        <p className="text-center mb-4 text-2xl">
          Je serais ravie de répondre à vos questions et de discuter de vos
          projets.
        </p> 
        <p className="text-2xl">N'hésitez pas à me contacter.</p>
      </div>
      <div className="md:grid md:grid-cols-2 text-[#514033] md:border-t border-[#514033]">
        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-10 items-center justify-end p-20 border-r border-[#514033]">
          <div className="flex flex-col gap-2">
            <MapPin />
            <p>Adresse</p>
            <p>75001, Paris, France</p>
          </div>

          <div className="flex flex-col gap-2">
            <Phone />
            <p>Téléphone</p>
            <a href="tel:+33744823719">07.44.82.37.19</a>
          </div>

          <div className="flex flex-col gap-2">
            <Mail />
            <p>E-mail</p>
            <a href="mailto:souvenir-en-boite@hotmail.com" className="text-xs">
              souvenir-en-boite@hotmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <ThumbsUp />
            <p>Réseaux sociaux</p>
            <div className="flex gap-4 font-extrabold">
              <div className="size-5 flex items-center justify-center bg-[#FFFBF4] rounded-full">
                <a
                  href="https://www.instagram.com/souvenir_en_boite/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon size={16} color="#514033" strokeWidth={0.75} />
                </a>
              </div>
              <div className="size-5 flex items-center justify-center bg-[#FFFBF4] rounded-full">
                <a
                  href="https://www.facebook.com/sarahphotomariage/photos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={16} color="#514033" strokeWidth={0.75} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <form action="https://formsubmit.co/souvenir-en-boite@hotmail.com" target="_blank" method="POST" className="p-5 md:p-20 font-[helvetica]">
          <div className="md:grid md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col mb-4 md:mb-0">
              <label for="lastname">Nom</label>
              <input
                type="text"
                id="lastname"
                name="Nom"
                className="border border-[#7D7063] bg-transparent hover:border-[#514033] focus:border-[#514033] p-2 outline-none font-[helvetica]"
              />
            </div>
            <div className="flex flex-col">
              <label for="firstname">Prénom</label>
              <input
                type="text"
                id="firstname"
                name="Prénom"
                className="border border-[#7D7063] bg-transparent hover:border-[#514033] focus:border-[#514033] p-2 outline-none font-[helvetica]"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label for="mail" className="font-[helvetica]">
              E-mail *
            </label>
            <input
              type="text"
              id="mail"
              name="E-mail"
              required
              className="border border-[#7D7063] bg-transparent hover:border-[#514033] focus:border-[#514033] p-2 outline-none font-[helvetica]"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="Message"
              rows={4}
              required
              className="border border-[#7D7063] bg-transparent hover:border-[#514033] focus:border-[#514033] p-2 outline-none font-[helvetica]"
            />
          </div>

          <button type="submit" className="font-mono w-full text-xs px-2 py-3 text-white bg-[#7D7063] hover:bg-white hover:text-[#7D7063] border border-[#7D7063] transition-colors duration-300 ease-in-out">
            Envoyez
          </button>
        </form>
      </div>
    </div>
  );
};
