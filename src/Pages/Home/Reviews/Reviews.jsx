import getFeatures from '../../../Shared/hook/getFeatures';
import ReviewCard from './ReviewCard/ReviewCard';

const Reviews = () => {
    const [features] = getFeatures()
    return (
        <div>
            <div className="flex items-center justify-center my-10">
                <p className="w-10 md:w-36 bg-[#7c60ff] h-2 rounded-s-xl"></p>
                <h2 className="text-lg mx-2 uppercase md:text-3xl lg:text-4xl font-semibold">Customer Feedback</h2>
                <p className="w-10 md:w-36 bg-[#7c60ff] h-2 rounded-e-xl"></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    features?.map(review => <ReviewCard key={review.id} reviews={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;