import Services from "../Components/Services";


const ServicesPage = () => {
    return (
        <div>
             <div className="bg-[url('https://cloudinary.hbs.edu/hbsit/image/upload/s--5YPcmM0m--/f_auto,c_fill,h_375,w_750,/v20200101/681DA2E060F4CEE9AA1C606DE6117A9E.jpg')] bg-no-repeat bg-cover bg-center py-12 relative">
                <div className="w-full h-full absolute top-0 left-0 bg-[#050505c5]"></div>
                <div className="z-30 relative  h-full max-w-screen-xl mx-auto px-6 text-center lg:text-left gap-10">
                    <div >
                        <h1 className="text-5xl text-center py-12 text-orange-500 font-bold leading-[60px]">OUR SERVICES<span className="text-white">!</span>  </h1>
                        
                    </div>
                    

                </div>

            </div>
            <Services></Services>
        </div>
    );
};

export default ServicesPage;