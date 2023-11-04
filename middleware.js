//middleware - reqfilter

const reqfilter =(req,res,next)=>{
    if(!req.query.name){
        res.send("enter name")
    }
    else if(req.query.name == 'khushi'){
        res.send(`hello ${req.query.name}`)
    }
    else{
        next()
    }
}

module.exports = reqfilter;