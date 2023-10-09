import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ReviewCard = ({ reviews }) => {
    useEffect(()=>{
        AOS.init();
    },[])
    const { title, img, description } = reviews;
    return (
        <div
        data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
        className="hero border bg-base-200">
            <div className="hero-content flex-col">
                <img src={img} className="w-[200px] h-[200px] rounded-lg shadow-2xl" />
                <div className="text-center">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;