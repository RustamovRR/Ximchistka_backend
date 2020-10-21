import React from 'react'

import './style.css'
import img from '../img/about.jpg'

export function About() {
    return (
        <div id='about'>
            <section id="about-video" class="about-video">
                <div class="container" data-aos="fade-up">

                    <div class="section-title" data-aos="fade-up">
                        <h2>Ҳақида</h2>
                        <p>Биз ҳақимизда</p>
                    </div>

                    <div class="row">

                        <div class="col-lg-6 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
                            <img src={img} class="img-fluid" alt="" />
                        </div>

                        <div class="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                            <h3 class='mb-3'>Тошкент шаҳрида мебеллар тозалаш хизмати</h3>
                            <p class="text-justify">
                                Тошкент шахрида гилам, парда, юмшоқ мебел ва матрасларни профессионал тарзда ювиш ва тозалаш. Бир неча йиллар давомида бизнинг корхона томонидан Тошкент шахар хонадонлар, оффеслар ресторанларда гилам ювиш ва юмшоқ мебелларни професионал ускуналар ёрдамида бизнинг цехимизда ахолига тозалаш хизматини кўрсатиб келади.
                            </p>
                            <p class="text-justify">
                                Сизнинг хонадонингиз ёки оффесингиздаги гиламлар, ковраланлар, юмшоқ мебелларни бизнинг мутахассисларимиз томонидан профессионал ускуналар ёрдамида тозаланади.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}
