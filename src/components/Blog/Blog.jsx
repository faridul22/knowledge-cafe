import React from 'react';
import './Blog.css'
const Blog = (props) => {
    console.log(props.blog)
    const { blogCoverImage, authorImage, authorName, publishDate, readTime, blogTitle } = props.blog;
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
                <small>{readTime} min read</small>
            </div>
            <h2>{blogTitle}</h2>
            <p><small>#beginners #programming</small></p>
            <br />
            <a href=""><u>Mark as read</u></a>
            <hr />
        </div>
    );
};

export default Blog;