import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";


const Reviews = () => {
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto px-4 my-32 ">
            <div className="text-center mb-20">
                <p className="text-base font-medium text-center mt-32  text-orange-500">CLIENTS REVIEWS</p>
                <h1 className="text-center text-4xl font-bold my-4 ">Our Happy Clients</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    reviews?.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;