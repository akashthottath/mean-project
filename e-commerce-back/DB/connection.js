const mongoose=require('mongoose')

const connectionString=process.env.DATABASE


mongoose.connect(connectionString).then(()=>{
    console.log("drop cart server connected successfully to mongodb atlas");
}).catch((err)=>{
    console.log(`mongo db connection failed error:${err}`);
})