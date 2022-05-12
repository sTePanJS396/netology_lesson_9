import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Context } from '../App';

const HeaderToolbarLogin = () => {
  const [user, setUset] = React.useState({});
  const navigate = useNavigate();
  const context = React.useContext(Context);
  
  async function fetchingData() {
    try {
      fetch('http://localhost:7070/private/me', {
        method: 'GET',
        headers: {'Authorization': `Bearer ${window.localStorage.getItem('token')}`},
      }).then(res => res.json()).then(res =>{
        setUset(res);
        navigate('/news');
      })
    } catch (error) {
      console.log(error);
      window.localStorage.clear();
      window.location.reload()
    }
  }

  React.useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className='header-toolbar'>
        <span className='header-toolbar__title'>{`Hello, ${user.name}`}</span>
        <div className='header__avatar'>
            <img
                className='avatar active'
                src={user.avatar} 
                alt='Aватар'
            />
        </div>
        <Button 
          variant="danger"
          onClick={() => {
            context.setIsToken(false)
            window.localStorage.clear();
            navigate('/');
          }}
        >Logout</Button>
    </div>
  )
}

export default HeaderToolbarLogin