import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div>
            <h2 className="text-2xl bg-[#7c60ff] text-white py-8 text-center font-bold mb-4">ABOUT NIN SYSTEM</h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 px-1">
                    <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" className='border'>
                        <img src="https://i.ibb.co/vVCCf81/nastuh-abootalebi-J1r-NS2qv8-BQ-unsplash.jpg" alt="" />
                    </div>
                    <p data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
                        NiN System is a full-service event production company committed to creating lasting memories. From corporate events to music festivals, we have solutions to transform your ambitious vision into reality.

                        We offer design, production management, audio, lighting, video, backline, rooftops, crowd control, and staging to ensure your event runs smoothly so you can enjoy your big moment stress-free.
                    </p>
                </div>
                <hr  className='my-8 w-1/2 mx-auto'/>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 px-1 mt-5">
                    <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                        <p>
                            Over 40 years ago, Vickie and Charles Belcher started their business by serving artists with the latest in backline equipment rentals. In 1978, Onstage Systems was born in a small warehouse in Dallas. Vickie and Charles Belcher spent the next two decades touring the country with the biggest names in music, planting their roots deep in the live music industry.
                        </p>
                        <p>
                            Having grown up in the family business, Hyacinth and Chris Belcher had a natural passion for music and inherited their parent’s love for event production. At 19-years-old, Hyacinth began her journey as part-time call-steward and eventually advanced to lighting design for music icons like Willie Nelson and Bette Midler. Meanwhile, her brother Chris Belcher honed his craft in stage design and roofing, adding a critical component to the family’s growing business.
                        </p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className='border'>
                        <img src="https://i.ibb.co/svj7sjt/germany-summerjam-festival.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;