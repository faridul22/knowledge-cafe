import React from 'react';
import './BookMarkItem.css'
const BookMarkItem = (props) => {
    console.log(props.bookMark)
    return (
        <div className='bookMark-item'>
            <h4>{props.bookMark}</h4>
        </div>
    );
};

export default BookMarkItem;