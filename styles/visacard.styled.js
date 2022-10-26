const { default: styled } = require("styled-components");

const VisaCardStyled = styled.div`
    margin: 1rem 0 1.5rem;
    width: 100%;
    height: 170px;
    position: relative;
    & > *{
        z-index: 2;
        color: white;
        position: absolute;
        font-size: 14px;
    }
    ::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: ${({ theme }) => theme.colors.orange};
        border-radius: 8px;
        transform: rotate(5deg);
        z-index: -1;
        border: 1px solid rgba(255, 255,255, 0.4);
    }
    ::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(35deg,  rgba(255, 255,255, 0.3), rgba(255, 255,255, 0.1));
        border-radius: 8px;
        z-index: 0;
        border: 1px solid rgba(255, 255,255, 0.4);
    }
    .visa-logo{
        top: 30px;
        right: 30px;
    }
    .card-chip{
        top: 60px;
        left: 20px;
    }
    .card-number{
        top: 100px;
        left: 20px;
    }
    .card-name{
        top: 130px;
        left: 20px;
    }
    .card-from{
        top: 130px;
        right: 90px;
    }
    .card-to{
        top: 130px;
        right: 40px;
    }
`;
export default VisaCardStyled;