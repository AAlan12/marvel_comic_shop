import React from "react";
import { Main } from "./Components/main";
import './App.css'
import {Routes, Route} from "react-router-dom";

function App() {  
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
    </Routes>
  )
}

export default App
