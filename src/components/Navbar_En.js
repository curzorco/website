/* Component NavBar English*/

/* CSS */
import './Navbar.css';
/* Picture Imports */
import logo from '../static/images/LogoBlanco.webp'
/* Hooks */
import React, { useState, useEffect } from 'react';
/* Router */
import {Link} from 'react-router-dom';
/* HashLink */
import {HashLink} from 'react-router-hash-link';

const Navbar_En = ({s0="About us",s1="Services",s2="Development Process",s3="Contact",s4="fa-solid fa-language fa-lg"}) =>{

    const [navbar, setNavbar] = useState(false);
    const [expanded, setExpanded] = useState(false);

    /* Navbar transparency on Scroll */
    const changeBackground =()=>{
        if(window.scrollY >= 50){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    };

    //Cleanup Function
    useEffect(()=>{
        window.addEventListener('scroll', changeBackground); 
        //Cleanup Function: 
        return () =>{
        window.removeEventListener('scroll',changeBackground);
    }
  },);

    return(
        <> 
            <nav className={navbar ? 'navbar fixed-top navbar-expand-md navbar-dark barraScroll' : 'navbar fixed-top navbar-expand-md navbar-dark'}>
                <div className="container-fluid">
                    <Link to="/en">
                        <img id="logo" src={logo} alt="Ups!" className="d-inline-block align-text-top"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={expanded ? "expand navbar-collapse" : "collapse navbar-collapse"} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <HashLink className="nav-link active" to="#section1" onClick={()=>{setExpanded(false)}} onMouseUp={()=>{setExpanded(true)}}>
                                    {s0}
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link active" to="#section2" onClick={()=>{setExpanded(false)}} onMouseUp={()=>{setExpanded(true)}}>
                                    {s1}
                                </HashLink>
                            </li>
                            {/* <!--
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            --> */}
                            <li className="nav-item">
                                <HashLink className="nav-link active" to="#section3" onClick={()=>{setExpanded(false)}} onMouseUp={()=>{setExpanded(true)}}>
                                    {s2}
                                </HashLink>
                            </li>
                            {/* <!--
                            <li className="nav-item">
                                <a className="nav-link disabled">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Carrers</a>
                            </li>
                            --> */}
                            <li className="nav-item">
                                <HashLink className="nav-link active" to="#section4" onClick={()=>{setExpanded(false)}} onMouseUp={()=>{setExpanded(true)}}>
                                    {s3}
                                </HashLink>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className={s4}></i>
                                </span>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink" style={{minWidth:"5rem",marginTop:"0.7rem"}}>
                                    <li><Link className="dropdown-item" to="/" onClick={()=>{setExpanded(false)}} onMouseUp={()=>{setExpanded(true)}}>Spanish</Link></li>
                                    <li><Link className="dropdown-item" to="/en" onClick={()=>{setExpanded(false)}} onMouseUp={()=>{setExpanded(true)}}>English</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar_En