import { productsListApi } from "../api/productsListApi";
import { setItemLocalStorage } from "./localStorage";

export const fetchProductDetail = async (id) => {
    return await productsListApi.get(`product/${id}`)
        .then(res => {
            setItemLocalStorage('productDetail', res.data);
            return res;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
};

export const postProductDetail = async (data) => {
    return await productsListApi.post('cart', data)
        .then((res) => {
            setItemLocalStorage('count', res.data.count);
            return res;
        }, (error) => {
            console.error('There was an error!', error);
        });
};