import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ServiceCard = ({ service }) => {
    const { title, image, description } = service;

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
            <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                <img className="rounded-t-lg" src={image} alt="" />
            </div>
            <div className="p-5" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {
                        description?.length > 200 ? <p> {description.slice(0, 150)}.....</p> : ' '
                    }
                </p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div >

    );
};

ServiceCard.propTypes = {
    service: PropTypes.array
}

export default ServiceCard;