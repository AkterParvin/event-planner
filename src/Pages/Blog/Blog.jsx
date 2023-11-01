import { useLoaderData } from "react-router-dom";
import Blogs from "./Blogs";



const Blog = () => {
    const blogs = useLoaderData();
    console.log(blogs);
    // const { picture, title, category, description } = data;
  
    return (
            
        <div>
            <h2 className="text-2xl font-bold text-center mt-8">Read all our blogs</h2>
            <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    blogs.map(blog => <Blogs key={blog.id} blog={blog}></Blogs>)
                }
            </div>
        </div>
       
    );
};


export default Blog;