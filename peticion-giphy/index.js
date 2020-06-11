const axios = require('axios');
const texto = 'perros';
const API_KEY = 'q97vCS1VN98OqonNcEonEOnf4D7El3ul';

axios.get(`http://api.giphy.com/v1/gifs/search?q=${texto}&api_key=${API_KEY}&limit=6`)
.then(({ data })=>{
    console.log(data.data);
})
.catch((err)=> console.log(err));