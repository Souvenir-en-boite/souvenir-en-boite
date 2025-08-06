export default function Home() {
    return (
        <div>
            <div className="grid grid-cols-3 gap-2 md:gap-6 mx-4 md:mx-20 mb-4">
                <img src="/assets/picture/home1.avif" alt="Home 1" className="w-full h-[200px] md:h-[600px] object-cover" />
                <img src="/assets/picture/home2.avif" alt="Home 2" className="w-full h-[200px] md:h-[600px] object-cover" />
                <img src="/assets/picture/home3.avif" alt="Home 3" className="w-full h-[200px] md:h-[600px] object-cover" />
            </div>
            <div className="flex flex-col md:grid md:grid-cols-[65%_35%] gap-6 bg-[#FDDDCD] py-12 px-6">
                <div className="flex flex-col gap-6 md:text-lg">
                    <p className="text-lg md:text-4xl text-[#514033]">"Immortalisez vos instants les plus précieux"</p>
                    <p>Chaque histoire mérite d’être racontée. Chaque regard, chaque sourire, chaque souvenir mérite d’être capturé.</p>
                    <p>Je suis Sarah, photographe et artiste. Mon objectif ? Figer la magie de vos moments les plus précieux avec authenticité, douceur et émotion.</p>
                    <p><i className="text-[18px] md:text-[22px]">Mariage</i> : Des préparatifs jusqu’à la première danse, je saisis les instants vrais, les éclats de rire, les larmes de joie, les petits détails qui font de votre journée une histoire unique. Je travaille régulièrement avec des prestataires de confiance (vidéaste, DJ, etc.) et je serai ravi de vous les recommander.</p>
                    <p><i className="text-[18px] md:text-[22px]">Grossesse</i> : Parce que ce petit miracle qui grandit en vous mérite d’être célébré, je crée des images en studio ou en extérieur, qui révèlent toute la beauté de ce moment si spécial.</p>
                    <p><i className="text-[18px] md:text-[22px]">Naissance</i> : Les premiers instants de vie sont éphémères mais infiniment précieux. Avec patience et tendresse, je capture les premiers regards, les petites mains, les grands câlins… pour que vous puissiez les revivre encore et encore.</p>
                    <p>Plus que des photos, je vous offre des souvenirs vivants, empreints d’émotion et de vérité.</p>
                    <p>Contactez-moi et créons ensemble les images de votre histoire.</p>
                </div>
                <div className="p-4">
                    <img src="/assets/picture/sarah.avif" alt="Sarah" className="w-full h-[600px] object-cover" />
                </div>
            </div>
        </div>
    )
}
