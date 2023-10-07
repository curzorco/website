/* Bootstrap CarouselServices */
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

    return(
        <>
            <Carousel id="carr-Servicios" interval={null} indicators={false} controls={false} touch={false}>

                <Carousel.Item  id="cDesarrolloWeb">
                            <div className="row">

                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <img src={require('../static/images/Servicios/DesarrolloWeb.webp')} alt="Ups..." style={{width: "90%"}}/>
                                </div>

                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <div className="container Serv">

                                        <h3 className="h3Light">Web Development</h3><br/>
                                        <div>We create apps and websites that meet the needs of our customers.<br/>
                                            Focused on making intuitive and functional digital experiences for your users.<br/>
                                            The main <b>products</b> and <b>services</b> developed are:
                                        <ul>
                                            <li><b>Websites and Webapplications</b></li>
                                            <li><b>E-commerce</b></li>
                                            <li><b>Landing Pages</b></li>
                                            <li><b>Content Management Systems</b></li>
                                        </ul>
                                        However, we are here to make real any idea or project you want, do not hesitate to contact us.
                                        </div><br/>

                                        <span><b>Technologies:</b></span>
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
                            <div className="row">

                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <img src={require('../static/images/Servicios/Movil.webp')} alt="Ups..." style={{height: "auto"}}/>
                                </div>

                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <div className="container Serv">

                                        <h3 className="h3Light">Mobile Apps</h3><br/>
                                        <div>We produce adapted apps to your business vision.<br/>
                                            Through transversal strategies and innovation we provide bright solutions.<br/>
                                            Our <b>developments</b> are align to:
                                        <ul>
                                            <li><b>Crossplatform</b> Apps.</li>
                                        </ul>
                                        These type of apps allow to improve the launch time 
                                        and can be used on different environments (ios, android, ...).
                                        </div><br/>

                                        <span><b>Technologies:</b></span>
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

                                        <h3 className="h3Light">APIs and Macros</h3><br/>
                                        <div>We make automation tools and process improvement through
                                            Application Programming Interfaces (API's) and Macros.<br/>
                                            By means of our extensive experience and ingenuity we provide tools that 
                                            optimize your business.<br></br>
                                            The <b>services</b> and <b>products</b> on which we focus are:
                                        <ul>
                                            <li><b>Advisory and Consultancy</b></li>
                                            <li><b>Unigraphics NX</b></li>
                                            <li><b>Solid Works</b></li>
                                            <li><b>Microsoft Office</b></li>
                                        </ul>
                                        </div><br/>

                                        <span><b>Technologies:</b></span>
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
                                aria-label="Slide 0" onClick={()=>handleClick(0)}>Web Development</a>
                        </li>
                        <li>
                            <span>|</span>
                        </li>
                        <li className="nav-item">
                            <a className="navServ" role="button" data-bs-target="#carr-Servicios" data-bs-slide-to="1"
                                aria-label="Slide 1" onClick={()=>handleClick(1)}>Mobile Apps</a>
                        </li>
                        <li>
                            <span>|</span>
                        </li>
                        <li className="nav-item">
                            <a className="navServ" role="button" data-bs-target="#carr-Servicios" data-bs-slide-to="2"
                                aria-label="Slide 2" onClick={()=>handleClick(2)}>APIs and Macros</a>
                        </li>
                    </ul>
                </div>
        </>
    );
}

export default CarouselServices