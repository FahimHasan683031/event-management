import { useContext, useState } from "react";
import { authContext } from "../Context/AuthInfo";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle} from "react-icons/fc";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
    const {createUser,googleSignIn}= useContext(authContext)
    const [pasErrorMsg, setpasErrMsg]=useState('')
    const [passwordShow, setPasswordShow]=useState(false)

    const navigate = useNavigate()

    const registerHandle = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const url = e.target.url.value;
        const password = e.target.password.value;

        if(password.length < 6){
            setpasErrMsg("Password must be up to 6 character")
            return
        }
        if (!/[A-Z]/.test(password)){
            setpasErrMsg("Password must add a Capital later")
            return
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            setpasErrMsg('password must have a spatial character')
            return
        }
        setpasErrMsg('')

        createUser(email,password)
        .then((res)=>{
            toast.success('Successfully Register!')

            // update user 
            updateProfile(res.user, {
                displayName:name, photoURL:url
            })
            .then()
            .catch(error => console.log(error.message))
            navigate('/login')
        })
        .catch(() =>{
            toast.error("This email already used.")
        })

        
        
    }

    const googleSigninHandle =()=>{
        googleSignIn()
        .then(()=>{
            navigate('/')
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full md:w-4/6 lg:w-1/3">
                   
                    <div className=" flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                        <form onSubmit={registerHandle} className=" px-6 pt-4 pb-6 text-sm ">
                        <h1 className="text-4xl text-orange-500 pt-3 font-bold text-center mb-4">Register now</h1>
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

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={passwordShow ? 'text' : 'password'} name="password" placeholder="password" className=" py-[10px] px-3 border drop-shadow  " required />
                                <span className="text-xl absolute right-3 top-12" onClick={()=>setPasswordShow(!passwordShow)}>
                                    {
                                        passwordShow ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                                    }
                                </span>
                            </div>
                            {
                                pasErrorMsg && <p className="text-red-600 mt-2">{pasErrorMsg}</p>
                            }
                            <div className="mt-3">
                            <p>Already have account ? Please <Link className="text-blue-700" to='/login'>Login</Link></p>
                        </div>
                            <div className="form-control mt-4">
                                <button  type="submit" className="py-3 text-white font-bold bg-orange-500">Register</button>
                            </div>
                            <div className="text-center border-t border-slate-600 my-6 pt-3">
                                <FcGoogle onClick={googleSigninHandle } className="text-3xl cursor-pointer mx-auto"></FcGoogle>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;