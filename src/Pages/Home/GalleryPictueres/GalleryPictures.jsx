import { Link } from 'react-router-dom';
import getGallery from '../../../Shared/hook/getGallery';
import GalleryCard from '../../Gallery/GalleryCard/GalleryCard';

const GalleryPictures = () => {
    const [pictures] = getGallery();
    return (
        <div>
            <div className="flex items-center justify-center my-8">
                <p className="w-20 md:w-36 bg-[#7c60ff] h-2 rounded-s-xl"></p>
                <h2 className="text-xl mx-2 uppercase md:text-3xl lg:text-4xl font-semibold">Gallery</h2>
                <p className="w-20 md:w-36 bg-[#7c60ff] h-2 rounded-e-xl"></p>
            </div>
            {
                pictures?.length > 12 ?
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                            {
                                pictures?.slice(0, 12).map(picture => <GalleryCard key={picture.id} pictureItem={picture}></GalleryCard>)
                            }
                        </div>
                        <Link to='/gallery' className="flex justify-center my-4">
                            <button className="py-5 px-16 text-xl bg-[#7c60ff] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#7c60ff]">Show All</button>
                        </Link>
                    </div>
                    :
                    ''
            }
        </div>
    );
};

export default GalleryPictures;