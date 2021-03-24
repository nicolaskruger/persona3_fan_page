import * as React from 'react';

import sun from './img/sun.svg';

import moon from './img/moon.svg';
import styled from 'styled-components';
import { ImgToggle } from '../imgToogle/ImgToggle';

const Icon = styled.img`
    width: 40px;
    cursor: pointer;
`;



const ToggleIcon = () =>{
    
    return (
        <ImgToggle Img={Icon} ImgA={sun} ImgB={moon} change={true} altA={"sun"} altB={"moon"} />
    )
}

export {ToggleIcon}