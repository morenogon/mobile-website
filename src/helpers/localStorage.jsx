export const setItemLocalStorage = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
};