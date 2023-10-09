import { Link } from "react-router-dom";
import getServices from "../../../Shared/hook/getServices";
import MyServicesCards from "./MyServicesCard";

const OurServices = () => {
    const [setService] = getServices()

    return (
        <div>
            <div>
                <div className="flex items-center justify-center my-8">
                    <p className="w-20 md:w-36 bg-[#7c60ff] h-2 rounded-s-xl"></p>
                    <h2 className="text-xl mx-2 uppercase md:text-3xl lg:text-4xl font-semibold">Our Services</h2>
                    <p className="w-20 md:w-36 bg-[#7c60ff] h-2 rounded-e-xl"></p>
                </div>

                {
                    setService?.length > 6 ?
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                                {
                                    setService?.slice(0, 6).map(card => <MyServicesCards key={card.id} cards={card}></MyServicesCards>)
                                }
                            </div>
                            <Link to='/services' className="flex justify-center my-4">
                                <button className="py-5 px-16 text-xl bg-[#7c60ff] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#7c60ff]">Show All</button>
                            </Link>
                        </div>
                        :
                        ''
                }
            </div>

        </div>
    );
};

export default OurServices;