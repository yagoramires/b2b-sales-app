import { Container } from './styles';
import { useEffect, useContext } from 'react';
import { PostsContext } from '../../../../postsContext';

interface productsTableProps {
  setTotalGeral: any;
}

export function ProductsTable({ setTotalGeral }: productsTableProps) {
  const { posts } = useContext(PostsContext);

  // const {getImpItens} = useContext(PostsContext)

  const { updateTotal } = useContext(PostsContext);

  useEffect(() => {
    let total = posts.reduce(
      (acc, cur) => acc + cur.valor * (cur.amount || 0),
      0,
    );
    setTotalGeral(total);
    localStorage.setItem('total', JSON.stringify(total));
  }, [posts, setTotalGeral]);

  function impData() {
    let print: Array<object> = [];

    // eslint-disable-next-line array-callback-return
    posts.map((post) => {
      const validar = post.hasOwnProperty('amount');
      if (validar === true) {
        if (post.amount !== '0') return print.push(post);
      }
    });
    const test = localStorage.setItem('prints', JSON.stringify(print));
    window.location.assign('http://localhost:3000/imprimir');
    // window.location.assign('https://simulador-avant-react.vercel.app/imprimir');
    return test;
  }

  return (
    <Container>
      <button onClick={impData}>Finalizar</button>
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
          {posts
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((post, index) => (
              <tr key={post.id}>
                <td>{post.cod}</td>
                <td>{post.desc}</td>
                <td>
                  <input
                    type='number'
                    placeholder='0'
                    onChange={(event) => updateTotal(event, post, index)}
                  />
                </td>
                <td>
                  {post.valor.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </td>
                <td id='amount'>
                  {(post.amount * post.valor || 0).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
