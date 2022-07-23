import React from 'react';
import { getBlog } from '../../Api/blogsApi';
import { useParams } from 'react-router-dom';

const BlogPage = () => {

    const params = useParams();
    const id = params.id;

    const blog = getBlog(id);

    return (
        <div>
            {blog.images[0]}
        </div>
    )
};

export default BlogPage;