import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Main() {
  const [api, setApi] = React.useState(null)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
    <div className=" flex flex-col "> 
      <h1 className="sm:!mb-10 sm:text-3xl !mb-5 text-[var(--title)]"> Projectes</h1>
    <Carousel setApi={setApi}>
      <CarouselContent className="w-[90%] ">
       <CarouselItem>
  <div className="relative w-[98%]">
    <img className="w-full" src="/project1.png" alt="project" />
    <h2 className="absolute  top-0 left-0 bg-gray-700 opacity-50 hover: !p-4  w-full h-full sm:text-3xl flex items-end ">
      Clinical Management System
    </h2>
  </div>
</CarouselItem>
          <CarouselItem>
  <div className="relative w-[98%]">
    <img className="w-full" src="/project2.png" alt="project" />
    <h2 className="absolute  top-0 left-0 bg-gray-700 opacity-50 hover: !p-4  w-full h-full sm:text-3xl flex items-end ">
      E-Commerce
    </h2>
  </div>
</CarouselItem>
          <CarouselItem>
  <div className="relative w-[98%]">
    <img className="w-full" src="/project3.png" alt="project" />
    <h2 className="absolute  top-0 left-0 bg-gray-700 opacity-50 hover: !p-4  w-full h-full sm:text-3xl flex items-end ">
      Personal Portfolio
    </h2>
  </div>
</CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
       
    </Carousel>
    </div>
          <div className="text-muted-foreground py-2 text-center text-sm  sm:!mt-10 !mt-5 ">
        Slide {current} of {count}
      </div>
   
    </>
  )
}

export default Main
