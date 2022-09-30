import Image from "next/image";
import { memo, useEffect } from "react";
import monitor from "./../../../assets/vectors/Monitor.svg"
import books from "./../../../assets/vectors/Books.svg"
import flashstorage from "./../../../assets/vectors/Flashstorage.svg"
import peoples from "./../../../assets/vectors/Peoples.svg"
import coffee from "./../../../assets/vectors/Coffee.svg"
import pencilcup from "./../../../assets/vectors/Pencilcup.svg"
import calendar from "./../../../assets/vectors/Calendar.svg"
import marker from "./../../../assets/vectors/Marker.svg"
import { useChain, useSpring, useSpringRef, animated } from "react-spring";
import { useLayoutContext } from "../../Layout";

export default memo(() => {
    const { layer } = useLayoutContext()
    const monitorRef = useSpringRef()
    const booksRef = useSpringRef()
    const flashstorageRef = useSpringRef()
    const peoplesRef = useSpringRef()
    const coffeeRef = useSpringRef()
    const pencilcupRef = useSpringRef()
    const calendarRef = useSpringRef()
    const markerRef = useSpringRef()

    const [mstyle, manim] = useSpring(() => ({ opacity: 0, ref: monitorRef }))
    const [bstyle, banim] = useSpring(() => ({ opacity: 0, ref: booksRef }))
    const [cstyle, canim] = useSpring(() => ({ opacity: 0, ref: booksRef }))
    const [pestyle, peanim] = useSpring(() => ({ opacity: 0, ref: booksRef }))
    const [castyle, caanim] = useSpring(() => ({ opacity: 0, ref: booksRef }))
    const [mastyle, maanim] = useSpring(() => ({ opacity: 0, ref: booksRef }))
    const [fstyle, fanim] = useSpring(() => ({ opacity: 0, ref: booksRef }))
    const [pstyle, panim] = useSpring(() => ({ opacity: 0, ref: booksRef }))

    useEffect(() => {
        if (layer !== 0) {
            manim({ opacity: 0 })
            banim({ opacity: 0 })
            fanim({ opacity: 0 })
            canim({ opacity: 0 })
            peanim({ opacity: 0 })
            maanim({ opacity: 0 })
            caanim({ opacity: 0 })
            panim({ opacity: 0 })
            return
        }
        setTimeout(() => {
            manim({ opacity: 1 })
            banim({ opacity: 1 })
        }, 600)
        setTimeout(() => {
            // banim({ opacity: 1 })
            fanim({ opacity: 1 })
            canim({ opacity: 1 })
            peanim({ opacity: 1 })
        }, 800)
        setTimeout(() => {
            // fanim({ opacity: 1 })
            maanim({ opacity: 1 })
            caanim({ opacity: 1 })
            panim({ opacity: 1 })
        }, 1000)
        // setTimeout(() => {
            
        // }, 900)
    }, [layer])

    return (
        <>
            <animated.div style={{ ...mstyle }} className="fixed z-[1000] top-[18vh] right-[20vw]">
                <Image src={monitor} />
            </animated.div>
            <animated.div style={{ ...bstyle }} className="fixed z-[1001] top-[58vh] right-[22vw]">
                <Image src={books} />
            </animated.div>
            <animated.div style={{ ...fstyle }} className="fixed z-[1000] top-[58vh] right-[34vw]">
                <Image src={flashstorage} />
            </animated.div>
            <animated.div style={{ ...pstyle }} className="fixed z-[1002] top-[53vh] right-[28vw]">
                <Image src={peoples} />
            </animated.div>
            <animated.div style={{ ...cstyle }} className="fixed z-[1001] top-[53vh] right-[48vw]">
                <Image src={coffee} />
            </animated.div>
            <animated.div style={{ ...pestyle }} className="fixed z-[1000] top-[40vh] right-[45.5vw]">
                <Image src={pencilcup} />
            </animated.div>
            <animated.div style={{ ...castyle }} className="fixed z-[1000] top-[28vh] right-[39vw]">
                <Image src={calendar} />
            </animated.div>
            <animated.div style={{ ...mastyle }} className="fixed z-[1000] top-[20vh] right-[40vw]">
                <Image src={marker} />
            </animated.div>
        </>
    )
})