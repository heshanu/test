const express=require("express");
const app=express();
const path=require("path");
const logger=require('./middleware/logger');
const exphbs=require('express-handlebars');
const  members=require('./Members');



//middle ware
app.use(logger);

//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//homepage route
app.get('/',(req,res)=>{
    res.render('index',{
        title:'member app',
        members
    })
});


//use static folder
app.use(express.static(path.join(__dirname,'public')));

//member api routes
app.use('/api/members',require('./routes/api/members'));

const P=process.env.P||5000;

app.listen(P,()=>console.log("server started on port 5000"));