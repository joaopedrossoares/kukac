const axios = require('axios');
export let  getZipCodeInformations = async (zipCodes: number[]) => {
  
    return zipCodes.map( (element, index) => {
        return axios.get(`https://viacep.com.br/ws/${element}/json/`, {method: "GET"}).
        then((res) => {
            return res.body;
        })
        .catch((err) => {
            console.log(err);
        });
    });

}