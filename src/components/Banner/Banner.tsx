import React from 'react'
import style from '@/components/Banner/Banner.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'

export default function Banner() {

  return (

    <div className={style.banner_sec}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-7 col-sm-7 text-center">
            <div className={style.main_content}>
              <h1 className={style.heading} data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
                Join the Fun & Win Big!
              </h1>
              <p className={style.para} data-aos="fade-down">Our app is a suite of utilities crafted to enhance the thrill of fantasy sports.</p>

              <div className={style.image}>
                <Link href='#'><Image src={Images.button} alt='' fill priority /></Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
