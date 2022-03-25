import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// styles
import '../styles/ProductCard.scss';

const ProductCard = ({ id, brand, imgUrl, model, price }) => {
    return (
        <div className='productCard'>
            <Link to={`/${id}`}>
                <img src={imgUrl} alt={model} />
                <div className="productCard__footer">
                    <div className="productCard__footer-left">
                        <p className='productCard__footer-left-model'>{model}</p>
                        <p>{brand}</p></div>
                    <div className="productCard__footer-right">

                        <p>{`${price} EUR`}</p>

                    </div>

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