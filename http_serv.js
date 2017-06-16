var http = require("http");
var c = 1;

http.createServer(function(request, response) {
  console.log(parseInt(c));
  response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
  response.write("Счетчик = " + parseInt(c++));
  response.end();
}).listen(3000);

console.log("Сервер запущен: порт 3000");