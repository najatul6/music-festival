import { Link } from "react-router-dom";
import getGallery from "../../Shared/hook/getGallery";
import GalleryCard from "./GalleryCard/GalleryCard";

const Gallery = () => {
    const [pictures] = getGallery();
    return (
        <div>
            {
                pictures?.length > 12 ?
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                            {pictures?.slice(0, 12).map(picture => <GalleryCard key={picture.id} pictureItem={picture}></GalleryCard>)}
                        </div>
                        <Link className="flex justify-center my-4">
                            <button className="py-5 px-16 text-xl bg-[#7c60ff] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#7c60ff]">Show More</button>
                        </Link>
                    </div>
                    : ''

            }
        </div>
    );
};

export default Gallery;