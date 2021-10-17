import React from 'react'
import { Element } from 'react-scroll'
import Flower from '../../assets/images/flower-2.png'
import Ring from '../../assets/images/icon-ring.png'
import { useScrollAnim } from '../utils/function'


const EventAndLocation = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <Element name="location">
            <section className="events-section" ref={trigger}>
                <div className="content-events">
                    <h1 className={`title ${anim(1)}`}>Rangkaian Acara</h1>
                    <h4 className={`date ${anim(2)}`}>7 November 2021</h4>
                    <img src={Ring} alt="" className={`ring ${anim(2)}`} />
                    <div className="row w-100">
                        <div className="col-6 events-label-container">
                            <span className={anim(3)}>Akad Nikah</span>
                            <span className={anim(4)}>Resepsi</span>
                        </div>
                        <div className="col-6 events-value-container">
                            <span className={anim(5)}>07.30 WIB</span>
                            <span className={anim(6)}>11.00-14.00 WIB</span>
                        </div>
                    </div>
                    <img src={Flower} className={`flower ${anim(7)}`} alt="" />
                </div>
                <div className="content-location">
                    <h1 className={`title ${anim(8)}`}>Location</h1>
                    <div className="row flex-md-row-reverse w-100">
                        <div className="col-12 col-md-6 location-container">
                            <h4 className={`location ${anim(9)}`}>HARRIS HOTEL CONVENTION HALL</h4>
                            <h4 className={`location mb-4 ${anim(10)}`}>SUMMARECON BEKASI.</h4>
                            <h4 className={`address ${anim(11)}`}>Jalan Bulevard Barat kav. JA 001/01</h4>
                            <h4 className={`address mb-4 ${anim(12)}`}>Summarecon Bekasi, Bekasi Utara</h4>
                        </div>
                        <div className="col-12 col-md-6 maps-container">
                            <iframe className={`maps-iframe ${anim(13)}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4074.744248102744!2d106.99956361486632!3d-6.225312262702429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c1c6475de25%3A0x3857e1b08f8366d6!2sHARRIS%20Hotel%20%26%20Conventions%20Bekasi!5e1!3m2!1sid!2sid!4v1634499146491!5m2!1sid!2sid" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default EventAndLocation