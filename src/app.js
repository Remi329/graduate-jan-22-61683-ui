const express = require("express");
const bodyParser = require("body-parser");
// import route in app.js
const authRoute = require("./routes/auth");
const productRoute = require("./routes/products.electronics");

// creating Web server
const app = express();

// for every incoming request, bodyParser will parse data from bytes into JSON object &
// vice-versa for every reponse JSON into bytes. Works with POST and PUT/PATCH
app.use(bodyParser.json());

//CORS HEADER
/** middleaware - to enable cors at server-side */

app.use((req, res, next) => {
console.log("within cors configuration middleware");
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader(
"Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept"
);
res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
next();
});



app.post("api/posts", (req,res,next) =>{
  const posts = [{
    id:"4",
    name:"remi",
    email:"r@gmail.com",
    password:"r123"
  },
  {
    id:"5",
    name:"teni",
    email:"t@gmail.com",
    password:"t123"
  }
];
res.status(200).json({
  message: 'post fetched successfully'
})
})


// custom middleware
app.use((req, res, next) => {
  console.log("Incoming Request Middleware" + req.body);
  next();
});

// middleware - use()
app.use("/api/v1/auth/", authRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/auth/add", authRoute);
app.listen(3000, () => {
  console.log("server started...");
});
