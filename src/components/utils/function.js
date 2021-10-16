import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export const useScrollAnim = (animation = "fadeInUp") => {
    const [ref, inView] = useInView({
        threshold: [0.125, 0.5, 0.75],
        triggerOnce: true,
    })

    const [animate, setAnimate] = useState(() => {
        return {
            text: `scroll-${animation}`,
            hasSet: false,
        }
    })

    const anim = useCallback(
        (delay, replaceAnim = null) => {
            if (replaceAnim) {
                return animate.hasSet
                    ? `scroll-${replaceAnim} ${replaceAnim}` + ` d${delay}`
                    : `scroll-${replaceAnim}`
            } else {
                return animate.hasSet
                    ? `${animate.text} ${animation}` + ` d${delay}`
                    : animate.text
            }
        },
        [animate]
    )

    useEffect(() => {
        if (inView) {
            setAnimate(prevState => {
                return {
                    ...prevState,
                    hasSet: true,
                }
            })
        }
    }, [inView])

    return [ref, anim]
}