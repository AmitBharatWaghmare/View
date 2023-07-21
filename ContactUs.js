const path =require(`path`);
const express=require(`express`);
//const bodyParser=require(body-parser)
const app =express();
//app.use(bodyParser.urllencoded({extended: false}));


app.get(`/`,(req,res,next)=>{
    
    res.send(` <formaction="/contactus" method="POST"> <button href="/view/contactus" type="button">Click Me!</button></form>`);
    res.redirect(`/contactus`);

    //next();
});
app.get(`/contactus`,(req,res,next)=>{
   
    res.sendFile(path.join(__dirname,`view`,`ContactUs.html`));
    res.send(`contactus`);
    //next();
});
app.use((req,res,next)=>{
   
    res.status(404).sendFile(path.join(__dirname,`view`,`404.html`));
    //next();
});


app.listen(4000);