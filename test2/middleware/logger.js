//date time
const moments=require('moment');
//const logger=require('logger');
const logger=(req,res,next)=>{
    console.log("hello fucker");
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl
    }: ${moments().format()}`);
    next()
};

module.exports=logger;