import React from 'react'

import './style.css'
import logo from '../img/logo.jpg'

export function Header() {
    return (
        <div>
            <header id="header" class="fixed-top p-2">
                <div class="container d-flex align-items-center ">

                    <nav class="navbar navbar-expand-lg navbar-light w-100">
                        <a href="#" class="logo"><img src={logo} width='85px' alt="" class="img-fluid" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item ">
                                    <a class="nav-link" href="#home"> Бош саҳифа</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">Биз ҳақимизда</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="#services"> Хизматлар</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#gallery">Галерея</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">Контакт</a>
                                </li>
                            </ul>
                            <span class="navbar-text">
                                <a href="tel:9" class="navbar_link ml-auto text-primary">+99897-768-98-58</a>
                            </span>
                            <span class="navbar-text">
                                <a href="tel:9" class="navbar_link ml-5 text-primary">+99899-844-32-70</a>
                            </span>
                        </div>
                    </nav>

                </div>
            </header>
        </div>

    )
}
