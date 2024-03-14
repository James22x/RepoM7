import React, {useEffect, useState} from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

//import our assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

//import icons
import { FaUserDoctor } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

const Login = () => {


  //usestate hook to store inputs
  const  [loginUserName, setLoginUserName] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const navigateTo = useNavigate()

  //let us now show the message to the user
  const[loginStatus, setLoginStatus] = useState('')
  const[statusHolder, setStatusHolder] = useState('message')

    //OnClick let us get entered values
    const loginUser = (e)=>{
      
      //Prevent submitting
      e.preventDefault();
      //we shall require axios to create an API that connects to the server
      Axios.post('http://localhost:3002/login', {
        //create variables to send to the server through the router
        LoginUserName: loginUserName,
        LoginPassword: loginPassword
      }).then((response)=>{
        console.log()

        if(response.data.message || loginUserName == '' || loginPassword == ''){
          //if credentials dont match
          navigateTo('/') //so we shall navigate to the same login page
          setLoginStatus('Credenciales Inválidas')
        } else {
          navigateTo('/dashboard') // if the credentials match
        }
      })
    }

    useEffect(() =>{
      if (loginStatus !== '') {
        setStatusHolder('showMessage') //show message
        setTimeout(() => {
          setStatusHolder('message') //hide message after 4s
        }, 4000);
      }
    }, [loginStatus])

    //lets clear the form on submit
    const onSubmit = () => {
      setLoginUserName('')
      setLoginPassword('')
    }


  return (
    <div className="loginPage flex">
    <div className="container flex">
      
      <div className="videoDiv">
        <video src={video} autoPlay muted loop></video>
        <div className='textDiv'>
          <h2 className='title'>Bienvenido/a de nuevo!</h2>
        </div>
      </div>

      <div className="formDiv flex">
        <div className="headerDiv">
          <img src={logo} alt='Logo image'></img>
          <h3>Ingreso al sistema</h3>
        </div>

        <form action='' className='form grid' onSubmit={onSubmit}>
          <span className={statusHolder}>{loginStatus}</span>
          
          <div className="inputDiv">
            <label htmlFor='username'>Usuario</label>
            <div className="input flex">
              <FaUserDoctor className='icon'/>
            <input type="text" id='username' placeholder='Introduce tu nombre de usuario' onChange={(event)=>{
              setLoginUserName(event.target.value)
            }}/>
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor='password'>Contraseña</label>
            <div className="input flex">
              <FaLock className='icon'/>
            <input type="password" id='password' placeholder='Introduce tu contraseña' onChange={(event)=>{
              setLoginPassword(event.target.value)
            }}/>
            </div>
          </div>

          <button type='submit' onClick={loginUser} className='btn flex'>
            <span>Ingresar</span>
          </button>

          <span className='forgotPassword'>
            ¿Olvidaste tu contraseña? <a href=''>Haz click aquí</a>
          </span>

        </form>
      </div>
    </div>
    </div>
  )
}

export default Login