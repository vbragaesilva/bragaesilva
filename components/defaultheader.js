import Link from 'next/link';
import {useState} from 'react';
/* import reactDOM from 'react-dom'; */
//import { defaultHead } from "next/head";


export default function DefaultHeader() {
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
                    <a className="tit">BRAGA E SILVA</a>
                    <div className={msc}>
                        <div className="menu-toggle" onClick={toggleFunc}>
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                        <nav>
                        <ul className="nav-links">

                            <li>
                                <Link href="/">
                                    <a className="as">Home</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/jogos">
                                    <a className="as">Jogos</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/sites">
                                    <a className="as">Sites</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/sobre">
                                    <a className="as">Sobre</a>
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


