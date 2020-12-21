import Link from 'next/link';
import { defaultHead } from "next/head";

function Myfunc(){
    return (
        <div><DefaultHeader/></div>
    )

    function DefaultHeader() {
        return (
            <div id="dh-wd">
                <header>
                    <a class="tit">BRAGA E SILVA</a>

                    <nav>
                        <ul class="nav-links">

                            <li>
                                <Link href="/">
                                    <a class="as">Home</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/jogos">
                                    <a class="as">Jogos</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/sites">
                                    <a class="as">Sites</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/sobre">
                                    <a class="as">Sobre</a>
                                </Link>
                            </li>

                        </ul>
                    </nav>
                    <Link href="/contato">
                        <button>Contato</button>
                    </Link>
                </header>
            </div>
        )
    }
    
}


export default Myfunc