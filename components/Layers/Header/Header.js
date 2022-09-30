import { memo, useState } from "react";
import components from "../..";
import styles from './../../../styles/Header.module.css'
import UBoat from "./../../../assets/Kapal.png"
import { useEffect } from 'react'
import { useHover, useMove } from '@use-gesture/react'
import vectorsmerged from "./../../../assets/vectorsmerged.png"
import monitor from "./../../../assets/vectors/Monitor.svg"
import { useSpring, animated } from "react-spring"

import Image from 'next/image'
import HeaderText, { Desc, Separator } from "./HeaderText";
import Fish from "./../../../assets/fish.png"
import { useLayoutContext } from "../../Layout";
import Vector from "./Vector";
import states from "../../../common/states";
import ThemeChanger from "./ThemeChanger";

export default memo(({ unload }) => {
    const { layer } = useLayoutContext()
    const { theme } = states.useTheme((state) => state)
    const [style, animate] = useSpring(() => ({ marginRight: '-10vw', marginBottom: '-10vh', opacity: 0, config: { tension: 80 } }))
    const [num, setNum] = useState(0)
    const [ilustrationstyle, ianimate] = useSpring(() => ({ x: 0, y: 0, right: '-4vw', opacity: 0, zIndex: 1001 }))

    useEffect(() => {
        setTimeout(() => {
            animate({ marginRight: '5vw', marginBottom: '-10vh', opacity: 1 })
        }, 900)
        const preventDefault = (e) => e.preventDefault();
        document.addEventListener("gesturestart", preventDefault);
        document.addEventListener("gesturechange", preventDefault);

        return () => {
            document.removeEventListener("gesturestart", preventDefault);
            document.removeEventListener("gesturechange", preventDefault);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            animate({ marginRight: '5vw', marginBottom: '-10vh', opacity: 1 })
        }, 900)
    }, [])


    // const bind = useMove(
    //     ({ xy }) => {
    //         animate({ x: -(xy[0] / 80), y: -(xy[1] / 80) })
    //         ianimate({ x: -(xy[0] / 190), y: -(xy[1] / 190), zIndex: 1001 })
    //     },
    // )

    return (
        <>
            <div className="flex">
                <div className={`${styles.introductiongrid} white-text grid content-center  `}>
                <ThemeChanger />
                    <div className="">
                        <div className="flex ">
                            <HeaderText />
                        </div>
                        <div className="flex justify-center py-6">
                            <Separator layer={0} />
                        </div>
                        <div className="px-[14vw] pt-4">
                            <Desc />
                        </div>
                    </div>
                </div>
                <div className={`${styles.ilustrationgrid} white-text `}>
                    {/* <animated.div style={{ ...style }}>
                    <components.FullElipse className={`fixed right-[-25vw] top-[1vh]`} />
                    <animated.div style={{ ...ilustrationstyle, position: 'fixed', top: '30vh', zIndex: 1001 }}>
                        <components.UBoat className="z-[1001]" />
                    </animated.div>
                </animated.div> */}
                    {
                        theme === 'white' ?
                            (
                                <animated.div className=""
                                >
                                    <Vector />
                                </animated.div>
                            )
                            :
                            (
                                <animated.div className=""
                                    style={{ ...style }}
                                >
                                    <Image src={Fish} width="900vw" height="900vh" />
                                </animated.div>
                            )
                    }
                </div>
            </div></>
    )
})