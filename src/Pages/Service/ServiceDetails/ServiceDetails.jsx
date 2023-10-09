import { Link } from "react-router-dom";
import { BsFillCaretLeftFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ServiceDetails = ({ service }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { title, image, description, Price_Range } = service || {}
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                <div
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <img className="w-full p-2" src={image} alt="" />
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="p-2">
                    <p className="text-justify">{description}</p>
                    <p className="text-lg my-5 font-medium">Price: <span className="font-semibold">{Price_Range}</span></p>
                </div>
            </div>
            <Link className="flex justify-center mt-5" to="/services">
                <button className='btn text-xl bg-[#7c60ff] border-none px-10 py-2 text-white'>
                    <BsFillCaretLeftFill></BsFillCaretLeftFill>
                    Back
                </button>
            </Link>
        </div>
    );
};

export default ServiceDetails;