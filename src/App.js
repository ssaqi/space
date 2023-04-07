import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Sign from './Components/Sign/Sign.jsx';
import {Route , Routes} from 'react-router-dom';
import ResentImg from './Components/Resend/ResentImg';
import LoginImg from './Components/Login/LoginImg';
import Dashhboard from './Components/Dashboard/Dashhboard';
import Home from './Components/Home/Home';

function App() {
  return (
     <>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/resent' element={<ResentImg/>}/>
      <Route path='/login' element={<LoginImg/>}/>
      <Route path='/Dashboard' element={<Dashhboard/>}/>
     </Routes>
   
     </>
  );
}

export default App;
