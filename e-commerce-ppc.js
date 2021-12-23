const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const url = "https://clutch.co/agencies/ppc/ecommerce"

async function scrapeData() {
    try {
        const { data } = await axios.get(url);
        
        const $ = cheerio.load(data);
        
        const listItems = $(".list_wrap ul li")

        const companies = [];

        listItems.each((idx, el) => {
            const company = { title: "", profile_page_url: "", image_url: "", description: "" };

            company.title = $(el).children("")
        })
    }
}