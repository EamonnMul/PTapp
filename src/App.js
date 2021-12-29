
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
import WorkoutPlan from './Pages/WorkoutPlan';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/macrocalculator" element={<Macrocalculator/>}/>
      <Route path="/workoutplan" element={<WorkoutPlan/>}/>

    </Routes>
  );
}

export default App;
