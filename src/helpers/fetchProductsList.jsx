import { productsListApi } from "../api/productsListApi";

export const fetchProductsList = async () => {
    return await productsListApi.get('product')
        .then(res => {
            setItemLocalStorage(res.data);
            return res;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
};

export const setItemLocalStorage = (data) => {
    localStorage.setItem('productsList', JSON.stringify(data));
};