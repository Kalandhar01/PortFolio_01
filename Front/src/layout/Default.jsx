import React from 'react'
import LandingPage from '../router/LandingPage'
import About from '../router/About'
import Contact from '../router/Contact'
import Blog from '../router/Blog'
import Why from '../router/Why'
import Skill from '../router/Skill'

const Default = () => {

  
  return (
    <>
      <LandingPage/>
      <About />
      <Why/>
      <Skill/>
      <Contact/>
      <Blog/>
    </>
  )
}

export default Default
