import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RSmb7Q9/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                    <h1 className="mb-5 text-white text-3xl font-bold">EXHILARATING EXPERIENCES.</h1>
                    <p className="mb-5 text-white">Onstage Systems is a full-service live event production company providing turn-key event solutions for those looking to make a powerful impact. From concept to event production, we handle the details – you get the credit.</p>
                    <Link to='/gallery'>
                        <button className="btn bg-[#7c60ff] border-none text-white">View Work</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;