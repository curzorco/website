/* Bootstrap CarouselProcess */
import React from 'react'

import {Carousel} from 'react-bootstrap';

const CarouselProcess = () =>{

    return(
        <>
            <Carousel id="carr-Proceso" className="container Car" interval={null} controls={false} variant="dark">

                    <Carousel.Item  id="cIdea">
                                <div className="row Etapa" style={{backgroundImage: `url(${require('../static/images/Proceso/ideacion.webp')})`}}>

                                    <div className="col-12 col-md-6 order-md-last PicI"></div>

                                    <div className="col-12 col-md-6 order-md-first Tex">
                                        <h3 className="h3Light">Discovery</h3><br/>
                                        <p>Every single software development project starts with an idea.
                                            We help our customers to conceptualize their vision
                                            or to understand in deep what they are looking.
                                        </p>
                                    </div>
                                </div>

                                <div className="row" style={{margin:"2em 0em"}}>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center"
                                        style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Ideation</h4>
                                            <p>On this phase are made activities that favour the creation of endless choices.
                                                The aim is provide you a range of possibilities that fit to your business.<br/>
                                                We ensure to understand your necessities:
                                            </p>
                                            <ul>
                                                <li>Goal</li>
                                                <li>Scope</li>
                                                <li>Particularities</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Research</h4>
                                            <p>With the obtained information from ideation phase we start a process of research.
                                                This step is concluded with a clear notion of the final product and with a plan which
                                                will lead the project.<br/>
                                                We collect the information and established:
                                            </p>
                                            <ul>
                                                <li>Action plan</li>
                                                <li>Necessary resources</li>
                                                <li>Appropriate technologies</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            
                    </Carousel.Item>
                    
                    <Carousel.Item  id="cConcep">
                                <div className="row Etapa" style={{backgroundImage: `url(${require('../static/images/Proceso/conceptualizacion.webp')})`}}>

                                    <div className="col-12 col-md-6 order-md-last PicC"></div>

                                    <div className="col-12 col-md-6 order-md-first Tex">
                                        <h3 className="h3Light">Conceptualization</h3><br/>
                                        <p>The ideas and options previously discover come true.<br/>
                                            On this stage we integrate and develop a prototype close to the final product
                                            which will permit to detect the project challenges.
                                        </p>
                                    </div>
                                </div>

                                <div className="row" style={{margin:"2em 0em"}}>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Design</h4>
                                            <p>We create and delimit the project structure defining
                                                the user interface and environment functionality.<br/>
                                                We focus our resources to work in:
                                            </p>
                                            <ul>
                                                <li>Aspect and usability</li>
                                                <li>User experience</li>
                                                <li>Efficiency</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Prototyping</h4>
                                            <p>Our team select the appropriate technology to integrate the design work.
                                                Likewise, this phase permits to identify possible errors, improvements and complements.
                                                Through tests are checked:<br/>
                                            </p>
                                            <ul>
                                                <li>Functionality</li>
                                                <li>Architecture</li>
                                                <li>Development time</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            
                    </Carousel.Item>

                    <Carousel.Item  id="cDesarr">
                                <div className="row Etapa" style={{backgroundImage: `url(${require('../static/images/Proceso/desarrollo.webp')})`}}>

                                    <div className="col-12 col-md-6 order-md-last PicD"></div>

                                    <div className="col-12 col-md-6 order-md-first Tex">
                                        <h3 className="h3Light">Development</h3><br/>
                                        <p>When our customer is satisfied with the concept scheme,<br/>
                                            the project development is started.
                                        </p>
                                    </div>
                                </div>

                                <div className="row" style={{margin:"2em 0em"}}>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Planning</h4>
                                            <p>Once the requirements have been defined,
                                                our team makes the project planning considering:
                                            </p>
                                            <ul>
                                                <li>Key components</li>
                                                <li>Milestones</li>
                                                <li>Deliverables</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Building</h4>
                                            <p>During this phase the product is developed making use of
                                                all previous collected information.
                                                Likewise, each project activity is managed to stick
                                                as much as possible to the delivering deadline.
                                            </p>
                                            <ul>
                                                <li>Responsive building</li>
                                                <li>Coding development</li>
                                                <li>Technology configuration</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            
                    </Carousel.Item>

                    <Carousel.Item  id="cLanzamiento">
                                <div className="row Etapa" style={{backgroundImage: `url(${require('../static/images/Proceso/lanzamiento.webp')})`}}>

                                    <div className="col-12 col-md-6 order-md-last PicL"></div>

                                    <div className="col-12 col-md-6 order-md-first Tex">
                                        <h3 className="h3Light">Launching</h3><br/>
                                        <p>Final stage in which the servers, data bases and technologies 
                                            are configured.<br/>
                                            During this stage the functionality of the product is checked.
                                        </p>
                                    </div>
                                </div>

                                <div className="row" style={{margin:"2em 0em"}}>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Testing</h4>
                                            <p>Phase in which the product is tested to ensure 
                                                its functionality and efficiency.
                                                Activities carried out:
                                            </p>
                                            <ul>
                                                <li>Real time changes</li>
                                                <li>Quick deployment</li>
                                                <li>Close customer follow-up</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Deployment</h4>
                                            <p>Our team focuses all the resources for preparing 
                                                the appropriate infrastructure.
                                                Considering during this phase:
                                            </p>
                                            <ul>
                                                <li>Technology configuration</li>
                                                <li>Storage</li>
                                                <li>Services activation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            
                    </Carousel.Item>

            </Carousel>
        </>
    );
}

export default CarouselProcess