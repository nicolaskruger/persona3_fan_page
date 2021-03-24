interface Theme{
    headeBG: string;
    backgroud: string;
    text: string;
    filter: string;
}

const dark:Theme = {
    headeBG: '#145DA0',
    backgroud: "#0C2D48",
    text: "#B1D4E0",
    filter: "invert(100%)"
} 

const ligth:Theme = {
    headeBG: '#FFF0DF',
    backgroud: "#F8FAFD",
    text: "black",
    filter: ""
}

export type{Theme}

export {dark, ligth}