const { default: styled } = require("styled-components");

const BannerStyled = styled.header`
    width: 100%;
    .banner-container{
        height: 200px;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin: 1.5rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        .banner-text{
            display: flex;
            flex-direction: column;
            gap: .85rem;
            align-items: flex-start;
            p{
                span{
                    color: ${({ theme }) => theme.colors.orange};
                    font-size: 1.2rem;
                    font-weight: bold;
                }
            }
            button{
                padding: .85rem 3rem;
                font-size: 1.2rem;
                color: white;
                border: none;
                outline: none;
                background-color: ${({ theme }) => theme.colors.orange};
                border-radius: 40px;
                transition: all .3s;
                :hover{
                    box-shadow: 0px 3px 10px rgba(0,0,0,0.1);
                }
            }
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.mobile}) {
        .banner-container{
            overflow: hidden;
            position: relative;
            height: 150px;
            .banner-text{
                padding: 1rem .5rem;
                flex: 1.2;
                gap: .75rem;
            h1{
                font-size: 18px;
            }
            p{
                font-size: 15px;
                width: 200px;
                line-height: 1.2;
                z-index: 2;
                span{
                    font-size: 15px;
                }
            }
            button{
                font-size: .95rem;
                width: 150px;
                padding: .8rem 0;
            }
        }
        .banner-img{
            display: none;
        }
        }
    }
`;

export default BannerStyled;