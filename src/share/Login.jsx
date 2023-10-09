import { Link } from "react-router-dom";

const Login = () => {
    
    return (
        <div>
            <div className="mt-7">
            <h2 className="text-3xl text-center font-semibold">Please Login </h2>
            <form className="lg:w-1/2 md:w-1/2 sm:w-1/2 w-1/2 mx-auto shadow-lg p-3 rounded-lg">

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
            <p className="text-center mt-4">New here? Please<Link to="/register"><button className="btn btn-ghost font-bold">Register</button></Link></p>
            </div>
        </div>
    );
};

export default Login;