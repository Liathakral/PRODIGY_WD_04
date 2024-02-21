import React from 'react'
import './handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/lia-thakral-25035a2a0/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://github.com/Liathakral" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' />
      </a>
    </section>
  )
}

export default Handles