import { useEffect } from "react";
import TeamMember from "../Components/Team/TeamMember";
import WhyChoseUs from "../Components/WhyChoseUs";
import WorkingProcess from "../Components/WorkingProcess";
import Aos from "aos";
import "aos/dist/aos.css"


const AboutUs = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div>
            <div data-aos="zoom-in" className="bg-[url('https://www.brinknews.com/wp-content/uploads/2019/12/shutterstock_1031044285.jpg')] bg-no-repeat bg-cover bg-center py-12 -mb-20 relative">
                <div className="w-full h-full absolute top-0 left-0 bg-[#050505c0]"></div>
                <div className="z-30 relative   h-full max-w-screen-xl mx-auto px-6 text-center lg:text-left gap-10">
                    <div >
                        <h1 className="text-5xl text-center py-12 text-orange-500 font-bold leading-[60px]">ABOUT US<span className="text-white">!</span>  </h1>
                        
                    </div>
                    

                </div>

            </div>
            <TeamMember></TeamMember>
            <WhyChoseUs></WhyChoseUs>
            <WorkingProcess></WorkingProcess>
        </div>
    );
};

export default AboutUs;