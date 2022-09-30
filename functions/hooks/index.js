import { useEffect } from "react"
import { useSpring } from "react-spring"
import states from "../../common/states"

const useThemes = () => {
    const { theme } = states.useTheme((states) => states)
    const [themes, setThemes] = useSpring(() => ({ color:'#1E252B' }))
    const [themesbg, setThemesBg] = useSpring(() => ({ background:'linear-gradient(180deg, #F1F1F1 0%, #D2EBFF 100%)' }))

    useEffect(() => {
        if(theme === 'white') {
            setThemes({ color:'#1E252B' })
            setThemesBg({ background: 'linear-gradient(180deg, #F1F1F1 0%, #D2EBFF 100%)' })
        } else {
            setThemes({ color:'#F1F1F1' })
            setThemesBg({ background: 'linear-gradient(180deg, #161F26 0%, #121212 100%)' })
        }
    }, [theme])



    return [
        {
            font: themes,
            background: themesbg
        }
    ]


}

export {
    useThemes
}