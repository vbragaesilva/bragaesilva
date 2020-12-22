import Head from 'next/head';
import Link from 'next/link';
import DefaultHeader from './myfunc.js';
function Contato(){
	
	return(
		<div> 
			<Head>
				<title>Braga e Silva</title>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			</Head>
			<DefaultHeader/>
			<div className="main">
				<h2>Entre em Contato</h2>
				<p>e-mail: teste@teste.com</p>
				<p>telefone: (12) 99797-7997</p>
				<p>instagram: @ueh_hue</p>
				<p>facebook: Vinícius Braga</p>
                <p>Snapchat: Vini</p>
			</div>
		</div>
	)
}

export default Contato