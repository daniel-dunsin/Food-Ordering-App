const { default: styled } = require("styled-components");

const NavbarStyled = styled.nav`
    width: 100%;
    display: flex;
    padding: .625rem 1rem;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    background-color: white;
    box-shadow: 0px 3px 20px rgba(0,0,0,0.1);
   
    .input-box{
        width: 60%;
        display: flex;
        align-items: center;
        gap:.6rem;
        padding: .8rem 1rem;
        border-radius: 30px;
        box-shadow: 0px 3px 20px rgba(0,0,0,0.1);
        color: ${({ theme }) => theme.colors.black};
        input{
            font-size: 1rem;
            padding: 0.2rem;
            outline: none;
            border: none;
            flex: 1;
        }
    }
    .cart-icon{
        font-size: 1rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        i{
          font-size:1.5rem ;
        }
        p{
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.colors.orange};
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            top: -8px;
            right: -8px;
        }
    }
    .navbar-brand{
        width: 60px;
        height: 60px;
        span{
            width: unset;
            height: unset;
            span{
                width: 50px !important;
                height: 50px !important;
            }
        } 
    }
    .user-details{
        display: flex;
        gap: 1rem;
        align-items:center;
        .user-image-container{
            width: 50px;
            height: 50px;
            border:2px solid lightgrey;
            border-radius: 50%;
            overflow: hidden;
            &:hover{
                border-color: ${({ theme }) => theme.colors.orange};
            }
            .user-image{
            object-fit: cover;
            object-position: center;
            }
        }
        h3{
            cursor: pointer;
        }
    }
    .toggle-icon{
        display: none;
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.tablet}) {
        .user-details{
            h3{
                display: none;
            }
        }
        .input-box{
            max-width: 350px;
        }
        .toggle-icon{
            display: block;
            font-size: 1.3rem;
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.mobile}){
        .navbar-brand{
            flex: 1;
        }
        .input-box{
            display: none;
        }
    } 
`;

export default NavbarStyled