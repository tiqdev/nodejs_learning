import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT || 8000;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

const server = http.createServer(async (req, res) => {
  //res.setHeader("Content-Type", "text/plain");
  //res.statusCode = 200;

  try {
    if (req.method === "GET") {
      let file_path;
      if (req.url === "/") {
        file_path = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        file_path = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Page not found");
      }

      const data = await fs.readFile(file_path);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Invalid request method");
    }
  } catch (err) {
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    console.log(err);
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
