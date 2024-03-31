import React from 'react'
import style from '@/app/(WithHeaderAndFooter)/ContactUs/ContactUs.module.scss'
import Link from 'next/link'
import { FiPhoneCall } from 'react-icons/fi'
import { IoAddSharp, IoLogoLinkedin } from 'react-icons/io5'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'

export default function page() {
    return (


        <div className={style.contact_sec}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <h1 className={style.heading}>Contact Us</h1>
                        <p className={style.para}>Any question or remarks? Just write us a message!</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-5 p-0">
                            <div className={style.contact_detail}>
                                <h6 className={style.head}>Contact Information</h6>
                                <p className={style.para1}>Say something to start a live chat!</p>

                                <div className={style.detail}>
                                    <div className={style.number}>
                                        <FiPhoneCall />
                                        <Link href='#' className={style.text}><IoAddSharp /> 91 8569523695</Link>
                                    </div>
                                    <div className={style.number}>
                                        <HiOutlineMail />
                                        <Link href='#' className={style.text}> Info<span className={style.symbol}>@</span>plenti.com</Link>
                                    </div>
                                    <div className={style.number}>
                                        <HiOutlineLocationMarker />
                                        <Link href='#' className={style.text}>D MALL, 123, Wazirpur Flyover, Netaji Subhash Place, Pitampura, New Delhi, Delhi 110034</Link>
                                    </div>
                                </div>

                                <div className={style.social_icon}>
                                    <Link href='#'><IoLogoLinkedin /></Link>
                                    <Link href='#'><FaSquareXTwitter /></Link>
                                    <Link href='#'><AiFillInstagram /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 col-sm-7 p-0">
                            <div className={style.form}>
                                <div className="row">
                                    <div className=" col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <label className={`${style.label} form-label`}>First Name</label>
                                        <input type="email" className={`${style.control} form-control`} placeholder="Write your first name" />
                                    </div>
                                    <div className=" col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <label className={`${style.label} form-label`}>Last Name</label>
                                        <input type="email" className={`${style.control} form-control`} placeholder="Write your last name" />
                                    </div>
                                    <div className=" col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <label className={`${style.label} form-label`}>Email Address</label>
                                        <input type="email" className={`${style.control} form-control`} placeholder="Write your mail" />
                                    </div>
                                    <div className=" col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <label className={`${style.label} form-label`}>Phone Number</label>
                                        <input type="email" className={`${style.control} form-control`} placeholder="Write your phone number" />
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                                        <label className={`${style.label} form-label`}>Message</label>
                                        <textarea className={`${style.textarea} form-control`} placeholder="Write your message..." />
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <button className={`${style.btn1} btn`}>Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
