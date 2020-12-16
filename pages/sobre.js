import Head from 'next/head';
import Link from 'next/link';
function Sobre(){
	return(
		<div> 
			<Head>
				<title>Bem vindo!</title>
			</Head>
			<h1>Sobre UHUU</h1>
			<Link href="/">
				<a>Ir para Home</a>
			</Link>
		</div>
	)
}

export default Sobre