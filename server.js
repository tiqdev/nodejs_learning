import http from "http";
const PORT = 8000;

const server = http.createServer((req, res) => {
  //res.setHeader("Content-Type", "text/plain");
  //res.statusCode = 200;

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      message: "Hello World",
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
