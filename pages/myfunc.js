import Link from 'next/link';
import {useState} from 'react';
/* import reactDOM from 'react-dom'; */
//import { defaultHead } from "next/head";

function Myfunc(){
    return (
        <div><DefaultHeader/></div>
    )

    function DefaultHeader() {
        const [msc, setMsc] = useState('menu-section') // msc == menu-section-class        
        function toggleFunc(){
            let s = ''
            if(msc == 'menu-section'){
                s = 'menu-section on'
            }else{
                s = 'menu-section'
            }
            setMsc(s)
        }
        return (
            <div id="dh-wd">
                <header>
                    <a class="tit">BRAGA E SILVA</a>
                    <div class={msc}>
                        <div class="menu-toggle" onClick={toggleFunc}>
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