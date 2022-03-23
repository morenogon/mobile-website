import { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

// styles
import '../styles/ProductsList.scss';

// hooks
import { ProductsListContext } from '../hooks/context';

// components
import ProductCard from './ProductCard';

const ProductsList = () => {

    const [productsList] = useContext(ProductsListContext);

    const [filter, setFilter] = useState('');

    const filteredProducts = productsList.filter((product) => {
        const brand = product.brand.toLowerCase().trim();
        const model = product.model.toLowerCase().trim();

        const filterInput = filter.toLowerCase().trim();

        return brand.includes(filterInput) || model.includes(filterInput);
    });

    return (
        <div className='productsList'>
            <div className="productsList__searchContainer">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='productsList__searchContainer-search'>
                        <SearchIcon className='productsList__searchContainer-icon' />
                        <input
                            type='text'
                            placeholder='Search for brand or model'
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="productsList__searchContainer-input"
                        />
                    </div>
                </form>
            </div>
            <div className="productsList__body">
                {filter && filteredProducts.length ? (
                    <>{filteredProducts.map(({ id, brand, imgUrl, model, price }) => {
                        return (
                            <ProductCard key={id} brand={brand} imgUrl={imgUrl} model={model} price={price} />
                        )
                    })}</>
                ) : (<>{productsList.map(({ id, brand, imgUrl, model, price }) => {
                    return (
                        <ProductCard key={id} brand={brand} imgUrl={imgUrl} model={model} price={price} />
                    )
                })}</>)}
            </div>
        </div>
    )
}

export default ProductsList;