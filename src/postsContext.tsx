import { createContext, ReactNode, useEffect, useState} from 'react'
import { supabase } from './client';

interface PostsProviderProps {
	children: ReactNode
}

interface PostContextData {
	posts: any[],
	updateTotal: (event: any, p: any, index: number) => void,
	selectDisccount: (event: any) => void;
	// getImpItens: (event: any) => void;
}

export const PostsContext = createContext<PostContextData>({} as PostContextData);


export function PostsProvider( {children} : PostsProviderProps){
	
  const [posts, setPosts] = useState<any[]>([]);

	useEffect(() => {
		fetchPosts();
	}, []);

  async function fetchPosts() {
		const { data } = await supabase.from("products").select();
		if (data) {
			setPosts(data);
		}
	}

	function updateTotal(event: any, p: any, index: number) {
		let amount = event.target.value;
		let newPost = { ...p, amount };
		let newPosts = [...posts];
		newPosts[index] = newPost;
	
		setPosts(newPosts);
	}

	function selectDisccount(select: any) {
		localStorage.setItem('cpp', JSON.stringify(select))

    if (select !== "Antecipado") {
      let desc = posts.map((produto: any) => ({
        ...produto,
        valor: produto.valor,
      }));
      setPosts(desc);
    } else if (select === "Antecipado") {
      let desc = posts.map((produto: any) => ({
        ...produto,
        valor: produto.valor * 0.99,
      }));
      setPosts(desc);}
  }
	
	// function getImpItens(){
	// 	let produtos: Array<object> = []

	// 	posts.map((post) => {
	// 		const validar = post.hasOwnProperty('amount')
	// 		if (validar === true) {
	// 			if (post.amount !== '0') return produtos.push(post)
	// 		}
	// 	})
	// 	console.log(produtos)
	// }

	return (
	// <PostsContext.Provider value={{ posts, updateTotal, selectDisccount, getImpItens }}>
	<PostsContext.Provider value={{ posts, updateTotal, selectDisccount }}>
		{children}
	</PostsContext.Provider>
	)
}