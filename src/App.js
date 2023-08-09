import './App.css';
import Navbar from './Components/Navbar';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/gallery' element={<Gallery/>}/>
         <Route path='/menu' element={<Gallery/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
