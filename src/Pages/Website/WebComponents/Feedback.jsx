import React from 'react'

//src
import { feedback } from '../constants/data.js'

//ui
import { Button } from '@/components/ui/button.jsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { Badge } from '@/components/ui/badge.jsx'



const Feedback = () => {
  return (
    <>

      <div id='stories' className='bg-primary lg:mt-40 mt-12 rounded-xl shadow-2xl dark:shadow-primary flex flex-col items-center overflow-hidden'>

        <h1 className='text-center font-bold p-2 lg:mt-4 md:border-b-8 md:border-black'>Our <span className='text-black'> Success Stories</span></h1>

        <div className='m-4'>
          <Carousel
            plugins={[Autoplay({ delay: 2000 })]}
            opts={{
              align: "center",
            }}
            className="w-full xsm:max-lg:max-w-sm lg:translate-x-32 xl:translate-x-0"
          >
            <CarouselContent className=''>
              {feedback.map((item) => (
                <CarouselItem key={item.id} className='lg:basis-1/3' >
                  <Card className='m-4 mt-8 p-4 h-[510px] flex flex-col items-center xsm:max-sm:m-8 justify-center'>
                    <CardContent>
                      {<img src={item.img} className=' rounded-2xl  w-[240px] h-[240px]' />}
                    </CardContent>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.title}</CardDescription>
                    <CardFooter>
                      <p className="text-wrap">{item.content}</p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className='hidden' />
            <CarouselNext className='hidden' />
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Feedback