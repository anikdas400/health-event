import { useLoaderData } from "react-router-dom";
import Banner from "../share/Banner";
import Footer from "../share/Footer";
import Navbar from "../share/Navbar";
import BlogCard from "./BlogCard";


const Home = () => {
    const blogs = useLoaderData()
    console.log(blogs)
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            {/* service container */}
            <h2 className="text-4xl text-center mt-7 font-bold">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5 mb-3">
                {
                    blogs.map(blog=><BlogCard key={blog.id} blogs={blog}></BlogCard>)
                }
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;