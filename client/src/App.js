
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import Hotel from './pages/hotel/Hotel';
import Hotels from './pages/hotels/Hotels';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/hotel/:id' element={<Hotel/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
