import { productsListApi } from "../api/productsListApi";

export const fetchProductDetail = async (id) => {
    return await productsListApi.get(`product/${id}`)
        .then(res => {
            setItemLocalStorage(res.data);
            return res;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
};

export const setItemLocalStorage = (data) => {
    localStorage.setItem('productDetail', JSON.stringify(data));
};