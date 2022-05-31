import { useContext, useEffect, useState } from 'react'
import { supabase } from '../../../../client';
import { PostsContext } from '../../../../postsContext'
import {Container} from './styles'

interface summaryProps {
  totalGeral: any;
}

export function Summary({totalGeral} : summaryProps) {

  const { selectDisccount } = useContext(PostsContext)
  const [posts, setPosts] = useState<any[]>([]);
  
	useEffect(() => {
    fetchPosts();
	}, []);
  
  async function fetchPosts() {
    const { data } = await supabase.from("clients").select();
		if (data) {
      setPosts(data);
		}
	}

  const [cnpjTela, setCnpjTela] = useState('00.000.000/0000-00')

  function getCnpj(id: any) {
    const index = Number(id);
    const array = [...posts]
    let cnpj = `${array[index].cnpj}`
    let client = `${array[index].nome}`
    setCnpjTela(cnpj)
    localStorage.setItem('client', JSON.stringify(client))
    localStorage.setItem('cnpj', JSON.stringify(cnpj))
  }

  function alterarCnpj(e: any) {
    getCnpj(e)
  }

  return(
    <Container>
      <div>
        <header>
          <p>Cliente</p>
        </header>

        <select onChange={e => alterarCnpj(e.target.value)}>
        {posts.map((post, index) => (
            <option key={index} value={index}> {post.nome}</option>
        ))}
        </select>
        <strong>{cnpjTela}</strong>
      </div>

      <div>
        <header>
          <p>Prazo de Pagamento</p>
        </header>
        <select onChange={e => selectDisccount(e.target.value)}>
        <option value="0">Selecionar</option>
            <option value="Antecipado">Antecipado</option>
            <option value="14/21/28">14/21/28</option>
            <option value="28/42/56">28/42/56</option>
            <option value="28/35/42/49/56">28/35/42/49/56</option>
        </select>
      </div>

      <div>
        <header>
          <p>Valor Total</p>
        </header>
        <strong className="Total">{totalGeral.toLocaleString("pt-BR", {
									style: "currency",
									currency: "BRL",
								})}</strong>
        <strong className="Txt">Verificar incidência de impostos</strong>
      </div>
    </Container>
  )
}