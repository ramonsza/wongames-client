import { WindowsLogo, LinuxLogo, AppleLogo } from '@phosphor-icons/react'
import Heading from '@/components/Heading'
import * as S from './styles'
import MediaMatch from '@/components/MediaMatch'

type Platform = 'windows' | 'linux' | 'mac'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  platforms: Platform[]
  releaseDate: string
  rating: Rating
  genres: string[]
}

const GameDetails = ({
  developer,
  platforms,
  releaseDate,
  rating,
  genres
}: GameDetailsProps) => {
  const platformIcons = {
    linux: (
      <LinuxLogo size={18} weight="fill" name="Linux" aria-label="Linux" />
    ),
    windows: (
      <WindowsLogo
        size={18}
        weight="fill"
        name="Windows"
        aria-label="Windows"
      />
    ),
    mac: <AppleLogo size={18} weight="fill" name="Mac" aria-label="Mac" />
  }
  return (
    <S.Wrapper>
      <MediaMatch $greaterThan="small">
        <Heading $lineLeft $lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}> {platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>2K</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>
            {' '}
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
