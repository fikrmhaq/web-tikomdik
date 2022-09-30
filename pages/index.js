import { useEffect, useRef, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import states from '../common/states';
import Header from '../components/Layers/Header/Header'
import Multimedia from '../components/Layers/Multimedia';
import PhiRadio from '../components/Layers/PhiRadio';
import RnD from '../components/Layers/RnD';
import Layout from '../components/Layout'




export default function Home() {
  const { theme } = states.useTheme((states) => states)
 
  const [header, setHeader] = useState(true)

  const scrollDestinationRef = useRef();

  const [y, setY] = useSpring(() => ({
    immediate: false,
    config: config.slow,
    y: 0,
    onFrame: props => {
      window.scroll(0, props.y);
    }
  }));

  useEffect(() => {
    console.log('Home')
  }, [])



  return (
    <>
      <Layout>
        <div>
          <Header unload={!header} />
        </div>
        <div ref={scrollDestinationRef}>
          <RnD/>
        </div>
        <div >
          <Multimedia/>
        </div>
        <div >
          <PhiRadio/>
        </div>
      </Layout>
    </>
  )
}
