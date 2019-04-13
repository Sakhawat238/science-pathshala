const ChartStyles = theme=>({
    bc: {
        width: '90%',
        marginTop: 40,
        marginBottom: 40,
        [theme.breakpoints.only('xs')]: {
            height: '190px',
            paddingLeft: '0px',
            paddingRight: '37px',
            fontSize: 11,
        },

        [theme.breakpoints.only('sm')]: {
            height: '240px',
            paddingLeft: '0px',
            paddingRight: '50px',
            fontSize: 12,
        },
        
        [theme.breakpoints.only('md')]: {
            height: '320px',
            paddingLeft: '0px',
            paddingRight: '50px',
            fontSize: 13,
        },

        [theme.breakpoints.only('lg')]: {
            height: '500px',
            paddingLeft: '0px',
            paddingRight: '250px',
            fontSize: 14,
        },

        [theme.breakpoints.only('xl')]: {
            height: '520px',
            paddingLeft: '0px',
            paddingRight: '450px',
            fontSize: 15,
        },
    }
});

export default ChartStyles;