import React from 'react'
import Flower from '../../assets/images/flower-3.png'

const Cover = () => {
    return (
        <>
            <div className="cover-bg" />
            <section className="cover-section">
                <div className="content">
                    <h1 className="lely ${animated fadeInUp d1">Lely</h1>
                    <h1 className="animated fadeInUp d2">&</h1>
                    <h1 className="aldy animated fadeInUp d3">Aldy</h1>
                    <img className="flower animated fadeInUp d4" src={Flower} alt="flower-1" />
                    <h4 className="date animated fadeInUp d5">
                        07. 11. 2021
                    </h4>
                </div>
            </section>
        </>
    )
}

export default Cover