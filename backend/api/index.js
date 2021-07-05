const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const meals = require("./routes/meals");
const orders = require("./routes/orders");
const auth = require("./routes/auth");

const app = express();
app.use(bodyParser.json());
app.use(cors());

//mongoose.connect(process.env.MONGODB_URI
//const uri = "mongodb://localhost:27017/api_test_db";
const uri =
  "mongodb://api_user:api1234@mongodb:27017/api_test_db?authSource=api_test_db";
const options = {
  //db: { native_parser: true },
  //server: { poolSize: 5 },
  //replset: { rs_name: "myReplicaSetName" },
  //user: "api_user",
  //pass: "api1234",
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options);

app.use("/api/meals", meals);
app.use("/api/orders", orders);
app.use("/api/auth", auth);

//app.on("ready", () => {
app.listen(3000, () => {
  console.log("Server is up on port", 3000, "MotherFucker!");
  //print("Server is up on port", 3000, "MotherFucker!");
});
//});

module.exports = app;

/*
const app = express()

app.get('*', (req, res) => {
	console.log('Hola mundo! mi primera aplicacion serverless');
				res.send({mensaje: 'Chanchazo Felizotote'})			
})

module.exports = app
*/
