import { signOut } from "firebase/auth"
import { auth } from "../firebase"


function Private() {
  const handleSignout=()=>{
    signOut(auth)
    .then(()=> {
      alert("Signed Out Succefully")
    })
    .catch(error=>{
      console.log(error)
      alert(error.message)
    })

  }
  return (
 
  <div>
    <header>
      <h1>Welcome to the Dashboard</h1>
    </header>

    <main>
      <h2>Your Profile</h2>
      <p>welcome to the private Dashboard. Here you can manage your settings and preferences</p>
    </main>

    <footer>
      <button onClick={handleSignout}>Signout</button>
    </footer>
  </div>
  )
}

export default Private