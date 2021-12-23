// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// URL of the page we want to scrape
const url = "https://https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3";

//Async function which scrapes the data