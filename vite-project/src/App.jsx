import Hero from "./components/hero/hero";
import Wallet from "./components/wallet/wallet";

import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Handles from "./components/handles/handles";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import { useState } from "react";
import './App.css'

function App() {
const [state,setstate]= useState({
  web3:null,
  contract:null
});
const saveState=(state)=>{
  console.log(state);
  setstate(state);
}

  return (
    <div>
      <Wallet saveState = {saveState}/>
      <Hero state={state}/>

<Projects state={state}/> 
<Experience state={state}/>
<Skills/>
 <Contact/>
 <Handles/>


  </div>
  )
  }
export default App;

