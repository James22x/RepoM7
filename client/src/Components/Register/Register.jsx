import  { useState } from 'react';
import './Register.css'
import '../../App.css'
import {  useNavigate } from 'react-router-dom'
import Axios from 'axios'
import Sidebar from '../Dashboard/src/Components/Sidebar Section/Sidebar';
import Top from '../Dashboard/src/Components/Body Section/Top Section/Top';

//import icons
import { FaUserDoctor } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";


const Register = () => {

  //UseState to hold our inputs
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //const [img, setImg] = useState('')
  const navigateTo = useNavigate()

  //OnClick let us get entered values
  const createUser = (e)=>{
    e.preventDefault();
    
    //we shall require axios to create an API that connects to the server
    Axios.post('http://localhost:3002/register', {
      //create variables to send to the server through the router
      Email: email,
      Name: name,
      UserName: userName,
      Password: password,
      //Img: img
    }).then(()=>{
      // on register redirect to login
      navigateTo('/dashboard')

      //let us clear the fields too
      setEmail('')
      setName('')
      setUsername('')
      setPassword('')
    })
  }


  return (
    <div className='flex'>
    <Sidebar />
    <div className='mainContent'>
      <Top />
    <div className="registerPage flex">
    <div className="container flex">

      <div className="formDiv flex">
        <div className="headerDiv">
          <h3>Registro de Usuarios</h3>
        </div>

        <form action='' className='form grid'>
          
          <div className="inputDiv">
            <label htmlFor='email'>Correo</label>
            <div className="input flex">
              <MdAlternateEmail className='icon'/>
            <input type="email" id='email' placeholder='Correo electronico' onChange={(event)=>{
              setEmail(event.target.value)
            }}/>
            
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor='name'>Nombre</label>
            <div className="input flex">
              <MdDriveFileRenameOutline className='icon'/>
            <input type="text" id='name' placeholder='Nombre' onChange={(event)=>{
              setName(event.target.value)
            }}/>
            
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor='username'>Usuario</label>
            <div className="input flex">
              <FaUserDoctor className='icon'/>
            <input type="text" id='username' placeholder='Nombre de usuario' onChange={(event)=>{
              setUsername(event.target.value)
            }}/>
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor='password'>Contraseña</label>
            <div className="input flex">
              <FaLock className='icon'/>
            <input type="password" id='password' placeholder='Contraseña' onChange={(event)=>{
              setPassword(event.target.value)
            }}/>
            </div>
          </div>

          <button type='submit' className='btn flex' onClick={createUser}>
            <span>Registrar</span>
          </button>

        </form>

      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Register