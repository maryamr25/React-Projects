

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Private from './pages/Private'; 
import './App.css';
import ProteectedRout from './components/ProteectedRout';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
        setIsFetching(false)
        return
      }
      setUser(null)
      setIsFetching(false)
    })
    return ()=>unsubscribe()
  },[])

  if(isFetching){
    return <h2>Loading.....</h2>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Private" element={<ProteectedRout user={user}>
          <Private/>
          </ProteectedRout>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;