import './inner.scss';
import img from '../../assets/mutant-chugira.png';
import Count from '../Count/Count';


const Inner = () => {
  return (
    <div className='inner'>
         <div className='inner_title'>
           Funky Town Cats
        </div>
        <div className='btm'>
            <div className='count'>
                <Count/>
            </div>
            <div className='mutant'>
                <img className='mutant_img' src={img} loading='lazy' />
            </div>
        </div>
        <div className='date'>
          <p>Coming May 26, 2022</p>
          <button>Explore</button>
        </div>
    </div>
  )
}

export default Inner