const { default: styled } = require("styled-components");

const SubmenuStyled = styled.div`
    margin: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
        font-size: 1.2rem;
    }
    div{
        color: ${({ theme }) => theme.colors.orange};
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .4rem;
        cursor: pointer;
        span{
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            background-color: ${({ theme }) => theme.colors.orange};
            border-radius: 4px;
        }
    }
`;

export default SubmenuStyled;