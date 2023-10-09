import { useEffect } from "react";
import useDataLoad from "../Hoocks/useDataLoad";
import ServiceCard from "./ServiceCard";
import Aos from "aos";
import "aos/dist/aos.css"

const Services = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    const services = useDataLoad()
    return (
        <div data-aos="fade-up" className="max-w-screen-xl mx-auto px-6 my-16">
            <p className="text-base font-medium text-center mt-32  text-orange-500">FOR YOUR UNIQUE SOLUTIONS</p>
            <h1 className="text-center text-4xl font-bold my-4">We provide such services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
                {
                    services?.map(service => <ServiceCard  key={service.id} service={service} ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;