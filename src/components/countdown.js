import React from 'react'
import Flower from '../assets/images/flower-1.png'
import { useCountdown, useScrollAnim } from './utils/function'

const Countdown = () => {
    const [trigger, anim] = useScrollAnim()
    const [isStart, isEnded, countdown] = useCountdown({
        startDate: "2021-11-07:07:30:00+07:00",
        endDate: "2021-11-07T14:00:00+07:00",
    });
    console.log('countdown', countdown)
    return (
        <section className="countdown-section" ref={trigger}>
            <div className="py-5">
                <div className="content">
                    <h1 className={`title ${anim(1)}`}>Menghitung Hari</h1>
                    <div className="row m-0">
                        <div className={`col-6 col-md-3 ${anim(2)}`}>
                            <div className="countdown-box">
                                <div className="countdown-item">
                                    <h4 className="value">{countdown?.days || '00'}</h4>
                                    <span className="label">Hari</span>
                                </div>
                            </div>
                        </div>
                        <div className={`col-6 col-md-3 ${anim(3)}`}>
                            <div className="countdown-box">
                                <div className="countdown-item">
                                    <h4 className="value">{countdown?.hours || '00'}</h4>
                                    <span className="label">Jam</span>
                                </div>
                            </div>
                        </div>
                        <div className={`col-6 col-md-3 ${anim(4)}`}>
                            <div className="countdown-box">
                                <div className="countdown-item">
                                    <h4 className="value">{countdown?.minutes || '00'}</h4>
                                    <span className="label">Menit</span>
                                </div>
                            </div>
                        </div>
                        <div className={`col-6 col-md-3 ${anim(5)}`}>
                            <div className="countdown-box">
                                <div className="countdown-item">
                                    <h4 className="value">{countdown?.seconds || '00'}</h4>
                                    <span className="label">Detik</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Countdown