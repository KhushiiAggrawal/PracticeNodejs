const express= require('express');
const reqFilter = require('./middleware');
const app = express();
const route=express.Router();

// app.get('',(req,res)=>{
//     res.send(req.query+"This is my home page")
//     res.end();
// })

// app.get('/about',(req,res)=>{
//     res.send("This is my about page");
// })

// app.use(express.static(__dirname))

// app.get('/about',(req,res)=>{
//     res.sendFile(`${__dirname}/hello.html`);
// })
// app.get('*',(req,res)=>{
//     res.sendFile(`${__dirname}/nopage.html`);
// })


app.set('view engine','ejs');

route.use(reqFilter);

// // route middleware 
// app.use(reqfilter)


app.get('/profile',(req,res)=>{
    const data =[1,2,3,4,5,6,7,7]
    res.render('profile',{data});
})
route.get('/hello',(req,res)=>{
    res.send("Authenticated page");
})
app.listen(3000);
app.use('/',route)

//CRUD for file system

// const fs= require('fs');
// const path= require('path')
// const input= process.argv;
// const filePath = path.join(__dirname,`./${input[3]}`)
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }
// else if(input[2]=='read'){
//     fs.readFileSync(input[3]);
// }
// else if(input[2]=='append'){
//     fs.appendFileSync(input[3],input[4]);
// }
// else if(input[2]=='rename'){
//     fs.renameSync(input[3],input[4]);
// }
// else{
//     console.log("invalid input");
// }

// if(input[2]=='add'){
//     fs.writeFile(filePath,input[4],(err)=>{
//         if(!err){ console.log(" file created")}
//     });
// }
// else if(input[2]=='remove'){
//     fs.unlink(filePath);
// }
// else if(input[2]=='read'){
//     fs.readFile(filePath,'utf8',(err,item)=>{
//         console.log(item);
//     });
// }
// else if(input[2]=='append'){
//     fs.appendFile(filePath,input[4],(err)=>{
//         if(!err){ console.log(" file appended")}
//     });
// }
// else if(input[2]=='rename'){
//     fs.rename(filePath,`${__dirname}/${input[4]}`,(err)=>{
//         if(!err){ console.log(" file renamed")}
//     });
// }
// else{
//     console.log("invalid input");
// }


// promise


// const doAdd = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(80);
//     },5000)
// })

// doAdd.then((b)=>{
//     console.log(b)
// })