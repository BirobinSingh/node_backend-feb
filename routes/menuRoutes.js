import express from 'express';
import Menu from '../models/menu.js';

const router = express.Router();



router.post('/menu',async(req,res)=>{
    try {
        const data = req.body
        const newMenu = new Menu(data);
        const result = await newMenu.save();
        res.status(200).json({success:true,data:result});

    } catch (error) {
        res.status(500).json({err:error.message})
    }
})

router.get('/menu',async(req,res)=>{
    try {
        const data = await Menu.find();
        res.status(500).json({success:true,data:data})
    } catch (error) {
        res.status(500).json({err:error.message})
    }
})


export default router;