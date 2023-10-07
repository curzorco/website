/* Bootstrap ContactForm */
import React from 'react'
import ReactGA from 'react-ga';

//Email Js
import emailjs from 'emailjs-com'

import {Modal,Button,Form,Row,Col, CloseButton} from 'react-bootstrap';

import { useState } from 'react';


const ContactForm = () =>{

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

/*   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(
            'service_a5l4ttm',
            'template_av6gvpu',
            e.target,
            'eNe8uKKpNfUzRHmuA').then(res=>{
                console.log(res);
            }).catch(err=> console.log(err));
  } */

    return(
        <>
            
            <Button className="btn btn-color-8" onClick={handleShow}>Contact Us</Button>
            
            {/* Modal */}
            <Modal id="modalContact" show={show} onHide={handleClose} style={{fontFamily: "Roboto, sans-serif"}}>
                {/* Form */}
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    
                    <Modal.Header style={{backgroundColor: "#303031",borderRadius: "0px"}}>
                        <Modal.Title style={{color:"#f8f4e3"}}>Contact details</Modal.Title>
                        <CloseButton variant='white' onClick={handleClose} />
                    </Modal.Header>
                    
                    <Modal.Body style={{backgroundColor: "#303031",borderRadius: "0px"}}>
                            <Row className="12">
                            <Form.Group as={Col} md="12" controlId="validationCustom">
                                <Form.Label>Full name:</Form.Label>
                                <Form.Control
                                    name="name"
                                    type="text"
                                    placeholder="Name Last-name"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please, enter a valid name (e.g. Leonardo Preciado).
                                </Form.Control.Feedback>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    name="emailUser"
                                    type="email"
                                    placeholder="name@direction.com"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please, enter a valid email (e.g. Leonardo@hotmail.com).
                                </Form.Control.Feedback>
                                <Form.Label>Telephone:</Form.Label>
                                <Form.Control
                                    name="telUser"
                                    type="tel"
                                    inputMode="numeric"
                                    placeholder="442 492 3935"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please, enter a valid number (e.g. 442 492 3935).
                                </Form.Control.Feedback>
                                <Form.Label>Services of interest:</Form.Label>
                                <Form.Select name="servUser" required>
                                    <option defaultValue>Select...</option>
                                    <option>Web development</option>
                                    <option>Mobile apps</option>
                                    <option>APIS and Macros</option>
                                </Form.Select>
                                <Form.Label>Project description:</Form.Label>
                                <Form.Control
                                    name="projectDescUser"
                                    as="textarea"
                                    rows="3"
                                    placeholder="Brief project explanation (e.g. Restaurant Website)."
                                />
                            </Form.Group>
                            </Row>
                    </Modal.Body>
                    <Modal.Footer style={{backgroundColor: "#303031",borderRadius: "0px"}}>
                        <Button className="btn btn-color-8" type="submit">Send</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}



export default ContactForm