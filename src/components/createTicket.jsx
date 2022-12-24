import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const CreateTicket = ()=>{
    const [cate , setcate] = useState()
    const [title , settitle] = useState()
    const [msg , setmsg] = useState()

    const user = useSelector((s)=> s)
    const navigate = useNavigate()

    function handleTicket(){
        let data = {
            user : user._id ,
            category : cate ,
            title : title ,
            message : msg
        }

        fetch('https://mock15-backend.onrender.com/create_ticket' , {
            method:'POST' ,
            body : JSON.stringify(data) ,
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            alert('sucefully created ticket..')
            navigate('/tickets')
        }).catch((err)=>{
            console.log(err)
        })

    }
    return <div>
        <div className="header">
            <h1>Create Support Ticket</h1>
        </div>
        <div className="container ticket_container">
            <label>
                CATEGORY
            </label>
            <select onChange={(e)=> setcate(e.target.value)}>
                <option>select</option>
                <option value='Withdraw'>Withdraw</option>
                <option value='leave'>leave</option>
                <option value='late evalution submision'>late evalution submision</option>
                <option value='product support'>product support</option>
            </select>

            <label>TITLE</label>
            <input type='text' onChange={(e)=> settitle(e.target.value)}/>
            <label>MESSAGE</label>
            <div>
                <span>Write</span>
                <span>Preview</span>
                <span>Help</span>
            </div>
            <textarea rows='15' onChange={(e)=> setmsg(e.target.value)}></textarea>
            <button className="btn" onClick={handleTicket}>CREATE TICKET</button>
        </div>
    </div>
}