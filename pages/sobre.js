import Head from 'next/head';
import Link from 'next/link';
import DefaultHeader from './myfunc.js';
function Sobre(){
	function rec(){
		window.location.href = '/';
	}

	return(
		<div> 
			<Head>
				<title>Braga e Silva</title>
			</Head>
			<DefaultHeader/>
			<div class="main">
				<h2>Sobre</h2>
				<p>Nome: Vinícius Braga e Silva</p>
				<p>Nascimento: 01/01/2001</p>
				<p>Profissão: Estudante 0_0</p>
				<p>Redes: ...</p>
			</div>
		</div>
	)
}

export default Sobre