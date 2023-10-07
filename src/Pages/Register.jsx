import { useContext } from "react";
import { authContext } from "../Context/AuthInfo";

const Register = () => {
    const {user,createUser}= useContext(authContext)
    console.log(user)

    const registerHandle = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email,password)
        .then(res=>console.log(res.user))
        .catch(error =>console.log(error.message))
        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-5/6 md:w-4/6 lg:w-1/3">
                   
                    <div className=" flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                        <form onSubmit={registerHandle} className=" px-6 pt-4 pb-6 text-sm ">
                        <h1 className="text-4xl font-bold text-center mb-4">Register now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className=" py-[10px] px-3 border drop-shadow  " required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" placeholder="Photo Url" name="url" className=" py-[10px] px-3 border drop-shadow  "  />
                            </div>
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
                            <div className="form-control mt-4">
                                <button  type="submit" className="py-3 text-white font-bold btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;