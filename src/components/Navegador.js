import React from "react";
import logo from "../assets/img/logo-racetospace.png";


const Navegador = () => {
    return (


        <nav class="navbar mb-5">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} class="logo" alt="" width="90" height="74" />
                </a>

                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Quiénes somos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Curso</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Nuestro programa</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Te aconsejamos</a>
                    </li>

                </ul>

            </div>
        </nav >
    )
}

export default Navegador;