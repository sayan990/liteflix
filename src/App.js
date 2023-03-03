import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"


function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

