import Head from 'next/head';
import Link from 'next/link';
import DefaultHeader from './myfunc.js';
function Home() {

    return (
        <div id="hf-wd">
            <Head>
                <title>Braga e Silva</title>
            </Head>

            <DefaultHeader />

            <div class="content">
                <h2>Bem vindo!</h2>
                <p>Este é o meu site.</p>
                <p>Você pode encontrar coisas</p>
                <p> interessantes para fazer </p>
                <p>no cabeçalho.</p>
            </div>
        </div>
    )
}
export default Home