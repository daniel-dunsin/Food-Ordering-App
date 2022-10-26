const { default: styled } = require("styled-components");

const CartItemStyled = styled.article`

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: .7rem;
            .img-container{
                background-color: #00ffc855;
                width: 60px;
                height: 60px;
                border-radius: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .item-content{
                flex: 1;
                max-width: max-content;
                display: flex;
                flex-direction: column;
                gap: .4rem;
                h4{
                    font-size: 1rem;
                }
                .item-details{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                    .item-amount{
                        font-size: 1.2rem;
                        color: ${({ theme }) => theme.colors.orange};
                        display: flex;
                        align-items: flex-end;
                        justify-content: center;
                        font-weight: bold;
                        span{
                            font-size: 1rem;
                        }
                    }
                    .toggle-icons{
                        display: flex;
                        align-items: center;
                        gap: 0.6rem;
                        button{
                            all: unset;
                            font-size: 1.2rem;
                        }
                    }
                }
            }
            
            .item-price{
                    font-size: 1.2rem;
                    font-weight: bold;
                    span{
                        font-size: 1rem;
                        color: ${({ theme }) => theme.colors.orange};
                    }
            }
`;

export default CartItemStyled;