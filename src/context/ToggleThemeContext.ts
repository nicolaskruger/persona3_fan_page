import * as React from 'react';

const ToggleThemeContext = React.createContext(
    {
        theme:true,
        oper:()=>{}
    }
)

export {ToggleThemeContext};