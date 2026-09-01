import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function Navbar({ view, setView }) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav>
      <button onClick={() => setView('home')} style={{ marginRight: 8 }}>
        Home
      </button>
      <button onClick={() => setView('profile')} style={{ marginRight: 12 }}>
        Profile
      </button>
      <span style={{ marginRight: 8 }}>Theme: {theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  )
}
