import '../styles/style.css';
import Head from 'next/head';
import Link from 'next/link';
function Home(){
	return(
		<div> 
			<Head>
				<title>Bem vindo!</title>
			</Head>
			<h1>Home UHUU</h1>
			<Link href="/sobre">
				<a>Ir para Sobre</a>
			</Link>
		</div>
	)
}

export default Home