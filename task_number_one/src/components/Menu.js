import React from 'react'
import { NavLink } from "react-router-dom";

const Menu = () => {
    const ArrayNav = [
        {id: 0, path: '/', text: 'Главная'},
        {id: 1, path: '/drift', text: 'Дрифт-такси'}, 
        {id: 2, path: '/timeattack', text: 'Time Attack'}, 
        {id: 3, path: '/forza', text: 'Forza Karting'}]
    return (
        <nav className="menu">
            {ArrayNav.map(el => (
                <NavLink 
                    key={el.id} 
                    className={({isActive}) => isActive ? 'menu__item menu__item-active' : 'menu__item'} 
                    to={el.path}
                    >
                    {el.text}
                </NavLink>
            ))}
        </nav>
    )
}

export default Menu