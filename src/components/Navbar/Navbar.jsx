import './navbar.scss';
import img from '../../assets/logo.svg';


export default function 
() {
  return (
    <div className='navbar'>
        <div className='left'>
           <div>
             <img src={img} loading='lazy'/>
           </div>
        </div>
        <div className='right'>
            <h3>about</h3>
            <h3>roadmap</h3>
            <h3>shop</h3>
            <h3>team</h3>
            <div className='right_btn'>
              <button>Connect Wallet</button>
            </div>
        </div>
    </div>
  )
}
