import styled from "styled-components";


export const StyledFooter = styled.footer`
    background-color: ${({ theme })=> theme.colors.footer};
    padding: 100px 0 60px ;
    color: white;

    ul {
        list-style-type: none;
        opacity: 0.8;
        display: grid;  
        gap: 12px;
    }

    ul li {
        cursor: pointer;
    }

    p{
        width: 400px;
    }

    img {
        margin-bottom: 24px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        p {
            width: auto;
            text-align: center;
        }

        ul {
            text-align: center;
        }

        img {
            margin: 0 auto;
            display: block;
            margin-bottom: 24px;
        }
    }
`

export const JustifyBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
` 

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;

    span {
        padding: 12px;
        border-radius: 50%;
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const CopyRight = styled.div`
    opacity: 0.5;
    text-align: right;
    margin-top: 80px;
    width: 100%;

    @media (max-width: ${({ theme })=> theme.mobile}){
        text-align: center;
    }
` 