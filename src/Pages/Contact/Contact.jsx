import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div >
            <div className="text-white">
                <div>
                    <h2 className="text-2xl bg-[#7c60ff] text-white py-8 text-center font-bold mb-4">Contact Us</h2>
                </div>
                <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" className="space-y-3 text-center bg-blue-600 py-10 shadow-xl border-b">
                    <h2 className="text-xl font-medium">Contact :</h2>
                    <p>Main: +880 17738-27414</p>
                    <p>Phone: +880 17626-29056</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" className="space-y-3 text-center bg-dark py-10 shadow-2xl border-b">
                    <h2 className="text-xl font-medium">Address :</h2>
                    <p>
                        Ulipur, dist: Kurigram, Division : Rangpur, Dhaka
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className="space-y-3 text-center bg-purple-600 py-10 shadow-xl">
                    <h2 className="text-xl font-medium">Email :</h2>
                    <p>info@ninsystem.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;