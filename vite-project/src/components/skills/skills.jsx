import React from 'react'
import jss from '../assets/jss.svg'
import react from '../assets/react.svg';
import nextjs from '../assets/nextjs.svg';
import truffle from '../assets/truffle.svg';
import solidity from '../assets/solidity.svg';
import './skills.css'
import hardhat from '../assets/hardhat.svg'
const Skills = () => {
  return (

   
    <div className='images'>
    <img className='image' src={truffle}  /> 
    <img className='image2' src={nextjs}  /> 
    <img className='image3' src={jss} />
    <img  className='image4' src={react}  /> 
    <img className='image5' src={solidity}  />
    <img className='image6' src={hardhat}  />
   
   </div>
  
  )
}
export default Skills;