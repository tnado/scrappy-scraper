const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const url = "https://clutch.co/agencies/ppc/ecommerce"

async function scrapeData() {
    try {
        const { data } = await axios.get(url);
        
        const $ = cheerio.load(data);
        
        const listItems = $(".company");

        const companies = [];

        listItems.each((idx, el) => {
            
            const company = { profile_page_url: "", title: "", image_url: "", description: "" };

            company.profile_page_url = $(el).children("a").attr("href");

            company.title = $(el).children("h3").text().trim();

            // company.image_url = $(el).children(".img").attr("src");

            company.image_url = $(el).find('img')[0].attribs['data-src'] 
            //.find looks for all img and makes an array
            //[0] is the index selector of it
            //.attribs is object attributes raw JS
            //['data--src'] is the hidden class

            company.description = $(el).children("p.company_info_wrap").text();

            companies.push(company);
        });

            console.log(companies);

        // console.dir(companies)

        // fs.writeFile("companies.json"), JSON.stringify(companies, null, 2), (err) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     console.log("successfully written data to file");
        // };
    } catch (err) {
        console.error(err);
    }
}

scrapeData();
