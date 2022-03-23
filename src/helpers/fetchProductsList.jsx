import { productsListApi } from "../api/productsListApi";

export const fetchProductsList = async () => {
    return await productsListApi.get()
        .then(res => {
            setItemLocalStorage('productsList', res.data);
            return res;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
};

export const setItemLocalStorage = (itemName, data) => {
    localStorage.setItem(itemName, JSON.stringify(data));
};