import React from "react";
import { Navegador, Banner, CuerpoUno, CuerpoDos, Carrusel, Formulario } from '../components';
import { Link } from "react-router-dom";



const AdminPage = () => {
    //esto es un comentario
    return (


        <div class="bonotes-in-re">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary" type="button">Ingresar</button>
                <button class="btn btn-primary" type="button">Registrarte</button>
            </div>


            <div className='container md-12 --bs-orange'>
                <div className='row'>
                    <Navegador />
                    <Banner />
                    <CuerpoUno />
                    <Carrusel />
                    <CuerpoDos />
                    <Formulario />
                    <Link to="/Formularios"><button type="button" class="btn btn-primary">volver a incio</button></Link>

                    <div class="card-footer text-body-secondary-center">
                    © RaceToSpace 2023
                    </div>
                </div>

            </div>

        </div>
    )
}
export default AdminPage;