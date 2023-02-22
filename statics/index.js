const {parse} = require("url");

http.createServer(function(req, res) {
    const {pathname} = parse(req.url);
    handleUsersRequest(req, res);
}).listen(8000);

function handleUsersRequest(req, res)  {
    const {pathname} = parse(req.url);
    if (pathname)
    
}