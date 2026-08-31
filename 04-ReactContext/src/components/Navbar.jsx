export default function Navbar({ view, setView }) {
  return (
    <nav style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
      <button onClick={() => setView('home')} style={{ marginRight: 8 }}>
        Home
      </button>
      <button onClick={() => setView('profile')}>Profile</button>
    </nav>
  )
}
