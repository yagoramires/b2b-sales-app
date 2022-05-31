import logoImg from '../../../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenSelectClientModal: () => void;
}

export function Header({onOpenSelectClientModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <a href="/"><img src={logoImg} alt="Logo Avant" /></a>
        <button onClick={onOpenSelectClientModal}>Cadastrar Cliente</button>

      </Content>
    </Container>
  )
}