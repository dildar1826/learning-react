import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import Profile from './pages/Profile'
import Notfound from './pages/NotFound'
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/profile/:username" element={<Profile />}/>
      <Route path="*" element={<Notfound/>}/> 

    </Routes>
    </>
  )
}

export default App
