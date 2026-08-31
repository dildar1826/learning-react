import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [view, setView] = useState('home')

  return (
    <UserContextProvider>
      <Navbar view={view} setView={setView} />
      {view === 'home' && <Home />}
      {view === 'profile' && <Profile />}
    </UserContextProvider>
  )
}

export default App
