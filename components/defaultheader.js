import Link from 'next/link';
import {useState} from 'react';
import { Title, MyHeader } from './styles/defaultheader.js'
/* import reactDOM from 'react-dom'; */
//import { defaultHead } from "next/head";
//oi




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
                <style jsx>
                    {`
                        .menu-toggle{
                            transition: 0.3s ease 0s;
                        }
                    
                        .menu-section.on, .menu-section{ 
                            transition: 0.3s ease 0s;
                        }
                    `}
                </style>
                <MyHeader>
                    <Link href="/">
                        <Title className="home-title">Braga e Silva</Title>
                    </Link>
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
                </MyHeader>
            </div>
        )
}


