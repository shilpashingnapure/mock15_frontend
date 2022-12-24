import { Link } from "react-router-dom"

import { useSelector } from "react-redux"
export const Navbar = ()=>{
    const user = useSelector((s)=> s)
    return <div className="navbar">
        <div>
        <img src='https://aniportalimages.s3.amazonaws.com/media/details/Capture2021092207014520210922071739.jpg'/>
        </div>
        <div>        {user ? <>
            <Link to='/tickets'>Home</Link>
            <Link to='/bookmark'>Bookmark</Link>
        </>: <>
            <Link to='/login'>Sign up</Link>
        </>}
        </div>


    </div>
}