import express from 'express';
import Person from '../models/person.js';

const router = express.Router();

router.post('/',async(req,res)=>{ 
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        res.status(200).json(response);

    } catch (err) {
        res.status(500).json({error:err.message})      
    }
})


router.get('/',async(req,res)=>{
    try {
        const data = await Person.find();
        res.status(200).json(data);      
    } catch (error) {
        res.status(500).json({err:'internal server error'})
    }        
})



//paramatrized routes
router.get('/:worktype',async(req,res)=>{

    try {
        const worktype = req.params.worktype;

        if(worktype == 'manager' || worktype == 'chef' || worktype == 'waiter'){
        let response  = await Person.find({work:worktype});
        res.status(200).json(response);

        }
        else{
            return res.status(404).json({err:'not found the worktype'})
        }
    } catch (error) {
        res.status(500).json({err:error.message})
    }
});


export default router;