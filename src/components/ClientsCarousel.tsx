
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

type Client = {
  name: string;
  logo: string;
  url: string;
};

interface ClientsCarouselProps {
  clients: Client[];
}

const ClientsCarousel: React.FC<ClientsCarouselProps> = ({ clients }) => {
  return (
    <div className="w-full">
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative mx-auto max-w-5xl"
      >
        <CarouselContent>
          {clients.map((client, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/4">
              <a 
                href={client.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 h-24 bg-gray-50 rounded-xl hover:shadow-md transition-shadow mx-2"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-16 max-w-full object-contain" 
                />
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-4">
          <CarouselPrevious className="static transform-none mx-2" />
          <CarouselNext className="static transform-none mx-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default ClientsCarousel;
