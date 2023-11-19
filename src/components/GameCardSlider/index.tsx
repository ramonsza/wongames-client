import {
  CaretLeft as ArrowLeft,
  CaretRight as ArrowRight
} from '@phosphor-icons/react'

import GameCard, { GameCardProps } from '@/components/GameCard'
import Slider, { SliderSettings } from '@/components/Slider'

import * as S from './styles'

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />
}

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'black' | 'white'
}

const GameCardSlider = ({ items, color = 'black' }: GameCardSliderProps) => (
  <S.Wrapper $color={color}>
    <Slider settings={settings}>
      {items.map((item) => (
        <GameCard key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default GameCardSlider
