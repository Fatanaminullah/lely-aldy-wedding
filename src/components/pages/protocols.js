import React from 'react'
import { Element } from 'react-scroll'
import Flower from '../../assets/images/flower-1.png'
import { useScrollAnim } from '../utils/function'


const listProtocol = [
    'Wajib menggunakan masker selama acara berlangsung',
    'Cek suhu ketika hendak memasuki tempat acara',
    'Tidak memiliki riwayat berkontak dengan pasien Covid-19',
    'Saling menjaga jarak ketika menghadiri acara',
    'Dilarang berkerumun demi menjaga protokol kesehatan'
]

const Protocols = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <Element name="protocol">
            <section className="protocols-section" ref={trigger}>
                <div className="py-5">
                    <div className="content">
                        <h1 className={`title ${anim(2)}`}>Protokol</h1>
                        {listProtocol.map((item, i) => (
                            <p className={`item ${anim(i + 2)}`} key={i}>
                                {item}
                            </p>
                        ))}
                        <img className={`flower ${anim(listProtocol.length + 3)}`} src={Flower} alt="flower" />
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Protocols