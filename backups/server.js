// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
//load the quotes JSON
const Quotes = require("../quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function(request, response) {
  response.json(
    {
      App: "Quotes node js",
      Student_FullName: "Afshin Karamifar",
      Position: "Trainee at Code Your Future",
      Company: "Code Your Future",
      URL: "https://codeyourfuture.io/"
    });
});

//START OF YOUR CODE...
// All Quotes
app.get("/quotes", function(request, response) {
  response.json(Quotes);
})

//Random Quotes
app.get("/quotes/random", function(request, response) {
  let randomQuote = pickFromArray(Quotes);
  response.json(
    {
      Quotes: randomQuote.quote,
      author: randomQuote.author
    });
})

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Listen to port 3000 or any available
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
})