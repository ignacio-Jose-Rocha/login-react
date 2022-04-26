import swal from '@sweetalert/with-react';

import { Link } from 'react-router-dom';

function Register() {
    const submitHandler = (event) => {

        console.log("Nombre", event.target.nombre.value
            , "Apellido", event.target.apellido.value
            , "Email", event.target.email.value
            , "Password", event.target.password.value);
        swal(<h2>datos guardados</h2>);
    }
    return (

        <>
            <div class="contenedor1">
                <h2>Stax Food Admin Login</h2>
                <h2>registro de usuario</h2>
            </div>
            <div class="contenedor5">

                <form onSubmit={submitHandler}>
                    <label>
                        <span>Nombre:</span>
                        <br />
                        <input type="text" name="nombre" />
                    </label>
                    <br />

                    <label>
                        <span>Apellido:</span>
                        <br />
                        <input type="text" name="apellido" />
                    </label>
                    <br />
                    <label>
                        <span>Email:</span>
                        <br />
                        <input type="email" name="email" />
                    </label>
                    <br />
                    <label>
                        <span>Password:</span>
                        <br />
                        <input type="password" name="password" />
                    </label>
                    <button type="submit">register</button>
                </form>
            </div>
            <button>
                <Link to="/" className="btn btn-primary">inicio</Link></button>


        </>
    )
}

export default Register;