import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-4xl text-center mt-28 font-semibold">
            <h2> <span className="text-red-700 font-bold">404</span> Error Page</h2>
            <h3 className="mt-7">Sorry! This Page Does not Exist</h3>
            <Link to='/'><button className="btn btn-warning mt-10">Go Back</button></Link>
        </div>
    );
};

export default Error;