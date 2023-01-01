import styled from "styled-components";

interface Props {
    bg?: string,
    color?: string
}

export const Button = styled.button<Props>`
    font-size: 16px;
    padding: 15px 60px;
    border-radius: 50px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color }) => color || '#333'};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`