const express = require("express");
const app = express();

const aboutRouter = express.Router();
aboutRouter.get('/', (request, response) => {
    response.send("About2");
});

aboutRouter.get('/employeers', (request, response) => {
    console.log(request.query);
    if (request.query.skills === 'tech') {

        response.send("Sana, Keerthika");
    }
    response.send("No emlployerrs found");
});

aboutRouter.get('/employeers/:name', (request, response) => {
    console.log(request.params);

    if (request.params.name === "kehinde") {
        response.send("Kehinde");
    }

    // response.send("No emlployerrs found");
});

aboutRouter.get('/employeers/:name', (request, response) => {
    response.send("employeers");
});

aboutRouter.get('/values', (request, response) => {
    response.send("We value transparency");
});

module.exports = aboutRouter;