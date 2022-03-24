import { productsListApi } from "../api/productsListApi";
import { setItemLocalStorage } from "./localStorage";

export const fetchProductsList = async () => {
    return await productsListApi.get('product')
        .then(res => {
            setItemLocalStorage('productsList', res.data);
            return res;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
};