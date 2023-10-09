import { useEffect, useState } from 'react';

const getServices = () => {
    const [service, setServices] = useState();

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return [service]
};

export default getServices;