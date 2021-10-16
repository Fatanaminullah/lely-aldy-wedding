import React from 'react'
import Flower from '../assets/images/flower-3.png'
import { useScrollAnim } from './utils/function'

const Cover = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <>
            <div className="cover-bg" ref={trigger} />
            <section className="cover-section">
                <div className="content">
                    <h1 className={`"lely ${anim(1)}`}>Lely</h1>
                    <h1 className={`${anim(2)}`}>&</h1>
                    <h1 className={`aldy ${anim(3)}`}>Aldy</h1>
                    <img className={`flower ${anim(4)}`} src={Flower} alt="flower-1" />
                    <h4 className={`date ${anim(5)}`}>
                        07. 11. 2021
                    </h4>
                </div>
            </section>
        </>
    )
}

export default Cover