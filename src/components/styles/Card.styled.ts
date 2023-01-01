import styled from "styled-components";


interface CardContainerProps {
    layout: string
}

export const StyledCard = styled.div`
    background-color: ${({ theme }) => theme.colors.body};
    padding: 40px 0 0 ;
`

export const CardContainer = styled.div<CardContainerProps>`
    box-shadow: 0 0 10px rgba(0,0,0,0.15) ;
    border-radius: 10px;
    background-color: white;
    padding: 60px;
    margin-bottom: 40px;
    display: flex;
    gap: 40px;
    align-items: center;
    flex-direction: ${({ layout })=> layout || 'row'};

    @media (max-width: ${({ theme })=> theme.mobile}) {
        flex-direction: column;
    }
`

export const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`

export const Image = styled.img`
    width: 50%;
    @media (max-width: ${({ theme })=> theme.mobile}) {
        width: 100%;
    }
`