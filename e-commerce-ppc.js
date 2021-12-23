const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const url = "https://clutch.co/agencies/ppc/ecommerce"

async function scrapeData() {
    try {
        const { data } = await axios.get(url);
        
        const $ = cheerio.load(data);
        
        const listItems = $(".provider")

        // console.log(listItems);

        const companies = [];

        // listItems.each((idx, el) => {
        //     console.log(el);

        //     const company = { title: "", profile_page_url: "", image_url: "", description: "" };

        //     company.title = $(el).children("")
        // })
        $(".profile_title").each(function(i, elm) {
         console.log($(this).text());   
        })

    } catch (err) {
        console.error(err);
      }
}

scrapeData();