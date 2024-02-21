
import React, { useState,useEffect } from 'react'
import './hero.css'



const Hero = ({state}) => {
  const [Description , setdescription]=useState("");
  const [image , setimageurl]= useState("");


useEffect(()=>{
      const {contract }= state;
      const fetchdata=async()=>{
      const description = await contract.description();
      await description.wait;
      const imagelink = await contract.imageLink();
      setdescription(description);
      setimageurl(imagelink);
    }
   fetchdata();
  },[state]);


  return (

       <section className="hero">
            <div className="container">
              <div className="hero-text">
                <p><span  className="highlight">Lia Thakral</span> is a blockchain developer form India
                   </p>
                <h1>I develop decentralised apps in web3 space.</h1>
                <h3>{Description}</h3>
               
               </div>
                <div className="hero-img">

                <div className="img-container">
                    <img src={`https://ipfs.io/ipfs/${image}`} alt="profilePhoto" />
                </div>
                </div>
                </div>
                </section>
  )
}
export default Hero;
