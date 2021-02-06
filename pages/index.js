import Head from 'next/head';
import DefaultHeader from '../components/defaultheader.js';
import ListLink from '../components/listlink.js';
import List from '../components/list.js';
function Home() {

    return (
        <div id="hf-wd">
            <Head>
                <title>Braga e Silva</title>
                <meta charSet="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <DefaultHeader />

            <div className="main">
                <h2>Bem vindo!</h2>
                <p>Este é o meu novo site.</p>
                <p>Você pode encontrar coisas</p>
                <p> interessantes no cabeçalho</p>
                <p>ou aqui embaixo &#x1F447;</p>
                <div className="content">
                    <List>
                        <ListLink title="Jogos" href="/jogos" img="none" >
                            Alguns dos jogos feitos por mim
                        </ListLink>
                        <ListLink title="Sites" href="/sites" img="none">
                            Alguns sites interessantes
                        </ListLink>
                        <ListLink title="Sobre" href="/sobre" img="none">
                            Conheça mais sobre mim
                        </ListLink>
                        <ListLink title="Contato" href="/contato" img="none">
                            Entre em contato
                        </ListLink>
                    </List>
                </div>
            </div>
        </div>
    )
}
export default Home