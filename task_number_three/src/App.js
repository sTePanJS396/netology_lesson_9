import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import PostList from './components/PostList';
import { Routes, Route } from "react-router-dom";
import Fullpost from './components/Fullpost';

export const Context = React.createContext();

// В проекте используются UI-библиотеки Material UI и React Bootstrap.

function App() {
  const [isToken, setIsToken] = React.useState(false);
  const post = {
    postList: []
  }

  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setIsToken(true)
    }
  }, [])

  return (
    <Context.Provider value={{isToken, setIsToken, post}}>
      <div className="app">
        <Header/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Banner/>} />
            <Route path='/news' element={<PostList/>} />
            <Route path='/news/:id' element={<Fullpost/>} />
            <Route path='/not-found' element={<h1>Not found</h1>} />
          </Routes>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
