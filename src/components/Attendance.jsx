import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import StudAttend from './StudAttend';

const Attendance = () => {


  const {Attendance}=useSelector((state)=>(state));





  return (
    <div>
    {
      Attendance.length>0?
      (<div>
           
      <div>
        {
           Attendance.map((data)=>{
           return <StudAttend key={data.studentno} data={data} />


           })



        }



      </div>

      <div>
         <div>CLASS SUMMARY</div>
         <div>Total Strength:{Attendance.length}</div>




      </div>


      </div>





      ):
      (<div>
        <h1>NO STUDENT PRESENT</h1>
         <NavLink to={"/dashboard"}>
         <button>TAKE ATTENDENCE</button>
         
         </NavLink>

        </div>


      )
    }
    </div>
  )
}

export default Attendance
