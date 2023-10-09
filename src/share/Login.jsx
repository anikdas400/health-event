import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const[success,setSuccess]=useState('')

    // location
    const location = useLocation()
    // console.log(location)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        // reset error
        setLoginError('')
        setSuccess('')

        toast('You have been successfully login')

        

        

        if (password.length < 6) {
            setLoginError('Password should be at least 6 characters')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setLoginError('Do not have use a special character')
            return;
        }
        
        

        // signInUser
        signInUser(email, password)
            .then(Result => {
                console.log(Result.user)
                // navigate after login

                

                navigate(location?.state ? location.state : "/")
                
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-7">
                <h2 className="text-3xl text-center font-semibold">Please Login </h2>
                <form onSubmit={handleLogin} className="lg:w-1/2 md:w-1/2 sm:w-1/2 w-1/2 mx-auto shadow-lg p-3 rounded-lg">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>

                </form>

                {
                loginError && <p className="text-red-600 text-lg font-semibold  text-center mt-2">{loginError}</p>
                }
                {
                success && <p className="text-lime-600 text-lg font-semibold text-center mt-2">{success}</p>
            }
                <p className="text-center mt-4">New here? Please<Link to="/register"><button className="btn btn-ghost font-bold text-lime-600">Register</button></Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;