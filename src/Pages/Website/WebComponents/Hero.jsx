import React from 'react'
//ui
import { AspectRatio } from "@/components/ui/aspect-ratio"
//src
import HeroImg from '../../../Assets/Hero/Hero.svg'
import FeaturesOnboard from '../../../Assets/Hero/FeaturesOnboard.svg'
import rollupsleeves from '../../../Assets/Hero/rollupsleeves.svg'
import jobdone from '../../../Assets/Hero/jobdone.svg'

//ui
import { Button } from "@/components/ui/button"

const Hero = () => {

    return (
        <section id='/'>
            <main className='mt-10'>
                <div className='flex justify-evenly xsm:max-lg:flex-col xsm:max-lg:items-center xsm:max-lg:gap-4'>
                    <div className='w-1/2 shadow-2xl p-6 rounded-2xl dark:shadow-primary xsm:max-lg:w-full'>
                        <h1 className='text-5xl font-bold text-left'>Find <span className='text-primary'>Job </span> and Hunt <span className='text-primary'>Talent </span></h1>
                        <h4 className='mt-4 text-justify font-thin text-2xl xsm:max-md:text-2xl'>Find work and hire talents all on one platform. You can have the best people, right here, right now — no need to follow the old rules. </h4>
                        <div className='mt-4 flex gap-2'>
                            <Button>Find Job</Button>
                            <Button>Hunt Talents</Button>
                        </div>
                    </div>

                    <img src={jobdone} alt="" className='h-60 mt-8' />

                </div>


                <div className='mt-4 lg:mt-28 flex justify-evenly xsm:max-lg:flex-col xsm:max-lg:items-center xsm:max-lg:gap-4'>
                    <img src={FeaturesOnboard} alt="" className='w-80 mt-8 xsm:max-lg:hidden' />
                    <div className='mt-20 w-1/2 shadow-2xl p-4 rounded-2xl dark:shadow-primary xsm:max-lg:w-full'>
                        <h1 className='text-5xl font-bold text-left leading-tight'><span className='text-primary'>Get Onboard </span> And Create Impact </h1>
                        <p className='mt-4 text-justify font-bold'>
                            Join a dynamic community where your skills can make a real difference. From the moment you onboard, you'll have the tools and opportunities to create meaningful impact. Whether you're freelancing or integrating into a corporate role, your contributions will shape success stories and drive innovation forward. Together, we can achieve more and create a brighter future.
                        </p>
                    </div>
                    <img src={FeaturesOnboard} alt="" className='w-80 mt-8 lg:hidden' />

                </div>

                <div className='mt-12 lg:mt-36 flex justify-evenly xsm:max-lg:flex-col xsm:max-lg:items-center xsm:max-lg:gap-4'>
                    <div className='w-1/2 shadow-2xl p-6 rounded-2xl dark:shadow-primary xsm:max-lg:w-full'>
                        <h1 className='text-5xl font-bold text-left text-primary'>Roll Up Your Sleeves</h1>
                        <p className='mt-4 text-justify font-bold'>Whether you're a seasoned professional or just starting out, this platform empowers you to showcase your skills, connect with clients, and take control of your career. From small gigs to large projects, there's something for everyone. With a strong work ethic and determination, you can build a reputation, earn a steady income, and achieve the freedom to work on your own terms. It's time to roll up your sleeves and get to work!</p>
                    </div>
                    <img src={rollupsleeves} alt="" className='h-60 mt-8' />
                </div>

            </main>

        </section>
    )
}

export default Hero