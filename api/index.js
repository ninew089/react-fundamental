let jsonServer = require("json-server");
let db = require("./db.js");
let fs = require("fs");

let server = jsonServer.create();

fs.writeFileSync("/tmp/db.json", JSON.stringify(db()));

let router = jsonServer.router("/tmp/db.json");
let middlewares = jsonServer.defaults();
let port = process.env.PORT || 5000;
server.use(middlewares);
server.use(router);
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
server.listen(port, function () {
  console.log("JSON Server is running on http://localhost:" + port);
});
