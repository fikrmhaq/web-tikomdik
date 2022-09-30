import { memo, useEffect } from "react";
import { useSpring, animated } from "react-spring"
import components from "../..";
import states from "../../../common/states";
import { useThemes } from "../../../functions/hooks";
import { useLayoutContext } from "../../Layout";

export default memo(() => {
    const { layer } = useLayoutContext()
    const [theme] = useThemes()
    const [style, animate] = useSpring(() => ({
        marginLeft: '5vw', opacity: 0, config: {
            tension: 90
        }
    }))

    useEffect(() => {
        if(layer !== 0) {
            setTimeout(() => {
                animate({
                    marginLeft: '5vw',
                    opacity: 0, config: {
                        tension: 90
                    }
                })
            }, 500)
            return 
        }
        setTimeout(() => {
            animate({
                marginLeft: '13vw',
                opacity: 1, config: {
                    tension: 90
                }
            })
        }, 700)
    }, [layer])

    return (
        <animated.div style={{ ...style, ...theme.font }} className={`text-[64px]`}>
            <div className={`poppins font-bold`}>Tikomdik</div>
            <div className={`poppins font-bold`}>Disdik Jabar</div>
        </animated.div>
    )
})

const Separator = (props) => {
    const { layer } = useLayoutContext()
    const [style, animate] = useSpring(() => ({
        marginLeft: '-19vw', opacity: 0,
        config: {
            tension: 90
        }
    }))
    const [style2, animate2] = useSpring(() => ({
        marginLeft: '-13vw', opacity: 0,
        config: {
            tension: 90
        }
    }))

    useEffect(() => {
        if(layer !== props.layer) {
            setTimeout(() => {
                animate({
                    marginLeft: '-19vw',
                    opacity: 0,
                    config: {
                        tension: 90
                    }
                })
                animate2({
                    marginLeft: '-13vw',
                    opacity: 0,
                    config: {
                        tension: 90
                    }
                })
            }, 500)
            return
        }
        setTimeout(() => {
            animate({
                marginLeft: '-11.5vw',
                opacity: 1,
                config: {
                    tension: 90
                }
            })
        }, 700)
        setTimeout(() => {
            animate2({
                marginLeft: '-9.5vw',
                opacity: 1,
                config: {
                    tension: 90
                }
            })
        }, 900)
    })

    return (
        <div  >
            <animated.div style={{ ...style }}>
                <components.Line />
            </animated.div>
            <animated.div style={{ ...style2 }}>
                <components.Line className="mt-4" />
            </animated.div>
        </div>
    )
}

const Desc = () => {
    const { layer } = useLayoutContext()
    const [theme] = useThemes()
    const [style, animate] = useSpring(() => ({
        marginLeft: '-15vw', opacity: 0,
        config: {
            tension: 90
        }
    }))
    useEffect(() => {
        if(layer !== 0) {
            setTimeout(() => {
                animate({
                    marginLeft: '-15vw',
                    opacity: 0, config: {
                        tension: 90
                    }
                })
            }, 500)
            return 
        }
        setTimeout(() => {
            animate({
                marginLeft: '-1vw',
                opacity: 1,
                config: {
                    tension: 90
                }
            })
        }, 1000)
    }, [layer])
    return (
        <animated.div style={{ ...style, ...theme.font }} className={`text-[38px]`}>
            <div className={`poppins italic font-light max-w-[44vw]`}>
                Creative
            </div>
            <div className={`poppins italic font-light max-w-[44vw]`}>
                Innovative
            </div>
            <div className={`poppins italic font-light max-w-[44vw]`}>
                Collaborative
            </div>
            <div className={`inter font-light max-w-[44vw] text-[14px] text-[#EF4444] pt-10`} style={{ letterSpacing: '0.5vw', paragraphSpacing: '1px' }}>
                EMPOWERS TO EDUCATE
            </div>
        </animated.div>
    )
}

export {
    Separator,
    Desc
}