import {ReactComponent as IconClock} from '../images/icon-clock.svg';
import {ReactComponent as IconEthereum} from '../images/icon-ethereum.svg';
import {ReactComponent as IconView} from '../images/icon-view.svg';
import avatar from '../images/image-avatar.png';
import equilibrium from '../images/image-equilibrium.jpg';

const CardNft = () => {
    return ( 
        <div className="card-container">

            <div className="card-img-container">
                <img className='card-img' src={equilibrium} alt="equilibrium"/>
                <div className='overlay'>
                    <div><IconView/></div>
                </div>
            </div>  

            <h1 className='card-title'>Equilibrium #3429</h1>

            <p className='card-text'>Our Equilibrium collection promotes balance and calm.</p>

            <div className='card-info-container'>
                <div className='card-info-left'>
                    <IconEthereum/>
                    <span className='card-info-left-text'>0.041 ETH</span>
                </div>
                <div className='card-info-right'>
                    <IconClock/>
                    <span className='card-info-right-text'>3 days left</span>
                </div>
            </div>

            <div className='line'/>

            <div className='profile-container'>
                <img  className='profile-img' src={avatar} alt="avatar"/>
                <span className='profile-text'>Creation of <span className='profile-author'>Jules Wyvern</span></span>
            </div>

        </div>
     );
}
 
export default CardNft;