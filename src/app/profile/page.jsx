"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for useRouter in Next.js app directory
import Image from 'next/image';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem('accessToken'); // ดึง Token จาก Local Storage
      if (token) {
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);
          console.log(token)
        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        try {
          const response = await fetch('https://bilapi.ads-webapp.com/profile', requestOptions);
          if (response.ok) {
            const data = await response.json();
            setUser(data.user);
          } else {
            const errorData = await response.json();
            setError(errorData.message);
          }
        } catch (error) {
          setError('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
        }
      } else {
        setError('');
      }
    };

    fetchProfileData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/login'); // Navigate to login page
  };

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {user ? (
        <div>
          <Image src="/img/user.png" width={50} height={50} alt='user' />
          <p>ชื่อ: {user.fullname}</p>
          {/* <p>เบอร์โทรศัพท์: {user.number}</p> */}
          <button onClick={handleLogout} className="btn btn-danger">ออก </button>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
