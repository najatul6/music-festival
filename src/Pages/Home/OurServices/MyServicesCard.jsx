import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const MyServicesCards = ({ cards }) => {
    const { id, title, image, description, Price_Range } = cards

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div
                className="bg-dark border border-gray-200 rounded-lg shadow dark:bg-dark dark:border-gray-700"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
                    <img className="rounded-t-lg w-full h-[300px]" src={image} alt="" />
                </div>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {
                            description?.length > 150 ? <p> {description.slice(0, 150)}.....</p> : <p>{description}</p>
                        }
                    </p>
                    <p className="mb-3 font-medium text-gray-800 dark:text-gray-400">
                        Price : {Price_Range}
                    </p>
                    <Link className='flex justify-end' to={`/services/${id}`}>
                        <button className='btn bg-[#7c60ff] border-none text-white'>
                            Show Details
                        </button>
                    </Link>
                </div>
            </div >
        </div>
    );
};

export default MyServicesCards;