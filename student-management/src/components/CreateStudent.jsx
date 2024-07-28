import { useState } from "react"
import { addDoc, collection } from "firebase/firestore" 
import {db} from '../firebase-confg'


function CreateStudent({getStudents}) {
    const [rollNo,setRollNo] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [isCreatingstudent,setIsCreatingstudent] = useState(false)
   
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            setIsCreatingstudent(true)
            await addDoc(collection(db,'students'),{
                rollNo: Number(rollNo),
                name: name,
                age: Number(age)
            })
            setRollNo('')
            setName('')
            setAge('')
            setIsCreatingstudent(false)
            // get update students
            await getStudents()
        } catch (error) {
            console.log("EError creating user",error)
            setIsCreatingstudent(false)
            
        }
    }


  return (
    <form onSubmit={handleSubmit} className="form">
        <input type="number" value={rollNo} onChange={(e)=>setRollNo(e.target.value)} placeholder="Enter student roll No"  />
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter student name" required />
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter student age"  />
        <button  type="submit">{isCreatingstudent ? 'Creating..': 'Create student'}</button>

    </form>
  )
}

export default CreateStudent