var http = require("http");

var options = {
  "method": "POST",
  "hostname":
    "localhost",
  "port": "5000",
  "path": [
    "fileop",
    "v0.1",
    "getFile"
  ],
  "headers": {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
      console.log(chunk)
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body)
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ id: 'adhar-1522311777958.jpg' }));
req.end();