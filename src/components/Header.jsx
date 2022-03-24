import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// styles
import '../styles/Header.scss';
import { ProductsInCartContext } from '../hooks/context';
import Breadcrumb from './Breadcrumb';

const Header = () => {
    const [productsInCart] = useContext(ProductsInCartContext);

    return (
        <div className='header'>
            <div className="header__leftContainer">
                <Link to='/'>
                    <img className="header__leftContainer-logo" src="/assets/images/logo.png" alt="logo" />
                </Link>
                <div className='header__leftContainer-breadcrumb'>
                    <Breadcrumb />
                </div>
            </div>
            <div className="header__rightContainer">
                <div className="header__basketContainer">
                    <ShoppingCartIcon className="header__basketContainer-icon" /><span>{productsInCart}</span>
                </div>
            </div>
        </div>
    )
}

export default Header