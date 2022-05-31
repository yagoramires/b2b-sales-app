
import { Container } from './styles'

export function PrintTable() {

  let getProdArray = localStorage.getItem("prints")

  let prodArray = JSON.parse(getProdArray || '')

  return (
    <Container>
      <table>
				<thead>
					<tr>
						<th>Código</th>
						<th>Descrição</th>
						<th>Quantidade</th>
						<th>R$ Unit.</th>
						<th>R$ Total</th>
					</tr>
				</thead>
        
				<tbody>
          {prodArray.map((prod : any) => (
              <tr key={prod.id}>
                <td>{prod.cod}</td>
                <td>{prod.desc}</td>
                <td>{prod.amount}</td>
                <td>{prod.valor.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}</td>
                <td>{(Number(prod.amount)*prod.valor).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}</td>
              </tr>
            ))
          } 
        </tbody>
      </table>
    </Container>
  )
}