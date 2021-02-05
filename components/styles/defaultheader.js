import styled from 'styled-components';
const verde_agua = '#32c8a0';
const verde_agua_hover = '#1fb089'
const cinza = '#1c2626'
export const Title = styled.a`
    font-family: 'Permanent Marker', cursive;
    margin: 10px;
    color: #1c2626;
    font-weight: 400;
    cursor: pointer;
    font-size: 3.3rem;
    margin-right: auto;
    transition: 0.1s ease 0s;
    display: inline;
    font-family: 'Space Mono', monospace;
`
//oi
// ----------------------
export const MyHeader = styled.header`
    display: flex;
	justify-content: flex-end;
	align-items: center;
    padding: 10px 2%;
    background-color: white;
	box-shadow: 0px 0px 3px rgb(44, 44, 44, 0.27);
    .as, li, button {
        text-decoration: none;
        font-family: 'Space Mono', monospace;
        font-weight: 500;
        font-size: 2.3rem;
        color: ${cinza};
        transition: 0.3s ease 0s;
      }
      
      a, li, button{
          /* sem seleção azul */
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
      }
      
      nav{
          transition: 0.3s ease 0s;
      }
      
      .nav-links{
          list-style: none;
      }
      
      .nav-links li{
          display: inline-block;
          padding: 2.4rem 1.8rem;
      }
      
      .as{
              transition: 0.3s ease 0s;
              color: ${cinza};
      }
      
      .as:hover{
          color: ${verde_agua};
      }
      
      button{
          margin-left: 0;
          padding: 9px 25px;
          background-color: ${verde_agua};
          border: none;
          color: white;
          border-radius: 50px;
          cursor: pointer;
          transition: 0.3s ease 0s;
          outline: none;
      }
      
      button:hover{
          background-color: ${verde_agua_hover};
      }
    @media (max-width: 730px){
        nav{
            display: none;
        }
        .one,
        .two,
        .three{
            background-color: ${cinza};
            height: 5px;
            width: 100%;
            margin: 6px auto;
            border-radius: 5px;
            opacity: 1;
            transition: 0.3s ease 0s;
            
        }
        .as{
            font-size: 3rem;
        }
        .menu-toggle{
            width: 40px;
            height: 30px;
            margin-right: 20px;
            margin-left: 60px;
            order: 2;
        }
    
        /* fullscreen */
        .menu-section.on{
            position: absolute;
            top: 0;
            left: 0;
            background-color: white;
            width: 100vw;
            height: 100vh;
            z-index: 10;
            
            display: flex;
            justify-content: center;
            align-items: center;
        }
    
        .menu-toggle{
            cursor: pointer;
        }
    
        .menu-section.on .menu-toggle{
            position: absolute;
            top: 23px;
            right: 28px;
            cursor: pointer;
        }
    
        .menu-section.on .menu-toggle .one{
            transform: rotate(45deg) translate(5px, 7px);
        }
    
        .menu-section.on .menu-toggle .two{
            opacity: 0;
        }
    
        .menu-section.on .menu-toggle .three{
            transform: rotate(-45deg) translate(8px, -10px);
        }
    
        .menu-section.on nav{
            display: block;
        }
    
        .menu-section.on nav ul{
            text-align: center;
            display: block;
        }
    
        .menu-section.on nav ul li{
            display: block;
            margin: 2rem;
        }
    
        .menu-section.on nav ul li a{
            line-height: 9rem;
            padding: 4.6rem 13.6rem;
        }
    
        a, li, button{
            font-size: 3.7rem;
        }
    }
    @media (max-width: 390px){
        .tit{
            font-size: 3.5rem;
        }
    
    }
    @media (max-width: 345px){
        .tit{
            font-size: 3rem;
        }
    
    }
`