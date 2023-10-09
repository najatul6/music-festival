import Banner from "./Banner/Banner";
import Reviews from "./Reviews/Reviews";
import OurServices from "./ourServices/ourServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;