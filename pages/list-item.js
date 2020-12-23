import Link from 'next/link';
/* Para que o estilo fique apropriado, envolva os ListItems com um .liw className="liw"  (List Item Wrapper)*/
export default function ListItem(props){
    const title = props.title
    const hlink = props.href
    const img_src = props.img
    const alt = props.alt
    const description = props.children
    return(
        <div>
                <div title={title} className="item-wrap">
                        <Link href={hlink}>
                            <a className="ia">
                                <img src={img_src} alt={alt} className="thumb"/>
                                <h3 className="ah3">
                                    {title}
                                </h3>
                            </a>
                        </Link>
                        <div className="divp">
                            <p className="desc"> {description} </p>
                        </div>
                </div>      
        </div>
    )
}
