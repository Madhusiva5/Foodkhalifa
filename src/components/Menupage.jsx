import React from 'react'
import { Footer } from '../container'
import Menu from './Menu/Menu'
import Menunav from './Menunav/Menunav'
import Navbar from './Navbar/Navbar'


export default function Menupage() {
  return (
    <div>
       <Menunav/>
        <Menu/>
        <Footer/>
        </div>
  )
}
