import Disdik from "./../assets/disdiklogo1.png"
import Tikomdik from "./../assets/tikomdiklogo1.png"
import Head from "next/head";
import Image from "next/image";
import { createContext, memo, useContext, useEffect, useState } from "react";
import { useSpring, animated, useChain } from "react-spring"
import Ground from "./Utility/ground";
import components from ".";
import Ilustration from "./Utility/ilustration";
import Components from ".";
import Line1 from "./../assets/line1.png"
import Line2 from "./../assets/line2.png"
import LayerIndicator from "./Utility/layerIndicator";
import RNDImage from "./../assets/rndimage.png"
import OverviewImage from "./Utility/OverviewImage";
import states from "../common/states";
import { useThemes } from "../functions/hooks";

const context = createContext(null)
export const useLayoutContext = () => useContext(context)

function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";

    var scrollPercent = Math.round(
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
    );
    //get the percentage of scroll

    return isNaN(scrollPercent) ? "" : scrollPercent;
}

export default memo(({ children }) => {
    const [theme] = useThemes()
    const [style, animate] = useSpring(() => ({ width: '100vw', height: '100vh' }))
    const [style2, animate2] = useSpring(() => ({ x: 0, y: 0 }))
    const [layer, setLayer] = useState(0)
    const [load, setLoad] = useState(false)
    const [left, setLeft] = useState(800)
    const [top, setTop] = useState(800)
    const [right, setRight] = useState(800)
    const [bottom, setBottom] = useState(800)

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const [ob, setOb] = useSpring(() => ({ x: 800 }))

    const [scrollPercentage, setScrollPercentage] = useState(0)


    useEffect(() => {
        console.log('useEffect')

        window.addEventListener('keypress', (e) => {
            console.log(e.key)
            if (e.key === 's') {
                console.log("Key Pressed")
                // setOb({ x: left })
                setLayer(prev => prev + 1)
                setTimeout(() => {
                    window.scrollBy(window.scrollX, 100 * window.innerHeight / 100);
                }, 200)
            } else if (e.key === 'w') {
                console.log("Key Pressed")
                // setOb({ x: left })
                setLayer(prev => prev - 1)
                setTimeout(() => {
                    window.scrollBy(window.scrollX, -(100 * window.innerHeight / 100));
                }, 200)
            }


        }, { passive: true })
    }, [])




    useEffect(() => {
        setTimeout(() => {
            animate({ height: '0vh' })
        }, 500)
        // setTimeout(() => {
        //     ianimate({
        //         right: '1vw',
        //         opacity: 1
        //     })
        // }, 800)
    }, [])

    const setHover = (x, y) => {
        animate2({ x: -(x / 80), y: -(y / 80) })

    }



    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <title>Tikomdik | Disdik Jabar</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
                <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <div className="fixed z-[1008] w-full h-[7vh] top-10 px-16">
                <div className="flex justify-between h-full">
                    <div className="flex">
                        <div className="grid content-center">
                            <Image width="115px" height="54px" src={Disdik} />
                        </div>
                        <div className="grid content-center pt-5 px-5">
                            <Image width="117px" height="31px" src={Tikomdik} />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex  grid content-center">
                            <div className={`poppins text-lg px-16 ${theme}-theme`} >
                                TERAS
                            </div>
                        </div>
                        <div className="flex  grid content-center">
                            <div className="poppins white-text text-lg px-16" style={{ color: '#999999' }}>
                                PROFILE
                            </div>
                        </div>
                        <div className="flex  grid content-center">
                            <div className="poppins white-text text-lg px-16" style={{ color: '#999999' }}>
                                PROGRAM
                            </div>
                        </div>
                        <div className="flex  grid content-center">
                            <div className="poppins white-text text-lg px-16" style={{ color: '#999999' }}>
                                LAYANAN
                            </div>
                        </div>
                        <div className="flex  grid content-center">
                            <div className="poppins white-text text-lg px-16" style={{ color: '#999999' }}>
                                INFO
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LayerIndicator layer={layer} />
            <animated.div style={{ ...style, position: 'fixed', backgroundColor: '#020717', zIndex: '1005' }}></animated.div>
            {/* <Ground pointer={(xy) => {
                setX(xy[0])
                setY(xy[1])
                setHover(xy[0], xy[1])
            }} /> */}
            {/* <OverviewImage layer={layer} /> */}
            {/* <animated.div style={{ ...style2 }} className={`fixed right-[-25vw] top-[1vh]`}>
                <components.FullElipse />
            </animated.div> */}
            {/* <Ilustration xy={[x, y]} layer={layer} /> */}
            {/* <animated.div  > */}
            {/* <Components.justNGeng className="fixed" style={{ left, top}} /> */}
            {/* </animated.div> */}
            <div className="fixed z-[500] bottom-0">
                <Image src={Line1} width="854.18px" />
            </div>
            <div className="fixed z-[1002] bottom-[-40vh] left-[10vw]">
                <Image src={Line1} width="854.18px" />
            </div>
            <div className="fixed z-[1002] top-[10vh] right-[-10vw]" style={{ transform: 'rotate(-30deg)' }}>
                <Image src={Line2} width="854.18px" />
            </div>
            <context.Provider
                value={
                    {
                        x: x,
                        y: y,
                        layer
                    }
                }
            >
                <animated.div style={{ ...theme.background }}>
                    {children}
                </animated.div>
            </context.Provider>
        </div>
    )
})