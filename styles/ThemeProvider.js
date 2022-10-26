import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        orange: "#f8901c",
        black: "#373848",
    },
    screens: {
        mobile: "500px",
        tablet: "800px",
        laptops: "1200px",
        desktops: "1440px",
    },
};

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme