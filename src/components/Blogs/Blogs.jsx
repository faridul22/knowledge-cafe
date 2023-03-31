import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SelectedBlog from '../SelectedBlog/SelectedBlog';
import './Blogs.css'
const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div className='main-container'>
            <div className="blogs-container">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
            <div className="bookmark-container">
                <h5>Selected blogs {blogs.length}</h5>
            </div>
        </div>
    );
};

export default Blogs;