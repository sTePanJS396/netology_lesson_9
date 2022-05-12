import React from 'react';
import { Context } from '../App';
import { useNavigate } from "react-router-dom";

const EditionsPost = () => {
    const [value, setValue] = React.useState('');
    const { post } = React.useContext(Context);
    const pathId = window.location.pathname.split('/editpost/')[1];
    const navigate = useNavigate();

    React.useEffect(() => {
        setValue(post.filter(obj => obj.id === Number(pathId))[0]?.content)
    }, [])
    return (
        <div className='editpost'>
            <div className='editpost__header'>
                <h1 className='create-post__title'>Редактировать пост</h1>
                <span 
                    className='create-post__cancel'
                    onClick={() => {
                        window.localStorage.clear()
                        navigate(`/posts/${pathId}`)
                    }}
                >Отмена</span>
            </div>
            <textarea
                className='create-post__textarea' 
                rows="10"
                name='textarea' 
                cols="45"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></textarea>
            <button 
                className='create-post__button' 
                onClick={() => { 
                    window.confirm('Сохранить изменения?') && 
                    fetch('http://localhost:7777/posts', {
                        method: 'POST',  
                        headers: {'Content-Type': 'application/json'}, 
                        body: JSON.stringify({id: Number(pathId), content: value})
                    })
                    setTimeout(() => {
                        navigate('/')
                    }, 1000);
                }}
            >Сохранить</button>
        </div>
    )
}

export default EditionsPost