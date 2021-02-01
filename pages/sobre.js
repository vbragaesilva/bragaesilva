import Head from 'next/head';
import Link from 'next/link';
import DefaultHeader from '../components/defaultheader.js';
function Sobre(){

	return(
		<div> 
			<Head>
				<title>Braga e Silva</title>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			</Head>
			<DefaultHeader/>
			<div className="main">
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