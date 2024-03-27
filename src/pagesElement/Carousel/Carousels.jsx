import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


function Carousels() {
  return (
    <>
    <Carousel>
            <CarouselContent>
                <CarouselItem>Het Shah</CarouselItem>
                <CarouselItem>Kalp Jethani</CarouselItem>
                <CarouselItem>Aryan Patel</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
    </Carousel>
    </>
  )
}

export default Carousels