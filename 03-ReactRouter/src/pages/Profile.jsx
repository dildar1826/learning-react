import { useParams } from "react-router-dom"

function Profile() {
    const { username } = useParams()

    return (
        <div className="bg-gray-100 p-8 rounded-lg max-w-xl mx-auto my-16 text-center shadow-sm border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-800">
                User Profile
            </h1>
            <p className="mt-4 text-xl text-gray-600">
                You are viewing profile of: <strong className="text-orange-700 bg-orange-100 px-3 py-1 rounded-md">{username || 'Anonymous'}</strong>
            </p>
        </div>
    )
}

export default Profile