import './App.css'
import { Route, Routes } from "react-router-dom";
import Auth from "./components/authentication/auth";
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

