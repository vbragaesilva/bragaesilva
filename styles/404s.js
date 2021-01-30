import css from 'styled-jsx/css'

export default css.global`
    *{
        box-sizing: border-box;
        margin: 0;
    }
    body{
        background-color: #ffffff;
    }
    h1, h2{
        color:black;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
        font-weight: normal;
    }
    h1{
        font-size:26px;
        display: inline-block;
        border-right: 1px solid rgba(0, 0, 0, .3);
        vertical-align: top;
        margin-right: 20px;
        padding: 5px 0;
        padding-right:20px;
    }
    h2{
        display: inline-block;
        font-size:16px;
        margin:0;
        position: relative;
        top: 10px;

    }
    .wrap404{
        height:100vh;
        text-align: center;
        display: flex;
        flex-direction:column;
        align items:center;
        justify-content:center;
    }
    .ildiv{
        display: inline-block;
    }
`