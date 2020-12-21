import Head from 'next/head';
import Link from 'next/link';
import DefaultHeader from './myfunc.js';
function Jogos(){
	
	return(
		<div id="jogos-wd"> 
			<Head>
				<title>Braga e Silva</title>
			</Head>
			<DefaultHeader />
			<div class="main" id="jogos">
				<h2>Jogos</h2>
				<p>Veja alguns dos</p>
				<p>meus jogos abaixo</p>
			</div>
		</div>
	)
}

export default Jogos