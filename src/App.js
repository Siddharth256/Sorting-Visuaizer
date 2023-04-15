import Generatebars from './Components/Home';
import './App.css';
import Navbar from './Components/navbar';
import About from './Components/About';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Generatebars/>}></Route>
        <Route path='/Home' element={<Generatebars/>}></Route>
        <Route path='/About' element={<About/>}>

        </Route>
      </Routes>
   
    
    </div>
  );
}

export default App;
