import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import Aos from "aos";
import "aos/dist/aos.css"


const Blog = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div data-aos="zoom-in" className="bg-[url('https://www.financepoor.com/wp-content/uploads/2021/04/serious-games-and-corporate-training-roi.jpg')] bg-no-repeat bg-cover bg-center py-12 relative">
                <div className="w-full h-full absolute top-0 left-0 bg-[#050505cc]"></div>
                <div className="z-30 relative  h-full max-w-screen-xl mx-auto px-6 text-center lg:text-left gap-10">
                    <div >
                        <h1 className="text-5xl text-center py-10 text-orange-500 font-bold leading-[60px]">OUR BLOGS<span className="text-white">!</span>  </h1>
                        
                    </div>
                    

                </div>

            </div>
            <div className="grid my-20 grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
                {
                    blogs?.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                }
            </div>
        </div>
    );
};

export default Blog;