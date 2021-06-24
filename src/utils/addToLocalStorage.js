const addToLocalStorage = (query, val) => {
    const storage = JSON.parse(localStorage.getItem(query));
  
    if (!storage.includes(val)) {
      searches.push(val);
      localStorage.setItem(query, JSON.stringify(query));
    }
  };
  
  export default addToLocalStorage;