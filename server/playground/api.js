

const axios = require("axios"); 

const linkAndKey = "http://data.fixer.io/api/latest?access_key=101bcfd5d107089e73a37b0e6c14e962"; 

const getExchangeRate = async(to) => {
    let response = await axios.get(linkAndKey);   
    return response.data.rates[to];
    
};

const getCountry = async(currencyId) => {
    let response = await axios.get(`http://restcountries.eu/rest/v2/currency/${currencyId}`)
    return response.data.map((country) => country.name);
    
};

const convert = (to, amount) => {
    let countries;
    return getCountry(to).then((listCountries) => {
        countries = listCountries;
        return getExchangeRate(to)
    }).then((rate) => {
        const exchRate = amount * rate;

        return `${amount} EUR is worth ${exchRate.toFixed()} ${to}, you can spend ${exchRate.toFixed()} there: ${countries.join(", ")}`;
    })
};

const convertAlt = async(to, amount) => {
    let countries = await getCountry(to);
    let rate = await getExchangeRate(to);
    if(amount <= -1) {
        amount *= -1;
    }
    let exchRate = amount * rate;
    
    return `${amount} EUR is worth ${exchRate.toFixed()} ${to}, you can spend ${exchRate.toFixed()} ${to}s there: ${countries.join(", ")}`;
};
convertAlt("UAH", 33).then((res) => console.log(res)).catch((e) => console.log(e));