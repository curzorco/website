/* Webpage Home English */
import React from 'react'

//Components
import CarouselServices_En from './CarouselServices_En';
import CarouselProcess_En from './CarouselProcess_En';
import ContactFormReact_En from './ContactFormReact_En';

const Home_En = () => {
  return (
    <>
          <div id="section0" className="container-fluid d-flex align-items-center justify-content-center">
              <div className="row">

                <div className="col-md-12 text-center">
                    <h1 className="bigLetters">Transforming businesses <br/>with digitization</h1>
                    <p className="subLetters">If you are an entrepreneur or business, <br/>we can help you to transform an idea <br/>into a digital product</p>
                    <hr className="separador"/>
                    <ContactFormReact_En />
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
                <h2 className="h2Dark">About us</h2>
                <h3>Digitization and Innovation for business</h3><br/>
                <p>Located in Queretaro, Mexico.<br/>
                    We are a technology agency focused on develop software.<br/>
                    We implement innovation and digitization to meet the needs of our customers.<br/>
                    Our team uses the latest technology to provide you innovative solutions.<br/>
                    We use smart development process to apply solutions.<br/>
                    It will be a pleasure to help you.
                </p>
              </div>
                    
            </div>
          </div>

          <div id="section2" className="container-fluid">

            <h2 className="h2Light">Services</h2>
            <CarouselServices_En />
              
          </div>

          <div id="section3" className="container-fluid">

                <h2 className="h2Dark">Development Process</h2>
                <CarouselProcess_En />

          </div>

          <div id="section4" className="container-fluid d-flex align-items-center justify-content-center">
                <div className="row">

                    <div className="col-md-12 text-center">
                        <h1 className="bigLetters">Let's build your idea</h1>
                        <hr className="separador"/>
                        <ContactFormReact_En />
                    </div>

                </div>

                

          </div>
    </>
  );
}

export default Home_En