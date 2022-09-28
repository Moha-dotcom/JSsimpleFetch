const axios = require('axios');

async function doHeadRequest() {

  let res = await axios.head('http://google.com');

  console.log(`Status: ${res.status}`)
  console.log(`Server: ${res.headers.server}`)
  console.log(`Date: ${res.headers.date}`)
}

doHeadRequest();