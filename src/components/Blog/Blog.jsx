import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css'
const Blog = (props) => {
    // console.log(props)
    const { blogCoverImage, authorImage, authorName, publishDate, readTime, blogTitle } = props.blog;
    const bookMarkEventHandler = props.bookMarkEventHandler;
    const readingTimeEventHandler = props.readingTimeEventHandler;
    return (
        <div className='single-blog'>
            <img src={blogCoverImage} alt="" />
            <div className="blog-info">
                <div className='author-info'>
                    <img src={authorImage} alt="" />
                    <div>
                        <h6>{authorName}</h6>
                        <small>{publishDate}</small>
                    </div>
                </div>
                <div>
                    <small>
                        {readTime} min read <span className='bookMark-btn' onClick={() => bookMarkEventHandler(blogTitle)}>
                            <FontAwesomeIcon icon={faBookmark} /></span>
                    </small>
                </div>
            </div>
            <h2>{blogTitle}</h2>
            <p><small>#beginners #programming</small></p>

            <p className='readMark-btn' onClick={() => readingTimeEventHandler(readTime)}><u>Mark as read</u></p>
            <hr />
        </div>
    );
};

export default Blog;