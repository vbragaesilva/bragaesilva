import Link from 'next/link';
import { ItemWrap } from './styles/listlink.js';

export default function ListLink(props) { /* envolver os ListItems LinkList */
    const title = `${props.title}`
    const img_src = `${props.img}`
    const src = `${props.href}`
    const description = `${props.children}`
    let titleH3Class = 'ah3'
    if (img_src == 'none') {
        titleH3Class = 'ah3 noimage'
    }
    function DisplayImg() { /* <img src={img_src} alt={title} className="thumb"/> */
        if (img_src != 'none') { /* img="none" retira a imagem  */
            return <div><img src={img_src} alt={title} className="thumb" /></div>
        } else {
            return (<div></div>)
        }
    }
    return (
        <div>

            <ItemWrap title={title} className="item-wrap">
                <Link href={src}>
                    <a>
                        <DisplayImg />
                        <h3 className={titleH3Class}>
                            {title}
                        </h3>
                    </a>
                </Link>
                <p className="desc">{description}</p>
            </ItemWrap>
        </div>
    )

}