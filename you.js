const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const url = "https://clutch.co/agencies/ppc/ecommerce"

async function scrapeData() {
    try {
        const { data } = await axios.get(url);
        
        const $ = cheerio.load(data);
        
        const listItems = $("h3.company_info");

        const companies = [];

        listItems.each((idx, el) => {
            
            const company = { title: "" };

            // company.profile_page_url = $(el).children("h3.company_info a").attr("href");

            company.title = $(el).children("a").text();

            // company.image_url = $(el).children("img").attr("src");

            // company.description = $(el).children("p.company_info_wrap").text();

            companies.push(company);
        });

        console.dir(companies)

        fs.writeFile("companies.json"), JSON.stringify(companies, null, 2), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("successfully written data to file");
        };
    } catch (err) {
        console.error(err);
    }
}

scrapeData();
