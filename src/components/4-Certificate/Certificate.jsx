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
      <h1 className="m-auto sm:!mb-10 sm:text-3xl  text-[var(--title)]">Certificate</h1>
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
      orientation="vertical"
    >
      <CarouselContent className="sm:h-[400px] md:h-[560px] lg:h-[710px] xl:h-[870px] 2xl:h-[950px] h-[250px]">
        {["certificate2.jpg", "certificate1.jpg", "certificate3.jpg"].map((img, index) => (
          <CarouselItem key={index} className="pt-1 basis-1/2  ">
            <div className="relative w-[98%] !mb-4">
              <img className="w-full border-4 border-[var(--bgheader)]" src={`/${img}`} alt={`Certificate ${index + 1}`} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </div>
  );
}

export default Certificate;
