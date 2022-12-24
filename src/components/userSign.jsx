import {Link, useNavigate} from 'react-router-dom'
export const SignUp = ()=>{
    const navigate = useNavigate()
    function handleUser(e){
        e.preventDefault()
        let temp = e.target
        let data = {
            name:temp[0].value,
            email : temp[1].value ,
            password : temp[2].value
        }
        fetch('https://mock15-backend.onrender.com/signup' , {
            method:'POST',
            body:JSON.stringify(data) ,
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            alert('sucefully sign up..')
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return <div className='from'>
        <img src='https://aniportalimages.s3.amazonaws.com/media/details/Capture2021092207014520210922071739.jpg'/>
        <form onSubmit={(e)=>handleUser(e)}>
            <label>Name</label>
            <input type='text'/>
            <label>Email</label>
            <input type='text'/>
            <label>password</label>
            <input type='passsword'/>
            <div>
                <p>Have already account ? <Link to='/'>login</Link></p>
                <input type='submit' value='sign Up' className='btn'/>
            </div>
        </form>
    </div>
}
