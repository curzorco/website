/* Footer */
import React from 'react'

//Router
import {Link} from "react-router-dom";

import {OverlayTrigger,Tooltip} from 'react-bootstrap';

const Footer_En = () => {

  const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    curzor.co@gmail.com
  </Tooltip>
  );

  const renderTooltipTel = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    +52 442 492 3935
  </Tooltip>
  );

  return (
    <>
        <div id="section5" className="container-fluid">
            <footer>
              <div className="container" style={{padding:"10px"}}>

                <div className="row">
                  <div className="col-md text-center text-md-start">
                    <Link to="/en">
                      <picture >
                        <source srcSet={require("../static/images/LogoAzulCentrado.webp")} media="(max-width: 768px)" />
                        <source srcSet={require("../static/images/LogoAzul.webp")} />
                        <img src={require("../static/images/LogoAzul.webp")} style={{width: "169px",height:"45px"}} alt="Ups!"/>
                      </picture>
                    </Link>
                  </div>

                  <div className="col-md text-center text-md-end">
                      <ul style={{padding:"0",margin:"1em 0em"}}>
                          <li style={{listStyle:"none",display:"inline",padding:"8px"}}>
                              <a href="https://www.facebook.com/CurzorMX" target="_blank" style={{textDecoration:"none"}}>
                                  <i className="fa-brands fa-facebook fa-lg" style={{color: "#18223b"}}></i>
                              </a>
                          </li>
                           {/* <li style={{listStyle:"none",display:"inline",padding:"8px"}}>
                              <a href="https://www.linkedin.com/company/curzor" target="_blank" style={{textDecoration:"none"}}>
                                  <i className="fa-brands fa-linkedin fa-lg" style={{color: "#18223b"}}></i>
                              </a>
                          </li> */}
                          <li style={{listStyle:"none",display:"inline",padding:"8px"}}>
                              <a href="mailto:curzor.co@gmail.com" target="_blank" style={{textDecoration:"none"}}>
                                <OverlayTrigger
                                  placement="top"
                                  delay={{ show: 250, hide: 600 }}
                                  overlay={renderTooltip}
                                >
                                  <i className="fa-solid fa-envelope fa-lg" style={{color: "#18223b"}}></i>
                                </OverlayTrigger>
                              </a>
                          </li>
                          <li style={{listStyle:"none",display:"inline",padding:"8px"}}>
                              <a href="tel:+524424923935" target="_blank" style={{textDecoration:"none"}}>
                                <OverlayTrigger
                                  placement="top"
                                  delay={{ show: 250, hide: 600 }}
                                  overlay={renderTooltipTel}
                                >
                                  <i className="fa-solid fa-phone" style={{color: "#18223b"}}></i>
                                </OverlayTrigger>
                              </a>
                          </li>
                      </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md text-center text-md-start">
                    <p style={{marginBottom:"0"}}> Copyright © 2022. All Rights Reserved.
                      <br/>
                      Curzor | Coding for Business
                    </p>
                  </div>
                  <div className="col-md text-center text-md-end"><br/>
                    
                      <Link to="/privacy" onClick={window.scrollTo(0,0)}>Privacy Policy</Link>
                    
                  </div>
                </div>

              </div>
            </footer>
        </div>
    </>
  );
}

export default Footer_En