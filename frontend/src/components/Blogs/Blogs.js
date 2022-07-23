import React from "react";
import {getAllBlogs} from '../../Api/blogsApi.js';
import { Link } from "react-router-dom";

const Blogs = () => {

    const allBlogs = getAllBlogs();

    return (
        <div className="blogs_container">
            <h1>BLOGS</h1>
            <div className="webinar-grid">
                {
                    allBlogs.map((blog) => (
                        <a href="" className="link-block">
                            <div className="jumbotron left-right-jumbotron-block">
                                <div className="webinar-image-container">
                                    <img src={blog.images[0]} />
                                </div>
                                <h1 className="dundas-blue-text-long">
                                    {blog.title}
                                </h1>
                                <div className="webinar-content-box">
                                    <p>{blog.description}</p>
                                    <Link to={`/blog/${blog.id}`}>
                                        <span 
                                            className="dundas-blue-link"
                                        >
                                            View webinar &gt;
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;
