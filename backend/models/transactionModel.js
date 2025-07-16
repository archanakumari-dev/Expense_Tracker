import mongoose from 'mongoose';

const transactionSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:[true, "userId is required"]
    },
    amount:{
        type:Number,
        required:[true,"amount is required"]
    },
    type:{
        type:String,
        required:[true,"type of transaction required"]
    },
    category:{
        type:String,
        required:[true,"catgory is required"]
    },
    description:{
        type:String,
        required:[true,"description is required"]
    },
    date:{
        type:String,
        required:[true,"date is required"]
    }
})

const transactionModel=mongoose.model('transaction',transactionSchema)
export default transactionModel