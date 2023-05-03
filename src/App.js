import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Problem1 from './pages/problem1';
import MapObj from './pages/map_obj';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Problem1/> */}
      <MapObj/>
      <Routes >
        <Route  path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App
