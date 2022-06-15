const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // set content type

  res.setHeader("Content-Type", "text/html");

  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact":
      path += "contact.html";
      break;
  }

  //send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
