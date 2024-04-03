import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Navb from './Components/Navb';
import Error from './Error';


function App() {

  var m=true;
  return (
    <div className="App">
      <Navb/>
     <Routes>
      
        (<Route path='/Profile' element={m?(<Profile/>):<Error/>}/>)
        
      
      <Route path='/' element={<Home/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
