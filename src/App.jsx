// import {Routes, Route} from 'react-router-dom';
import './App.scss';
// import Home from './Components/Home/Home';
// import Aboutus from './Components/Aboutus /Aboutus';
// import Services from './Components/Services /Services'
// import Contactus from './Components/Contactus/Contactus'
// import Signup from './Components/Signup/Signup';
import Profile from "./Components/Profile/Profile";
import Sidebar from "./Components/Sidebar/Sidebar";
import Rightbar from "./Components/Rightbar/Rightbar";
import Feed from "./Components/Feed/Feed"; 

function App() {
  return (
    <>
    {/* <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<Aboutus/>}></Route>
      <Route path='/service' element={<Services/>}></Route>
      <Route path='/contact' element={<Contactus/>}></Route>
    </Routes> 

    <div className='signup'><Signup/></div> */}
    <div><Profile/>
    
    <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/></div></div>
    </>
  );
}

export default App;
