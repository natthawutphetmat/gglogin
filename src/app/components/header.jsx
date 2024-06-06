import React from 'react'
import { getData } from '../data'

export default async function header() {
    const data = await getData()
  return (
    <header id="header">
      <div className="headbox"> 
    {data.map((item) => (
        <div key={item.id}>
           
           <div className="item">
            <img src={`https://pphone168.com/uploads/img/${item.img}`} alt="" />
           </div>
        </div>
    ))}
 </div>
 </header>

  )
}
