import { Container } from './styles'

export function PrintSummary() {


  let getClient = localStorage.getItem("client")
  let getCNPJ = localStorage.getItem("cnpj")
  let getCPP = localStorage.getItem("cpp")
  let getTotal = localStorage.getItem("total")

  let client = JSON.parse(getClient || '')
  let cnpj = JSON.parse(getCNPJ || '')
  let cpp = JSON.parse(getCPP || '')
  let total = JSON.parse(getTotal || '')

  return (
    <Container>
      <div>
        <header>
          <p>Cliente</p>
          <strong>{client}</strong> <br/>
          <strong>{cnpj}</strong>
        </header>

      </div>

      <div>
        <header>
          <p>Prazo de Pagamento</p>
          <strong>{cpp}</strong>
        </header>

      </div>

      <div>
        <header>
          <p>Valor Total</p>
          <strong>{
            total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </header>

      </div>
    </Container>
  )
}