import BasicRating from "./Reating";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const ReviewCard = ({review}) => {
    useEffect(()=>{
        Aos.init()
    },[])
    const {comment,rating,image,name}=review
    return (
        <div data-aos="zoom-in" className="grid mb-10 grid-cols-5 gap-4">
           <div className="border-r-2 border-gray-200 col-span-2 text-center">
            <img className="w-16 h-16 mx-auto rounded-full my-3" src={image} alt="" />
            <h1 className="text-lg font-medium">{name}</h1>
            </div>
            <div className="col-span-3">
                <BasicRating rating={rating}></BasicRating>
                <p className="text-sm font-normal leading-6 text-gray-500">{comment}</p>
            </div> 
        </div>
    );
};

export default ReviewCard;