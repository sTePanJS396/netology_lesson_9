import React from 'react';

const Post = ({ text }) => {
    return (
        <div className='post'>
            <span className='post__title'>Аноним</span>
            <p className='post__content'>{text}</p>
        </div>
    )
}

export default Post