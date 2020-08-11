const baseTheme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 18, 20, 24, 32, 36, 48, 80, 96],
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    width: [16, 32, 64, 128, 256],
    heights: [16, 32, 64, 128, 256],
    colors: {
        black: '#000',
        gray: ' #303030',
        green: '#1c8021',
        purple: '#6b1dbf',
        darkPurple: '#621ab0',
        blue: '#2f59ed',
        error: '#de1f1f',
        darkError: '#bf1d1d',
        darkBlue: '#294dcf',
    },
};

const theme = {
    ...baseTheme,
    buttons: {
        primary: {
            color: 'white',
            backgroundColor: baseTheme.colors.purple,
            '&:hover': {
                transition: '0.2s',
                backgroundColor: baseTheme.colors.darkPurple,
                color: '#d4d4d4',
            },
        },
        secondary: {
            color: 'white',
            backgroundColor: baseTheme.colors.blue,
            '&:hover': {
                transition: '0.2s',
                backgroundColor: baseTheme.colors.darkBlue,
                color: '#d4d4d4',
            },
        },
        danger: {
            color: 'white',
            backgroundColor: baseTheme.colors.error,
            '&:hover': {
                transition: '0.2s',
                backgroundColor: baseTheme.colors.darkError,
                color: '#d4d4d4',
            },
        },
    },
};

export default theme;
