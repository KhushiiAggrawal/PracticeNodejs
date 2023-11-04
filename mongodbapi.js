const express= require("express");
const mongodb = require("mongodb")
const connectToDb = require("./dbconnection");
const app = express();

app.use(express.json());

// in get method we cannot take data from body as per code step by step
app.get('/',async (req,res)=>{
    const collection = await connectToDb();
    const data = await collection.find({}).toArray();
    res.send(data)
})

// post is used to instert item
app.post('/',(req,res)=>{
    res.send(req.body)
})

//to update item using api standard method is to use put 
app.put("/", async(req,res)=>{
    let collection = await connectToDb();
    let data = await collection.updateOne(req.body,{$set:{name:"khushi"}});
    res.send(data);
})

// delete item by fetching id

app.delete('/:id',async(req,res)=>{
    let collection = await connectToDb();
    const data = await collection.deleteOne({_id :new mongodb.ObjectId(req.params.id)});
    res.send(data)
})
app.listen(3000);