const { default: styled } = require("styled-components");

const SingleItemStyled = styled.article`
    width: 240px;
    position: relative;
    margin-bottom: 5.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .img-container{
        margin: 0 auto;
        position: absolute;
        top: -80px;
        left: 50%;
        transform: translateX(-50%);
    }
    .item-content{
        width: 100%;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 3px 8px rgba(0,0,0,0.1);
        padding: 2rem 1rem 1rem;
        display: flex;
        flex-direction: column;
        gap: .4rem;
        .favourite{
            cursor: pointer;
            display: block;
            text-align: right;
            color: #ff000088;
            font-size: 1.2rem;
            &.active{
                color: #ff0000;
                filter: drop-shadow(0px 0px 10px rgb(255, 0,0));
            }
        }
        .item-details{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            .ratings-container{
                i{
                    color: ${({ theme }) => theme.colors.black};
                    &.active{
                        color: ${({ theme }) => theme.colors.orange} !important;
                    }
                    cursor: pointer;
                }
                p{
                    font-size: 1.2rem;
                    font-weight: bold;
                    span{
                        font-size: 1rem;
                        color: ${({ theme }) => theme.colors.orange};
                        margin-right: 3px;
                    }
                }
            }
            .add-to-cart{
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${({ theme }) => theme.colors.orange};
                color: white;
                border-radius: 50%;
                cursor: pointer;
                &.in-cart{
                    opacity: .8;
                }
            }
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.mobile}) {
        flex-basis : 80%;
    }
`

export default SingleItemStyled;