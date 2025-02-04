const express = require("express");
const app = express();
const routes = require("./routes");
const port = 3000;

var mongoose = require("mongoose");
var key = process.env.ME_CONFIG_MONGODB_URL;
// console.log("Key:", key);

mongoose
  .connect(key, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

var cors = require('cors')
app.use(cors())

app.use(express.json());
app.use("", routes);

/**

app.get('/api/v1/hello/', (req, res) => {
    console.log("GET /api/v1/hello/ - Greeting")
    res.send('Hello from ExpressJS!');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
**/

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

