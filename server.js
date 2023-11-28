const expres = require("express");
const nodemailer = require("nodemailer");


const app = expres();
const PORT = 3000;
app.set(PORT);
app.use(expres.json());
app.use(expres.urlencoded({extended: true}));


app.get("/", (req,res)=>{
    res.sendFile("/Front/index.html",{
        root: __dirname
    });
})

app.post("/SendMail",(req,res)=>{
    const from = req.body.from;
    const to = req.body.to;
    const subject = req.body.subject;
    const message = req.body.message;




    const transport = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user:"abdilaahimowliid@gmail.com",
            pass:"ihcousyuvguyqlcc",
        }
    })

    const MailOptions = {
        from : from,
        to : "monewebsite@gmail.com",
        subject : subject,
        message : message
    };

    transport.sendMail(MailOptions,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Mail sent successfully" + info.response);
        }

    })
    res.redirect("/")



})




app.listen(PORT, function(){
    console.log(`listening on ${PORT}`)
});