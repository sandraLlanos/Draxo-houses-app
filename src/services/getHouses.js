export const getHouses = async() => {
    const url = `https://modern-houses-api-production.herokuapp.com/api/v1/houses/California`;
    const resp = await fetch( url );
    const data  = await resp.json();   
    
    const houseFiltered = Object.keys(data)
    .filter(key => /^[A-Z]*$/.test(key))
    .reduce((obj, key) => {
        obj[key] = data[key].slice(0,3);
        return obj;
    }, {});

return houseFiltered;

}
