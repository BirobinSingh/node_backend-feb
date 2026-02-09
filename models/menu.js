import mongoose from 'mongoose';

const MenuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   
    taste:{
        type:String,
        enum:['salty','sweet','spicy'],
    },
    cost:{
        type:Number,
        required:true
    }
})

const Menu = mongoose.model('Menu',MenuSchema);

export default Menu;