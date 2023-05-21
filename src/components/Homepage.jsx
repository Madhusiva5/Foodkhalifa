import React from 'react'

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro,  SpecialMenu } from '../container';
import PartyHalls from '../container/Gallery/PartyHalls';
import Homedecor from './Homedecor/Homedecor';
import Navbar from './Navbar/Navbar';

export default function Homepage() {
  return (
    <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef/>
    <Intro />
    {/* <Homedecor/> */}
    <PartyHalls /> 
    <FindUs />
    <Footer />
    </div>
  )
}
