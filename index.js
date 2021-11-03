const express = require("express");
const app = express();
const fs = require("fs");
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  let date = Date().toString();
  let currentTimestamp = new Date().getTime().toString();

  fs.writeFileSync(
    `${__dirname}/currentDate-time.txt`,
    `${date}, Current Timestamp: ${currentTimestamp}`
  );

  fs.readFile(`${__dirname}/currentDate-time.txt`, "utf-8", (err, data) => {
    if (err) throw err;
    else res.send(data);
  });
  // res.send(`${date}, Current Timestamp: ${currentTimestamp}`);
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
