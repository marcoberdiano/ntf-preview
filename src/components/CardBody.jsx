import {ReactComponent as IconClock} from '../images/icon-clock.svg';
import {ReactComponent as IconEthereum} from '../images/icon-ethereum.svg';

const CardBody = () => {
    return ( 
    <>
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
    
    </> );      
}
 
export default CardBody;