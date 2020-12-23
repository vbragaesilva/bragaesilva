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
                    <div className="liw"> 

                        <ListItem title="Asteroids" href="https://asteroidsv5.vercel.app" img="/images/asteroids.png" alt="asteroids">
                            Reimaginação do clássico jogo Asteroids
                        </ListItem>

                        <ListItem title="Enigma" href="https://enigma.efrostbyte.repl.co" img="/images/tela2.jpg" alt="enigma">
                            Jogo de enigma para testar suas habilidades
                        </ListItem>

                    </div>
                </div>
			</div>
		</div>
	)
}

function ListItem(props){
    const title = props.title
    const img_src = props.img 
    const scr = props.href
    const alt = props.alt
    const description = props.children
    return(
        <div>
    
            <div title={title} className="game-wrap">
                <Link href={scr}>
                    <a className="ia">
                        <img src={img_src} alt={alt} className="thumb"/>
                        <h3 className="ah3">
                            {title}
                        </h3>
                    </a>
                </Link>
                <div className="divp">
                    <p className="desc">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Jogos