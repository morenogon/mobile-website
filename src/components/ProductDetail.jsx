import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { fetchProductDetail, postProductDetail } from '../helpers/fetchProductDetail';
import { setItemLocalStorage } from '../helpers/localStorage';
import { ProductsInCartContext } from '../hooks/context';
import Dropdown from './Dropdown';
import '../styles/ProductDetail.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    }, [id]);

    const handleAddToCard = () => {
        postProductDetail({ id: id, colorCode: selectedColor, storageCode: selectedStorage }).then(res => {
            const countProduct = productsInCart + res.data.count;
            setItemLocalStorage('count', countProduct);
            setProductsInCart(countProduct);
        });
        toast.success('🛒 Added to cart!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className='productDetail'>
            <Link to='/' className='productDetail__returnLink'><ArrowBackIosNewIcon className='productDetail__returnLink-icon' /><span>Home</span></Link>
            <div className="productDetail__body">
                <div className="productDetail__leftContainer">
                    <img src={imgUrl} alt={model} />
                </div>
                <div className="productDetail__rightContainer">
                    <div className="productDetail__rightContainer-top">
                        <div className="productDetail__rightContainer-top-description">
                            <h4 className='productDetail__model'>{model}</h4>
                            <h4 className='productDetail__brand'>{brand}</h4>
                            <div className='productDetail__priceContainer'>
                                <p>{price && `${price} EUR`}</p>
                            </div>
                        </div>
                        <div className="productDetail__rightContainer-top-info">
                            <p>{cpu && `CPU: ${cpu}`}</p>
                            <p>{ram && `RAM: ${ram}`}</p>
                            <p>{chipset && `Chip: ${chipset}`}</p>
                            <p>{displayResolution && `Resolution: ${displayResolution}`}</p>
                            <p>{batery && `Battery: ${batery}`}</p>
                            <p>{dimensions && `Dimensions: ${dimensions}`}</p>
                            <p>{weight && `Weight: ${weight}`}</p>
                        </div>
                        {
                            Array.isArray(primaryCamera) ? (primaryCamera.map((cameraName, index) => {
                                return (
                                    <p key={`${id}${cameraName}`} className="productDetail__camera">{cameraName && `Camera ${index}: ${cameraName}`}</p>
                                )
                            })) : (<p className="productDetail__camera">{primaryCamera && `Camera: ${primaryCamera}`}</p>)
                        }
                        {
                            Array.isArray(secondaryCmera) ? (secondaryCmera.map((cameraName, index) => {
                                return (
                                    <p key={`${id}${cameraName}`} className="productDetail__camera">{cameraName && `Camera ${index}: ${cameraName}`}</p>
                                )
                            })) : (<p className="productDetail__camera">{secondaryCmera && `Camera: ${secondaryCmera}`}</p>)
                        }

                    </div>
                    <div className="productDetail__rightContainer-bottom">
                        {options && <Dropdown key={`${id}${options.colors[0].code}`} title='Colors' options={options.colors} onSelect={setSelectedColor} />}
                        {options && <Dropdown key={`${id}${options.storages[0].code}`} title='Storages' options={options.storages} onSelect={setSelectedStorage} />}
                        <button onClick={handleAddToCard}>Add to cart</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ProductDetail;