//HOW TO

const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

const markup = `
<ul class="fruits">
  <li class="fruits__mango"> Mango </li>
  <li class="fruits__apple"> Apple </li>
</ul>
`;

// How to Load Markup in Cheerio
const $ = cheerio.load(markup);
// // console.log(pretty($.html()));

// // How to Select an Element in Cheerio
// const mango = $(".fruits__mango");
// // console.log(mango.html()); //Mango


// // How to Get the Attribute of an Element in Cheerio
// const apple = $(".fruits__apple");
// // console.log(apple.attr("class")); //fruits__apple

// // How to Loop Through a List of Elements in Cheerio
// const listItems = $("li");
// // console.log(listItems.length); //2
// // listItems.each(function (idx, el) {
    // console.log($(el).text());
// });
//Mango
//Apple

// How to Append or Prepend an Element to a Markup in Cheerio
const ul = $("ul");
ul.append("<li class='ruits__banana'> Banana </li>"); // altered code by adding class to see if I could had to wrap in '' instead of ""
ul.prepend("<li class='fruits__pineapple'> Pineapple </li>");
console.log(pretty($.html()));



