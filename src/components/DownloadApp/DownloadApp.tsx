import React from 'react'
import style from '@/components/DownloadApp/DownloadApp.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'
import Link from 'next/link'

export default function DownloadApp() {

    return (

        <div className={style.download}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-5 col-sm-6">
                        <div className={style.image}>
                            <Image src={Images.download} alt='' fill priority />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 d-flex flex-column justify-content-center">
                        <div className={style.content}>
                            <h1 className={style.heading}>Download the<br /> Cricfast app now!</h1>
                            <p className={style.para}>Create team, join contests & win exciting cash prizes.</p>
                            <div className={style.download_img}>
                                <Link href='#'><Image src={Images.button} alt='' fill priority /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
