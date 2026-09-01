import UserContext from './UserContext'

export default function UserContextProvider({ children }) {
	const user = {
		username: 'Muhammad Dildar',
		age: 19,
		role: 'student',
		about: 'Learning React',
	}

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
