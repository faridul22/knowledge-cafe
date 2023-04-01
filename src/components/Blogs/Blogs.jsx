import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Blog from '../Blog/Blog';
import SelectedBlog from '../SelectedBlog/SelectedBlog';
import './Blogs.css'
const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    const [bookMarks, setBookMarks] = useState([]);

    const [time, setTime] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const bookMarkEventHandler = (blogTitle) => {
        const newBookMark = [...bookMarks, blogTitle,];
        if (bookMarks.includes(blogTitle)) {
            toast("This blog is already added");
        }
        else {
            setBookMarks(newBookMark)
        }

    }

    let sum = 0;
    const readingTimeEventHandler = (readTime) => {
        sum = readTime + time;
        setTime(sum)
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
                <SelectedBlog
                    bookMarks={bookMarks}
                    time={time}
                ></SelectedBlog>
            </div>
        </div>
    );
};

export default Blogs;