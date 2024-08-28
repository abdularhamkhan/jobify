import React from 'react'
import { BrowserRouter } from 'react-router-dom'

//components
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
            <div className='m-4 tracking-tight'>

                <Hero />
                <Features />
                <Client />
                <Feedback />
                <ContactUs />
                <Footer />
            </div>
        </>
    )
}

export default Home