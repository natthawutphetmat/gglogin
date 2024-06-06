"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for useRouter in Next.js app directory

export default function LoginPage() {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize the router
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://bilapi.ads-webapp.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number, password })
      });
      if (response.ok) {
        const responseData = await response.json();
        const userData = {
          ...responseData,
          accessToken: responseData.accessToken
        };
    
        localStorage.setItem('accessToken', responseData.accessToken); 
        router.push('/'); 
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setError('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    }
  };

  return (
    <main id='main'>

<div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" id='box'>   
      <form onSubmit={handleSubmit}>
        <div>
          <label>เบอร์โทรศัพท์:</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className='form-control'
          />
        </div>
        <div>
          <label>รหัสผ่าน:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control mb-4'
          />
        </div>
        <button type="submit" className='btn btn-success'>เข้าสู่ระบบ</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </form>
      </div>
    </main>

  );
}
