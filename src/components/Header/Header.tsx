import * as React from 'react';
import styled from 'styled-components';
import { Container } from '../container/container';
import { Logo } from '../logo/Logo';
import { ToggleIcon } from '../toggleIcon/ToggleIcon';
import logo from './img/logo.png';

const HeaderH = styled.header`
    height: var(--header-h);
    background-color: ${({theme})=>theme.headeBG};
`;

const HeadeContainer = styled(Container)`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () =>{
    return (
        <HeaderH>
            <HeadeContainer>
                <Logo src={logo} alt="Persona 3"/>
                <ToggleIcon/>
            </HeadeContainer>
        </HeaderH>
    )
}

export {Header};