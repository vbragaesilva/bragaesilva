import Head from 'next/head';
import DefaultHeader from '../components/defaultheader.js';
import ListLink from '../components/listlink.js';
import List from '../components/list.js';
function Jogos() {

    return (
        <div id="jogos-wd">
            <Head>
                <title>Braga e Silva</title>
                <meta charSet="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <DefaultHeader />
            <div className="main" id="jogos">
                <h2>Jogos</h2>
                <p>Alguns dos meus</p>
                <p>jogos estão abaixo:</p>
                <div className="content">
                    <List>

                        <ListLink title="Asteroids" href="https://asteroidsv5.vercel.app" img="/images/asteroids.png" >
                            Reimaginação do Asteroids
                        </ListLink>

                        <ListLink title="Pronn't" href="https://pronnt.efrostbyte.vercel.app" img="/images/tela2.jpg">
                            Jogo de enigma
                        </ListLink>

                        <ListLink title="Troll" href="/jogos" img="/images/sai-fora.jpg">
                            Troll ¯\_(ツ)_/¯
                        </ListLink>

                    </List>
                </div>
            </div>
        </div>
    )
}

export default Jogos