import { useContext } from 'react';

// styles
import '../styles/ProductsList.scss';

// hooks
import { ProductsListContext } from '../hooks/context';

// components
import ProductCard from './ProductCard';

const ProductsList = () => {
    const [productsList] = useContext(ProductsListContext);

    return (
        <div className='productsList'>
            {/* Search */}
            <div className="productsList__body">
                {productsList.map(({ id, brand, imgUrl, model, price }) => {
                    return (
                        <ProductCard key={id} brand={brand} imgUrl={imgUrl} model={model} price={price} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductsList;