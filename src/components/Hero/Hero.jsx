import './hero.scss';
import hero from '../../assets/hero.png'
import { Parallax } from "react-parallax";


const styles = {
    position: 'absolute',
    zIndex: '-1',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: '1080px',
    maxWidth: '1920px'
};

const Hero = () => {
  return (
 
      <div className='hero'>
        <div className='hero_img'>
          <Parallax className='hero_img--xl' bgImage={hero} strength={250} style={styles}>
          </Parallax>
          {/* <img className='hero_img--xl' src={hero} loading='lazy' /> */}
        </div>
      </div>
  )
}

export default Hero