import { memo, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import states from "../../common/states"
import { useThemes } from "../../functions/hooks"
import { useLayoutContext } from "../Layout"

const Name = memo((props) => {
    const [theme] = useThemes()
    const { layer } = useLayoutContext()
    const [style, animate] = useSpring(() => ({
        marginLeft: '5vw', 
        opacity: 1, config: {
            tension: 90
        }
    }))

    useEffect(() => {
        if (layer !== props.layer) {
            setTimeout(() => {
                animate({
                    marginLeft: '5vw', opacity: 0, config: {
                        tension: 90
                    }
                })
            }, 500)
            return
        }
        setTimeout(() => {
            animate({
                marginLeft: '13vw',
                opacity: 1,
                config: {
                    tension: 90
                }
            })
        }, 700)
    }, [layer])

    return (
        <animated.div style={{ ...style, ...theme.font }} className={`text-[96px] relative z-[999]`}>
            {
                props.title.map(el => {
                    return <div className={`poppins font-bold`}>{el}</div>
                })
            }
        </animated.div>
    )
})

const Desc = (props) => {
    const [theme] = useThemes()
    const { layer } = useLayoutContext()
    const [style, animate] = useSpring(() => ({
        marginLeft: '-10vw', opacity: 0,
        config: {
            tension: 90
        }
    }))
    useEffect(() => {
        if (layer !== props.layer){
            setTimeout(() => {
                animate({
                    marginLeft: '-10vw', opacity: 0,
                    config: {
                        tension: 90
                    }
                })
            },500)
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
    })
    return (
        <animated.div style={{ ...style }} className="text-[38px] relative z-[1001]">
            <animated.div style={{ ...theme.font }} className={`inter font-medium max-w-[44vw] text-2xl`}>
                {props.quote}
            </animated.div>
            <div className="flex pt-7 relative z-[1001]">
                <button onClick={() => {
                    if(props.hasOwnProperty('onClick')) {
                        props.onClick()
                    }
                }} className={`p-4 px-8 inter text-sm font-medium rounded-3xl bg-[#EF4444]`}>
                    Show Me More
                </button>
            </div>
        </animated.div>
    )
}

export default {
    Name, Desc
}
