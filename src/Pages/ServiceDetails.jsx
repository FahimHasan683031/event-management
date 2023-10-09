import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const {id}= useParams();
    const allServices = useLoaderData()
    const service = allServices?.find(item => item.id == id);
    const {price,description,image,name} = service;
    return (
        <div className="max-w-screen-lg mt-10 mx-auto">
            <img src={image} className="w-full h-[60vh]" alt="" />
            <h1 className="text-4xl font-bold mt-5 ">{name}</h1>
            <p className="text-xl font-medium text-slate-600 my-4 leading-10">{description}</p>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Price: {price}$</h2>
            <button className="mb-7 px-3 py-2 text-white rounded-md bg-orange-500 text-lg font-medium">Book Now</button>

        </div>
    );
};

export default ServiceDetails;