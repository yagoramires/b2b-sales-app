// import logoImg from '../../../../../assets/logo.svg'
import logoImg from '../../../../assets/logo.svg'
import { Container, Content } from './styles'

export function PrintHeader() {

  function print() {
    localStorage.clear()
    window.print()
    window.location.assign("https://simulador-avant-react.vercel.app/")
  }

  return (
    <Container>
      <Content>
        <a href="/"><img src={logoImg} alt="Logo Avant" /></a>
        <button onClick={print}>Imprimir</button>

      </Content>
    </Container>
  )
}