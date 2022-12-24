import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { handleStore } from '../REDUX/action'
export const Login = ()=>{
    const navigate = useNavigate()


    const dispatch = useDispatch()

    function handleUser(e){
        e.preventDefault()
        let temp = e.target
        let data = {
            email : temp[0].value ,
            password : temp[1].value
        }

        fetch('https://mock15-backend.onrender.com/login' , {
            method:'POST',
            body:JSON.stringify(data) ,
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            dispatch(handleStore(res))
            alert('sucessfully login')
            navigate('/tickets')

        }).catch((err)=>{
            console.log(err)
        })
    }
    return <div className='from'>
        <img src='https://aniportalimages.s3.amazonaws.com/media/details/Capture2021092207014520210922071739.jpg'/>
        <form onSubmit={(e)=> handleUser(e)}>
            <label>Email</label>
            <input type='text'/>
            <label>password</label>
            <input type='passsword'/>
            <div>
                <p>don't Have account ? <Link to='/login'>Sign up</Link></p>
                <input type='submit' value='login' className='btn'/>
            </div>
        </form>
    </div>
}