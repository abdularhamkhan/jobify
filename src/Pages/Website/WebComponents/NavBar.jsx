import React, { useEffect, useState } from 'react'
import { Link as LinkRouter, Outlet } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
//src
import logo from '../../../Assets/logo/jobify.svg'

//icons
import { ArrowUpRight, Sun, Moon, Menu } from 'lucide-react'

//ui
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


//toggle
import { useTheme } from '@/components/ui/theme-provider'

const NavBar = () => {



    const { theme, setTheme } = useTheme();

    return (
        <>
            <nav className='flex items-center justify-between py-5 sticky top-0 z-20 text-primary font-semibold text-xl hover:transition-all cursor-pointer rounded w-[92%] mx-auto'>

                <img src={logo} alt="" className='w-[124px] h-[32px] ml-6' />

                <div className='xsm:max-lg:hidden flex items-center'>
                    <LinkScroll spy={true} smooth={true} duration={700} offset={0} to='features'> <LinkRouter to='/'> <Badge className='m-2 hover:text-xl hover:transition-all text-[14px]'>Features <ArrowUpRight size={18} /></Badge></LinkRouter>   </LinkScroll>
                    <LinkScroll spy={true} smooth={true} duration={700} offset={0} to='client'>   <LinkRouter to='/'> <Badge className='m-2 hover:text-xl hover:transition-all text-[14px] '>Clients <ArrowUpRight size={18} /></Badge> </LinkRouter> </LinkScroll>
                    <LinkScroll spy={true} smooth={true} duration={700} offset={0} to='stories'>  <LinkRouter to='/'> <Badge className='m-2 hover:text-xl hover:transition-all text-[14px]'>Stories <ArrowUpRight size={18} /></Badge></LinkRouter>  </LinkScroll >
                </div >
                <div className='flex items-center'>
                    <Button variant="ghost" size="icon" aria-label="toggle-theme" className="mr-2"
                        onClick={() => { setTheme(theme === "dark" ? "light" : "dark") }}
                    >
                        <Sun className='h-6 w-6 rotate-0 scale-0 transition-all dark:rotate-90 dark:scale-100' />
                        <Moon className='absolute h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0' />
                        <span className='sr-only'>Toggle Theme</span>
                    </Button>
                    <div className='xsm:max-lg:hidden'>
                        <LinkRouter to="/sign-up">  <Button className='m-2'>Sign Up</Button></LinkRouter>
                        <LinkRouter to="/log-in">  <Button >Login</Button></LinkRouter>
                    </div>
                    <Sheet className=''>
                        <SheetTrigger>
                            <Menu className='h-6 w-6 lg:hidden' />
                        </SheetTrigger>

                        <SheetContent className="bg-primary">
                            <div className='flex items-center gap-4 flex-col'>
                                <LinkScroll spy={true} smooth={true} duration={700} offset={0} to='features'>  <Badge className='hover:text-xl hover:transition-all text-[14px] '>Features <ArrowUpRight size={18} /></Badge></LinkScroll>
                                <LinkScroll spy={true} smooth={true} duration={700} offset={0} to='client'> <Badge className='hover:text-xl hover:transition-all text-[14px] '>Clients <ArrowUpRight size={18} /></Badge> </LinkScroll>
                                <LinkScroll spy={true} smooth={true} duration={700} offset={0} to='stories'>  <Badge className='hover:text-xl hover:transition-all text-[14px] '>Stories <ArrowUpRight size={18} /></Badge></LinkScroll>

                                <Button className='bg-black text-white w-full'>Sign Up <ArrowUpRight size={18} /> </Button>
                                <Button className='bg-black text-white w-full'>Login <ArrowUpRight size={18} /> </Button>
                                <Card className='w-full flex flex-col items-center'>
                                    <CardHeader className='w-full flex flex-col items-center'>
                                        <CardTitle>Main Office</CardTitle>
                                        <CardDescription>info@jobify.com.pk<br />+92-309-0526241</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className='text-bold text-justify'>Jobify Complex, Opposite Expo Center. Lahore</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Contact Us</Button>
                                    </CardFooter>
                                </Card>

                            </div>



                        </SheetContent>

                    </Sheet>
                </div>

            </nav >

        </>
    )
}

export default NavBar
