
// const fs = require ("fs");
// const{EventEmitter} = require("events");

// const emitter = new EventEmitter();

// emitter
//   .on("phase", () => console.log("Poll phase"))
//   .emit("phase");

// fs.readFile(__filename, () => {
//   setTimeout(() => console.log("Timers phase"));
//   setImmediate(() => console.log("Check phase"));
// });

const http = require("http");
const server = http.createServer();

server
  .on("close", () => {
    console.log("called from Close callbacks phase");
})
  .listen(8000);

process.on("SIGINIT", () => {
  server.close();
});