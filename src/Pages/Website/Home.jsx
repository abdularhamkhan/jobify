import React from 'react'
import { BrowserRouter } from 'react-router-dom'

//components
import NavBar from './WebComponents/NavBar'
import Hero from './WebComponents/Hero'
import ContactUs from './WebComponents/ContactUs'
import Features from './WebComponents/Features'
import Footer from './WebComponents/Footer'
import Feedback from './WebComponents/Feedback'
import Client from './WebComponents/Client'


//assets 

const Home = () => {
    return (
        <>
            <BrowserRouter>
                <div className='m-4 tracking-tight'>
                    <NavBar />
                    <Hero />
                    <Features />
                    <Client />
                    <Feedback />
                    <ContactUs />
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    )
}

export default Home