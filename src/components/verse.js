import React, { useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Verses from '../assets/images/verses.png'
import { AudioContext } from '../context/audio-context'
import { useScrollAnim } from './utils/function'

const Verse = () => {
    const [trigger, anim] = useScrollAnim()
    const context = useContext(AudioContext)
    const [ref, inView] = useInView({
        threshold: [0.125, 0.5, 0.75],
        triggerOnce: true,
    })
    useEffect(() => {
        if (inView) {
            if (context?.isInteract) {
                context?.setIsPlaying(true)
            }
        }
    }, [inView, context?.isInteract])
    return (
        <section className="verse-section" ref={trigger}>
            <div className="py-5" ref={ref}>
                <div className="content">
                    <img className={`verse-image ${anim(1)}`} src={Verses} alt="ar-rum" />
                    <p className={`verse-translate ${anim(2)}`}>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
                    <p className={`verse-label ${anim(3)}`}>(QS.Ar-Rum: 21)</p>
                </div>
            </div>
        </section>
    )
}

export default Verse