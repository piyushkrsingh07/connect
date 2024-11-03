import React,{ useContext } from 'react'
import {useState} from 'react'
import StudentCard from '../components/StudentCard'
import Sidebar from '../components/Sidebar'
import { openContext } from '../context/context'

const Dashboard = ({isOpen}) => {

  const value=useContext(openContext)
  const[myStudent,setmyStudent]=useState([

    {
      src:'https://ucarecdn.com/f6ceec67-948c-4086-81a4-2d949983d1e2/-/preview/125x125/',
      name:'Piyush Kumar',
     rollno:1,
     studentno:23153101,
     status:'Present'
    },
    {
      src:'https://ucarecdn.com/139e3bc1-201c-43cc-bd59-3d308f1c973a/-/preview/100x125/',
      name:'Ankush Sharma',
      rollno:2,
      studentno:23153102,
      status:'Present'
    },
    {
      src:'',
      name:'John Doe',
      rollno:3,
      studentno:23153103,
      status:'Present'
    },
    {
        src:'',
        name:'Steve Jobs',
        rollno:4,
        studentno:23153104,
        status:'Present'




    }
    ,  {
      src:'',
      name:'Elon Musk',
      rollno:4,
      studentno:23153105,
      status:'Present'




  },
  {
    src:'',
    name:'Steve Jobs',
    rollno:4,
    studentno:23153106,
    status:'Present'




},

     
  ]);



  return (
    <div   className={`grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-y-10 gap-x-4 relative mt-[50px] min-h-[80vh] transition-all duration-300 ${value.isOpen ? 'ml-[300px]' : 'ml-[40px]'}`}
    >{

      myStudent.map((data)=>(
        <StudentCard key={data.studentno} data={data}/>
      ))
    }
    </div>
  )
}

export default Dashboard
