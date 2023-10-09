import { useEffect, useState } from "react";

const getFeatures = () => {
    const [features, setFeatures] = useState();

    useEffect(() => {
        fetch('/features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, []);

    return[features]
    
};

export default getFeatures;