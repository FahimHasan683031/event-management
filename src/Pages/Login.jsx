import { useContext } from "react";
import { authContext } from "../Context/AuthInfo";
import { Link } from "react-router-dom";

const Login = () => {
 const {signIn} = useContext(authContext)
    
    const loginHandle = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        signIn(email,password)
        .then()
        .catch(error => console.log(error.message))
    }
    return (
        <div className="">
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full md:w-4/6 lg:w-1/3">
               
                <div className=" flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                    <form onSubmit={loginHandle} className=" px-6 pt-4 pb-6 text-sm ">
                    <h1 className="text-4xl font-bold text-center mb-4">Login now</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className=" py-[10px] px-3 border drop-shadow  " required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className=" py-[10px] px-3 border drop-shadow  " required />
                        </div>
                        <div className="mt-3">
                            <p>New user? Please <Link className="text-blue-700" to='/register'>Register</Link></p>
                        </div>
                        <div className="form-control mt-4">
                            <button  type="submit" className="py-3 text-white font-bold bg-[#ffa801]">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Login;