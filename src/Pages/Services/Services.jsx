import { useState } from "react";
import getServices from "../../Shared/hook/getServices";
import ServiceCard from "./ServiceCard/ServiceCard";


const Services = () => {
    const [services] = getServices();
    const [isShow, setIsShow] = useState(false)
    return (
        <div>
            <div className="flex items-center justify-center py-4 shadow-md shadow-[#7366af] bg-[#7c60ff]">
                <h2 className="text-xl text-white mx-2 uppercase md:text-3xl lg:text-4xl font-semibold ">Our Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {
                    isShow?
                    services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    :
                    services?.slice(0, 9).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center my-5">
                <button onClick={() => setIsShow(!isShow)} className='py-3 px-7 font-semibold rounded-xl hover:bg-black text-xl bg-[#7c60ff] border-none text-white'>
                    {
                        isShow? "See Less" : "See More"
                    }
                </button>
            </div>
        </div>
    );
};

export default Services;