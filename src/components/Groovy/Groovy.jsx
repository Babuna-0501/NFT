import './groovy.scss';
import img from '../../assets/groovy.png';
import Accordion from '../Accordion/Accordion';

const Groovy = () => {
  return (
    <div className='groovy'>
        <div className='top'>
            <div>
                <span>Groovy Shop</span>
                <p>
                    All Moon Boyz are minted unique...but why stop there?
                    With the power of the Moon Shop, you can make each Moon Boy uniquely yours. You get to choose his face, colors, background, and even accessories.
                    You can also access exclusive limited editions of Moon Boyz.
                </p>
                <button>Discover</button>
            </div>
            <div>
                <img src={img} />
            </div>
        </div>
        <div className='bottom'>
            <h2>Frequently Asked Questions</h2>
            <div className='bottom_acc'>
                <div>
                    <Accordion title="What is the Funky Town?" content="First Accordion content" />
                    <Accordion
                    title="What is the Groovy Shop?"
                    content="Second Accordion content"
                    />
                    <Accordion
                    title="What is the utility?"
                    content=" <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
                    />
                </div>
                <div>
                    <Accordion title="What is the supply and minting price?" content="First Accordion content" />
                    <Accordion
                    title="What is the launch date?"
                    content="Second Accordion content"
                    />
                    <Accordion
                    title="Partnership and Collaboration?"
                    content=" <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Groovy