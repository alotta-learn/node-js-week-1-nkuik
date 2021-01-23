// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const { request } = require("express");
const app = express();

const aboutRouter = require('./aboutRouter');

// middleware function
app.use((request, response, next) => {
  console.log(request.headers);

  request.lanugage = request.headers['user-agent'].includes('Mozilla');

  next();
});

app.get('/benjamin', (request, response) => {
  console.log(request.isOnFirefoxBrowser);

  console.log('in here benjamin')

  response.send("benjamin");
});

app.use('/about', aboutRouter);

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
