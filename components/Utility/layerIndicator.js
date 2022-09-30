import { forwardRef, memo, useEffect, useImperativeHandle, useState } from "react";
import { useSpring, animated } from "react-spring";
import states from "../../common/states";

export default memo(({ layer }) => {
    const [active, setActive] = useState(0)

    useEffect(() => {
        setActive(layer)
    }, [layer])
    
    return (
        <div className="fixed left-0 top-[20vh] w-[11vw] h-[80vh] z-[1004]">
            <div className="h-[60vh] grid content-center flex justify-center">
                <IndicatorLine active={active} id={0} />
                <IndicatorLine active={active} id={1} />
                <IndicatorLine active={active} id={2} />
                <IndicatorLine active={active} id={3} />
                {/* <div className="indicator-line my-6 w-[60px]"></div>
                <div className="indicator-line my-6 w-[30px]"></div>
                <div className="indicator-line my-6 w-[30px]"></div>
                <div className="indicator-line my-6 w-[30px]"></div> */}
            </div>
        </div>
    )
})

const IndicatorLine = memo(forwardRef((props, ref) => {
    const { theme } = states.useTheme((states) => states)
    const [style, anim] = useSpring(() => ({ width: '30px' }))

    useEffect(() => {
        if(props.active === props.id) {
            anim({ width: '60px' })
            return
        }
        anim({ width: '30px' })
    }, [props.active])

    return <animated.div className={`indicator-line my-6 ${theme}-theme`} style={{ ...style }}>
        {/* {props.active} */}
        </animated.div>
    
}))