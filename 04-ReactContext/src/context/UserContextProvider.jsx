import UserContext from './UserContext'

export default function UserContextProvider({ children }) {
	const user = { username: 'Alice', age: 25 }

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
