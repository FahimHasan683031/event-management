
import { BsFillCalendarRangeFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
const SingleBlog = ({ blog }) => {
    useEffect(()=>{
        Aos.init()
    },[])
    const { description, auth_image, auth_name, date, image, title } = blog
    return (
        <div data-aos="zoom-in" className="mb-5">
            <div className="relative  flex w-full max-w-[26rem] flex-col rounded-xl bg-white  text-gray-700 drop-shadow-lg ">
                <div className="relative  overflow-hidden  bg-blue-gray-500 text-white   ">
                    <img
                        src={image}
                        className="w-full h-60 rounded-t "
                        alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 rounded-t absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                        className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-orange-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6"
                            >
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                            </svg>
                        </span>
                    </button>
                </div>

                <div className="p-5">

                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <img className="w-9   h-9 rounded-full drop-shadow-lg" src={auth_image} alt="" />
                            <p className="text-[12px] font-bold text-[#1d1d1de1] ">{auth_name}</p>
                        </div>
                        <div className="flex gap-2">
                            <BsFillCalendarRangeFill className="text-lg text-orange-500"></BsFillCalendarRangeFill>
                            <p className="text-base  text-orange-500">{date}</p>
                        </div>
                        
                    </div>
                    

                    <div className="mb-3   justify-between">
                        <h5 className="block text-[#1d1d1de1] text-xl font-bold leading-snug tracking-normal  antialiased">
                            {title}
                        </h5>

                    </div>
                    <p className="block font-sans text-base font-medium leading-relaxed text-gray-500 antialiased">
                        {description +'...'}
                    </p>

                </div>
                <div className="p-6 pt-3">
                    <button
                        className="px-3 py-2 bg-orange-500 text-white rounded-md"
                        type="button"
                        data-ripple-light="true"
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;