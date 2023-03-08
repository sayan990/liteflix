import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import AddMovie from './components/AddMovie/AddMovie';


function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/agregarPelicula' element={<AddMovie />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

