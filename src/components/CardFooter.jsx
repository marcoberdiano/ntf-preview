import avatar from '../images/image-avatar.png';

const CardFooter = () => {
    return ( 
        <div className='profile-container'>
            <img  className='profile-img' src={avatar} alt="avatar"/>
            <span className='profile-text'>Creation of <span className='profile-author'>Jules Wyvern</span></span>
        </div>
     );
}
 
export default CardFooter;