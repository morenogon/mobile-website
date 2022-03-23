import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// styles
import '../styles/ProductCard.scss';

const ProductCard = ({ brand, imgUrl, model, price }) => {
    return (
        <div className='productCard'>
            <Link to='/'>
                <img src={imgUrl} alt={`${model} image`} />
                <div className="productCard__footer">
                    <p>{model}</p>
                    <p>{brand}</p>
                    <p>{`${price} EUR`}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard;

ProductCard.propTypes = {
    brand: PropTypes.string,
    imgUrl: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
}