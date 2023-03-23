import React from "react";
import { Main } from "./Components/main";
import './App.css'
import {Routes, Route} from "react-router-dom";
import { Details } from "./Components/details";

function App() {  
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/:id" element={<Details/>}/>
    </Routes>
  )
}

export default App
