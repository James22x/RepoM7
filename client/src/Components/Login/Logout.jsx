/*import { IoLogOutOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom'
import Axios from 'axios'; // Asegúrate de importar Axios si aún no lo has hecho

const LogoutButton = () => {
    const history = useHistory();

    const handleLogout = async () => {
        try {
            await Axios.post('/logout'); // Realiza la solicitud de logout al backend
            // Realiza las acciones necesarias en el frontend, como limpiar la sesión del usuario y redirigirlo a la página de inicio de sesión
            history.push('/login'); // Redirige al usuario a la página de inicio de sesión
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            // Aquí podrías mostrar un mensaje de error al usuario o realizar otras acciones según corresponda
        }
    };

    return (
        <button onClick={handleLogout}>
            <IoLogOutOutline /> Logout
        </button>
    );
};

export default LogoutButton;*/
