import React, { useContext, useState } from 'react';
import './Login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { Context } from '../../context/Context';

const Login = () => {
    const[currState, setCurrState] = useState('sign up');
    const{setToken} = useContext(Context);
    const navigate = useNavigate();
    const[data,setData]= useState({
        name:'',
        email:'',
        password:''
    })
    const onChangeHandler =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) =>({...prev, [name]:value}));
    }
    const onSubmitHandler= async(e)=>{
        e.preventDefault();
        let url;
        if(currState === 'sign up'){
            url = 'http://localhost:4000/api/user/register';
        }
        else if(currState === 'login'){
            url = 'http://localhost:4000/api/user/login';
        }
        const response = await axios.post(url, data);
        if(response.data.success){
            navigate('/');
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
        }
        else{
            toast.error(response.data.message);
        }
    }
    return (
    <div className='login'>
        <div className='container'>
            <div className='login-container'>
                <div className='title d-flex align-items-center gap-2'>
                    <h3>{currState}</h3>
                    <p></p>
                </div>
                <form onSubmit={onSubmitHandler}>
                    {currState === 'sign up' &&
                    <input onChange={onChangeHandler} className='mb-3 p-2' name='name' value={data.name} placeholder='Name' type='text'/>}
                    <input onChange={onChangeHandler} className='mb-3 p-2' name='email' value={data.email} placeholder='Email' type='email'/>
                    <input onChange={onChangeHandler} className='mb-3 p-2' name='password' value={data.password} placeholder='Password' type='password'/>
                    <div className='qst d-flex align-items-center justify-content-between'>
                        <p>Forgot your password?</p>
                        {currState === 'sign up' ? 
                        <p onClick={()=>setCurrState('login')}>Login here</p> :
                        <p onClick={()=>setCurrState('sign up')}>Create account</p>
                        }
                    </div>
                    <button type='submit'>{currState}</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Login
