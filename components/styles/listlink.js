import styled from 'styled-components';
//oi
export const ItemWrap = styled.div`
    background-color: #fafafa;
    padding:0;
    position: relative;
    border-radius: 20px;
    margin: 25px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 0px 10px #cacaca;
    width: 75vw;


    a{
        display: inline-block;
        padding: 15px 1%;
        margin: 20px;
        text-align: center;
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: #1c2626;
        text-decoration-thickness: 1px;
    }

    h3{
        font-size: 3rem;
        color: #1c2626;
        text-decoration: underline;
        text-decoration-color: #1c2626;
        text-decoration-thickness: 1px;
        font-weight: 500;
        margin:0;
        order:2;
    }

    h3.noimage{
        
    }

    .thumb{
        height: 91px;
    }

    .p{
        color: #1c2626;
    }

`
