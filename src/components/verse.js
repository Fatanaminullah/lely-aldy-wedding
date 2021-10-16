import React from 'react'
import Verses from '../assets/images/verses.png'

const Verse = () => {
    return (
        <section className="verse-section">
            <div className="content">
                <img className="verse-image" src={Verses} alt="ar-rum" />
                <p className="verse-translate">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
                <p className="verse-label">(QS.Ar-Rum: 21)</p>
            </div>
        </section>
    )
}

export default Verse