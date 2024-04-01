import React from 'react'
import style from '@/layout/layout.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'
import Link from 'next/link'
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { MdLocationOn , MdLocalPhone, MdEmail } from "react-icons/md";

export default function Footer() {

  return (

    <div className={style.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className={style.main_content}>
              <div className={style.image}>
                <Image src={Images.logo} alt='' fill priority />
              </div>

              <p className={style.para}>Circfast, developed by Circfast Gaming Private Limited, stands as India’s premier sports gaming platform, experiencing rapid growth as enthusiasts engage in fantasy sports gaming.</p>

              <div className={style.social_icon}>
                <Link href='#'><FaFacebookF /></Link>
                <Link href='#'><FaYoutube /></Link>
                <Link href='#'><FaInstagram /></Link>
                <Link href='#'><FaTwitter /></Link>
                <Link href='#'><FaTelegramPlane /></Link>
              </div>

            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className={style.content}>
                  <h6 className={style.heading}>Quick Links</h6>
                  <ul className={style.list}>
                    <li className={style.items}><Link href='/'>Home</Link></li>
                    <li className={style.items}><Link href='/About'>About</Link></li>
                    <li className={style.items}><Link href='#'>Faqs</Link></li>
                    <li className={style.items}><Link href='/ContactUs'>Contact Us</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className={style.content}>
                  <h6 className={style.heading}>Information</h6>
                  <ul className={style.list}>
                    <li className={style.items}><Link href='#'>Privacy Policy</Link></li>
                    <li className={style.items}><Link href='#'>Term & Condition</Link></li>
                    <li className={style.items}><Link href='#'>How To Play</Link></li>
                    <li className={style.items}><Link href='#'>Fair & Play</Link></li>
                    <li className={style.items}><Link href='#'>Point System</Link></li>
                    <li className={style.items}><Link href='#'>Responsible Play</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className={style.content}>
                  <h6 className={style.heading}>Contact</h6>
                  <ul className={style.list}>
                    <li className={style.items}><MdLocationOn  /><Link href='#'>Netaji Subhash Place, Wazirpur, Delhi, 110034</Link></li>
                    <li className={style.items}><MdLocalPhone /><Link href='#'>9875643219</Link></li>
                    <li className={style.items}><MdEmail /><Link href='#'>abc@gamil.com</Link></li>
                  </ul>
                </div>
              </div>


            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
