import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import React, { useEffect } from 'react'
import './less/style.less';
import AOS from 'aos';
import Home from './views/Home/Home';
import Buy from "./views/Buy/Buy";
import { clusterApiUrl } from '@solana/web3.js';
import { getPhantomWallet, getSolletWallet, getSlopeWallet, getLedgerWallet } from '@solana/wallet-adapter-wallets';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import Header from "./components/Header";
import Footer from "./components/Footer";

const wallets = [getPhantomWallet(), getSlopeWallet(), getSolletWallet(), getLedgerWallet()]
const network = clusterApiUrl('devnet');


function App() {
    AOS.init()

    useEffect(() => {
        // HeaderFixed()

        window.addEventListener('scroll', HeaderFixed)
        return () => {
            window.removeEventListener('scroll', HeaderFixed)
        }
    }, [])
   
    function HeaderFixed() {
        const header = document.querySelector('header')

        if (window.scrollY > 10) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    }    

    // window.onload = function () {
    //     HeaderFixed()
    // }


  return (
    <Router>
        <Switch>
            <Route path="/" exact>                
                <Home />
            </Route>
            <Route path="/buy" exact>
                <Header />
                <Buy />
                <Footer />
            </Route>
        </Switch>
    </Router>
  );
}

const AppWithProvider = () => (
    <ConnectionProvider endpoint={network}>
        <WalletProvider wallets={wallets}>
            <WalletModalProvider>
                <App />
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
)
  
export default AppWithProvider;