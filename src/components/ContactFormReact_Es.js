/* React-Bootstrap ContactForm Español */
import React from 'react'
import ReactGA from 'react-ga';

//Email Js
import emailjs from 'emailjs-com'

import {Modal,Button,Form,Row,Col, CloseButton} from 'react-bootstrap';

import { useState } from 'react';


const ContactFormReact_Es = () =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () =>{ 
        setShow(true);
        ReactGA.event({
            category: "Contact",
            action: "Click",
        });
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
        setValidated(true);
        emailjs.sendForm(
            'service_a5l4ttm',
            'template_av6gvpu',
            event.target,
            'eNe8uKKpNfUzRHmuA')
    }
  };

    return(
        <>
            
            <Button className="btn btn-color-8" onClick={handleShow}>Contáctanos</Button>
            
            {/* Modal */}
            <Modal id="modalContact" show={show} onHide={handleClose} style={{fontFamily: "Roboto, sans-serif"}}>
                {/* Form */}
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    
                    <Modal.Header style={{backgroundColor: "#303031",borderRadius: "0px"}}>
                        <Modal.Title style={{color:"#f8f4e3"}}>Datos de contacto</Modal.Title>
                        <CloseButton variant='white' onClick={handleClose} />
                    </Modal.Header>
                    
                    <Modal.Body style={{backgroundColor: "#303031",borderRadius: "0px"}}>
                            <Row className="12">
                            <Form.Group as={Col} md="12" controlId="validationCustom">
                                <Form.Label>Nombre completo:</Form.Label>
                                <Form.Control
                                    name="name"
                                    type="text"
                                    placeholder="Nombre Apellidos"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, introducir un Nombre válido (ej. Leonardo Preciado).
                                </Form.Control.Feedback>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    name="emailUser"
                                    type="email"
                                    placeholder="nombre@dirección.com"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, introducir un Email válido (ej. Leonardo@hotmail.com).
                                </Form.Control.Feedback>
                                <Form.Label>Teléfono:</Form.Label>
                                <Form.Control
                                    name="telUser"
                                    type="tel"
                                    inputMode="numeric"
                                    placeholder="442 492 3935"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, introducir un Número válido (ej. 442 492 3935).
                                </Form.Control.Feedback>
                                <Form.Label>Servicio de interés:</Form.Label>
                                <Form.Select name="servUser" required>
                                    <option defaultValue>Seleccionar...</option>
                                    <option>Desarrollo Web</option>
                                    <option>Aplicaciones Móviles</option>
                                    <option>APIS y Macros</option>
                                </Form.Select>
                                <Form.Label>Descripción del Proyecto:</Form.Label>
                                <Form.Control
                                    name="projectDescUser"
                                    as="textarea"
                                    rows="3"
                                    placeholder="Breve explicación del Proyecto (ej. Página Web para restaurante)."
                                />
                            </Form.Group>
                            </Row>
                    </Modal.Body>
                    <Modal.Footer style={{backgroundColor: "#303031",borderRadius: "0px"}}>
                        <Button className="btn btn-color-8" type="submit">Enviar</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default ContactFormReact_Es