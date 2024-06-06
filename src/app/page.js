import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'


export default async function page() {

  return (
    <div>
      <NavBar />
      <Header />
      <Main />
      <Footer />
      
    </div>
  )
}
