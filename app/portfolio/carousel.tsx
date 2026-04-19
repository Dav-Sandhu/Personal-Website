'use client'

import { ComponentType } from "react"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

type responsiveType = {
    superLargeDesktop: {
      breakpoint: { max: number, min: number },
      items: number
    },
    desktop: {
      breakpoint: { max: number, min: number },
      items: number
    },
    tablet: {
      breakpoint: { max: number, min: number },
      items: number
    },
    mobile: {
      breakpoint: { max: number, min: number },
      items: number
    }
}

const MyCarousel = <T,>({ data, responsive, speed, Component, arrows, continuous } : 
  { 
    data: Array<T>, 
    responsive: responsiveType, 
    speed: number, 
    Component: ComponentType<{ item: T }>, 
    arrows: boolean
    continuous: boolean }) => {
    
      const continuousProps = continuous ? {
        customTransition: "all 5s linear",
        transitionDuration: 5000,
        pauseOnHover: false,
        draggable: false
      } : {}

  return(
    <Carousel 
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        arrows={arrows}
        autoPlaySpeed={speed}
        {...continuousProps}
    >
      {
        data.map((item, index) => {
          return(
            <Component item={item} key={index} />
          )
        })
      }
    </Carousel>
  )
}

export default MyCarousel