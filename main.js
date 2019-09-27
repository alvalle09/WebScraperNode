const axios = require('axios');
const cheerio = require('cheerio');

//const url = 'https://news.ycombinator.com';
    const url = 'http://codelists.wpc-edi.com/nucc_frameset.htm';


    axios.get(url)
        .then(response => {
            debugger;
            console.log(response.data);
        })
        .catch(error => {
            debugger;
            console.log(error);
        })

