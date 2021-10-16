import React from 'react'
import Aldy from '../assets/images/aldy.png'
import Lely from '../assets/images/lely.png'
import { useScrollAnim } from './utils/function'

const Bride = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="bride-section" ref={trigger}>
            <div className="content">
                <h1 className={`title ${anim(1, 'fadeInDown')}`}>Mempelai</h1>
                <div className="row w-100 m-0">
                    <div className={`brides-content col-md-6 col-sm-12 ${anim(2, 'slideInLeft')}`}>
                        <img className="brides-img" src={Lely} alt="lely-pict" />
                        <h4 className="brides-name">
                            Mohammad Rivaldi, S.E
                        </h4>
                        <p className="brides-info">Putra dari Bapak Akhmad Rifa'i Permana, Ak dan Ibu Hj. Yayan Nurjanah</p>
                    </div>
                    <div className={`brides-content col-md-6 col-sm-12 ${anim(3, 'slideInRight')}`}>
                        <img className="brides-img" src={Aldy} alt="aldy-pict" />
                        <h4 className="brides-name">
                            Nurlaili Sekarningsih, S.P
                        </h4>
                        <p className="brides-info">Putri dari Bapak Drs. H. Ade Lili, Ak dan Ibu Hj. Ine Sunengsih</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bride