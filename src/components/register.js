import swal from '@sweetalert/with-react';

function register() {
    const submitHandler = (event) => {
        console.log("Nombre", event.target.nombre.value
            , "Apellido", event.target.apellido.value
            , "Email", event.target.email.value
            , "Password", event.target.password.value);
        swal(<h2>datos guardados</h2>);
    }
    return (

        <>
            <div class="contenedor">
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
        </>
    )
}

export default register;