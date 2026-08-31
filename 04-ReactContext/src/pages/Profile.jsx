import { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
	const { username, age } = useContext(UserContext) || {}

	return (
		<div>
			<h1>Profile Page</h1>
			<p>Username: {username}</p>
			<p>Age: {age}</p>
		</div>
	)
}
