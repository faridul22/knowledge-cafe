import React from 'react';
import './SelectedBlog.css'
import BookMarkItem from '../BookMarkItem/BookMarkItem';
const SelectedBlog = (props) => {
    const bookMarks = props.bookMarks;

    return (
        <div className='selectedBlog-container'>
            <h5 className='total-bookMark'>Spent time on read : {props.time} min</h5>
            <h4>Bookmarked Blogs : { }</h4>
            <div>
                {
                    bookMarks.map(bookMark => <BookMarkItem
                        bookMark={bookMark}
                    ></BookMarkItem>)
                }
            </div>
        </div>
    );
};

export default SelectedBlog;