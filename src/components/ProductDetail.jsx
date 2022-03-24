import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { fetchProductDetail, postProductDetail } from '../helpers/fetchProductDetail';
import { setItemLocalStorage } from '../helpers/localStorage';
import { ProductsInCartContext } from '../hooks/context';
import Dropdown from './Dropdown';

const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState({});
    const [selectedColor, setSelectedColor] = useState();
    const [selectedStorage, setSelectedStorage] = useState();

    const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);

    const { id } = useParams();
    const { imgUrl, brand, model, price, cpu, ram, chipset, displayResolution, batery, primaryCamera, secondaryCmera, dimensions, weight, options } = productDetail;

    useEffect(() => {
        fetchProductDetail(id).then(res => {
            setProductDetail(res.data);
        });
    }, []);

    const handleAddToCard = () => {
        postProductDetail({ id: id, colorCode: selectedColor, storageCode: selectedStorage }).then(res => {
            const countProduct = productsInCart + res.data.count;
            setItemLocalStorage('count', countProduct);
            setProductsInCart(countProduct);
        });
    }

    return (
        <div className='productDetail'>
            <Link to='/'>Home</Link>
            <div className="productDetail__body">
                <div className="productDetail__leftContainer">
                    <img src={imgUrl} />
                </div>
                <div className="productDetail__rightContainer">
                    <div className="productDetail__rightContainer-top">
                        <h4>Description</h4>
                        <p>{brand}</p>
                        <p>{model}</p>
                        <p>{price}</p>
                        <p>{cpu}</p>
                        <p>{ram}</p>
                        <p>{chipset}</p>
                        <p>{displayResolution}</p>
                        <p>{batery}</p>
                        {
                            Array.isArray(primaryCamera) ? (primaryCamera.map((cameraName) => {
                                return (
                                    <p key={`${id}${cameraName}`}>{cameraName}</p>
                                )
                            })) : (<p>{primaryCamera}</p>)
                        }
                        {
                            Array.isArray(secondaryCmera) ? (secondaryCmera.map((cameraName) => {
                                return (
                                    <p key={`${id}${cameraName}`}>{cameraName}</p>
                                )
                            })) : (<p>{secondaryCmera}</p>)
                        }
                        <p>{dimensions}</p>
                        <p>{weight}</p>
                    </div>
                    <div className="productDetail__rightContainer-bottom">
                        <h4>Actions</h4>
                        {options && <Dropdown key={`${id}${options.colors[0].code}`} title='Colors' options={options.colors} onSelect={setSelectedColor} />}
                        {options && <Dropdown key={`${id}${options.storages[0].code}`} title='Storages' options={options.storages} onSelect={setSelectedStorage} />}
                        <button onClick={handleAddToCard}>Añadir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;