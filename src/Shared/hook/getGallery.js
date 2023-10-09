import { useEffect, useState } from "react";

const getGallery = () => {
    const [pictures, setPictures] = useState();

    useEffect(() => {
        fetch('/photos.json')
            .then(res => res.json())
            .then(data => setPictures(data))
    }, []);

    return[pictures]
};

export default getGallery;