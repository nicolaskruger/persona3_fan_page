import * as React from 'react';
import styled from 'styled-components';
import { ImgToggle } from '../imgToogle/ImgToggle';
import agni from './img/aginis.png';
import makoto from './img/makoto.png';

const Img = styled.img`
    width: 300px
`;

const CharacterImg = () =>{
    return (
        <ImgToggle Img={Img} ImgA={makoto} ImgB={agni} altA="makoto" altB="agnis" change={false}/>
    )
}

export {CharacterImg}