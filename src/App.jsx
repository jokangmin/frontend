import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Login from './components/member/Login';
import { useState } from 'react';
import BoardWrite from './components/board/BoardWrite';
import BoardList from './components/board/BoardList';
import BoardView from './components/board/BoardView';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('id');
    alert("로그아웃 되었습니다.");
  };
  
  return (
    <BrowserRouter>
      <>
        <nav className='menunav'>
          <ul>
            <li><Link to='/'>Main</Link></li>
            {isLoggedIn ? (<li><Link to='/' onClick={handleLogout}>Logout</Link></li>) : (<li><Link to='/Login'>Login</Link></li>)}
            {isLoggedIn && (<li><Link to='/boardWrite'>게시글 작성</Link></li>)}
            <li><Link to='/boardList'>게시글 목록</Link></li>
          </ul>
        </nav>

        {/* 회면에 보이는 영역 */}
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/login' element={<Login onLogin={handleLogin} />}/>
          <Route path='/boardWrite' element={<BoardWrite />}/>
          <Route path='/boardList' element={<BoardList />}/>
          <Route path='/boardView/:seq' element={<BoardView/>}/>
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;