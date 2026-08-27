import { Link } from "react-router-dom"
function Notfound(){
    return (
        <>
         <h1> Oops!- This page doesn't exists</h1>
         <Link to="/">Goto Home Page</Link>
        </>
    )
}
export default Notfound