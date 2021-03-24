import * as React from 'react';

import { ToggleThemeContext } from '../../context/ToggleThemeContext';



interface ImgToggleProps{
    Img:any;
    ImgA:string;
    ImgB:string;
    altA:string;
    altB:string;
    change:boolean;
}   

const ImgToggle = ({Img, ImgA, ImgB, altA, altB, change}:ImgToggleProps) =>{
    const {oper,theme} = React.useContext(ToggleThemeContext);
    return (
        <Img onClick={change?oper:()=>{}} src={theme?ImgA:ImgB} alt={theme?altA:altB} />
    )
}

export {ImgToggle}