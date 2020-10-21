import React from 'react'

export function Contact() {
    return (
        <div id='contact'>
            <main id="main" >

                <div class="section-title contact" data-aos="fade-up">
                    <h2>Алоқа</h2>
                    <p>Биз билан боғланинг</p>
                </div>

            </main>

            <footer id="footer">

                <section id="contact" class="contact">
                    <div class="container">
                        <div class="row mt-5 mapbox">

                            <div class="col-lg-4">
                                <div class="info">
                                    <div class="address">
                                        <i class="icofont-google-map"></i>
                                        <h4>Манзил:</h4>
                                        <p>Тошкент шаҳар Сергели тумани</p>
                                    </div>

                                    <div class="email">
                                        <i class="icofont-envelope"></i>
                                        <h4>Электрон почта:</h4>
                                        <p>info@example.com</p>
                                    </div>

                                    <div class="phone">
                                        <i class="icofont-phone"></i>
                                        <h4>Телефон рақам:</h4>
                                        <a href='tel:9'> +99897-768-98-58</a><br />
                                        <a href='tel:9' class='ml-5 mt-5'> +99899-844-32-70</a>
                                    </div>
                                    <div class='social_media'>
                                        <a href=""><i class="icofont-telegram"></i></a>
                                        <a href=""><i class="icofont-instagram"></i></a>
                                        <a href=""><i class="icofont-facebook"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="mapouter">
                                <div >
                                    <iframe class="gmap_canvas" id="gmap_canvas" src="https://maps.google.com/maps?q=tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                    </iframe><a href="https://2torrentz.net"></a></div>
                            </div>
                        </div>
                    </div>
                </section>

            </footer>

            <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
            <div id="preloader"></div>
        </div >
    )
}
