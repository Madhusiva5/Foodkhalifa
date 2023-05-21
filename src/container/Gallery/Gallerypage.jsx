import React from 'react'
import { Navbar } from '../../components'
import Homedecor from '../../components/Homedecor/Homedecor'
import Footer from '../Footer/Footer'
import Decor from '../Intro/Decor'
import Intro from '../Intro/Intro'
import FunctionDecors from './FunctionDecors'
import Gallery from './Gallery'

export default function () 
{
  return (
    <div>
        <Navbar/>
        <Homedecor/>  
        <Gallery/>
        <Decor/>
        <Footer/>
        
    </div>
  )
}
