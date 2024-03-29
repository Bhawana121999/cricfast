'use client'

import React, { useState, useEffect, useRef, useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Images } from '@/assets/utility/Images';
import style from '@/layout/layout.module.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LuPhoneCall, LuMail } from "react-icons/lu";
import { HiOutlineSearch } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { IoCartOutline, IoClose } from "react-icons/io5";
import {
    BsSearch,
} from "react-icons/bs";
import product1 from '@/assets/images/product1.webp';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function Header(){

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

            <Navbar expand='lg' className={style.header}>
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
                                <Nav.Link href="/Shop" className={style.link}>Shop</Nav.Link>
                                <Nav.Link href="/About" className={style.link}>About</Nav.Link>
                                <Nav.Link href="/Blogs" className={style.link}>Blog </Nav.Link>
                                <Nav.Link href="/Contact" className={style.link}>Contact Us </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>



                    </Navbar.Offcanvas>
                </Container>
            </Navbar>



        </>
    )
}