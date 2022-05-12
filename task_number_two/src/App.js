import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import New from './components/New';
import FullPost from './components/FullPost';
import EditionsPost from './components/EditionsPost';
import NotFound from './components/NotFound';
const Context = React.createContext() // использую контекст чтобы ничего не пробрасывать в пропсы

function App() {
  const [post, setPost] = React.useState([]);
  return (
    <Context.Provider value={{post, setPost}}>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts/new' element={<New/> }/>
          <Route path='/posts/:id' element={<FullPost/>}/>
          <Route path='/posts/editpost/:id' element={<EditionsPost/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </Context.Provider>
  );
}

export {App, Context};
