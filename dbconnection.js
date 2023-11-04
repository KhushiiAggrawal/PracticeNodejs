const {MongoClient} =require('mongodb');
const url="mongodb://localhost:27017";
const client = new MongoClient(url);

const  connectToDb = async()=>{
    const res = await client.connect();
    const database = res.db('practice');
    const collection =  database.collection('practice');
    return collection;
}
const getData = async() =>{
    const collection = await connectToDb();
    const data = await collection.find({}).toArray();
    return data;
}
const  addData = async()=>{
    const collection = await connectToDb();
    const data = await collection.insertOne({name:'mkdkfk',no:1})
    console.log(data);
}
const  deleteData = async()=>{
    const collection = await connectToDb();
    const data = await collection.deleteOne({name:'kk'})
    console.log(data);
}
const  updateData = async()=>{
    const collection = await connectToDb();
    const data = await collection.updateOne({name:'mkdkfk'},{$set : {no:5}})
    console.log(data);
}
module.exports= connectToDb;
// module.exports=addData;
// module.exports=getData;
// module.exports=deleteData;
// module.exports=updateData;
