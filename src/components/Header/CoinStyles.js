

const CoinStyles = theme =>({
    flx:{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    avatar:{

        [theme.breakpoints.only('xs')]: {
            maxWidth: '20px',
            maxHeight: '20px',
        },

        [theme.breakpoints.only('sm')]: {
            maxWidth: '25px',
            maxHeight: '25px',
        },

        [theme.breakpoints.only('md')]: {
            maxWidth: '30px',
            maxHeight: '30px',
        },

        [theme.breakpoints.only('lg')]: {
            maxWidth: '37px',
            maxHeight: '37px',
        },

        [theme.breakpoints.only('xl')]: {
            maxWidth: '42px',
            maxHeight: '42px',
        },
    },

    cointext :{
        color: 'lightgoldenrodyellow',
        marginRight: 5,
        [theme.breakpoints.only('xs')]: {
            fontSize:15,
        },

        [theme.breakpoints.only('sm')]: {
            fontSize:18,
        },

        [theme.breakpoints.only('md')]: {
            fontSize:20,
        },

        [theme.breakpoints.only('lg')]: {
            fontSize:22,
        },

        [theme.breakpoints.only('xl')]: {
            fontSize:22,
        },
    }
});

export default CoinStyles;