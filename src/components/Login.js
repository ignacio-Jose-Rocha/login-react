import swal from '@sweetalert/with-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
function Login() {
    let navigate = useNavigate();
    const [tipo, setTipo] = useState('');
    const [register, setRegister] = useState(false);
    useEffect(() => {
        const favs = document.getElementById("type").value;
        setTipo(favs);
        


    }, []);

    const SubmitHandler = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === 'test@test.com' && password === 'test') {

            setRegister(true);


            document.getElementById("mensaje").innerHTML = "";
            swal(<div id="swal">Ingresaste correctamente
                <br />
                email: {email}
                <br />
                password: {password},

            </div>, {
                buttons: ["OK", "Cancelar"],

            });
            return;
        }
        if (email === '' || password === '') {

            document.getElementById("mensaje").innerHTML = "los campos no pueden estar vacios";
            return;
        }
        if (email !== '' && !regexEmail.test(email)) {
            document.getElementById("mensaje").innerHTML = "debes escribir una direccion valida";
            return;
        }
        else {
            document.getElementById("mensaje").innerHTML = "Usuario o contraseña incorrectos";
        }
    }

    return (
        <>
            {register && <Navigate to="/sucess" />}
            <div class="contenedor1">
                <h2>Stax Food Admin Login</h2>

            </div>

            <div id="mensaje" class="Mensaje">

            </div>
            <div class="contenedor">
                <h2>Please fill in your unique admin login details below</h2>

                <form onSubmit={SubmitHandler}>
                    <label>
                        <span>Email Address:</span>
                        <br />
                        <input type="text" name="email" />
                    </label>

                    <br />
                    <label>
                        <span>Password:</span>
                        <br />
                        <input type="password" name="password" />
                    </label>
                    <br />

                    <label>
                        <span>Type:</span>
                        <br />
                        <select name="type" id="type">
                            <option selected="selected" value="alumno">Alumno</option>
                            <option value="profesor">Profesor</option>

                        </select>

                        <br />

                    </label>

                    <br />
                    <div class="ho">
                        <button type="submit">Sign in</button>
                    </div>
                </form>

            </div>


            <button>
                <Link to="/register" className="btn btn-primary">desea registrarse?</Link></button>


        </>
    )

}

export default Login;