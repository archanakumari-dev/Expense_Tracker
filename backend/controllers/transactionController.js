import transactionModel from "../models/transactionModel.js"

export const getAllTransaction=async(req,res)=>{
     try {
         const transaction=await transactionModel.find({userid:req.body.userid})
         res.status(200).json({transaction})  
     } catch (error) {
        console.log(error.message)
        res.staus(400).send(error)
     }
}

export const addTransaction=async(req,res)=>{
    console.log("incoming request in add trasaction ")
     try {
       const data=req.body;
       if(!data){
        res.status(400).json({msg:"please fill all required fields"})
      }
      const { userid, amount, type, category, description, date } = data;
      console.log(data)
       if (!userid || !amount || !type || !category || !description || !date) {
        console.log("all fields please")
       return res.status(400).json({ msg: "All fields are required" });
      }
      const newTransaction=new transactionModel(data);
      await newTransaction.save();
      return res.status(200).send('transaction added successfully')
     } catch (error) {
        console.log(error.message);
      return  res.status(400).json(error)
     }
}


export const deleteTransaction=async(req,res)=>{
    console.log('hitting the delete end point')
  try {
    const {id}=req.body;
    if(!id){
      return res.status(400).send('please provide id')
    }
    await transactionModel.findByIdAndDelete(id)
    res.status(200).json({success:true})
  } catch (error) {
    console.log(error.message)
    res.status(404).send(error)
  }
}