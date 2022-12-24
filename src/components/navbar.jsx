import { Link } from "react-router-dom"

import { useSelector } from "react-redux"
export const Navbar = ()=>{
    const user = useSelector((s)=> s)
    return <div className="navbar">
        {user ? <>
            <Link to='/tickets'>Home</Link>
            <Link to='/bookmark'>Bookmark</Link>
        </>: <>
            <Link to='/login'>Sign up</Link>
        </>}

    </div>
}