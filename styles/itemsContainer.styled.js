const { default: styled } = require("styled-components");

const ItemsContainerStyled = styled.section`
    margin: 6rem 1rem 1rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: .7rem;
    .no-item{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.tablet}){
        justify-content: space-around;
    }
`;

export default ItemsContainerStyled;