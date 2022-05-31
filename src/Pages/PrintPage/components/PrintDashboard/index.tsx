import { PrintTable } from '../PrintTable'
import { PrintSummary } from '../PrintSummary/index'
import { Container } from './styles'

export function PrintDashboard() {
 
  return (
      <Container>
        <PrintSummary/>
        <PrintTable/>
      </Container>
  )
}