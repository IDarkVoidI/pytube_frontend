import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,

}


export const theme = extendTheme({
    colors: {
        app: {
            main_bg: '#00334e',
            second_bg: '#145374',
            orange: '#e8e8e8',
            text: "#e8e8e8",
            orange_hover: "#5588A3",
        }
    },
    config: config,
})
