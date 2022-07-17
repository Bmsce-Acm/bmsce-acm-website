import React from "react";
import IMG1 from '../../Images/img1.jpg';
import IMG2 from '../../Images/img2.png';

const Blogs = () => {

    const allBlogs = [
        {
            title: "How Center6 Empowers their Customers with White Labeled Dundas BI Analyti",
            description: "How Center7 Empowers your Customers with White Labeled",
            images: [
                IMG1, IMG2
            ]
        },
        {
            title: "How Center3 Empowers their Customers with White Labeled Dundas BI Analyti",
            description: "How Center1 Empowers your Customers with White Labeled",
            images: [
                IMG1, IMG2
            ]
        },
        {
            title: "How Center7 Empowers their Customers with White Labeled Dundas BI Analyti",
            description: "How Center7 Empowers your Customers with White Labeled",
            images: [
                IMG1, IMG2
            ]
        }
    ];

    return (
        <div>
            <div class="webinar-grid">
                {
                    allBlogs.map((blog) => (
                        <a href="#" className="link-block">
                            <div class="jumbotron left-right-jumbotron-block">
                                <div class="webinar-image-container">
                                    <img src={IMG1} />
                                </div>
                                <h1 class="dundas-blue-text-long">
                                    {blog.title}
                                </h1>

                                <div class="webinar-content-box">
                                    <p>{blog.description}</p>
                                    <span class="dundas-blue-link">View webinar &gt;</span>
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
