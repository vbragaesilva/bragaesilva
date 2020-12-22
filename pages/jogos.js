import Head from 'next/head';
import Link from 'next/link';
import DefaultHeader from './myfunc.js';
function Jogos(){
	
	return(
		<div id="jogos-wd"> 
			<Head>
				<title>Braga e Silva</title>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			</Head>
			<DefaultHeader />
			<div class="main" id="jogos">
				<h2>Jogos</h2>
				<p>Veja alguns dos</p>
				<p>meus jogos abaixo</p>
                <div class="content">
                    <h3>
                        <Link href="https://editor.p5js.org/eSilvaBraga/present/SXBE5l2HS">
                            <a class="ah3">Asteroids</a>
                        </Link>
                    </h3>
                </div>
			</div>
		</div>
	)
}

export default Jogos