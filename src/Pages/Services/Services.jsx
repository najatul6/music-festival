import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard/ServiceCard";


const Services = () => {
    const services = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
            {
                services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;