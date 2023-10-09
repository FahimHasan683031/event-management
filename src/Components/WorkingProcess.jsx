import { PiPresentationChartBold} from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { FaHandHoldingDollar} from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const WorkingProcess = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div data-aos="fade-up" className=" my-32 bg-orange-50 py-10">
            <p className="text-base font-medium text-center   text-orange-500">FOR YOUR ADVANCED FEATURES</p>
            <h1 className="font-bold text-4xl text-center mt-4 mb-16">How We Work with Clients</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <div className="text-center ">
                    <div className="flex justify-center ">
                        <span  className=" text-center rounded-tl-[28px] rounded-br-[28px] bg-orange-500 p-4"><PiPresentationChartBold className="text-4xl text-white  "></PiPresentationChartBold></span>
                    </div>

                    <p className="text-xl font-bold my-3">Preparation of a package <br /> of Event</p>
                </div>

                <div className="text-center">
                    <div className="flex justify-center ">
                        <span  className=" text-center rounded-tl-[28px] rounded-br-[28px] bg-orange-500 p-4"><FaUserGraduate className="text-4xl text-white  "></FaUserGraduate></span>
                    </div>

                    <p className="text-xl font-bold my-3">Meeting with a lawyer, signing a <br /> contract</p>
                </div>

                <div className="text-center">
                    <div className="flex justify-center ">
                        <span  className=" text-center  rounded-tl-[28px] rounded-br-[28px] bg-orange-500 p-4"><FaHandHoldingDollar className="text-4xl text-white  "></FaHandHoldingDollar></span>
                    </div>

                    <p className="text-xl font-bold my-3">Terms of payment for the  <br /> performance of work</p>
                </div>

            </div>
        </div>
    );
};

export default WorkingProcess;