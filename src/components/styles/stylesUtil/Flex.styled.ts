import styled from "styled-components";

interface Props {
    gap?: string
}

export const Flex = styled.div<Props>`
    display: flex;
    align-items: center;
    gap: ${({ gap })=> gap || '0px'};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        justify-content: center;
    }
`