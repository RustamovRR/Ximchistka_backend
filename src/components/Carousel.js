import React from 'react'

import slide1 from '../img/slide1.jpeg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import './style.css'

export function Carousel() {
    return (
        <div id='home'>
            <section id="hero">
                <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

                    <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div class="carousel-inner" role="listbox">


                        <div class="carousel-item active" style={{ backgroundImage: `url(${slide1})` }}>
                            <div class="carousel-container">
                                <div class="container">
                                    <h2 class="animate__animated animate__fadeInDown">Химчисткага хуш келибсиз </h2>
                                    <p class="animate__animated animate__fadeInUp slide_text">Биз гилам, парда ва ҳар қандай юмшоқ мебелларни сифатли ва тез тозалаш ва кимёвий тозалаш хизмати билан бир неча йиллар давомида шуғулланиб келмоқдамиз</p>
                                    <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Ko'proq o'qing</a>
                                </div>
                            </div>
                        </div>


                        <div class="carousel-item" style={{ backgroundImage: `url(${slide3})` }}>
                            <div class="carousel-container">
                                <div class="container">
                                    <h2 class="animate__animated animate__fadeInDown">Химчисткага хуш келибсиз</h2>
                                    <p class="animate__animated animate__fadeInUp slide_text">Бизда Тошкент шаҳри бўйлаб олиб кетиш ва етказиб бериш хизмати мавжуд</p>
                                    <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Ko'proq o'qing</a>
                                </div>
                            </div>
                        </div>


                        <div class="carousel-item" style={{ backgroundImage: `url(${slide2})` }}>
                            <div class="carousel-container">
                                <div class="container">
                                    <h2 class="animate__animated animate__fadeInDown">Химчисткага хуш келибсиз</h2>
                                    <p class="animate__animated animate__fadeInUp slide_text">Биз ишхона пардаларини ва гиламларини, шунингдек юмшоқ мебел жиҳозларини кимёвий ҳолатда тозалаб берамиз</p>
                                    <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Ko'proq o'qing</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>

                    <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>

                </div>
            </section>
        </div>
    )
}
