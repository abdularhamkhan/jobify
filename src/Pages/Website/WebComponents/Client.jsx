import React from 'react'

//src
import { clients } from '../constants/data.js'

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



const Client = () => {
  return (
    <>

      <div className='mt-12 rounded-xl shadow-2xl dark:shadow-primary flex flex-col items-center'>

        <h1 className='text-center font-bold p-2'>Our <span className='text-primary'>Potential Clients</span></h1>
        <div className='m-4'>
          <Carousel
            plugins={[Autoplay({ delay: 2000 })]}
            opts={{
              align: "center",
            }}
            className="w-full max-w-sm mt-4"
          >
            <CarouselContent className=''>
              {clients.map((item) => (
                <CarouselItem key={item.id}>
                  <Card className='m-4 mt-8 p-4 flex flex-col items-center xsm:max-sm:m-8'>
                    <CardContent>
                      {<img src={item.logo} className='md:h-60 rounded-2xl xsm:h-40' />}
                    </CardContent>
                    <CardTitle className='text-center text-muted-foreground light:text-primary p-2 uppercase font-mono'>{item.title}</CardTitle>
                    <CardFooter>
                      <Button className="text-wrap">Hired : {item.hired}</Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className='xsm:max-sm:hidden' />
            <CarouselNext className='xsm:max-sm:hidden' />
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Client