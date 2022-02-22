const PORT = 5555;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const url = "https://www.newsbusters.org/freespeech?page=1";

// app.use(express.static('../client'));
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('I'm working');
// });

// app.get('/socialstats', (req, res) => {
//   const stats = require('./socialStats.json');
//   res.status(200).json(stats);
//   // res.send('I'm working')
// });

axios(url)
  .then((response) => {
    const html = response.data;
    // console.log(html)
    const $ = cheerio.load(html);
    const articles = [];

    $(".field-content", html).each(function () {
      const image = $(this).find("img").attr("src");
      const title = $(this).text();
      const author = $(this).text();
      const url = $(this).find("a").attr("href");
      articles.push({
        image,
        title,
        author,
        url,
      });
    });
    console.log(articles);
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
