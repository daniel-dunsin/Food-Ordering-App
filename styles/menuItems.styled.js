const { default: styled } = require("styled-components");

const MenuItemsStyled = styled.section`
    
    margin: 1.5rem 1rem;
    .position-switchers{
        display: flex;
        margin-bottom: 1rem;
        justify-content: flex-end;
        gap: 1rem;
        i{
            color: white;
            background-color: ${({ theme }) => theme.colors.orange};
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .menu-items-container{
        scroll-behavior: smooth;
        transition: .5s;
        display: flex;
        align-items: center;
        gap: 1rem;
        overflow-y: hidden;
        overflow-x: scroll;
        ::-webkit-scrollbar{
            display: none;
        }
        .menu-item{
            cursor: pointer;
            min-width: 120px;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: .2rem;
            padding: 0.5rem;
            border-radius: 4px;
            box-shadow: 0px 0px 6px rgba(0,0,0,0.1);
            transition: .5s;
            .menu-item-image-container{
                width: 60px;
                height: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                transition: .5s;
            }
            h3{
                font-size: 1rem;
                transition: .5s;;
            }
            .menu-item-arrow-icon{
                width: 30px;
                height: 30px;
                border-radius: 4px;
                background-color: ${({ theme }) => theme.colors.orange};
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: .5s;
            }
            :hover, &.active{
                background-color: ${({ theme }) => theme.colors.orange};
                .menu-item-image-container{
                    background-color: white;  
                }
                h3{
                    color: white;
                }
                .menu-item-arrow-icon{
                    background-color: white;
                    color: ${({ theme }) => theme.colors.orange};
                }
            }
        }
}
    
`

export default MenuItemsStyled;