import Link from 'next/link';

export default function ListItem(props){
    const title = props.title
    const img_src = props.img 
    const scr = props.href
    const alt = props.alt
    const description = props.children
    return(
        <div>
    
            <div title={title} className="game-wrap">
                <Link href={scr}>
                    <a className="ia">
                        <img src={img_src} alt={alt} className="thumb"/>
                        <h3 className="ah3">
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