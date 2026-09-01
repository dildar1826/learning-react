import { useContext } from 'react'
import UserContext from '../context/UserContext'
import ThemeContext from '../context/ThemeContext'

export default function Profile() {
	const { username, age, role, about } = useContext(UserContext) || {}
	const { theme } = useContext(ThemeContext) || {}

	return (
		<div className="container">
			<h1>Profile Page</h1>
			<div className="card">
				<p><strong>Name:</strong> {username}</p>
				<p><strong>Age:</strong> {age}</p>
				<p><strong>Role:</strong> {role}</p>
				<p><strong>About:</strong> {about}</p>
				<p style={{ marginTop: 8 }}><em>Current theme: {theme}</em></p>
			</div>
		</div>
	)
}
