//const http =require(`http`);
const express=require(`express`);
const app =express();

app.get(`/add-product`,(req,res,next)=>{
    console.log(`in  middleware`);
    res.send(`<h1>The Add Product<h1>`);
    //next();
});
app.post(`/`,(req,res,next)=>{
    console.log(`in another middleware`);
    res.send(`<h1>amit<h1>`);
    res.redirect(`/add-product`);
    //next();
});


app.listen(4000);