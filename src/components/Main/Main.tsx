import * as React from 'react';
import styled from 'styled-components';
import { CharacterImg } from '../characterImg/CharacterImg';
import { Container } from '../container/container';

const Mainm = styled.main`
    min-height: var(--main-h);
    background-color: ${({theme})=>theme.backgroud};
    color: ${({theme})=>theme.text};
`;

const MainSection = styled(Container)`
    padding-top: 40px;
    display: flex;
    gap: 10px;
    align-items: center;
`;

const Main = () =>{

    return (
        <Mainm>
            <MainSection>
                <CharacterImg/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi eligendi enim fuga voluptates! Nam nobis odit quidem perferendis quaerat vitae numquam quibusdam earum? Provident rerum tempore ratione! Suscipit, omnis.</p>
            </MainSection>        
        </Mainm>
    );
}

export {Main}