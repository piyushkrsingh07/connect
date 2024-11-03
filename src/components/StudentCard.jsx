import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {add,remove} from "../redux/slices/AttendanceSlice"

const StudentCard = ({data}) => {

    const {Attendence}=useSelector((state)=>(state));
    
    const dispatch=useDispatch();

    const markPresent=()=>{
         dispatch(add(data));
         toast.success(`${data.name} marked present`);



    }

    const markAbsent=()=>{
         dispatch(remove(data.id));
         toast.success("mark absent")

    }
    // const safeAttendence = Attendence || [];
    

  return (
  
        <div className='p-10 flex flex-col relative bg-white w-full space-y-2 border 
        rounded-sm hover:scale-105 transition-all duration-200 items-center'>
    
        <img src={data.src} alt="" className=' w-[115px]' />
  
    <div>
        {data.name}

    </div>
    <div>
        {data.rollno}

    </div>
    <div>
        {data.studentno}
    </div>
  
    { 
         Array.isArray(Attendence) && Attendence.some((p)=>p.studentno==data.studentno)?
    (
        <button onClick={markAbsent} className='bg-green-600 text-white px-2 py-1 rounded-3xl'>Mark Absent</button>
    ):
    
(

<button onClick={markPresent} className='bg-green-600 text-white px-2 py-1 rounded-3xl'>
   Mark {data.status}
</button>

)
    }
    </div>


  )
}

export default StudentCard
