import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {

    const {price,description,image,name,id}=service
    return (
        <div className="relative mt-7 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 drop-shadow-lg">
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
                    {description.slice(0,90)+'...'}
                </p>
                <h2 className="text-xl font font-bold text-orange-400 my-4">Price: {price}$</h2>
                <Link to={`/${id}`} className="w-full block py-3 text-base font-bold text-white text-center rounded-full bg-orange-500">View details</Link>
            </div>
            
                
            
        </div>
    );
};

export default ServiceCard;