
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HEADER_LOGO } from '../utils/constants';
const Header = () => {
    const [buttonText, setButtonText] = useState('Login')
    const handleClick = () => {
         buttonText === 'Login' ? setButtonText('Logout'):setButtonText('Login');
    }
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={HEADER_LOGO} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <button className='login-btn' onClick={handleClick}>{buttonText}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;