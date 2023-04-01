import React from 'react';
import './BookMarkItem.css'
const BookMarkItem = ({ bookMark }) => {
    return (
        <div className='bookMark-item'>
            <h4>{bookMark}</h4>
        </div>
    );
};

export default BookMarkItem;