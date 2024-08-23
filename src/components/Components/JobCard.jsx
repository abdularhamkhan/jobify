import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card'

const JobCard = () => {
  return (
    <div className='m-4'>
      <Card className=" pt-6 px-4">
        <div className='mx-6'>
          <CardTitle>
            MERN DEV
          </CardTitle>
          <CardDescription className="mt-2">
            Need MERN developer with 1 year of experience
          </CardDescription>
        </div>
        <CardContent className="mt-2">We need to build our saas product for which we need a developer. </CardContent>
        <CardFooter>
          <Button>Apply</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default JobCard