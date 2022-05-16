import React from 'react'
import Navbar from './container/navbar/Navbar'
import Person from './container/person/Person'
import Footer from './container/footer/Footer'
import Education from './container/education/Education'
import Knowledge from './container/knowledge/Knowledge'
import Skills from './container/skills/Skills'
import Experience from './container/experience/Experience'
import Project from './container/project/Project'

const Main = () => {
  return (
    <>
    <Navbar />
    <Person />
    <Education />
    <Knowledge />
    <Skills />
    <Experience />
    <Footer />
    <Project />
    </>
  )
}

export default Main
