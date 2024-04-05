import React from 'react'
import style from '@/app/(WithHeaderAndFooter)/PointSystem/PointSystem.module.scss'

export default function page() {

    return (

        <>
            <div className={style.point_sec}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h1 className={style.heading}>Points System</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.tabs}>
                <div className="container">
                    <div className={`row justify-content-between ${style.bg_color}`}>

                        <div className="col-lg-2 col-md-2 col-sm-2">
                            <div className={`nav flex-column nav-pills ${style.navs}`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className={`nav-link active ${style.link}`} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">T20</button>
                                <button className={`nav-link ${style.link}`} id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">OD</button>
                                <button className={`nav-link ${style.link}`} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Test</button>
                                <button className={`nav-link ${style.link}`} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">T10</button>
                                <button className={`nav-link ${style.link}`} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">6ixty</button>
                                <button className={`nav-link ${style.link}`} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">The Hundred</button>
                                <button className={`nav-link ${style.link}`} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Other T20</button>
                                <button className={`nav-link ${style.link}`} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Other OD</button>
                                <button className={`nav-link ${style.link}`} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Other Test</button>
                            </div>
                        </div>

                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className={`tab-pane fade show active ${style.tab_content}`} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <div className={style.content}>
                                                    <p className={style.points}>Wicket (Excluding Run Out) <span>+25 pts</span></p>
                                                    <p className={style.points}>Run <span>+1 pts</span></p>
                                                    <p className={style.points}>Catch <span>+8 pts</span></p>
                                                </div>
                                            </div>


                                            <div className="col-lg-8 col-md-8 col-sm-8">
                                                <div className={`${style.accordion} accordion accordion-flush`} id="accordionFlushExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                Batting
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Run <span>+1 pts</span></p>
                                                                <p className={style.points}>Boundary Bonus <span>+1 pts</span></p>
                                                                <p className={style.points}>Six Bonus <span>+2 pts</span></p>
                                                                <p className={style.points}>30 Run Bonus <span>+4 pts</span></p>
                                                                <p className={style.points}>Half-century Bonus <span>+8 pts</span></p>
                                                                <p className={style.points}>Century Bonus <span>+16 pts</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingTwo">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                Bowling
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Wicket (Excluding Run Out) <span>+25 pts</span></p>
                                                                <p className={style.points}>Bonus (LBW/ Bowled) <span>+8 pts</span></p>
                                                                <p className={style.points}>3 Wicket Bonus <span>+4 pts</span></p>
                                                                <p className={style.points}>4 Wicket Bonus <span>+8 pts</span></p>
                                                                <p className={style.points}>5 Wicket Bonus <span>+16 pts</span></p>
                                                                <p className={style.points}>Maiden over <span>+12 pts</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingThree">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                Feilding
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Catch <span>+8 pts</span></p>
                                                                <p className={style.points}>3 Catch Bonus <span>+4 pts</span></p>
                                                                <p className={style.points}>Stumping/Runout (Direct Hit) <span>+12 pts</span></p>
                                                                <p className={style.points}>Run-Out (Not a Direct Hit) <span>+6 pts</span></p>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingFour">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                Additional Points
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Captain Points <span>2x</span></p>
                                                                <p className={style.points}>Vice-Captain Points <span>1.5x</span></p>
                                                                <p className={style.points}>In Announced Lineups <span>+4</span></p>
                                                                <p className={style.points}>Playing Substitute (Concussion, X-Factor, or Impact Player) <span>+4</span></p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`tab-pane fade ${style.tab_content}`} id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <div className={style.content}>
                                                    <p className={style.points}>Wicket (Excluding Run Out) <span>+25 pts</span></p>
                                                    <p className={style.points}>Run <span>+1 pts</span></p>
                                                    <p className={style.points}>Catch <span>+8 pts</span></p>
                                                </div>
                                            </div>


                                            <div className="col-lg-8 col-md-8 col-sm-8">
                                                <div className={`${style.accordion} accordion accordion-flush`} id="accordionFlushExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                Batting
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Run <span>+1 pts</span></p>
                                                                <p className={style.points}>Boundary Bonus <span>+1 pts</span></p>
                                                                <p className={style.points}>Six Bonus <span>+2 pts</span></p>
                                                                <p className={style.points}>30 Run Bonus <span>+4 pts</span></p>
                                                                <p className={style.points}>Half-century Bonus <span>+8 pts</span></p>
                                                                <p className={style.points}>Century Bonus <span>+16 pts</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingTwo">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                Bowling
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Wicket (Excluding Run Out) <span>+25 pts</span></p>
                                                                <p className={style.points}>Bonus (LBW/ Bowled) <span>+8 pts</span></p>
                                                                <p className={style.points}>3 Wicket Bonus <span>+4 pts</span></p>
                                                                <p className={style.points}>4 Wicket Bonus <span>+8 pts</span></p>
                                                                <p className={style.points}>5 Wicket Bonus <span>+16 pts</span></p>
                                                                <p className={style.points}>Maiden over <span>+12 pts</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingThree">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                Feilding
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Catch <span>+8 pts</span></p>
                                                                <p className={style.points}>3 Catch Bonus <span>+4 pts</span></p>
                                                                <p className={style.points}>Stumping/Runout (Direct Hit) <span>+12 pts</span></p>
                                                                <p className={style.points}>Run-Out (Not a Direct Hit) <span>+6 pts</span></p>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingFour">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                Additional Points
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Captain Points <span>2x</span></p>
                                                                <p className={style.points}>Vice-Captain Points <span>1.5x</span></p>
                                                                <p className={style.points}>In Announced Lineups <span>+4</span></p>
                                                                <p className={style.points}>Playing Substitute (Concussion, X-Factor, or Impact Player) <span>+4</span></p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`tab-pane fade ${style.tab_content}`} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <div className={style.content}>
                                                    <p className={style.points}>Wicket (Excluding Run Out) <span>+25 pts</span></p>
                                                    <p className={style.points}>Run <span>+1 pts</span></p>
                                                    <p className={style.points}>Catch <span>+8 pts</span></p>
                                                </div>
                                            </div>


                                            <div className="col-lg-8 col-md-8 col-sm-8">
                                                <div className={`${style.accordion} accordion accordion-flush`} id="accordionFlushExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                Batting
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Run <span>+1 pts</span></p>
                                                                <p className={style.points}>Boundary Bonus <span>+1 pts</span></p>
                                                                <p className={style.points}>Six Bonus <span>+2 pts</span></p>
                                                                <p className={style.points}>30 Run Bonus <span>+4 pts</span></p>
                                                                <p className={style.points}>Half-century Bonus <span>+8 pts</span></p>
                                                                <p className={style.points}>Century Bonus <span>+16 pts</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingTwo">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                Bowling
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Wicket (Excluding Run Out) <span>+25 pts</span></p>
                                                                <p className={style.points}>Bonus (LBW/ Bowled) <span>+8 pts</span></p>
                                                                <p className={style.points}>3 Wicket Bonus <span>+4 pts</span></p>
                                                                <p className={style.points}>4 Wicket Bonus <span>+8 pts</span></p>
                                                                <p className={style.points}>5 Wicket Bonus <span>+16 pts</span></p>
                                                                <p className={style.points}>Maiden over <span>+12 pts</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingThree">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                Feilding
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Catch <span>+8 pts</span></p>
                                                                <p className={style.points}>3 Catch Bonus <span>+4 pts</span></p>
                                                                <p className={style.points}>Stumping/Runout (Direct Hit) <span>+12 pts</span></p>
                                                                <p className={style.points}>Run-Out (Not a Direct Hit) <span>+6 pts</span></p>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingFour">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                Additional Points
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Captain Points <span>2x</span></p>
                                                                <p className={style.points}>Vice-Captain Points <span>1.5x</span></p>
                                                                <p className={style.points}>In Announced Lineups <span>+4</span></p>
                                                                <p className={style.points}>Playing Substitute (Concussion, X-Factor, or Impact Player) <span>+4</span></p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`tab-pane fade ${style.tab_content}`} id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <div className={style.content}>
                                                    <p className={style.points}>Wicket (Excluding Run Out) <span>+25 pts</span></p>
                                                    <p className={style.points}>Run <span>+1 pts</span></p>
                                                    <p className={style.points}>Catch <span>+8 pts</span></p>
                                                </div>
                                            </div>


                                            <div className="col-lg-8 col-md-8 col-sm-8">
                                                <div className={`${style.accordion} accordion accordion-flush`} id="accordionFlushExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                Batting
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Run <span>+1 pts</span></p>
                                                                <p className={style.points}>Boundary Bonus <span>+1 pts</span></p>
                                                                <p className={style.points}>Six Bonus <span>+2 pts</span></p>
                                                                <p className={style.points}>30 Run Bonus <span>+4 pts</span></p>
                                                                <p className={style.points}>Half-century Bonus <span>+8 pts</span></p>
                                                                <p className={style.points}>Century Bonus <span>+16 pts</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingTwo">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                Bowling
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Wicket (Excluding Run Out) <span>+25 pts</span></p>
                                                                <p className={style.points}>Bonus (LBW/ Bowled) <span>+8 pts</span></p>
                                                                <p className={style.points}>3 Wicket Bonus <span>+4 pts</span></p>
                                                                <p className={style.points}>4 Wicket Bonus <span>+8 pts</span></p>
                                                                <p className={style.points}>5 Wicket Bonus <span>+16 pts</span></p>
                                                                <p className={style.points}>Maiden over <span>+12 pts</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingThree">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                Feilding
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Catch <span>+8 pts</span></p>
                                                                <p className={style.points}>3 Catch Bonus <span>+4 pts</span></p>
                                                                <p className={style.points}>Stumping/Runout (Direct Hit) <span>+12 pts</span></p>
                                                                <p className={style.points}>Run-Out (Not a Direct Hit) <span>+6 pts</span></p>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="flush-headingFour">
                                                            <button className={`${style.button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                Additional Points
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <p className={style.points}>Captain Points <span>2x</span></p>
                                                                <p className={style.points}>Vice-Captain Points <span>1.5x</span></p>
                                                                <p className={style.points}>In Announced Lineups <span>+4</span></p>
                                                                <p className={style.points}>Playing Substitute (Concussion, X-Factor, or Impact Player) <span>+4</span></p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
