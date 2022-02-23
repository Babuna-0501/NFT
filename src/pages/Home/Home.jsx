import React from 'react';
import Feature from '../../components/Feature/Feature';
import Hero from '../../components/Hero/Hero';
import Inner from '../../components/Inner/Inner';
import Navbar from '../../components/Navbar/Navbar';
import Road from '../../components/Road/Road'
import Groovy from '../../components/Groovy/Groovy';
import './home.scss';
import Team from '../../components/Team/Team';

function Home() {
  return (
    <div className='home'>
        <Hero/>
        <Navbar/>
        <Inner/>
        <Feature/>
        <Road/>
        <Groovy/>
        <Team/>
    </div>
  )
}

export default Home