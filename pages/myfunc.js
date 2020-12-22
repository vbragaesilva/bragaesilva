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
                    <div class="menu-section on">
                        <div class="menu-toggle">
                            <div class="one"></div>
                            <div class="two"></div>
                            <div class="three"></div>
                        </div>
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

                            <li>
                                <Link href="/contato">
                                    <button>Contato</button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    </div>
                    
                    
                </header>
            </div>
        )
    }
    
}


export default Myfunc