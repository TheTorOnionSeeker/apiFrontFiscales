const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({ force: true }).then(() => {
  server.listen(8000, () => {
    console.log("%s listening at 8000");
  });
});
