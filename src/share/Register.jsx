import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const[registerError,setRegisterError]= useState('')
    const[success,setSuccess]=useState('')

    const {createUser} = useContext(AuthContext)
    


    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)

        // reset error and success
        setRegisterError('')
        setSuccess('')

        

        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters')
            return;
        }
        
        
        // create user in firebase
        createUser(email,password)
        .then(Result=>{
            console.log(Result.user)
            setSuccess('User created successfully')

            toast('You have been successfully Register')
        })
        .catch(error=>{
            console.error(error);
            setRegisterError(error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-7">
            <h2 className="text-3xl text-center font-semibold">Please Register </h2>
            <form onSubmit={handleRegister} className="lg:w-1/2 md:w-1/2 sm:w-1/2 w-1/2 mx-auto shadow-lg p-3 rounded-lg">

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
                    <button className="btn btn-primary" type="submit">Register</button>
                </div>

            </form>
            {
                registerError && <p className="text-red-600 text-lg font-semibold  text-center mt-2">{registerError}</p>
            }
            {
                success && <p className="text-lime-600 text-lg font-semibold text-center mt-2">{success}</p>
            }
            <p className="text-center mt-4">Already have account?please<Link to="/login"><button className="btn btn-ghost font-bold text-lime-700">Login</button></Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;