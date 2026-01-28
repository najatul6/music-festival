// import Gallery from "../Gallery/Gallery";
import Banner from "./Banner/Banner";
import GalleryPictures from "./GalleryPictueres/GalleryPictures";
import Reviews from "./Reviews/Reviews";
import OurServices from "./ourServices/ourServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <hr  className="my-10"/>
            <OurServices></OurServices>
            <hr  className="my-10"/>
            <GalleryPictures></GalleryPictures>
            <hr  className="my-10"/>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;