import styled from "styled-components";

const Logo = styled.img`
    filter: ${({theme})=>theme.filter};
    width: 100px;
`;

export {Logo};