import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const [userData, setUserData] = useState([])
  const [idx, setidx] = useState(1)
  useEffect(function(idx){
    getdata();
  },[idx])
  
  const getdata = async()=>{
    const responce = await axios.get(`https://picsum.photos/v2/list?page=${idx}&limit=10`)
    setUserData(responce.data)
    console.log(responce.data)  
  }
  let ans = <h3 className='font-bold'>Loading...</h3>;
  if(userData.length > 0){
    {ans = userData.map(function(elem,idx){
       return <div key={idx}>
          <Card elem={elem}/>
       </div>   
    })}
  }
   
  return (
    <div className='bg-black h-screen p-5 text-white overflow-auto flex flex-col items-center'>
     
    <div className="flex flex-wrap gap-5 justify-center items-center flex-1 w-full">
  {userData.length === 0 ? (
    <div className="flex justify-center items-center min-h-[70vh] w-full">
      <h3 className="text-3xl font-bold">Loading...</h3>
    </div>
  ) : (
    ans
  )}
</div>
     <div className='flex items-center'>
      <button onClick={()=>{
        if(idx>1){
        setidx(idx-1);
        setUserData([])
         
        }
      }} className='bg-amber-400 rounded-2xl h-15 w-40 active:scale-95 m-10 text-3xl font-bold'>Prev</button>

      <h3 className='text-2xl'>Page {idx}</h3>
      <button onClick={()=>{
        setidx(idx+1)
        setUserData([])
        
      }} className='bg-amber-400 rounded-2xl h-15 w-40 active:scale-95 m-10 text-3xl font-bold'>Next</button>
     </div>
    </div>
    
  )
}

export default App
