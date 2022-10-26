const { default: styled } = require("styled-components");

const BottomMenuStyled = styled.div`
    background-color: #d5d5d5;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    z-index: 7;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        position: relative;
        width: max-content;
        margin: 0 auto;
        .indicator{
            background-color: ${({ theme }) => theme.colors.orange};
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 8px solid white;
            position: absolute;
            top: 0;
            transform: translateY(-50%);
            transition: .5s;
        }
        li{
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            z-index: 2;
            transition:.5s;
            &.active{
                transform: translateY(-49%);
                color: white;
            }
            &:nth-of-type(1){
                &.active ~ .indicator{
                    left: calc(60px * 0);
                }
            }
            &:nth-of-type(2){
                &.active ~ .indicator{
                    left: calc(60px * 1);
                }
            }
            &:nth-of-type(3){
                &.active ~ .indicator{
                    left: calc(60px * 2);
                }
            }
            &:nth-of-type(4){
                &.active ~ .indicator{
                    left: calc(60px * 3);
                }
            }
            &:nth-of-type(5){
                &.active ~ .indicator{
                    left: calc(60px * 4);
                }
            }
            &:nth-of-type(6){
                &.active ~ .indicator{
                    left: calc(60px * 5);
                }
            }
        }
    }
    @media screen and (max-width: 300px) {
        border-radius: 0;
    } 
`;


export default BottomMenuStyled;