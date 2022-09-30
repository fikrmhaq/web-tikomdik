import { memo } from "react"
import Division from "../../Utility/division"
import OverviewImage from "../../Utility/OverviewImage"
import { Separator } from "../Header/HeaderText"
import MMImage from "./../../../assets/multimediaimage.png"

export default memo(() => {
    return (
        <div className="flex">
            <div className={`white-text grid content-center w-[100vw] h-[100vh]  `}>
                <div className="">
                    <div className="flex ">
                        <Division.Name title={["Multimedia"]}  layer={2} />
                    </div>
                    <div className="flex justify-center py-6">
                        <Separator layer={2} />
                    </div>
                    <div className="px-[14vw] pt-4">
                        <Division.Desc quote="Beautiful creations" layer={2} />
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
                <OverviewImage layer={2} src={MMImage} effect="overview-image-effect1" />
            </div>
        </div>
    )
})