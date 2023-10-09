import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";


const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className="bg-[url('https://revenuesandprofits.com/wp-content/uploads/2020/12/Corporate-Event-1.jpg')] bg-no-repeat bg-cover bg-center py-12 relative">
                <div className="w-full h-full absolute top-0 left-0 bg-[#050505cc]"></div>
                <div className="z-30 relative  h-full max-w-screen-xl mx-auto px-6 text-center lg:text-left gap-10">
                    <div >
                        <h1 className="text-5xl text-center py-12 text-orange-500 font-bold leading-[60px]">OUR BLOGS<span className="text-white">!</span>  </h1>
                        
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