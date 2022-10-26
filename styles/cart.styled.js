const { default: styled } = require("styled-components");

const CartStyled = styled.section`
    .cart-items-container{
        width: 100%;
        height: 180px;
        display: flex;
        flex-direction: column;
        gap: .8rem;
        overflow-y: scroll;
        overflow-x: hidden;
        margin-top: 1rem;
        padding: 1rem;
        ::-webkit-scrollbar{
            width: 6px;
            background-color: #999;
            height: 100%;
            border-radius: 20px;

        }
        ::-webkit-scrollbar-thumb{
            background-color: #666;
        }
        
    }
    .total-container{
        display: flex;
        flex-direction: column;
        gap: .3rem;
        margin-top: 1rem;
        .total{
            display: flex;
            font-size: 1.2rem;
            font-weight: bold;
            justify-content: space-between;
            align-items: center;
            p{
                span{
                    font-size: 1rem;
                    color: ${({ theme }) => theme.colors.orange};
                }
            }
        }
        
        button{
            all:unset;
            padding: .625rem;
            font-size: 1rem;
            color: white;
            background-color: ${({ theme }) => theme.colors.orange};
            border-radius: 30px;
            font-weight: bold;
            text-align: center;
        }
    }
`;

export default CartStyled;