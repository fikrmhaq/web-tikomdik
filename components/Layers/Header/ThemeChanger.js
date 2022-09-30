import Image from "next/image";
import { memo, useState } from "react";
import states from "../../../common/states";
import day from "./../../../assets/day.svg"
import night from "./../../../assets/night.svg"

export default memo(() => {
    const { theme, setTheme } = states.useTheme((state) => state)
    const [mode, setMode] = useState(false)

    const set = () => {
        if(mode) {
            setTheme('black')
        } else {
            setTheme('white')
        }
        setMode(prev => !prev)

    }

    if(mode) return <div className="fixed z-[9999] top-[15vh] left-[3.5vw]" onClick={set}><Image src={day}  /></div>
    return <div className="fixed z-[9999] top-[15vh] left-[3.5vw]" onClick={set}><Image src={night}  /></div>

})