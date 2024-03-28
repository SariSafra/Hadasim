import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import Home from './components/Home.jsx'
import Members from './components/Members.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState(`/hmo/home`);

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={currentPage} />} />
        <Route exact path="hmo/home" element={<Home />} ></Route>
        <Route path="hmo/members" element={<Members />} />
      </Routes>
    </BrowserRouter></>
  )
}

export default App
