import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProjectList from './pages/Project'
import ProjectDetailPage from './pages/ProjectDetail'
import About from './pages/About'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectList />} />

        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer></Footer>
    </>
  )
}

export default App
