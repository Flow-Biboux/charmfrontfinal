import React from 'react'

function Header() {

    const toggleBurgerMenu = () => {
        const burgerIcon = document.querySelector('.burger-icon-container')
        const MainNav = document.querySelector('.main-nav')

        burgerIcon.classList.toggle('open')
        MainNav.classList.toggle('show')
    }  
    
    return (
        <header>
            <a href="/#home" className="logo">
                <img src="./images/logo.png" alt="Charm's Logo" />
            </a>
            <div className="main-nav">
                <nav className="menu" onClick={toggleBurgerMenu}>
                    <a href="/#home">Home</a>
                    <a href="/#about-us">About Us</a>
                    <a href="/#features">Featurings</a>
                    <a href="/#sales">Sales</a>
                    {/* <a href="/#buy">Buy Charm</a> */}
                    <a href="/#roadmap">Roadmap</a>
                    <a href="/#team">Teams</a>
                </nav>
                <nav className="buttons">
                    <a href="/buy" className="btn btn-primary">Buy CHARM</a>
                    <a href="/documents/Charm_White_Paper_PDF.pdf" className="btn btn-secondary">Whitepaper</a>
                    {/* <a href="/#home" className="btn btn-secondary">CHARM App</a> */}
                </nav>
            </div>
            <div className="burger-icon-container" onClick={toggleBurgerMenu}>
                <span className="burger-icon"> </span>
            </div>
        </header>
    )
}

export default Header
