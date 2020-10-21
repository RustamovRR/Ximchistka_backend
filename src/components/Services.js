import React from 'react'

import './style.css'
import service1 from '../img/service1.jpg'
import service2 from '../img/service2.jpg'
import service3 from '../img/service3.jpg'
import service4 from '../img/service4.jpg'
import service5 from '../img/service5.jpg'
import service6 from '../img/service6.jpg'
import service7 from '../img/service7.jpg'
import service8 from '../img/service8.jpg'
import service9 from '../img/service9.jpg'

export function Services() {
    return (
        <div id='services'>
            <section id="team" class="team">
                <div class="container">

                    <div class="section-title" data-aos="fade-up">
                        <h2>Хизмат</h2>
                        <p>Бизнинг хизматлар</p>
                    </div>


                    <div class="row" data-aos="fade-left">
                        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div class="member" data-aos="zoom-in" data-aos-delay="100">
                                <div class="pic"><img src={service1} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Офисда гилам тозалаш</h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  Майдон: 1 м<sup>2</sup>
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i> Нархи: 8000 сум
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div class="member" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic"><img src={service2} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Цехда гилам тозалаш <br /> (Олиб кетиш ва олиб келиш бепул)</h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  Майдон: 1 м<sup>2</sup>
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i> Нархи: 7000 сум
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div class="member" data-aos="zoom-in" data-aos-delay="300">
                                <div class="pic"><img src={service3} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Юмшоқ мебел тозалаш</h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  Ўриндиқ: 1
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i> Нархи: 35 000 сум
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row" data-aos="fade-left">
                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="100">
                                <div class="pic"><img src={service6} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Парда тозалаш</h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  Майдон: 1 п/м
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i> Нархи: 15 000 сум
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic"><img src={service4} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Матрас тозалаш</h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  Дона: 1
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i> Нархи: 100 000 сумдан
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="300">
                                <div class="pic"><img src={service7} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Стул тозалаш</h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  Стул: 1
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i> Нархи: 10 000 сумдан
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row" data-aos="fade-left">
                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="100">
                                <div class="pic"><img src={service8} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Юмшоқ ўйинчоқ тозалаш</h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  Дона: 1
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i> Нархи: 25 000 сумдан
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic"><img src={service5} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Одиял тозалаш</h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  Дона: 1
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i> Нархи: 45 000 сумдан
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="300">
                                <div class="pic"><img src={service9} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Оверлок</h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  Майдон: 1 м<sup>2</sup>
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i> Нархи: 8000 сум
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
