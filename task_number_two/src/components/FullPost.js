import React from 'react'
import Post from './Post';
import { useNavigate } from "react-router-dom";
import { Context } from '../App';
// Показал два способа как вытащить необходимую информацию: первый способ через localStorage, второй способ - через React.Context
// Думаю есть способы интереснее и красивее, или при отображении карточки поста лучше использовать запрос на сервер (хотелось бы услышать Ваше мнение)
const FullPost = () => {
    const navigate = useNavigate();
    const pathId = window.location.pathname.split('/posts/')[1];
    // const currentPost = JSON.parse(window.localStorage.getItem('postList')).filter(obj => obj.id === Number(pathId))[0]; //- Способ №1
    const context = React.useContext(Context)

    React.useEffect(() => {
        if (isNaN(pathId)) {
            navigate('/')
        }
    }, [pathId]);


    return (
        <div className='full-post'>
            <h1>Просмотр и изменение поста</h1>
            {/* <Post id={currentPost.id} text={currentPost.content}/> */} {/*Способ №1*/}
            <Post 
                id={context.post.filter(obj => obj.id === Number(pathId))[0].id} 
                text={context.post.filter(obj => obj.id === Number(pathId))[0].content}
            /> {/*Способ №2*/}
            <button
                onClick={async () => {
                    window.confirm('Удалить запись?') &&
                    fetch(`http://localhost:7777/posts/${pathId}`, {method: 'DELETE'});
                    setTimeout(() => {
                        navigate('/')
                    }, 500)
                }}
            >Удалить</button>
            <button
                onClick={() => navigate(`/posts/editpost/${pathId}`)}
            >Изменить</button>
        </div>
    )
}

export default FullPost