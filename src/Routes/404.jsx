import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (

    <div className='h-screen flex flex-col items-center justify-center bg-primary-foreground'>
      <p className='text-primary font-extrabold md:text-9xl m-8 text-5xl text-justify'>Are you lost?</p>
      <div className='w-[60%]'>
        <Link to='/'> <Button className='w-full text-2xl'>Go back</Button></Link>
      </div>
    </div>

  )
}

export default NotFound