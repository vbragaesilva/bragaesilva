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
                    <div class="jitems">
                        <div title="asteroids" class="game-wrap">
                            <Link href="https://asteroidsv5.vercel.app">
                                <a class="ji">
                                    <img src="/images/asteroids.png" alt="Asteroids" class="thumb"/>
                                    <h3 class="ah3">
                                        Asteroids
                                    </h3>
                                </a>
                            </Link>
                            <div class="divp">
                                <p class="desc">Reimaginação do clássico jogo Asteroids</p>
                            </div>
                        </div>

                        <div title="enigma" class="game-wrap">
                            <Link href="https://enigma.efrostbyte.repl.co">
                                <a class="ji">
                                    <img src="/images/tela2.jpg" alt="Enigma" class="thumb"/>
                                    <h3 class="ah3">
                                        Enigma
                                    </h3>
                                </a>
                            </Link>
                            <div class="divp">
                                <p class="desc">Jogo de enigma para testar suas habilidades</p>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	)
}

export default Jogos