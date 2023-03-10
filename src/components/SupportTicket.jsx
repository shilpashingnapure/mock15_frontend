import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'

export const Tickets = ()=>{
    const user = useSelector((s)=> s)

    console.log(user)

    const [loading , setloading] = useState(true)
    const [data , setdata] = useState([])
    useEffect(()=>{
        //get user tickets
        fetch(`https://mock15-backend.onrender.com/tickets/?id=${user._id}`).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            setdata(res)
            setloading(false)
        }).catch((err)=>{
            console.log(err)
        })
    },[])


    function handlerBookmark(id){
        fetch(`https://mock15-backend.onrender.com/create_bookmark` , {
            method : 'POST',
            body: JSON.stringify({'ticket':id}),
            headers:{
                "Content-Type":'application/json'
            }
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            alert('bookmark is created...')
        }).catch((err)=>{
            console.log(err)
        })

    }
    if(loading){
        return <div>loading ...</div>
    }
    return <div className="tickets">
        <div className="header">
            <h1>Support Tickets</h1>
            <Link to='/ticket' className="btn">create</Link>
        </div>
        <div className="container">
            {data.map((e)=>{
                return <div className="card">
                        <div>
                            <h2>{e.title}</h2>
                            <ul>
                                <li>{user.name}</li>
                                <li>{e.category}</li>
                                <li>1</li>
                            </ul>
                        </div>
                        <div style={{textAlign:'end' , lineHeight:'40px'} }>
                            <div className="tag">RESOLVED</div>
                            <div>{new Date(e.createdAt).toDateString()} {new Date(e.createdAt).toTimeString().slice(0 , 5)} {new Date(e.createdAt).toTimeString().slice(0 , 3) <= 12 ? 'AM':'PM'}</div>
                            <button className="btn" onClick={()=>handlerBookmark(e._id)}>Bookmark</button>
                        </div>
                    </div>
            })}

        </div>
    </div>
}