import { memo, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Components from "..";

export default memo(({ xy, layer }) => {
    const [ilustrationstyle, ianimate] = useSpring(() => ({ x: 0, y: 0, right: '-4vw', top: '30vh', opacity: 0, zIndex: 1001 }))
    const [load, setLoad] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            ianimate({
                right: '1vw',
                opacity: 1
            })
        }, 800)
    }, [])

    useEffect(() => {
        if (load) {
            ianimate({
                right: '-4vw', opacity: 0, top: '30vh'
            })
            if (layer !== 1) {
                setTimeout(() => {
                    ianimate({
                        right: '1vw',
                        top: '10h',
                        opacity: 1
                    })
                }, 800)
            }
        }

        setLoad(!load)
    }, [layer])

    useEffect(() => {
        ianimate({ x: -(xy[0] / 190), y: -(xy[1] / 190), zIndex: 1001 })
    }, [xy])

    return (
        <animated.div style={{ ...ilustrationstyle, position: 'fixed', zIndex: 1001 }}>
            <Components.UBoat className="z-[1001]" style={{ x: '50px' }} />
        </animated.div>
    )

})