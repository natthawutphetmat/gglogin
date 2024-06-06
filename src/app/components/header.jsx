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
                  <Link href="https://m-moviehd.online/" >  
            <img src={`https://pphone168.com/uploads/img/${item.img}`} alt="" />
                      </Link>
           </div>
        </div>
    ))}
 </div>
 </header>

  )
}
