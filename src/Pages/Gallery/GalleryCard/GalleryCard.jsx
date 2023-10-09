import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const GalleryCard = ({ pictureItem }) => {

    const { img } = pictureItem;

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img className="h-96 w-full border z-0" src={img} alt="" />
            </div>
            
        </div>
    );
};

export default GalleryCard;