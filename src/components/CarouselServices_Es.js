/* Bootstrap CarouselServices Español */
import React from 'react'
import ReactGA from 'react-ga';

import {Carousel} from 'react-bootstrap';

const CarouselServices = () =>{

    const handleClick = (caso) =>{
        
        switch (caso){

            case 0:
                ReactGA.event({
                    category: "Desarrollo Web",
                    action: "Click",
                });
                break;

            case 1:
                ReactGA.event({
                    category: "Móvil",
                    action: "Click",
                });
                break;

            case 2:
                ReactGA.event({
                    category: "APIS & Macros",
                    action: "Click",
                });
                break;
            
        }
    }

  return (
    <>  
        
        <Carousel id="carr-Servicios" interval={null} controls={false} indicators={false} touch={false}>
            
            <Carousel.Item  id="cDesarrolloWeb">
                            <div className='row'>

                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <img src={require('../static/images/Servicios/DesarrolloWeb.webp')} alt="Ups..." style={{width: "90%"}}/>
                                </div>

                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <div className="container Serv">

                                        <h3 className="h3Light">Desarrollo Web</h3><br/>
                                        <div>Creamos <i>apps</i> y sitios web que satisfacen las necesidades de nuestros clientes.<br/>
                                            Nos enfocamos en crear experiencias digitales intuitivas y funcionales para tus
                                            usuarios.<br/><br/>
                                            Los principales <b>productos</b> y <b>servicios</b> que desarrollamos son:
                                        <ul><br/>
                                            <li><b>Aplicaciones y Sitios Web</b></li>
                                            <li><b><i>E-commerce</i></b></li>
                                            <li><b><i>Landing Pages</i></b></li>
                                            <li><b>Gestores de contenido (CMS)</b></li>
                                        </ul>
                                        Sin embargo, estamos aquí para hacer realidad cualquier idea o proyecto que desees, no dudes en contactarnos.
                                        </div><br/>

                                        <span><b>Tecnologías:</b></span>
                                        <div className="container-fluid d-flex justify-content-start" style={{padding: "0"}}>
                                            <ul className="container-fluid d-flex justify-content-around ListaTec">
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/office/29/000000/react.png" alt="Ups!" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/color/29/000000/python--v1.png" alt="Ups!" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/fluency/29/000000/node-js.png" alt="Ups!" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/color/29/000000/html-5--v1.png" alt="Ups!" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/color/29/000000/css3.png" alt="Ups!" />
                                                </li>
                                                <li className="IconServ" style={{listStyleType: "none", padding: "10px"}}>
                                                    <img className="d-none d-md-block" src="https://img.icons8.com/color/29/000000/javascript--v1.png" alt="Ups!" />
                                                </li>
                                                <li className="IconServ" style={{listStyleType: "none", padding: "10px"}}>
                                                    <img className="d-none d-md-block" src="https://img.icons8.com/color/29/000000/postgreesql.png" alt="Ups!" />
                                                </li>
                                                <li className="IconServ" style={{listStyleType: "none", padding: "10px"}}>
                                                    <img className="d-none d-md-block" src="https://img.icons8.com/color/29/000000/bootstrap.png" alt="Ups!" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <span style={{color: "#f9f5e4"}}>...</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
            </Carousel.Item>
            
            <Carousel.Item id="cAppMoviles" >
                            <div className='row'>

                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <img src={require('../static/images/Servicios/Movil.webp')} alt="Ups..." style={{width: "auto"}}/>
                                </div>

                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <div className="container Serv">

                                        <h3 className="h3Light">Aplicaciones Móviles</h3><br/>
                                        <div>Elaboramos aplicaciones adaptadas a la visión de tu negocio.<br/>
                                            Mediante estrategias transversales e innovación aportamos soluciones ingeniosas.<br/><br/>
                                            Orientamos nuestros <b>desarrollos</b> a:
                                        <ul><br/>
                                            <li>Aplicaciones <i><b>Crossplatform</b></i>.</li>
                                        </ul>
                                        Este tipo de aplicaciones permiten mejorar los tiempos de lanzamiento y pueden ser
                                        utilizadas en diferentes entornos (ios, android, ...).
                                        </div><br/>

                                        <span><b>Tecnologías:</b></span>
                                        <div className="container-fluid d-flex justify-content-start" style={{padding: "0"}}>
                                            <ul className="container-fluid d-flex justify-content-around ListaTec">
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/office/29/000000/react.png" alt="Ups!" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/color/29/000000/html-5--v1.png" alt="Ups!" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/color/29/000000/javascript--v1.png" alt="Ups!" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/color/29/000000/typescript.png" alt="Ups!" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <span style={{color: "#f9f5e4"}}>...</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
            </Carousel.Item>

            <Carousel.Item id="cApisMacros" >
                            <div className="row">

                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <img src={require('../static/images/Servicios/Apis.webp')} alt="Ups..." style={{width: "90%"}}/>
                                </div>

                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <div className="container Serv">

                                        <h3 className="h3Light">APIs y Macros</h3><br/>
                                        <div>Generamos herramientas de automatización y mejora de procesos mediante <i>Application Programming Interfaces</i> (API's) y Macros.<br/>
                                            A través de nuestra amplia experiencia e ingenio proporcionamos herramientas que optimizan tu negocio.<br/><br/>
                                            Los <b>servicios</b> y <b>productos</b> en los que nos centramos son:
                                        <ul><br/>
                                            <li><b>Asesoría y Consultoría</b></li>
                                            <li><b>Unigraphics NX</b></li>
                                            <li><b>Solid Works</b></li>
                                            <li><b>Microsoft Office</b></li>
                                        </ul>
                                        </div><br/>

                                        <span><b>Tecnologías:</b></span>
                                        <div className="container-fluid d-flex justify-content-start" style={{padding: "0"}}>
                                            <ul className="container-fluid d-flex justify-content-around ListaTec">
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/fluency/29/000000/visual-basic.png" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/color/29/000000/python--v1.png" alt="Ups!" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src={require('../static/images/icons/NXIcon.webp')} alt="Ups!" style={{height:"29px", width:"29px"}} />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/color/29/000000/solidworks.png" alt="Ups!" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <img src="https://img.icons8.com/color/29/000000/microsoft.png" alt="Ups!" />
                                                </li>
                                                <li style={{listStyleType: "none", padding: "10px"}}>
                                                    <span style={{color: "#f9f5e4"}}>...</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
            </Carousel.Item>

        </Carousel>

            {/* Bootstrap Bar */}
            <div className="row" style={{marginTop: "1.5em"}}>
                        <ul id="cIndicadoresServicios" className="nav justify-content-center" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                            <li className="nav-item">
                                <a className="navServ" role="button" data-bs-target="#carr-Servicios" data-bs-slide-to="0" 
                                    aria-label="Slide 0" onClick={()=>handleClick(0)}>Desarrollo Web</a>
                            </li>
                            <li>
                                <span>|</span>
                            </li>
                            <li className="nav-item">
                                <a className="navServ" role="button" data-bs-target="#carr-Servicios" data-bs-slide-to="1"
                                    aria-label="Slide 1" onClick={()=>handleClick(1)}>Aplicaciones Móviles</a>
                            </li>
                            <li>
                                <span>|</span>
                            </li>
                            <li className="nav-item">
                                <a className="navServ" role="button" data-bs-target="#carr-Servicios" data-bs-slide-to="2"
                                    aria-label="Slide 2" onClick={()=>handleClick(2)}>APIs y Macros</a>
                            </li>
                        </ul>
            </div>
    </>
  );
}

export default CarouselServices