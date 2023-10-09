import { Link } from "react-router-dom";


const BlogCard = ({ blogs }) => {
    const { id, title, price, image, name, description } = blogs
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="health" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <h3 className="text-xl">Price: $<span className="text-lime-600 font-semibold">{price}</span></h3>
                <div className="card-actions justify-end">
                    <Link to={`/blogs/${id}`}>
                    <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;