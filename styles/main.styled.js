const { default: styled } = require("styled-components");

const MainStyled = styled.main`
    width: 74%;
    position: relative;
    @media screen and (max-width: ${({ theme }) => theme.screens.laptops}) {
        width: 100%;
    }
`

export default MainStyled;