import { useMove } from "@use-gesture/react";
import { memo, useState } from "react";

export default memo(({ pointer }) => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const bind = useMove(
        ({ xy }) => {
            setX(xy[0])
            setY(xy[1])
            pointer(xy)
        },
    )

    return (
        <div {...bind()} style={{ width: '100vw', height: '100vh', 
        // backgroundColor: 'RGBA(37,114,169,0.32)',
         position: 'fixed', zIndex: '9998' }}>
            <div className="flex h-full">
                {/* <div className="w-[50vw] height-[50vh] 
                border-2
                ">
                    <div className="font-bold text-white">
                        {x} / {y}
                    </div>
                </div>
                <div className="w-[50vw] height-[50vh] 
                border-2
                ">

                </div> */}
            </div>
        </div>
    )
})