import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const ServiceCard = ({ service }) => {
    useEffect(()=>{
        Aos.init()
    },[])

    const { price, description, image, name, id } = service
    return (
        <div data-aos="zoom-in" className="relative mt-7 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 drop-shadow-lg">
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                <img className="w-full h-[220px] rounded-t-lg"
                    src={image}
                    alt="ui/ux review check"
                />
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {name}
                </h4>
                <p className="mt-3 block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
                    {description.slice(0, 90) + '...'}
                </p>
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font font-bold text-orange-400 my-4">Price: {price}$</h2>
                    <Link to={`/${id}`} className=" px-3 py-2 text-base font-medium text-white text-center rounded-md bg-orange-500">View details</Link>
                </div>

            </div>



        </div>
    );
};

export default ServiceCard;