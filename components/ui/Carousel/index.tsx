'use client';

import * as React from 'react';

import { useState } from 'react';
//NOTE: ShadCN uses embla carousel library to create Carousel component
import {
  CarouselContainer as EmblaCarouselContainer,
  CarouselContent as EmblaCarouselContent,
  CarouselItem as EmblaCarouselItem,
  CarouselPrevious as EmblaCarouselPrevious,
  CarouselNext as EmblaCarouselNext,
  CarouselApi,
} from './carousel';

import { CarouselProps } from './type';
import { cn } from '@/lib/utils';
import { CAROUSEL_ITEM_COUNT } from './constant';
import Autoplay from 'embla-carousel-autoplay';

//Wrapper Component for the Our Carousel
export function Carousel({
  children,
  className,
  item,
  navigation,
  content,
  dotButton,
  dotText,
  autoplay = true,
  autoplayTimer,
  orientation = 'horizontal',
}: CarouselProps) {
  const [plugin] = useState(() =>
    Autoplay({ delay: autoplayTimer ?? 2000, stopOnInteraction: true })
  );

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  //Logic to get the current index of carousel rendered.
  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    if (!autoplay) {
      plugin.stop();
    }

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on('select', () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [autoplay, carouselApi, plugin]);

  const handleDotClick = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  const handleOnMouseLeave = () => {
    if (!autoplay) {
      plugin.stop();
    } else {
      plugin.play();
    }
  };

  return (
    <EmblaCarouselContainer
      opts={{
        align: 'start',
        loop: true,
        duration: 45,
      }}
      orientation={orientation}
      plugins={[plugin]}
      onMouseEnter={plugin.stop}
      onMouseLeave={handleOnMouseLeave}
      className='w-full :child'
      setApi={setCarouselApi}
    >
      <EmblaCarouselContent
        className={`-ml-0.5 carousel-main-container ${className?.carouselContent}`}
      >
        {content?.map((value, index) => (
          <EmblaCarouselItem
            key={index}
            className={cn(
              'pr-[9px] pl-[9px] rounded-xl',
              current === index + 1 && 'active',
              CAROUSEL_ITEM_COUNT[
                item as unknown as keyof typeof CAROUSEL_ITEM_COUNT
              ],
              className?.carouselItem,
              orientation === 'vertical' && 'cursor-pointer'
            )}
            onClick={() => orientation === 'vertical' && handleDotClick(index)}
          >
            {value}
          </EmblaCarouselItem>
        ))}
      </EmblaCarouselContent>
      {navigation ? (
        <div className={`${className?.navigation} navigation`}>
          <EmblaCarouselPrevious className={className?.prevBtn} />
          <EmblaCarouselNext className={className?.nextbtn} />
        </div>
      ) : null}
      {dotButton ? (
        <div
          className={`${className?.dotButtons} flex w-full justify-center mt-4`}
        >
          {content?.map((item, index) =>
            !dotText ? (
              <button
                key={index + 1} //Ensure to use unique key
                className={cn(
                  'w-2 h-2 rounded-full mx-[2px]',
                  current === index + 1
                    ? 'active-dot bg-destructive w-6'
                    : className?.dotButtonColor ?? 'bg-white opacity-50'
                )}
                onClick={() => handleDotClick(index)}
              />
            ) : (
              <button
                key={index}
                className={cn(
                  current === index + 1
                    ? 'text-destructive'
                    : 'text-primary-foreground'
                )}
                onClick={() => handleDotClick(index)}
              >
                {dotText[index]}
              </button>
            )
          )}
        </div>
      ) : null}
    </EmblaCarouselContainer>
  );
}
