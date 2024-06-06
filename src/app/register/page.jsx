"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'; 


export default function Register() {

    const Swal = require('sweetalert2')

const [fullname, setFullname] = useState("")
const [number, setNumber] = useState("")
const [numbersql, setNumbersql] = useState('0123456789')
const [password, setPassword] = useState("")
const [C_password, setC_password] = useState("")
const [erorr, setErorr] = useState("")
const [successfully, setSuccessfully] = useState("")
const router = useRouter();

const Usubmit = async (e) => {
    e.preventDefault();

    if(!fullname) {
        setErorr("กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง")
        return;
    } 
    if(!number) {
        setErorr("กรุณากรอกเบอร์โทรศัพท์ของท่าน")
        return;
    } 
    if(number === numbersql) {
        setErorr("เบอร์นี้ถูกใช้ไปแล้วก็กรุณาใช้เบอร์อื่น")
        return;
    } 
   if(password != C_password) {
    setErorr("รหัสผ่านไม่ตรงกัน")
    return;
}
const response = await fetch('https://bilapi.ads-webapp.com/register', {  // Replace with your actual API endpoint
method: 'POST',
headers: {
    'Content-Type': 'application/json',
},
body: JSON.stringify({ fullname, number, password }),
});

const data = await response.json();



console.log(data)


if(data.status === "ok") {

  window.location.href= "/login";
  // Swal.fire({
  //   title: 'Registration Successful',
  //   icon: 'success',
  //   });

} else {
  Swal.fire({
    title:'!error',
    text:data.error,
    icon: 'error',
    });
}


}

// if (error) {
//     Swal.fire({
//         title: error,
//         icon: 'error',
//     }).then(() => {
       
//     });

if(erorr) {
    // Swal.fire({  title: erorr,  icon: 'error',   icon: 'error',  }).then(() => { window.location.reload(); });
    Swal.fire({
      title:erorr,
      icon: 'error',
      });

  }



  return (


    <div>
      <Head>
        <title>Register - MovieHub</title>
        <meta name="description" content="Register to MovieHub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main id='main' >

      <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" id='box'>   
        <form onSubmit={Usubmit} className='form' >
        <h3>Register</h3>
          <label htmlFor="username">Full name</label>
          <input type="text" id="fullname"name="fullname" className='form-control' placeholder="Full name" onChange={(e) => setFullname(e.target.value)} />


          <label htmlFor="email">Email:</label>

          <input type="number" id="number"name="number" className='form-control' placeholder="เบอร์โทรศัพท์" onChange={(e) => setNumber(e.target.value)} />
    

          <label htmlFor="password">Password:</label>

          <input type="Password" id="Password"name="Password" className='form-control' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    
         
         
          <label htmlFor="password">Confirm password:</label>
          <input type="password" id="C_password"name="C_password" className='form-control' placeholder="C_password" onChange={(e) => setC_password(e.target.value)} />
         
  
          <button type="submit" className='btn btn-outline-success mt-3'>Register</button>
        </form>
        </div>
      </main>
    </div>
  );
}
