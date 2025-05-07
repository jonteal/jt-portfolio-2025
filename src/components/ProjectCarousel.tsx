import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type ProjectCarouselProps = {
  projectTitle?: string;
  images?: {
    src: string;
    description: string;
  }[];
};
export const ProjectCarousel = ({
  images,
  projectTitle,
}: ProjectCarouselProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images?.map((image) => (
          <CarouselItem key={image.src}>
            <div className="p-1">
              <Card className="w-full h-full flex flex-col items-center justify-center">
                <CardHeader className="text-white w-full text-center text-lg italic">
                  {image.description}
                </CardHeader>
                <CardContent className="flex items-center justify-center pb-6 pt-3">
                  <img
                    className="h-auto w-2/3"
                    src={image.src}
                    alt={projectTitle}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
