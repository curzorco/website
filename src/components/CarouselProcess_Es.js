/* Bootstrap CarouselProcess Español*/
import React from 'react'

import {Carousel} from 'react-bootstrap';

const CarouselProcess_Es = () =>{

    return(
        <>
            <Carousel id="carr-Proceso" className="container Car" interval={null} controls={false} variant="dark">

                        <Carousel.Item  id="cIdea">
                                <div className="row Etapa" style={{backgroundImage: `url(${require('../static/images/Proceso/ideacion.webp')})`}}>
                                    <div className="col-12 col-md-6 order-md-last PicI"></div>

                                    <div className="col-12 col-md-6 order-md-first Tex">
                                        <h3 className="h3Light">Descubrimiento</h3><br/>
                                        <p>Todo proyecto de desarrollo de software comienza con una idea.
                                            Ayudamos a nuestros clientes a conceptualizar su visión
                                            o a entender en profundidad lo que están buscando.
                                        </p>
                                    </div>
                                </div>

                                <div className="row" style={{margin:"2em 0em"}}>
                                    
                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center"style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Ideación</h4>
                                            <p>En esta fase se realizan actividades que favorecen la generación de un sinfín de opciones.
                                                La finalidad es poder brindarte un abanico de posibilidades que se ajusten a tu negocio.
                                                Nos aseguramos de entender tus necesidades:
                                            </p>
                                            <ul>
                                                <li>Objetivo</li>
                                                <li>Alcance</li>
                                                <li>Particularidades</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Investigación</h4>
                                            <p>Con la información obtenida en la fase de ideación comenzamos un proceso de búsqueda.
                                                Concluimos este paso con una noción clara del producto final y un plan que dirigirá el proyecto.
                                                Reunimos la información y establecemos:
                                            </p>
                                            <ul>
                                                <li>Plan de acción</li>
                                                <li>Recursos necesarios</li>
                                                <li>Tecnologías adecuadas</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                        </Carousel.Item>

                        <Carousel.Item  id="cConcep">
                                <div className="row Etapa" style={{backgroundImage: `url(${require('../static/images/Proceso/conceptualizacion.webp')})`}}>
                                    <div className="col-12 col-md-6 order-md-last PicC"></div>

                                    <div className="col-12 col-md-6 order-md-first Tex">
                                        <h3 className="h3Light">Conceptualización</h3><br/>
                                        <p>Las ideas y opciones previamente descubiertas se convierten en realidad.
                                            En esta etapa integramos y desarrollamos un prototipo cercano al producto
                                            final que permitirá identificar los desafíos inherentes al proyecto.
                                        </p>
                                    </div>

                                </div>

                                <div className="row" style={{margin:"2em 0em"}}>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Diseño</h4>
                                            <p>Creamos y acotamos la estructura del proyecto definiendo la interfaz de usuario y funcionalidad de entorno.
                                                Enfocamos nuestros recursos a trabajar en:
                                            </p>
                                            <ul>
                                                <li>Aspecto y usabilidad</li>
                                                <li>Experiencia de usuario</li>
                                                <li>Eficiencia</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Prototipado</h4>
                                            <p>Nuestro equipo selecciona las tecnologías adecuadas para integrar el trabajo de diseño.
                                                De igual forma, esta fase nos permite reconocer posibles fallos, mejoras y complementos.
                                                Mediante pruebas se comprueba:<br/>
                                            </p>
                                            <ul>
                                                <li>Funcionalidad</li>
                                                <li>Arquitectura</li>
                                                <li>Duración de desarrollo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </Carousel.Item>

                        <Carousel.Item  id="cDesarr">
                                <div className="row Etapa" style={{backgroundImage: `url(${require('../static/images/Proceso/desarrollo.webp')})`}}>

                                    <div className="col-12 col-md-6 order-md-last PicD"></div>

                                    <div className="col-12 col-md-6 order-md-first Tex">
                                        <h3 className="h3Light">Desarrollo</h3><br/>
                                        <p>Cuando el cliente está contento con la propuesta de concepto,
                                            comenzamos con el desarrollo del proyecto.
                                        </p>
                                    </div>
                                </div>

                                <div className="row" style={{margin:"2em 0em"}}>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Planificación</h4>
                                            <p>Una vez que los requerimientos han sido definidos,
                                                nuestro equipo realiza la planificación del proyecto considerando:
                                            </p>
                                            <ul>
                                                <li>Componentes clave</li>
                                                <li>Hitos</li>
                                                <li>Entregables</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Construcción</h4>
                                            <p>Durante esta fase se desarrolla el producto haciendo uso
                                                de toda la información previamente recabada.
                                                Asimismo, gestionamos cada actividad del proyecto para
                                                apegarnos lo más cerca a la fecha límite de entrega.
                                            </p>
                                            <ul>
                                                <li>Construcción responsiva</li>
                                                <li>Desarrollo de código</li>
                                                <li>Configuración de tecnologías</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </Carousel.Item>

                        <Carousel.Item  id="cLanzamiento">
                                <div className="row Etapa" style={{backgroundImage: `url(${require('../static/images/Proceso/lanzamiento.webp')})`}}>

                                    <div className="col-12 col-md-6 order-md-last PicL"></div>

                                    <div className="col-12 col-md-6 order-md-first Tex">
                                        <h3 className="h3Light">Lanzamiento</h3><br/>
                                        <p>Etapa final en la que configuramos los servidores, bases de datos y tecnologías.
                                            Durante esta etapa se comprueba la funcionalidad del producto.
                                        </p>
                                    </div>
                                </div>

                                <div className="row" style={{margin:"2em 0em"}}>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Pruebas</h4>
                                            <p>Fase en la que se prueba el producto para garantizar su funcionalidad y eficiencia.
                                                Actividades llevadas a cabo:
                                            </p>
                                            <ul>
                                                <li>Modificaciones en tiempo real</li>
                                                <li>Despliegue rápido</li>
                                                <li>Seguimiento cercano al cliente</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 d-flex align-content-center justify-content-center" style={{padding:"0"}}>
                                        <div className="container Fase">
                                            <h4 style={{color: "#02cc9e"}}>Despliegue</h4>
                                            <p>Nuestro equipo enfoca todos los recursos en preparar la infraestructura apropiadamente.
                                                Consideraciones durante esta fase:
                                            </p>
                                            <ul>
                                                <li>Configuración de Tecnologías</li>
                                                <li>Almacenamiento</li>
                                                <li>Alta de servicios</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </Carousel.Item>
                    
            </Carousel>
        </>
    );
}

export default CarouselProcess_Es