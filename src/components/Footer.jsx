import { Link } from '@tanstack/react-router';
import { Facebook, InstagramIcon } from 'lucide-react';

export const Footer = () => {
    return (
        <div className="bg-[#514033] text-[#FFFBF4] p-4 md:flex md:gap-20">
            <p className="text-xl md:text-[26px] mb-3">Souvenir en boite</p>
            <div className="flex flex-col">
                <Link to="/contact">
                    <p>Contact</p>
                </Link>
                <a href="tel:+33744823719">07.44.82.37.19</a>
                <a href="mailto:souvenir-en-boite@hotmail.com">souvenir-en-boite@hotmail.com</a>

                <div className='flex gap-4 justify-center md:justify-start mt-4 md:mt-1 mb-10 md:mb-20'>
                    <div className='size-5 flex items-center justify-center bg-[#FFFBF4] rounded-full'>
                        <a href="https://www.facebook.com/sarahphotomariage/photos" target="_blank" rel="noopener noreferrer">
                            <Facebook size={16} color="#514033" strokeWidth={0.75} />
                        </a>
                    </div>
                    <div className='size-5 flex items-center justify-center bg-[#FFFBF4] rounded-full'>
                        <a href="https://www.instagram.com/souvenir_en_boite/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon size={16} color="#514033" strokeWidth={0.75} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end md:justify-end md:flex-1">
                <Link to="/politque-de-confidentialite">
                    <p className='underline'>Politique de confidentialité</p>
                </Link>
                <Link to="/mentions-legales">
                    <p className='underline'>Mentions légales</p>
                </Link>
                <p>© 2018, Souvenir en boite. Paris</p>
            </div>
        </div>
    )
}