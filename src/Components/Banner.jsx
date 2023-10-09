import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Banner = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div data-aos="zoom-in" className="bg-[url('https://revenuesandprofits.com/wp-content/uploads/2020/12/Corporate-Event-1.jpg')] bg-no-repeat bg-cover bg-center py-12 relative">
            <div className="w-full h-full absolute top-0 left-0 bg-[#050505cc]"></div>
            <div data-aos="fade-left" className="z-30 relative grid grid-cols-1 lg:grid-cols-2 items-center h-full max-w-screen-xl mx-auto px-6 text-center lg:text-left gap-10">
                <div >
                    <h1 className="text-5xl text-orange-500 font-bold leading-[60px]">Welcome<span className="text-white">!</span>  </h1>
                    <h2 className="text-4xl font-bold text-white my-3"> Excellent Events World.</h2>
                    <p className="text-base leading-7 mb-6 font-medium text-gray-300">Elevate corporate gatherings with our expert touch. Impeccable planning and flawless execution create extraordinary experiences that reflect your company's vision. Join us in crafting corporate success stories.</p>
                    <Link className="px-3 py-2 bg-orange-600 text-white font-medium rounded" to='/services'>Services</Link>
                </div>
                <div data-aos="fade-right" >
                    <div className="grid gap-3 bg-white p-3   grid-cols-2 ">
                    
                        <img className="w-full h-full" src="https://i.ibb.co/n1f9Jcp/photo-1560439514-4e9645039924.jpg" alt="" />
                        

                        <img className="w-full h-full" src="https://i.ibb.co/kSQrw99/photo-1511578314322-379afb476865.jpg" alt="" />

                        <img className="w-full h-full" src="https://i.ibb.co/txsWbTT/photo-1505373877841-8d25f7d46678.jpg" alt="" />

                        <img className="w-full h-full" src="https://i.ibb.co/Jzh4b13/photo-1540575467063-178a50c2df87.jpg" alt="" />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;