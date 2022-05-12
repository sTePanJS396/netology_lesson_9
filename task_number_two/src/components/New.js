import React from 'react';
import { useNavigate } from "react-router-dom";

const New = () => {
    const [value, setValue] = React.useState('');
    const navigate = useNavigate();

    React.useEffect(() => {
        if (window.localStorage.getItem('valueInput')) {
            setValue(window.localStorage.getItem('valueInput'))
        }
    }, [])

    React.useEffect(() => {
        window.localStorage.setItem('valueInput', value)
    }, [value])

    return (
        <div className='create-post'>
            <div className='create-post__header'>
                <h1 className='create-post__title'>Создать пост</h1>
                <span 
                    className='create-post__cancel' 
                    onClick={() => {
                        window.localStorage.clear()
                        navigate('/')
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
                placeholder='Контент поста...'
            ></textarea>
            <button 
                className='create-post__button' 
                onClick={async () => {
                    fetch('http://localhost:7777/posts', {
                        method: 'POST',  
                        headers: {'Content-Type': 'application/json'}, 
                        body: JSON.stringify({id: 0, content: value})
                    })
                    setValue('');
                    setTimeout(() => {
                        navigate('/')
                    }, 1000);
                }}
            >Опубликовать</button>
        </div>
    )
}

export default New