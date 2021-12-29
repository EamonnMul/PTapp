
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes, 
  Link
} from "react-router-dom";

import LandingPage from './Pages/LandingPage';
import Macrocalculator from './Components/Macrocalculator';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/macrocalculator" element={<Macrocalculator/>}/>

    </Routes>
  );
}

export default App;
