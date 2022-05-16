import React from 'react'
import Navbar from './container/navbar/Navbar'
import Person from './container/person/Person'
import Footer from './container/footer/Footer'
import Education from './container/education/Education'
import Knowledge from './container/knowledge/Knowledge'

const Main = () => {
  return (
    <>
    <Navbar />
    <Person />
    <Education />
    <Knowledge />
    <Footer />
    </>
  )
}

export default Main
