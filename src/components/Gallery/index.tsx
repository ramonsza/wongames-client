/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  CaretLeft as ArrowLeft,
  CaretRight as ArrowRight,
  X
} from '@phosphor-icons/react'
import { CustomArrowProps } from 'react-slick'
import Slider, { SliderSettings } from '@/components/Slider'

import * as S from './styles'
import { useState } from 'react'

const NextArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => <ArrowRight {...props}></ArrowRight>

const PrevArrow = ({
  slideCount,
  currentSlide,
  ...props
}: CustomArrowProps) => <ArrowLeft {...props}></ArrowLeft>

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ],
  nextArrow: <NextArrow aria-label="next image" />,
  prevArrow: <PrevArrow aria-label="previous image" />
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
            }}
          />
        ))}
      </Slider>

      <S.Modal $isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="Close modal"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </S.Close>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
