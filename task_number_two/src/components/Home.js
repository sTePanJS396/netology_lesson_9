import React from 'react';
import {  NavLink } from "react-router-dom";
import Post from './Post';
import { Context } from '../App';

const Home = () => {
    const context = React.useContext(Context)
    async function getPost() {
        try {
            fetch('http://localhost:7777/posts', {method: 'GET'}).then(res => res.json()).then(res => {
                context.setPost(res);
                window.localStorage.setItem('postList', JSON.stringify(res))
            })
        } catch (error) {
            alert('Ошибка!');
            console.log(error);
        }
    }

    React.useEffect(() => {
        getPost();
    }, [])

    return (
        <div className='posts-block'>
            <div className='posts__create'>
                <h1>{`Днявка)`}</h1>
                <NavLink to='/posts/new'><button className='create__button'>Создать</button></NavLink>
            </div>
            {context?.post.map(el => (
                <NavLink key={el.id} to={`posts/${el.id}`}><Post text={el.content}/></NavLink>
            ))}
        </div>
    )
}
export default Home