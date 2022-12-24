import { Login } from "./userLogin"
import { Route , Routes } from "react-router-dom"
import { SignUp } from "./userSign"
import { Tickets } from "./SupportTicket"
import { CreateTicket } from "./createTicket"

export const AllRouter = ()=>{
    return <>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<SignUp/>}/>
            <Route path='/tickets' element={<Tickets/>} />
            <Route path='/ticket' element={<CreateTicket />} />
        </Routes>
    </>
}