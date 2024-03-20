const express=require("express");
const app=express();
const rout=require("./Products/Register.js");
app.use(express.json());
app.post("/products/register",rout.register);
app.post("/products/auth",rout.auth);
app.get("/products/company/:companyname=AMZ||FLP||SNM||MYN|AZO/categorie/:categorie=laptop|| earphones || mouse ||phone ||computer",rout.details);
app.listen(4000,()=>{
    console.log("Server Started!!!");
})