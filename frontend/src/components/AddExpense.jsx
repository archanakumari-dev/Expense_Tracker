import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

const AddExpense = ({closeModal,refreshData}) => {
     const [amount,setAmount]=useState(0);
     const [type,setType]=useState('');
     const [category,setCategory]=useState('')
     const [date,setDate]=useState('')
     const [description,setDescription]=useState('')

     const amountHandller=(e)=>{
        setAmount(e.target.value)
     }
     const dateHandller=(e)=>{
        setDate(e.target.value)
     }
     const typeHandller=(e)=>{
        setType(e.target.value)  
     }
     const categoryHandller=(e)=>{
        setCategory(e.target.value)
     }
     const descriptionHandller=(e)=>{
        setDescription(e.target.value)
     }
     const submitHandller=async(e)=>{
        try {
            e.preventDefault();
            const user=JSON.parse(localStorage.getItem('user'))
            await axios.post('/transaction/add-transaction',{amount,category,type,description,date,userid:user._id});
            toast.success("transaction added successfully")
            closeModal();              
            refreshData();         
        } catch (error) {
            toast.error("transaction failed ")
            console.log(error.message)
        }
     }
    
  return (
    <div className='fixed inset-0 bg-opacity-40 flex flex-col justify-center items-center z-50'>
        <form action="" className=' px-10 py-3 rounded shadow-xl' onSubmit={submitHandller}>
            <h2 className='font-medium'>Add new transaction</h2>
            <div className='flex flex-col gap-1 mt-3'>
                <label htmlFor="amount"  className='font-normal text-sm'>Amount</label>
                <input id='amount' name='amount' type="number"  className='border border-gray-400 outline-none p-1' required onChange={amountHandller}/>
            </div>

            <div className='flex flex-col gap-1 mt-3'>
                <label htmlFor="type" className='font-normal text-sm'>Type</label>
                <select name="type" id="type" className="border border-gray-400 outline-none p-1 text-gray-500" onChange={typeHandller} value={type}>
                 <option value="" disabled >Select type</option>   
                <option value="expense">Expense</option>
                <option value="income">Income</option>
                </select>
            </div>

             <div className='flex flex-col gap-1 mt-3'>
                <label htmlFor="category" className='font-normal text-sm  border-gray-400'>Category</label>
                <select name="category" id="category" className="border border-gray-400 outline-none p-1 text-gray-500" onChange={categoryHandller} value={category} >
                 <option value="select type" disabled >Select Category</option>
                 <option value="salary">Salary</option>
                 <option value="project">Project</option>
                 <option value="freelancing">Freelancing</option>
                 <option value="food">Food</option>   
                <option value="rent">Rent</option>
                <option value="bills">Bills</option>
                </select>
            </div>

            <div className='flex flex-col gap-1 mt-3'>
                <label htmlFor="date" className='font-normal text-sm'>Date</label>
                <input  type="date"  className='border border-gray-400 outline-none p-1' required onChange={dateHandller}/>
            </div>

            <div className='flex flex-col gap-1 mt-3'>
                <label htmlFor="description" className='font-normal text-sm'>Description</label>
                <input id='description' name='description' type="text"  className=' border border-gray-400 outline-none p-1'required onChange={descriptionHandller}/>
            </div>

            <button className='bg-blue-300 rounded px-3 py-1 border-blue-600 cursor-pointer outline-none text-medium font-medium text-blue-900 mt-3' >Add </button>
        </form>
    </div>
  )
}

export default AddExpense