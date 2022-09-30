import { memo, useEffect, useRef } from "react";
import OverviewImage from "../../Utility/OverviewImage";
import { useSpring, animated } from "react-spring"
import { Separator } from "../Header/HeaderText";
import { useLayoutContext } from "../../Layout";
import RNDImage from "./../../../assets/rndimage.png"
import Division from "../../Utility/division";

const Name = memo(() => {
    const { layer } = useLayoutContext()
    const [style, animate] = useSpring(() => ({
        marginLeft: '5vw', opacity: 0, config: {
            tension: 90
        }
    }))

    useEffect(() => {
        if (layer !== 1) return
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
        <animated.div style={{ ...style }} className="text-[96px]">
            <div className={`poppins font-bold`}>{`Research &`}</div>
            <div className={`poppins font-bold`}>{`Development`}</div>
        </animated.div>
    )
})

const Desc = () => {
    const { layer } = useLayoutContext()
    const [style, animate] = useSpring(() => ({
        marginLeft: '-10vw', opacity: 0,
        config: {
            tension: 90
        }
    }))
    useEffect(() => {
        if (layer !== 1) return
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
        <animated.div style={{ ...style }} className="text-[38px]">
            <div className={`inter font-medium max-w-[44vw] text-2xl`}>
                High quality products
            </div>
            <div className="flex pt-7">
                <button className={`p-4 px-8 inter text-sm font-medium rounded-3xl bg-[#EF4444]`}>
                    Show Me More
                </button>
            </div>
        </animated.div>
    )
}

export default memo(() => {
    const imgref = useRef()
    return (
        <div className="flex">
            <div className={`white-text grid content-center w-[100vw] h-[100vh]`}>
                <div className="">
                    <div className="flex ">
                        <Division.Name title={["Research &", "Development"]} layer={1} />
                    </div>
                    <div className="flex justify-center py-6">
                        <Separator layer={1} />
                    </div>
                    <div className="px-[14vw] pt-4">
                        <Division.Desc quote="High quality products" onClick={() => imgref.current.fullscale()} layer={1} />
                    </div>
                </div>
            </div>
            <div className={`white-text w-[100vw] h-[100vh] `}>
                {/* <animated.div style={{ ...style }}>
                    <components.FullElipse className={`fixed right-[-25vw] top-[1vh]`} />
                    <animated.div style={{ ...ilustrationstyle, position: 'fixed', top: '30vh', zIndex: 1001 }}>
                        <components.UBoat className="z-[1001]" />
                    </animated.div>
                </animated.div> */}
                <OverviewImage ref={imgref} layer={1} src={RNDImage} effect="overview-image-effect1" />
            </div>
        </div>
    )
})