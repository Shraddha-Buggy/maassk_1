const express= require("express");
const dotenv = require("dotenv");
const cors =require("cors");
 dotenv.config({path:"./env"});
 const port =process.env.port||3000;
 const {ConnectDB} =require("./src/Config/Database");
 const countryRouter=require("./src/Routes/AdminPanalRoutes/AdminRoutes");
const bodyParser = require("body-parser");
 

 const app =express();

 app.use(bodyParser.json());

 app.use(bodyParser.urlencoded({extended: true}))
 app.unsubscribe(express.json());
 app.use("/api/v1/AdminpanalRoutes",countryRouter);
 app.use(
    cors({
        origin:process.env.origin,
        Credential:true,
    })
 );
 ConnectDB()
 .then(()=>{
    app.listen(port,()=>{
        console.log(`server connection successful ${port}`);
    })
 })
 .catch((Error)=>{
     console.log(`server is connot been connect${Error}`)
 })

