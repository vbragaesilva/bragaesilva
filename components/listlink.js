import globalStyles from '../styles/listlink.js'
import Link from 'next/link';
export default function ListLink(props){ /* envolver os ListItems com uma .liw -> className="liw"  (List Item Wrapper)*/
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
            <style jsx>
                {globalStyles}
            </style>
        </div>
    )
    
}