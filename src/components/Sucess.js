
import { Link } from 'react-router-dom';
function Sucess() {
    let correo = localStorage.getItem('correo');
    return (
        <>
            <div class="contenedor1">
                <h2>Stax Food Admin Login</h2>
                <h2>registro de usuario</h2>
            </div>
            <div class="sucess">

                <h1>bienvenido: {correo}</h1>
                <button>
                    <Link to="/" className="btn btn-primary">inicio</Link></button>

            </div>
        </>
    )
}

export default Sucess;