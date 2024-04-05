import React from 'react'
import style from '@/app/(WithHeaderAndFooter)/About/About.module.scss'
import { Images } from '@/assets/utility/Images'
import Image from 'next/image'

export default function page() {

    return (

        <div className={style.about_sec}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 mb-2">
                        <div className={style.bg_color} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <div className={style.image}>
                                <Image src={Images.logo} alt='' fill priority />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 mb-2 d-flex flex-column justify-content-center">
                        <div className={style.content}>
                            <h1 className={style.heading}>Who Are We</h1>
                            <p className={style.para}>Online Fantasy Sports Is Our Passion. We are a group of avid sports enthusiasts dedicated to providing fellow cricket fans with an unparalleled experience. We serve as a hub for sports aficionados to fulfill their fantasy cravings, delivering the ultimate online fantasy sports gaming platform. Our goal is to enhance users' skill levels in playing fantasy sports within a secure environment. We prioritize ensuring that our users enjoy seamless, engaging, and trustworthy gaming sessions. Passionate about sports?</p>
                        </div>
                    </div>


                    <div className="col-lg-8 col-md-8 col-sm-8  d-flex flex-column justify-content-center">
                        <div className={style.content}>
                            <h1 className={style.heading}>Our Mission</h1>
                            <p className={style.para}>At Cricfast, our objective is to serve as your ultimate destination for an exhilarating fantasy cricket adventure. We're not merely another fantasy cricket application; we're the premier fantasy app that immerses you in the game you're passionate about. We ensure that you're fully immersed in the game you adore, providing opportunities to win tangible cash prizes and other fantastic rewards. So prepare yourself as we transport you to a realm of 'fantasies' where you compete alongside the game's elite players. We provide a secure and protected platform for indulging in fantasy sports at your convenience.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 ">
                        <div className={style.image} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <Image src={Images.bg_img} alt='' fill priority />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
