import React from 'react';
import { Col, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Post from './Post';
import { Context } from '../App';

const PostList = () => {
  const [post, setPost] = React.useState([]);
  const context = React.useContext(Context);
  const navigate = useNavigate();

  async function fetchingData() {
    try {
      fetch('http://localhost:7070/private/news', {
        method: 'GET',
        headers: {'Authorization': `Bearer ${window.localStorage.getItem('token')}`},
      }).then(res => res.json()).then(res => {
        setPost(res);
        context.post.postList = res;
      })
    } catch (error) {
      console.log(error);
      window.localStorage.clear();
      window.location.reload()
    }
  }
  
  React.useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      navigate('/');
    } else {
      fetchingData()
    }
  }, []);

  return (
    <div className='post-list'>
        <Row xs={1} md={2} className="g-4">
            {post.map(el => (
                <Col key={el.id}>
                  <NavLink to={`/news/${el.id}`}>
                    <Post text={el.content} title={el.title} img={el.image}/>
                  </NavLink>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default PostList