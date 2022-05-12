import React from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from '../App';

const Fullpost = () => {
    const context = React.useContext(Context);
    const navigate = useNavigate();
    const pathId = window.location.pathname.split('/news/')[1];
    const currentPost = context.post.postList.filter(obj => obj.id === pathId)[0];

    React.useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            navigate('/');
        }
    }, []);

    return (
        <div className='fullpost'>
            <img className='fullpost__image' src={currentPost?.image} alt='Картинка'/>
            <h2 className='fullpost__title'>{currentPost?.title}</h2>
            <span className='fullpost__content'>{currentPost?.content}</span>
        </div>
    )
}

export default Fullpost