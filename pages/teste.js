import ListLink from '../components/listlink.js';
import LinkList from '../components/list.js';
export default function Teste(){
    return (
        <div>
            <LinkList>
                <ListLink title="AAAA" href="/" img="none">AAA</ListLink>
                <ListLink title="BBBB" href="/" img="none">BBB</ListLink>
                <ListLink title="CCCC" href="/" img="none">CCC</ListLink>
                <ListLink title="DDDD" href="/" img="none">DDD</ListLink>
            </LinkList>
        </div>
    )
}