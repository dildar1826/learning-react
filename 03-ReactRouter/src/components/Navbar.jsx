import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/test">Test</Link></li>
                <li><Link to="/profile/Anonymous">Link to Anonymous's Profile</Link></li>
                <li><Link to="/profile/user5005">Link to user5005's Profile</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar