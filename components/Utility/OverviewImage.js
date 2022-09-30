import Image from "next/image";
import { forwardRef, memo, useEffect, useImperativeHandle } from "react";
import { animated, useSpring } from "react-spring"
import { useLayoutContext } from "../Layout";

export default memo(forwardRef((props, ref) => {
    const [style, anim] = useSpring(() => ({ transform: 'scale(0.7)', marginTop:'20vh', marginLeft: '0vw', marginRight: '-2vw', opacity: 0, config: { friction: 20, tension: 60 } }))
    const [style2, anim2] = useSpring(() => ({ transform: 'scale(0.7)', marginTop:'-64.9vh', marginLeft: '0vw', marginRight: '-2vw', opacity: 0, config: { friction: 20, tension: 60 } }))
    const { layer } = useLayoutContext()

    useEffect(() => {
        if (layer !== props.layer) {
            setTimeout(() => {
                anim({ transform: 'scale(0.7)', marginLeft: '0vw', marginRight: '-2vw', opacity: 0, config: { friction: 20, tension: 60 } })
                anim2({ transform: 'scale(0.7)', marginLeft: '0vw', marginRight: '-2vw', opacity: 0, config: { friction: 20, tension: 60 } })
            }, 500)
            return
        }
        anim({ opacity: 0 })
        anim2({ opacity: 0 })
        setTimeout(() => {
            anim({ transform: 'scale(1)', marginLeft: '0.8vw', marginRight: '6vw', opacity: 1, config: { friction: 20, tension: 60 } })
            anim2({ transform: 'scale(1)', marginLeft: '0.8vw', marginRight: '0vw', opacity: 1, config: { friction: 20, tension: 60 } })
        }, 600)
    }, [layer])

    const fullscaling = () => {
        anim({ transform: 'scale(1.6)', marginLeft: '-2vw', marginRight: '6vw', marginTop:'16vh', opacity: 1, config: { friction: 20, tension: 80 } })
        anim2({ transform: 'scale(1.6)', marginLeft: '-2vw', marginRight: '0vw', marginTop:'-64.9vh', opacity: 1, config: { friction: 20, tension: 80 } })
    }

    useImperativeHandle(ref, () => (
        {
            fullscale: fullscaling
        }
    ))

    return (
        <>
            <animated.div style={{ ...style }} className="overview-image">
                <Image src={props.src}
                
                    width="781px"
                    height="608px"
                />
            </animated.div>
            <animated.div style={{ ...style2 }} className={`${props.effect} `}>
                
            </animated.div></>
    )
}))