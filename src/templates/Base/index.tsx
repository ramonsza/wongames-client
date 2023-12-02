import Menu from '@/components/Menu'
import * as S from './styles'
import { Container } from '@/components/Container'
import Footer from '@/components/Footer'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <section>
    <Menu />
    {children}
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Base
