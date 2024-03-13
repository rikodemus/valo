import React from 'react'
import Header from '../components/header'
import Signup from '../components/up'
import Footer from '../components/footer'

const signin = () => {
  return (
    <body>
    <Header/>
    <Signup/>
    <div className='bg-black'><Footer/></div>
    </body>
  )
}

export default signin