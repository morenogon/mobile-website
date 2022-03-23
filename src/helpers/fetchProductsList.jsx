import { productsListApi } from "../api/productsListApi";

export const fetchProductsList = async () => {
    return await productsListApi.get()
        .then(response => response)
        .catch(error => {
            console.error('There was an error!', error);
        });
};