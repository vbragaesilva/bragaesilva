import Head from 'next/head';
import Link from 'next/link';
function Jogos(){
	return(
		<div> 
			<Head>
				<title>Bem vindo!</title>
			</Head>
			<h1>Jogos UHUU</h1>
			<Link href="/">
				<a>Ir para Home</a>
			</Link>
		</div>
	)
}

export default Jogos