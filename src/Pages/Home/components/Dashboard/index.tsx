import { useState } from 'react'
import { ProductsTable } from '../ProductsTable'
import { Summary } from '../Summary/index'
import { Container } from './styles'

export function Dashboard() {

  const [totalGeral, setTotalGeral] = useState(0)
  
  return (
      <Container>
        <Summary totalGeral={totalGeral} />
        <ProductsTable setTotalGeral={setTotalGeral}/>
      </Container>
  )
}