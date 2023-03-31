import React from 'react';
import './SelectedBlog.css'
const SelectedBlog = () => {
    return (
        <div className='selectedBlog-container'>
            <h5 className='total-bookMark'>Spent time on read : { } min</h5>
            <h4>Bookmarked Blogs : { }</h4>
            <div className='bookMark-item'>
                <h4></h4>
            </div>
        </div>
    );
};

export default SelectedBlog;