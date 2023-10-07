/* Webpage Home Español */
import React from 'react'

//Components
import CarouselServices_Es from './CarouselServices_Es';
import CarouselProcess_Es from './CarouselProcess_Es';
import ContactFormReact_Es from './ContactFormReact_Es';

const Home_Es = () => {

  return (
    <>
          <div id="section0" className="container-fluid d-flex align-items-center justify-content-center">
              <div className="row">

                <div className="col-md-12 text-center">
                    <h1 className="bigLetters">Transformamos negocios <br/>con digitalización</h1>
                    <p className="subLetters">Si eres un emprendedor o negocio, <br/>te podemos ayudar a convertir una idea <br/>en un producto digital</p>
                    <hr className="separador"/>
                    <ContactFormReact_Es />
                </div>

              </div>
          </div>

          <div id="section1" className="container-fluid d-flex align-items-stretch justify-content-center">
            <div className="row align-items-center">

              <div className="col-md-6 text-center order-md-last">
                <img src={require('../static/images/nosotros.webp')} alt="Ups!" style={{width: "90%"}}/>
              </div>

              <div className="col-md-6 text-center text-md-end order-md-first">
                <img id="curzorNosSep" src={require('../static/images/separadorAzul.webp')} style={{width: "100%"}}/>
                <h2 className="h2Dark">Nosotros</h2>
                <h3>Digitalización e Innovación para negocios</h3><br/>
                <p>Localizados en Querétaro, México.<br/>
                   Somos una agencia de tecnología enfocada a desarrollar software.<br/>
                                Aplicamos innovación y digitalización a las necesidades de nuestros clientes.<br/>
                                Nuestro equipo utiliza la última tecnología para brindarte soluciones innovadoras. <br/>
                                Usamos procesos de desarrollo "<i>smart </i>" para implementar soluciones. <br/>
                                Estamos aquí para ayudarte.
                </p>
              </div>
                    
            </div>
          </div>

          <div id="section2" className="container-fluid">

            <h2 className="h2Light">Servicios</h2>
            <CarouselServices_Es />
            
          </div>

          <div id="section3" className="container-fluid">

                <h2 className="h2Dark">Proceso de Desarrollo</h2>
                <CarouselProcess_Es />

          </div>

          <div id="section4" className="container-fluid d-flex align-items-center justify-content-center">
                <div className="row">

                    <div className="col-md-12 text-center">
                        <h1 className="bigLetters">Construyamos tu Idea</h1>
                        <hr className="separador"/>
                        <ContactFormReact_Es />
                    </div>

                </div>
          </div>
    </>
  );
}

export default Home_Es