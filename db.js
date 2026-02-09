import mongoose from "mongoose";

const mongoUrl = 'mongodb://localhost:27017/februaryDB';

// mongoose.connect(mongoUrl);



mongoose.connect(mongoUrl);

const db = mongoose.connection ;

console.log("hello mongo")

db.on('connected',()=>{
    console.log('Mongodb connected sucessfully')
});

db.on('error',(err)=>{
    console.log('the error is ',err)
});

db.on('disconnected',()=>{
    console.log("mongodb has been disconnceted")
});


export default db;





// const connectDb = async () =>{
//     try {

//         await mongoose.connect(mongoUrl);
//         const db = mongoose.connection;

//         // mongoose.connection.once('open',()=>console.log("Mongodb connected successfully"))
//         db.once('open',()=>console.log("connected successfully mongodb"))
//         // console.log("mongoDb connected successfully")
//     } catch (error) {
//         console.log("mongoDb connection failed",error.message);
//         process.exit(1);
//     }

// }


// export default connectDb;

// old ways