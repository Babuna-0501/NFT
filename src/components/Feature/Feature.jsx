import './feature.scss';
import img2 from '../../assets/mutant2.png';
import img3 from '../../assets/mutant3.png';
import img4 from '../../assets/mutant4.png';
import img5 from '../../assets/mutant5.png';
import img6 from '../../assets/mutant6.png';


const Feature = () => {
  return (
    <div className='feature'>
        <div className='leftTop'>
            <span>Welcome to</span>
            <span>Funky Town Cats</span>
            <p>Funky Town Cats is a collection of 7000 groovy cat NFTs living on the Ethereum blockchain, created from hundreds of unique traits. People need Funk now more than ever. So we’re taking it to the Metaverse. A town to keep us movin’ keep us groovin’ with some energy will be created.
                Our mission is to bring more groove to the world and bring people together through neighbourhood, style, and creativity.
            </p>
            <button>Buy on Open Sea</button>
        </div>
        <div className='rightTop'>
            <div><img src={img2}/></div>
            <div><img src={img3}/></div>
        </div>
        <div className='leftBottom'>
            <div><img src={img4}/></div>
            <div><img src={img5}/></div>
        </div>
        <div className='rightBottom'>
            <div><img src={img5}/></div>
            <div><img src={img6}/></div>
        </div>
    </div>
  )
}

export default Feature