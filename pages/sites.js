import Head from 'next/head';
import Link from 'next/link';
import DefaultHeader from './myfunc.js';
function Sites(){
	function rec(){
		window.location.href = '/';
	}

	return(
		<div> 
			<Head>
				<title>Braga e Silva</title>
			</Head>
			<DefaultHeader />
			<div class="content">
				<h2>Sites</h2>
				<p>Abaixo estão alguns</p>
				<p> sites interessantes</p>
				
			</div>
		</div>
	)
}

export default Sites