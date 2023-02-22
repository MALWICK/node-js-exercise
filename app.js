const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer(function (req, res) {
    const server = req.url === "/" ? "index.html" : req.url;
    fs.readFile(
      path.join(__dirname, `statics/${server}`),
      function (err, data) {
        if (err) {
          res.end("there was an error ");
        } else {
          res.end(data.toString());
        }
      }
    );
    const keepTrack = req.url;
    const pathname = path.join(__dirname, `files/${keepTrack}`);
    const Tracktimer = new Date().toLocaleTimeString();
    fs.appendFile("test.txt", `\n${pathname}\n${Tracktimer}`, function (err) {
      if (err) throw err;
      console.log("Updated!");
    });
    fs.writeFile('test.txt', 'Hello World!', function (err) { 
        if (err)
            console.log(err);
        else
            console.log('Write operation complete.');
    });
  })
  .listen(8080);

// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const url = require("url");

// function returnFile(pathname, res, onError) {
//   fs.readFile(pathname, function (err, data) {
//     if (err) {
//       onError(err);
//     } else {
//       res.end(data.toString());
//     }
//   });
// }

// function writeLog(log,onSuccess) {
//     const date = new Date();
//     fs.writeFile(path.join(__dirname, 'logs', `${date.getFullYear()}-${date.getMonth()}-${date.getDate}-${date.getTime}.txt`) )

    
// }

// http
//   .createServer(function (req, res) {
//     const { pathname } = url.parse(req.url);
//     const file = pathname === "/" ? "index.html" : pathname;
//     const extention = file.split(".").pop();

//     res.writeHead(200, { " content-type": `text/${extention}` });

//     const fileToRead = path.join(__dirname, "files", file);
//     returnFile(fileToRead, res, onError),
//       function (err) {
//         returnFile(
//           path.join(__dirname, "files/error.html"),
//           res,
//           function (err) {
//             res.end("There was an error");
//           }
//         );
//       };
//   })
//   .listen(5000);
