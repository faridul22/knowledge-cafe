import React from 'react';
import './SelectedBlog.css'
import BookMarkItem from '../BookMarkItem/BookMarkItem';
const SelectedBlog = (props) => {
    const bookMarks = props.bookMarks;

    return (
        <div className='selectedBlog-container'>
            <h5 className='total-bookMark'>Spent time on read : {props.time} min</h5>
            <h4>Bookmarked Blogs : {bookMarks.length}</h4>
            <div>
                {
                    bookMarks.map((bookMark, i) => <BookMarkItem
                        key={i}
                        bookMark={bookMark}
                    ></BookMarkItem>)
                }
            </div>
        </div>
    );
};

export default SelectedBlog;