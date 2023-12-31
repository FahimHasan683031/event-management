import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Aos from "aos";
import "aos/dist/aos.css"


const Reviews = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div data-aos="fade-up" className=" bg-orange-50">
        <div className="max-w-screen-xl mx-auto px-4 my-28 ">
            <div className="text-center pt-12 mb-20">
                <p className="text-base font-medium text-center   text-orange-500">CLIENTS REVIEWS</p>
                <h1 className="text-center text-4xl font-bold my-4 ">Our Happy Clients</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    reviews?.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Reviews;