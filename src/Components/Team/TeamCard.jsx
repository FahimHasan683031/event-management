
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram,AiFillLinkedin,AiOutlineTwitter} from "react-icons/ai";
const TeamCard = ({member}) => {
    const {description,position,image,name}=member
    return (
        <div>
            <div className="text-center p-5 drop-shadow-lg bg-gray-100 mb-4">
                <img className="h-44 w-44 mx-auto rounded-full" src={image} alt="" />
                <h1 className="text-2xl font-bold my-3 ">{name}</h1>
                <p className="text-lx font-medium text-orange-500">{position}</p>
                <p className="text-base font-normal text-gray-500 leading-7 my-3">{description.slice(0,100)}</p>
                <div className="flex justify-center gap-5 my-3">
                    <FaFacebookF className="text-3xl p-1 text-white rounded-full bg-orange-500"></FaFacebookF>
                    <AiFillInstagram className="text-3xl p-1 text-white rounded-full bg-orange-500"></AiFillInstagram>
                    <AiFillLinkedin className="text-3xl p-1 text-white rounded-full bg-orange-500"></AiFillLinkedin>
                    <AiOutlineTwitter className="text-3xl p-1 text-white rounded-full bg-orange-500"></AiOutlineTwitter>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;