
import { useParams } from "react-router-dom"



function Profile() {
    const { username } = useParams()

    return (
        <>
            <h1>
                You are viewing profile of :- <strong>{username}</strong>
            </h1>
        </>
    )
}
export default Profile