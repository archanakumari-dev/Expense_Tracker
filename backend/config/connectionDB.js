import mongoose from "mongoose";

const connect=async()=>{
    const MONGO_URI=process.env.MONGO_URI
    if(!MONGO_URI){
        console.log("URL is not there")
    }
    try {
     await mongoose.connect(MONGO_URI)
     console.log("db connected sucessfully")
    } catch (error) {
      console.log(error.message)
    }
}

export default connect;