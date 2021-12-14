// import './App.less';
import React, { useEffect } from 'react'
import './less/style.less';
import AOS from 'aos';
import Home from './views/Home/Home';


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
    <>
        <Home />
    </>
  );
}

export default App;
