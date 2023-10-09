
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const TeamCard = ({ member }) => {
    useEffect(()=>{
        Aos.init()
    },[])
    const { description, position, image, name } = member
    return (
        <div data-aos="zoom-in">


            <div className="relative flex w-full max-w-[48rem] flex-row  drop-shadow-md  bg-orange-50 rounded-lg bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden  rounded-lg rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-3">
                    
                <h1 className="text-2xl font-bold my-3 ">{name}</h1>
                <p className="text-lx font-medium text-orange-500">{position}</p>
                <p className="text-base font-normal text-gray-500 leading-7 my-3">{description.slice(0,100)}</p>
                <div className="flex justify-center gap-5 my-3">
                    <FaFacebookF className="text-3xl cursor-pointer p-1 text-white rounded-full bg-orange-500"></FaFacebookF>
                    <AiFillInstagram className="text-3xl p-1 cursor-pointer text-white rounded-full bg-orange-500"></AiFillInstagram>
                    <AiFillLinkedin className="text-3xl p-1 cursor-pointer text-white rounded-full bg-orange-500"></AiFillLinkedin>
                    <AiOutlineTwitter className="text-3xl p-1 cursor-pointer text-white rounded-full bg-orange-500"></AiOutlineTwitter>
                </div>
                    
                </div>
            </div>

           
        </div>
    );
};

export default TeamCard;