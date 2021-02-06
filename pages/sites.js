import Head from 'next/head';
import ListLink from '../components/listlink.js';
import List from '../components/list.js';
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
				<div className="content">
					<List>
						<ListLink title="Photopea" href="https://www.photopea.com/" img="none">
							Editor de fotos online
						</ListLink>
					</List>
				</div>
			</div>
		</div>
	)
}

export default Sites