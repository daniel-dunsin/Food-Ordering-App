const { default: styled } = require("styled-components");

const SidebarStyled = styled.aside`
    position: fixed;
    width: 26%;
    min-height: 100vh;
    background-color: white;
    top: 0;
    right: 0;
    box-shadow: 2px 0px 4px rgba(0,0,0,.1);
    padding: 6rem 1.2rem;
    z-index: 4;
    @media screen and (max-width: ${({ theme }) => theme.screens.laptops}) {
        width: 100%;
        max-width: 400px;
        z-index: 4;
        transform: translateX(100%);
        transition: .5s;
        &.sidebar-open{
            transform: translateX(0);
        }
    }
`;

export default SidebarStyled;