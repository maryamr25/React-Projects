
import StudentTable from "./StudentTable"


function StudentList({students,setStudents,getStudents}) {
 
    
   
  return (
    <>
    <h1>Student List</h1>

    <StudentTable students={students} setStudents={setStudents}/>
    </>
  )
}

export default StudentList
