import React from 'react'
import style from '@/app/(WithHeaderAndFooter)/HowToPlay/HowToPlay.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'

export default function page() {
    return (

        <>
            <div className={style.play_sec}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h1 className={style.heading}>How To Play</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.play_content}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <h1 className={style.head}>Introduction</h1>
                            <p className={style.para}>Circfast, India's premier sports gaming platform boasting a rapidly expanding user community of over 20 million passionate sports enthusiasts.
                                Circfast is a game of strategy and sports acumen. Craft your dream team by selecting real-life players across Cricket, Football, Basketball, Hockey, Baseball, Kabaddi, Handball, and NBA, all within a budget cap of 100 credits. Your team's performance in actual matches determines your points, so it's your chance to demonstrate your expertise and strive for victory!</p>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.bg_img}>
                                <div className={style.image} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <Image src={Images.img1} alt='' fill priority />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 d-flex flex-column justify-content-center">
                            <h6 className={style.head1}>1. Select A Match</h6>
                            <p className={style.para1}>Choose the match you want to play and show-off your skills.</p>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 d-flex flex-column justify-content-center">
                            <h6 className={style.head1}>2. Select Your Playing11</h6>
                            <p className={style.para1}>Create your own team by selecting different players within a defined virtual credit points.</p>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.bg_img}>
                                <div className={style.image} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <Image src={Images.img2} alt='' fill priority />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.bg_img}>
                                <div className={style.image} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <Image src={Images.img3} alt='' fill priority />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 d-flex flex-column justify-content-center">
                            <h6 className={style.head1}>3. Choose Your Captain & Vice Captain</h6>
                            <p className={style.para1}>Once you've selected your starting lineup, it's time to designate your captain and vice-captain, who will enhance your points tally. The captain earns double points, while the vice-captain earns 1.5 times the points based on their performance on the field.</p>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 d-flex flex-column justify-content-center">
                            <h6 className={style.head1}>4. One League, Multiple Teams</h6>
                            <p className={style.para1}>Boost your chances of winning by entering multiple times. Participate in a "Multiple Entry" League where you can submit up to 30 unique teams. Terms and conditions apply.</p>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.bg_img}>
                                <div className={style.image} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <Image src={Images.img4} alt='' fill priority />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.bg_img}>
                                <div className={style.image} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <Image src={Images.img5} alt='' fill priority />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 d-flex flex-column justify-content-center">
                            <h6 className={style.head1}>5. Become a Part of a League</h6>
                            <p className={style.para1}>Join a league or contest hosted by Cricfast with your chosen playing XI to compete against other users. Alternatively, create or participate in a private league with your friends for some friendly competition.</p>
                            <p className={style.para1}>Your winnings are credited soon after the completion of the match. Check & Enjoy!</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
