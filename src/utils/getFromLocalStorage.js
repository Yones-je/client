const getFromLocalStorage = (query) => JSON.parse(localStorage.getItem(query)) || [];

export default getFromLocalStorage;