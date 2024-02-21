
import './wallet.css';
import {ethers} from 'ethers';
import { useState } from 'react';
import portfolio from '../artifacts/contracts/mywebsite.sol/portfolio.json'

const Wallet =({saveState})=>{
    const [connected , setconnected]= useState(true);
        const connectMetaMask = async () => {
            try {
                if (window.ethereum) {
                   
                    const provider = new ethers.BrowserProvider(window.ethereum);
                    await provider.send('eth_requestAccounts', []);
                    alert("metamask connect");
                    setconnected(false);
                    const wallet = new ethers.Wallet("99b977d033e55f44c45dbc2c228c6c1537f99cc65dcd5e43a59bfabf6a6859dc", provider);

                 
                    const contract = new ethers.Contract("0x6D7A080757205e057b66149eecE0aaDA0e10c3f0", portfolio.abi, wallet);
                    saveState({ web3: provider, contract: contract });
                  

                    } else {
                        alert("pls install metamask",10000);
                        window.open('https://metamask.app.link/dapp/sriche.netlify.app/', '_blank');
                }
                    } catch (error) {
                        console.error('Error connecting MetaMask:', error);
                    }
                };
    
        return (
                    <div className="header">
                    <button className="connectBTN" onClick={connectMetaMask} disabled={!connected}> 
                    {!connected ? "Connected" : "Connect MetaMask"}
                    </button>
                    
                    </div>
                    );
};

export default Wallet;