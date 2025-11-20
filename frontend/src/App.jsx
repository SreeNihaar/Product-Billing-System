import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [categoryList,setCategoryList] = useState(null);

  useEffect(()=>{
    axios.get(BACKEND_URL+"/categoryList")
      .then((res)=>{
        setCategoryList(res.data)
      })
  },[]);

  return (
    <>
      <div>
        <div className="sidebar">
          <div className='categoryItem'>All</div>
          {categoryList && categoryList.map((cat,idx)=> <div className='categoryItem' key={idx}>{cat.category}</div>)}
        </div>
      </div>
    </>
  )
}

export default App
