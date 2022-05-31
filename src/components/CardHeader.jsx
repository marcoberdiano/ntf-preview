import {ReactComponent as IconView} from '../images/icon-view.svg';
import equilibrium from '../images/image-equilibrium.jpg';

const CardHeader = () => {
    return ( 
        <div className="card-img-container">
                <img className='card-img' src={equilibrium} alt="equilibrium"/>
                <div className='overlay'>
                    <div><IconView/></div>
                </div>
        </div>
     );
}
 
export default CardHeader;