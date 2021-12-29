const cheerio = require('cheerio')
const axios = require('axios')

async function buildUrls (url) {
    try {
        const { data } = await axios.get(url);
        
        const $ = cheerio.load(data);
        
        const listItems = $(".company");

        const companies = [];

        await listItems.each((idx, el) => {
            
            const company = {  title: "", profile_page_url: "", image_url: "", description: "" };

            company.profile_page_url = $(el).children("a").attr("href");

            company.title = $(el).children("h3").text().trim();

            company.image_url = $(el).find('img')[0].attribs['data-src']

            company.description = $(el).children("p").text();

            companies.push(company);
        });

        return companies;

    } catch (err) {
        console.error(err);
    }
}

module.exports = {
   buildUrls
}