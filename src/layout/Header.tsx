'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Images } from '@/assets/utility/Images';
import style from '@/layout/layout.module.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { usePathname } from 'next/navigation';




export default function Header(){

    const currentRoute = usePathname();

    return (

        <>

            {/* <div className={`${style.top_bar} position-relative`}>
                <div className="container">
                    <div className={style.content}>
                        <Link href='#'><LuMail /> email</Link>
                        <Link href='#'><LuPhoneCall /> phoneNumber</Link>
                    </div>
                </div>
            </div> */}

            <Navbar expand='lg' className={`${currentRoute == "/" ? `${style.header}` : `${style.other_header}`}  `}>
                <Container>
                    <Navbar.Brand href="/" className={style.logo}><Image src={Images.logo} alt='' fill priority /></Navbar.Brand>
                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand' />
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand'
                        aria-labelledby='offcanvasNavbarLabel-expand'
                        className={style.main}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className={`${style.body} d-flex justify-content-center`}>
                            <Nav className={`${style.nav} justify-content-center pe-3`}>
                                <Nav.Link href="/" className={style.link}>Home</Nav.Link>
                                <Nav.Link href="/About" className={style.link}>About</Nav.Link>
                                <Nav.Link href="/Faqs" className={style.link}>Faqs</Nav.Link>
                                <Nav.Link href="/ContactUs" className={style.link}>Contact Us </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>



                    </Navbar.Offcanvas>
                </Container>
            </Navbar>



        </>
    )
}