import "./App.css"
import Content from "./components/Content/Content"
import MusicPlayer from "./components/MusicPlayer/MusicPlayer"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"

import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Navbar />
        <Content />
        <MusicPlayer />
      </div>
    </Router>
  )
}

export default App
