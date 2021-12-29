const express = require('express')
const { buildUrls } = require('./utils')

const url = "https://clutch.co/agencies/ppc/ecommerce"

const app = express();

app.get('/start', async function(req, res) {
    const { query } = req;
    const data = await buildUrls(query.url);

    console.log(data)

})


app.listen(3000, console.log('Server listening 3000'))