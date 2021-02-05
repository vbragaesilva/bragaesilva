import styled from 'styled-components';
//oi
const ListItemWrapper = styled.div`
    list-style: none;
    display: inline-block;
    width: 100%;
    text-align: left;
`
export default function List({ children }){
    return(
        <ListItemWrapper>
            {children}
        </ListItemWrapper>
    )
}