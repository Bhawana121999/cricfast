import React from 'react'
import style from '@/components/WhyChoose/WhyChoose.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'

export default function WhyChoose() {

    return (

        <div className={style.choose_us}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <h1 className={style.heading}>Why Should Circfast ?</h1>
                        <p className={style.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <div className={style.card_box}>
                                        <div className={style.icon}>
                                            <div className={style.image}>
                                                <Image src={Images.icon1} alt='' fill priority />
                                            </div>
                                        </div>

                                        <div className={style.card_text}>
                                            <h6 className={style.head}>Sign Up Rewards</h6>
                                            <p className={style.desc}>Register & win Cash as Bonus!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <div className={style.card_box}>
                                        <div className={style.icon}>
                                            <div className={style.image}>
                                                <Image src={Images.icon2} alt='' fill priority />
                                            </div>
                                        </div>

                                        <div className={style.card_text}>
                                            <h6 className={style.head}>No Commission Charged</h6>
                                            <p className={style.desc}>Save your money every time you participate in a contest.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <div className={style.card_box}>
                                        <div className={style.icon}>
                                            <div className={style.image}>
                                                <Image src={Images.icon3} alt='' fill priority />
                                            </div>
                                        </div>

                                        <div className={style.card_text}>
                                            <h6 className={style.head}>Opinions & Polls</h6>
                                            <p className={style.desc}>Respond & claim cash prizes worth Lakhs!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <div className={style.card_box}>
                                        <div className={style.icon}>
                                            <div className={style.image}>
                                                <Image src={Images.icon4} alt='' fill priority />
                                            </div>
                                        </div>

                                        <div className={style.card_text}>
                                            <h6 className={style.head}>Second Innings Contest</h6>
                                            <p className={style.desc}>Now, create your fantasy team even for the second inning of a match.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.image}>
                                <Image src={Images.choose} alt='' fill priority />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <div className={style.card_box}>
                                        <div className={style.icon}>
                                            <div className={style.image}>
                                                <Image src={Images.icon1} alt='' fill priority />
                                            </div>
                                        </div>

                                        <div className={style.card_text}>
                                            <h6 className={style.head}>Minimal Entry Charges</h6>
                                            <p className={style.desc}>In various contest categories starting at just Rs 1.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <div className={style.card_box}>
                                        <div className={style.icon}>
                                            <div className={style.image}>
                                                <Image src={Images.icon2} alt='' fill priority />
                                            </div>
                                        </div>

                                        <div className={style.card_text}>
                                            <h6 className={style.head}>Refer & Earn</h6>
                                            <p className={style.desc}>Refer your friends and earn a commission on every contest your friends participate in.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <div className={style.card_box}>
                                        <div className={style.icon}>
                                            <div className={style.image}>
                                                <Image src={Images.icon3} alt='' fill priority />
                                            </div>
                                        </div>

                                        <div className={style.card_text}>
                                            <h6 className={style.head}>Instant Withdrawals</h6>
                                            <p className={style.desc}>Experience immediate cash withdrawals after completing one-time account verification.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <div className={style.card_box}>
                                        <div className={style.icon}>
                                            <div className={style.image}>
                                                <Image src={Images.icon4} alt='' fill priority />
                                            </div>
                                        </div>

                                        <div className={style.card_text}>
                                            <h6 className={style.head}>Secure Payments</h6>
                                            <p className={style.desc}>All user-initiated account transactions are facilitated through secure connections.</p>
                                        </div>
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
