import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function Certificate() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
     <div className=" flex flex-col "> 
      <h1 className="sm:!mb-10 sm:text-3xl  text-[var(--title)]">Certificate</h1>
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
      orientation="vertical"
    >
      <CarouselContent className="sm:h-[250px] md:h-[300px] lg:h-[450px] xl:h-[600px] 2xl:h-[650px] h-[150px]">
        {["certificate1.jpg", "certificate2.jpg", "certificate3.jpg"].map((img, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="relative w-[98%]">
              <img className="w-full" src={`/${img}`} alt={`Certificate ${index + 1}`} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </div>
  );
}

export default Certificate;
