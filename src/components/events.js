import React from 'react'
import Flower from '../assets/images/flower-1.png'
import { useScrollAnim } from './utils/function'


const Events = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="events-section" ref={trigger}>
            <div className="content">
                <h1 className={`title ${anim(1)}`}>Rangkaian Acara</h1>
            </div>
        </section>
    )
}

export default Events