import React from 'react'
import style from '@/components/Works/Works.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'

export default function Works() {

    return (

        <div className={style.work_sec}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <h1 className={style.heading}>How It Works</h1>
                        <p className={style.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center pt-2">
                            <div className={style.box}>
                                <div className={style.bg_Color}>
                                    <div className={style.image}>
                                        <Image src={Images.work1} alt='' fill priority />
                                    </div>
                                </div>
                                <h6 className={style.head}>1. Select an upcoming match</h6>
                                <p className={style.desc}>Select an upcoming match of your own choice.</p>
                            </div>
                        </div>
                      
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center pt-5 mt-5">
                            <div className={style.box}>
                                <div className={style.bg_Color}>
                                    <div className={style.image}>
                                        <Image src={Images.work1} alt='' fill priority />
                                    </div>
                                </div>
                                <h6 className={style.head}>2. Make your fantasy team</h6>
                                <p className={style.desc}>Create your own team by selecting different players within a defined virtual credit points.</p>
                            </div>
                        </div>
                       
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center pt-5 mt-5">
                            <div className={style.box}>
                                <div className={style.bg_Color}>
                                    <div className={style.image}>
                                        <Image src={Images.work1} alt='' fill priority />
                                    </div>
                                </div>
                                <h6 className={style.head}>3.Join the contests</h6>
                                <p className={style.desc}>Participate in the Paid & Practice contests, and win Actual on Cricfast.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
