import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] bg-white text-center px-4">
            <h1 className="text-6xl font-extrabold text-orange-700">404</h1>
            <p className="text-2xl font-semibold text-gray-800 mt-4">Oops! This page doesn't exist.</p>
            <p className="text-gray-500 mt-2">The page you are looking for might have been removed or is temporarily unavailable.</p>
            <Link 
                to="/" 
                className="mt-6 inline-flex items-center px-6 py-3 bg-orange-700 text-white font-medium rounded-lg hover:bg-orange-800 transition duration-200"
            >
                Go to Home Page
            </Link>
        </div>
    )
}

export default NotFound