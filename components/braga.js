import Link from 'next/link';
import {useState} from 'react';
/* import reactDOM from 'react-dom'; */
//import { defaultHead } from "next/head";


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

function ListLink(props){ /* envolver os ListItems com uma .liw -> className="liw"  (List Item Wrapper)*/
    const title = `${props.title}` /* sei la porque, mas as props so funcionaram se eu pegar o texto */
    const img_src = `${props.img}` 
    const src = `${props.href}`
    const description = `${props.children}`
    let titleH3Class = 'ah3'
    if(img_src == 'none'){
        titleH3Class = 'ah3 noimage'
    }
    function DisplayImg(){ /* <img src={img_src} alt={title} className="thumb"/> */
        if(img_src != 'none'){ /* img="none" retira a imagem  */
            return <div><img src={img_src} alt={title} className="thumb"/></div>
        }else{
            return (<div></div>)
        }
    }
    return(
        <div>
    
            <div title={title} className="item-wrap">
                <Link href={src}>
                    <a className="ia">
                        <DisplayImg />
                        <h3 className={titleH3Class}>
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


module.exports = {
    DefaultHeader,
    ListLink
}

