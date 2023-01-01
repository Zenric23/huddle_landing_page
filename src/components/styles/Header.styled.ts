import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;

    h1 {
        margin-bottom: 24px;
    }

    p {
        margin-bottom: 20px;
    }

    @media (max-width: ${({ theme })=> theme.mobile}) {
        text-align: center;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
    gap: 40px;
    

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`
 
export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`