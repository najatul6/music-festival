import { useParams } from "react-router-dom";
import getServices from "../../Shared/hook/getServices";
import { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails/ServiceDetails";


const Service = () => {
    const [service, setService] = useState();

    const { id } = useParams();
    const [services] = getServices();

    useEffect(() => {
        const findService = services?.find((service) => service.id === id)
        setService(findService)
    }, [id, services])
    return (
        <div>
            <div className="flex items-center justify-center py-4 shadow-md shadow-[#7366af] bg-[#7c60ff]">
                <h2 className="text-xl text-white mx-2 uppercase md:text-3xl lg:text-4xl font-semibold ">Services Details</h2>

            </div>
            <div className="flex items-center justify-center my-8">
                <p className="w-20 md:w-36 bg-[#7c60ff] h-2 rounded-s-xl"></p>
                <h2 className="text-xl mx-2 uppercase md:text-3xl lg:text-4xl font-semibold">{service?.title}</h2>
                <p className="w-20 md:w-36 bg-[#7c60ff] h-2 rounded-e-xl"></p>
            </div>
            <ServiceDetails service={service}></ServiceDetails>
        </div>
    );
};

export default Service;