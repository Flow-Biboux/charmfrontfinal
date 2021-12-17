import React from 'react'

function Footer() {
    return (
        <footer>
                <div className="wrap spacing">
                    <div className="infos-footer">
                        <img className="logo-footer" src="./images/logo.png" alt="Charm's Logo" />
                        <p className="footer-title">CHARM - Uncensored NFT Platform</p>
                        {/* <p>Adress :</p>
                        <p>Phone :</p> */}
                        <a href="mailto:info@charmtoken.net">info@charmtoken.net</a>
                    </div>
                    <nav className="social-footer">
                        <p className="footer-title">SOCIAL MEDIA</p>
                        <a href="https://twitter.com/charm_token">Twitter</a>
                        {/* <a href="">Linkedin</a> */}
                        <a href="https://instagram.com/charm_token">Instagram</a>
                        <a href="https://discord.gg/m84xh3zW">Discord</a>
                        <a href="https://t.me/CharmTokenOfficial">Telegram</a>
                    </nav>
                    <nav className="nav-footer">
                        <p className="footer-title">NAVIGATION</p>
                        <a href="/#about-us">About Us</a>
                        <a href="/#features">Featurings</a>
                        <a href="/#sales">Sales</a>
                        <a href="/#roadmap">Roadmap</a>
                        <a href="/#team">Teams</a>
                        <a href="/documents/Charm_White_Paper_PDF.pdf" className="btn btn-primary">Whitepaper</a>
                        <a href="/#home" className="btn btn-secondary">CHARM App</a>
                    </nav>
                </div>
            </footer>
    )
}

export default Footer
