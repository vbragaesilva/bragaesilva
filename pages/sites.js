import Head from 'next/head';
import Link from 'next/link';
import DefaultHeader from '../components/defaultheader.js';
function Sites(){

	return(
		<div> 
			<Head>
				<title>Braga e Silva</title>
                <meta charSet="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			</Head>
			<DefaultHeader />
			<div className="main">
				<h2>Sites</h2>
				<p>Abaixo estão alguns</p>
				<p> sites interessantes</p>
				
			</div>
		</div>
	)
}

export default Sites