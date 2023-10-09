import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                        <h1 className="mb-5 text-white text-4xl font-bold">404</h1>
                        <p className="mb-5 text-3xl text-white">Look like you are lost <br />
                        the page you are looking for not available!
                        </p>
                        <Link to='/'>
                            <button className="btn bg-[#7c60ff] border-none text-white">Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;