import './App.css'
import DashboardApp from './Components/Dashboard/src/DashboardApp'
import Login from './Components/Login/Login'
//import Register from './Components/Register/Register'
import Pacientes from './Components/Dashboard/src/Components/Body Section/Pacientes Section/Pacientes'
import Citas from './Components/Dashboard/src/Components/Body Section/Citas Section/Citas'
import Consultas from './Components/Dashboard/src/Components/Body Section/Consultas Section/Consultas'
import RegisterUser from './Components/Dashboard/src/Components/Body Section/Users Section/GestionUsuarios'
//import react router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

//create a router
const router = createBrowserRouter([

  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><RegisterUser/></div>
  },
  {
    path: '/dashboard/*',
    element: <div><DashboardApp/></div>
  },
  {
    path: '/pacientes',
    element: <div><Pacientes/></div>
  }
  ,
  {
    path: '/citas',
    element: <div><Citas/></div>
  }
  ,
  {
    path: '/consultas',
    element: <div><Consultas/></div>
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
