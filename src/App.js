import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes >
        <Route  path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App
