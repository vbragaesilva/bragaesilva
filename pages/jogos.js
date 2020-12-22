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
			<div className="main" id="jogos">
				<h2>Jogos</h2>
				<p>Veja alguns dos</p>
				<p>meus jogos abaixo</p>
                <div className="content">
                    <div className="jitems">
                        <div title="asteroids" className="game-wrap">
                            <Link href="https://asteroidsv5.vercel.app">
                                <a className="ji">
                                    <img src="/images/asteroids.png" alt="Asteroids" className="thumb"/>
                                    <h3 className="ah3">
                                        Asteroids
                                    </h3>
                                </a>
                            </Link>
                            <div className="divp">
                                <p className="desc">Reimaginação do clássico jogo Asteroids</p>
                            </div>
                        </div>

                        <div title="enigma" className="game-wrap">
                            <Link href="https://enigma.efrostbyte.repl.co">
                                <a className="ji">
                                    <img src="/images/tela2.jpg" alt="Enigma" className="thumb"/>
                                    <h3 className="ah3">
                                        Enigma
                                    </h3>
                                </a>
                            </Link>
                            <div className="divp">
                                <p className="desc">Jogo de enigma para testar suas habilidades</p>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	)
}

export default Jogos