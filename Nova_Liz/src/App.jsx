
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import { Navigate } from 'react-router-dom';

function App() {
  return (

      <>
        <div className="App"> 
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Navigate to="/" />}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/favs' element={<Favs/>}/>
        </Routes>
        <div className="App"> 
          <Footer/>
        </div>
      </>
  );
}

export default App;
