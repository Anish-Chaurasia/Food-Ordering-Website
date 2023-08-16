import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Menu from './Components/menu';
import Footer from './Components/Footer';
import Cart from './Components/Cart';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/menu' element={<Menu/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/cart' element={<Cart/>}/>
        </Routes>
     <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
