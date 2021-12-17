import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Home() {      
    
    return (
        <>
            <Header />
            <main>
                <section className="home" id="home">
                    <div className="cols">
                        <div className="content col2">
                            <h1 data-aos="fade-right" data-aos-duration="1500" className="primary-title color-white">
                                CHARM <span className="color-primary">Uncensored </span>NFT Platform
                            </h1>
                            <p className="color-white">
                                The first cryptocurrency on the Solana Blockchain that offers the option to upload explicit
                                non-fungible tokens (NFTs) and sell and buy them through the platform.
                            </p>
                            <a href="#about-us" className="special-link">Learn more About Us</a>
                        </div>
                        <div className="images col2">
                            <img
                                data-aos="fade-down"
                                data-aos-duration="3000"
                                src="./images/phone-screen-1.png"
                                alt="Charm's App Screenshot"
                            />
                            <img
                                data-aos="fade-up"
                                data-aos-duration="3000"
                                src="./images/phone-screen-2.png"
                                alt="Charm's App Screenshot"
                            />
                        </div>
                    </div>
                </section>
                <section className="about-us spacing" id="about-us">
                    <div className="wrap cols">
                        <div className="col2 images" data-aos="fade-right" data-aos-duration="2000">
                            <img src="./images/fake-video.jpg" alt="Fake video" />
                        </div>
                        <div className="col2 content">
                            <h2 className="primary-title" data-aos="fade-left" data-aos-duration="1500">About Us</h2>
                            <p data-aos="fade-left" data-aos-duration="2000">
                                Charm is a unique content sharing platform powered by Solana blockchain providing full
                                anonymity and true ownership to all our users.
                            </p>
                            <p data-aos="fade-left" data-aos-duration="2000">
                                We are aiming to change the perception of adult entertainment, conduct by elegance,
                                modernity, using one of the most secure ecosystem and innovative user experience.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="features spacing" id="features">
                    <div className="wrap color-white">
                        <div className="left">
                            <h2 className="primary-title">CHARM Features</h2>
                            <div className="element first-feature-desktop">
                                <span className="number">01</span>
                                <p className="title">Collectible NFTs</p>
                                <p className="description">
                                    Charm will offer the opportunity for users to collect exclusive and unique NFTs to
                                    facilitate a unique relationship with their favourite content creator.
                                </p>
                            </div>
                            <div className="element second-feature-desktop">
                                <span className="number">02</span>
                                <p className="title">Exclusive unlockable content</p>
                                <p className="description">
                                    All content creators will be able to offer their fans exclusive scenes encapsulated in a
                                    NFT-type token whose exclusive access will be won by the purchaser that places the
                                    highest bet.
                                </p>
                            </div>
                        </div>
                        <div className="why-different">
                            <p className="title">Why CHARM is different ?</p>
                            <p>
                                Charm is highly interactive, explicit content sharing social media platform where content
                                creators can monetize their influence.
                            </p>
                            <p>
                                There is a Home page where users can view their feed – a stream of content shared by those
                                you follow, including your close friends.
                            </p>
                            <p>
                                There will also be suggestions for more people to follow and a search bar to find more
                                creators and users to follow. Other features include the following.
                            </p>
                        </div>
                        <div className="element first-feature-mobile">
                            <span className="number">01</span>
                            <p className="title">Collectible NFTs</p>
                            <p className="description">
                                Charm will offer the opportunity for users to collect exclusive and unique NFTs to
                                facilitate a unique relationship with their favourite content creator.
                            </p>
                        </div>
                        <div className="element first-feature-mobile">
                            <span className="number">02</span>
                            <p className="title">Exclusive unlockable content</p>
                            <p className="description">
                                All content creators will be able to offer their fans exclusive scenes encapsulated in a
                                NFT-type token whose exclusive access will be won by the purchaser that places the highest
                                bet.
                            </p>
                        </div>
                        <div className="element">
                            <span className="number">03</span>
                            <p className="title">NFT Bomb</p>
                            <p className="description">
                                All content creators will be able to offer their fans exclusive scenes encapsulated in a
                                NFT-type token for a limit of time, pre-defined before the purchase.
                            </p>
                        </div>
                        <div className="element">
                            <span className="number">04</span>
                            <p className="title">Live</p>
                            <p className="description">
                                CThis feature is currently in the development phase. Creators will be able to set up live
                                webcam shows by which they will receive tips and messages in USDT introducing new ways of
                                streaming.
                            </p>
                        </div>
                        <div className="element">
                            <span className="number">05</span>
                            <p className="title">Fan Section</p>
                            <p className="description">
                                With the help of our platform, we will be offering the chance to interact between users and
                                content creators so that content creators can increase their efficiency by knowing what most
                                of their users like.
                            </p>
                        </div>
                        <div className="element">
                            <span className="number">06</span>
                            <p className="title">Privacy-focused chatting application</p>
                            <p className="description">
                                This feature is facilitated by public key cryptography technology, which will secure both
                                chats by the end-to-end encryption, while providing end-to- end encryption for file sharing.
                                And finally, by means of an inbuilt wallet, it will also allow you to send or receive
                                payments in crypto.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="sales spacing" id="sales">
                    <h2 className="primary-title" data-aos="fade-left" data-aos-duration="1500">Sales Progress</h2>

                    <div className="cols">
                        <div className="percent-container">
                            <div className="percent" data-aos="fade-right" data-aos-duration="1500">
                                <div className="content">
                                    <p className="title">Presale <span>100%</span></p>
                                    <span className="bar"><span className="progress"></span></span>
                                    <p>1% of total supply available capped to 2.5 SOL per wallet</p>
                                </div>
                                <p className="price">$0.0018</p>
                            </div>
                            <div className="percent" data-aos="fade-right" data-aos-duration="1500">
                                <div className="content">
                                    <p className="title">Private <span>SOON</span></p>
                                    <span className="bar"></span>
                                    <p>5% of total supply available capped to 37.5 SOL per wallet</p>
                                </div>
                                <p className="price">$0.005</p>
                            </div>
                            <div className="percent" data-aos="fade-right" data-aos-duration="1500">
                                <div className="content">
                                    <p className="title">Public <span>SOON</span></p>
                                    <span className="bar"></span>
                                    <p>10% of total supply available with no cap per wallet</p>
                                </div>
                                <p className="price">$0.01</p>
                            </div>
                        </div>
                        <div className="details" data-aos="fade-left" data-aos-duration="1500">
                            <p>
                                Charm will be used as a governance token, meaning each transaction on Charm NFT marketplace
                                will be deducted of 15% to reward the Holders, Affiliate and Development in USDT.
                            </p>
                            <a href="/documents/Charm_White_Paper_PDF.pdf" className="btn btn-primary">Whitepaper</a>
                        </div>
                    </div>
                </section>
                <section className="buy wrap spacing" id="buy">
                    <h3 className="primary-title" data-aos="fade-up" data-aos-duration="1000">Be a part of CHARM</h3>
                    <p data-aos="fade-up" data-aos-duration="1000">
                        Invest and buy CHARM token and be a part of CHARM Ecosystem
                    </p>
                    <a href="/buy" data-aos="fade-up" data-aos-duration="1000" className="btn btn-primary">Buy CHARM</a>
                </section>
                <section className="roadmap spacing color-white" id="roadmap">
                    <h2 className="primary-title">Our Roadmap</h2>
                    <div className="roadmap-container">
                        <div className="quarter">
                            <p className="title"><span>Q3</span> 2021</p>
                            <ul data-aos="fade-right" data-aos-duration="2000">
                                <li className="check">
                                    Conceptualization Charm Token Social Media Launch (Telegram, Discord, Instagram,
                                    Twitter)
                                </li>
                                <li className="check">CHARM App V1 (Devnet)features :</li>
                                <li className="check">Mint your private picture NFT</li>
                                <li className="check">NFT feeds page</li>
                            </ul>
                        </div>
                        <div className="quarter">
                            <p className="title"><span>Q4</span> 2021</p>
                            <ul data-aos="fade-left">
                                <li className="check">Website Launch V1 Hackathon Solana CHARM App V2 (Devnet)features :</li>
                                <li className="check">NFT Bomb (like feature)</li>
                                <li>Email Login and transaction sign</li>
                                <li>User and Creator subscription</li>
                                <li>Mint Audio/ Video NFT</li>
                                <li>Major Marketing Campaign (Event and Partnership)</li>
                                <li>Public sale: Launch Charm Token</li>
                            </ul>
                        </div>
                        <div className="quarter">
                            <p className="title"><span>Q1</span> 2022</p>
                            <ul data-aos="fade-right">
                                <li>CHARM App V3 (Closed Beta)features :</li>
                                <li>Chat (private message)</li>
                                <li>Live streaming</li>
                                <li>Decentralized Exchange listing Website</li>
                                <li>V2 updates</li>
                            </ul>
                        </div>
                        <div className="quarter">
                            <p className="title"><span>Q2</span> 2022</p>
                            <ul data-aos="fade-left">
                                <li>Centralized Exchange listing</li>
                                <li>Website V3 updates</li>
                                <li>CHARM App V4 (live)</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="team spacing" id="team">
                    <h3 className="primary-title">CHARM’s Team</h3>
                    <div className="team-members" data-aos="fade-up" data-aos-duration="1000">
                        <div className="member">
                            <img className="profil" src="./images/team-maxime.jpg" alt="Maxime's Photo" />
                            <div className="description">
                                <p className="title">
                                    Maxime Bé
                                    <span>Founders / Co-CEO</span>
                                </p>
                                <nav className="socials">
                                    <a href="https://www.linkedin.com/in/maxime-b%C3%A9-b71259170/"><img src="./images/linkedin.svg" alt="Linkedin Logo" /></a>                                    
                                    {/* <a href=""><img src="./images/twitter.svg" alt="Twitter Logo" /></a> */}
                                </nav>
                            </div>
                        </div>
                        <div className="member">
                            <img className="profil" src="./images/team-jean.jpg" alt="Maxime's Photo" />
                            <div className="description">
                                <p className="title">
                                    Jean Lopez
                                    <span>Founders / Co-CEO</span>
                                </p>
                                <nav className="socials">
                                    <a href="https://www.linkedin.com/in/jean-lopez-6137b5125"><img src="./images/linkedin.svg" alt="Linkedin Logo" /></a>                                    
                                    {/* <a href=""><img src="./images/twitter.svg" alt="Twitter Logo" /></a> */}
                                </nav>
                            </div>
                        </div>
                        <div className="member">
                            <img className="profil" src="./images/team-biboux.jpg" alt="Maxime's Photo" />
                            <div className="description">
                                <p className="title">
                                    Biboux
                                    <span>CTO</span>
                                </p>
                                <nav className="socials">
                                    {/* <a href=""><img src="./images/linkedin.svg" alt="Linkedin Logo" /></a>                                     */}
                                    <a href="https://www.facebook.com/BibouxEsmail"><img src="./images/facebook.svg" alt="Facebook Logo" /></a>                                    
                                    {/* <a href=""><img src="./images/twitter.svg" alt="Twitter Logo" /></a> */}
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home
