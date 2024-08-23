import React from 'react'

//src
import { features } from '../constants/data.js'

//ui
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button.jsx'


const Features = () => {
  return (
    <>

      <div className='bg-primary mt-12 rounded-xl shadow-2xl dark:shadow-primary'>
        <h1 className='text-center font-bold p-2'>Why Us</h1>
        <div className='p-4 grid md:grid-cols-3 sm:max-md:grid-cols-2'>
          {features.map((item) => (
            <Card key={item.id} className='m-4 mt-6'>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.stats}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.content}</p>
              </CardContent>
              <CardFooter>
                <Button className="text-wrap">{item.footer}</Button>
              </CardFooter>
            </Card>

          ))}

        </div>
      </div>


    </>
  )
}

export default Features