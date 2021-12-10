import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/login';
import MoviesByGenre,{SingleMovie} from './components/movieRender/MovieRender';
import Forgot_password from './components/pages/Forgot_password';
import Userinfo from './components/pages/Userinfo';

function App() {
  return (
    <div id="totalContainer" key="totalContainerKey">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/login' element={<Login/>}/>
          <Route  path="/movies/:genre" exact element={<MoviesByGenre/>}/>
          <Route  path="/movies/movie/:movie" element={<SingleMovie/>}/>
          <Route path="/userinfo" element={<Userinfo/>} />
          <Route path="/forgot_password" element={<Forgot_password/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
