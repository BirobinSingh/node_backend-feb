import express from 'express';
import db from './db.js';
import Person from './models/person.js';
import Menu from './models/menu.js';
import personRoutes from './routes/personRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
import { configDotenv } from 'dotenv';
configDotenv();

// import connectDb from './db.js';
// connectDb();

const app = express();

//for parsing json data
app.use(express.json());



app.use('/person',personRoutes);

app.use('/menu',menuRoutes)






app.get('/',(req,res)=>{
    res.send("hello everyone i am here");
})

app.get('/list',(req,res)=>{

    let ob = {
        name:'robin',
        age:30,
        address:"Dehradun"
    }
    res.send(ob);

})

app.listen((process.env.PORT || 3000),()=> console.log("server started at 3000"));








//person

// app.post('/person',async(req,res)=>{

    
//     try {
//         const data = req.body;
//         const newPerson = new Person(data);

//         const response = await newPerson.save();

//         res.status(200).json(response);

//     } catch (err) {
//         res.status(500).json({error:err.message})
        
//     }

// })

// app.get('/person',async(req,res)=>{

//     try {
//         const data = await Person.find();
//         res.status(200).json(data);

        
//     } catch (error) {
//         res.status(500).json({err:'internal server error'})
//     }        
// })

// //paramatrized routes

// app.get('/person/:worktype',async(req,res)=>{

//     try {
//         const worktype = req.params.worktype;

//         if(worktype == 'manager' || worktype == 'chef' || worktype == 'waiter'){
//         let response  = await Person.find({work:worktype});
//         res.status(200).json(response);

//         }
//         else{
//             return res.status(404).json({err:'not found the worktype'})
//         }
//     } catch (error) {
//         res.status(500).json({err:error.message})
//     }
// })


//menu

// app.post('/menu',async(req,res)=>{
//     try {
//         const data = req.body
//         const newMenu = new Menu(data);
//         const result = await newMenu.save();
//         res.status(200).json({success:true,data:result});

//     } catch (error) {
//         res.status(500).json({err:error.message})
//     }
// })

// app.get('/menu',async(req,res)=>{
//     try {
//         const data = await Menu.find();
//         res.status(500).json({success:true,data:data})
//     } catch (error) {
//         res.status(500).json({err:error.message})
//     }
// })
