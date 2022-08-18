import { HashRouter,Routes,Route } from 'react-router-dom';
import Nav from '../nav/navBar';
import Home from '../home/homePage';
import Login from '../loginPage/login';
const Main=()=>{
    return(
        <div></div>
        // <HashRouter>
        //     <Nav/>
        //     <Routes>
        //         <Route path='*' element={<Home/>}/>
        //         {/* <Route path='/home' element={<Home/>}/> */}
        //     </Routes>
        // </HashRouter> 
    )
}
export default Main;