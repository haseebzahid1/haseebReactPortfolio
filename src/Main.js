import React from 'react'
import Navbar from './container/navbar/Navbar'
import Person from './container/person/Person'
import Footer from './container/footer/Footer'
import Education from './container/education/Education'
import Knowledge from './container/knowledge/Knowledge'
import Skills from './container/skills/Skills'
import Experience from './container/experience/Experience'
import Project from './container/project/Project'
import Interests from './container/interests/Interests'
import Services from './container/services/Services'
import Contact from './container/contact/Contact'
import Pricing from './container/pricing/Pricing'

const Main = () => {
  return (
    <>
    <Navbar />
    <Person />
    <Education />
    <Knowledge />
    <Skills />
    <Experience />
    <Project />
    <Interests />
    <Services />
    <Contact />
    <Footer />
    <Pricing />
    </>
  )
}

export default Main
