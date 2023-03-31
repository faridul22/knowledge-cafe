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

    const bookMarkEventHandler = (blogTitle) => {
        console.log(blogTitle)
    }

    const readingTimeEventHandler = (readTime) => {
        console.log(readTime)
    }
    return (
        <div className='main-container'>
            <div className="blogs-container">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        bookMarkEventHandler={bookMarkEventHandler}
                        readingTimeEventHandler={readingTimeEventHandler}
                    ></Blog>)
                }
            </div>
            <div className="bookmark-container">
                <SelectedBlog ></SelectedBlog>
            </div>
        </div>
    );
};

export default Blogs;