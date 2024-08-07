import Menu from '@/components/Menu'
import * as S from './styles'
import { Container } from '@/components/Container'
import Footer from '@/components/Footer'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>
    <S.Content>{children}</S.Content>
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
)

export default Base
