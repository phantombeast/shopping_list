const express=require('express');
const bodyparser=require('body-parser')
const mongoose=require('mongoose');

const app=express();

const items=require('./routes/api/items')

app.use(bodyparser.json())


const db=require('./config/keys').mongoURI;

mongoose.connect(db)
.then(()=>console.log("Connected"))
.catch((err)=>{console.log(err)})


//Use routes for item   ./routes/api/items

app.use('/api/items',items)



const port= process.env.PORT || 5000;

app.listen(port,()=>{

    console.log(`Server started at http://localhost:${port}`)
})