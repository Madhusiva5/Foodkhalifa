import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Gallerypage from '../container/Gallery/Gallerypage';
import Homepage from './Homepage';
import Menupage from './Menupage';



export default function Routing() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      <Route path='/menu' element={<Menupage/>}></Route>
      <Route path='/dec' element={<Gallerypage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}