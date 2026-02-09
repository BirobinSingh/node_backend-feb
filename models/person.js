import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager']
    }
})

const Person = mongoose.model('Person',personSchema);

export default Person;