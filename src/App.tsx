import React from 'react';
// import Main from './components/main/main';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/home/homePage';
import Nav from './components/nav/navBar';
import { createGlobalStyle } from 'styled-components';
import Login from './components/loginPage/login';
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  border:0;
  outline:0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;

  :root{
    --color-bg:#191919;
    --color-bg-variant:#2500c3;
    --color-primary:#e58xf65;
    --color-primary-variant:#328284;
    --color-white: #fff;
    --color-light: #909095;
    --color-active: #254558;
    --transition: all 400ms ease;
    --container-width-lg: 75%;
    --container-width-md: 86%;
    --container-width-sm: 90%;  
  }
  body{
    font-family: 'Poppins', sans-serif;
    background-color: var(--color-bg);
    color: var(--color-white);
    line-height: 1.7;   
  }
  input{
    background: transparent;
    border-bottom: 1px solid black;
  }
  .btn{
    width: max-content;
    display: inline-block;
    color: var(--color-primary);
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    transition:  var(--transtion);
    background: var(--color-primary-variant);
  }
  .btn:hover{
    background: var(--color-white);
    color: var(--color-bg);
    border-color: transparent;
  }
  .btn-primary{
    background: var(--color-primary);
    color: var(--color-bg);
  }
}`;
function App() {
  return (
      <BrowserRouter>
            <GlobalStyle/>
            <Nav/>
            <Routes>
                <Route path='/*' element={<Login/>}/>
                {/* <Route path='/home' element={<Home/>}/> */}
            </Routes>
        </BrowserRouter>     
    );
}

export default App;
