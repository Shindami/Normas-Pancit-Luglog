import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';

export interface ClassNameProps {
  carouselItem?: string;
  nextbtn?: string;
  prevBtn?: string;
  navigation?: string;
  dotButtons?: string;
  carouselContent?: string;
  dotButtonColor?: string;
}

export interface CarouselProps {
  children?: React.ReactNode;
  className?: ClassNameProps;
  item: string;
  // For now the type of content is any , but we will change it once we start getting the data from API //
  content: any[];
  navigation?: React.ReactNode;
  autoplay?: boolean;
  autoplayTimer?: number;
  options?: EmblaOptionsType;
  dotButton?: boolean;
  dotText?: string[];
  orientation?: 'horizontal' | 'vertical' | undefined;
}
