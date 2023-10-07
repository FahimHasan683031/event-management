

const WhyChoseUs = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-20 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <p className="text-lg font-medium text-orange-400 py-3">Our advantages</p>
                <h1 className="text-4xl font-bold text-[#242424] leading-[50px]">Why do people trust <br /> our company?</h1>
                <p className="text-base font-medium text-gray-500 leading-8 my-3">We will be happy to take on the implementation of a project of any complexity. We guarantee the quality of our work and have many <br />  years of experience in the field of repair.</p>
                <button className="px-3 py-2 text-white font-medium bg-orange-400 my-3">View More</button>
            </div>
            <div className="grid grid-cols-2 gap-10">
                <div className="p-4 border-[4px] border-[#edeae8]">
                    <h1 className="text-3xl font-bold text-orange-400 my-3">01.</h1>
                    <h2 className="text-2xl font-bold text-[#242424] my-3">Versatility</h2>
                    <p className="text-base font-normal text-gray-500 leading-7">We have a master for every types  of events problem</p>
                </div>
                <div className="p-4 border-[4px] border-[#edeae8]">
                    <h1 className="text-3xl font-bold text-orange-400 my-3">02.</h1>
                    <h2 className="text-2xl font-bold text-[#242424] my-3">Goodwill</h2>
                    <p className="text-base font-normal text-gray-500 leading-7">Even if your less into design and more into content</p>
                </div>
                <div className="p-4 border-[4px] border-[#edeae8]">
                    <h1 className="text-3xl font-bold text-orange-400 my-3">03.</h1>
                    <h2 className="text-2xl font-bold text-[#242424] my-3">Professionalism</h2>
                    <p className="text-base font-normal text-gray-500 leading-7">You made all the required mock ups for layout</p>
                </div>
                <div className="p-4 border-[4px] border-[#edeae8]">
                    <h1 className="text-3xl font-bold text-orange-400 my-3">04.</h1>
                    <h2 className="text-2xl font-bold text-[#242424] my-3">Loyalty</h2>
                    <p className="text-base font-normal text-gray-500 leading-7">Management system, got a license for it or adapted</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoseUs;