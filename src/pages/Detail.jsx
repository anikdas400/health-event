import { useLoaderData, useParams } from "react-router-dom";


const Detail = () => {
    const blogs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const blog = blogs.find(blog => blog.id === idInt)

    // console.log(id,blogs)
    return (
        <div className="card card-compact w-1/2 mx-auto mt-16 bg-base-100 shadow-xl">
            <figure><img src={blog.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>{blog.description}</p>
                
                <div className="card-actions justify-end">

                   <button className="btn btn-primary text-xl">Price: ${blog.price}</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;