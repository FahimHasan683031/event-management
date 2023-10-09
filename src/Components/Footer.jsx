import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram,AiFillLinkedin,AiOutlineTwitter} from "react-icons/ai";
const Footer = () => {
    return (
        <div className="bg-neutral mt-28 ">
            <footer className="footer grid grid-cols-2 lg:grid-cols-4 p-10 max-w-screen-xl mx-auto jus text-neutral-content">
            <nav className="flex justify-center mt-10">
                <div>
                <header className=" font-bold text-3xl my-4 text-orange-500">EVENT SERVICES</header>
                    <div className="flex justify-center gap-5 my-3">
                    <FaFacebookF className="text-3xl p-1 text-white rounded-full bg-orange-500"></FaFacebookF>
                    <AiFillInstagram className="text-3xl p-1 text-white rounded-full bg-orange-500"></AiFillInstagram>
                    <AiFillLinkedin className="text-3xl p-1 text-white rounded-full bg-orange-500"></AiFillLinkedin>
                    <AiOutlineTwitter className="text-3xl p-1 text-white rounded-full bg-orange-500"></AiOutlineTwitter>
                </div>
                </div>
                    
                    
                </nav>
                <nav>
                    <header className="font-bold text-lg text-orange-500">Services</header>
                    <a className="link link-hover">Conferences and Seminars</a>
                    <a className="link link-hover">Trade Shows and Expos</a>
                    <a className="link link-hover">Team Building Workshops</a>
                    <a className="link link-hover">Product Launches</a>
                    <a className="link link-hover">Award Ceremonies</a>
                </nav>
                <nav>
                    <header className="font-bold text-lg text-orange-500">Company</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">About Us</a>
                </nav>
                <nav>
                    <header className="font-bold text-lg text-orange-500">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                
            </footer>
        </div>

    );
};

export default Footer;