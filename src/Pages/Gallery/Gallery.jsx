import { Link } from "react-router-dom";
import getGallery from "../../Shared/hook/getGallery";
import GalleryCard from "./GalleryCard/GalleryCard";
import { useState } from "react";

const Gallery = () => {
    const [pictures] = getGallery();
    const [isShow, setIsShow] = useState(false)
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                {
                    isShow?
                    pictures?.map(picture => <GalleryCard key={picture.id} pictureItem={picture}></GalleryCard>)
                    :
                    pictures?.slice(0, 12).map(picture => <GalleryCard key={picture.id} pictureItem={picture}></GalleryCard>)
                }
            </div>
            <Link className="flex justify-center my-4">
                <button onClick={()=> setIsShow(!isShow)} className="py-5 px-16 text-xl bg-[#7c60ff] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#7c60ff]">
                    {
                        isShow? "Show Less" : "Show More"
                    }
                </button>
            </Link>

        </div>
    );
};

export default Gallery;