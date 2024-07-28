import { collection, getDocs } from 'firebase/firestore'
import './App.css'
import CreateStudent from './components/CreateStudent'
import StudentList from './components/StudentList'
import  { useEffect, useState } from 'react'
import { db } from './firebase-confg'

function App() {
  const [students,setStudents] = useState([])
  
  const getStudents = async()=>{
    const studentsCollection = collection(db, 'students')
    const studentSnapshot = await getDocs(studentsCollection)
    const studentList = studentSnapshot.docs.map(doc => (
        {
            id: doc.id,
            ...doc.data()
         }

    ))
   
    setStudents(studentList)
}
useEffect(()=>{
  getStudents()
},[])

  return (
   <div className='app-container'>
    <h1 className='app-title'>Student Management System</h1>
    <CreateStudent getStudents={getStudents}/>
    <StudentList students={students}/>
   </div>
  )
}

export default App
