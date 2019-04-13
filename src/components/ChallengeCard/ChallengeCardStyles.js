const ChallengeCardStyles = theme =>({
    mEroot: {
        border: '1px solid #BFBEBE',
        borderRadius: 8,
        [theme.breakpoints.only('xs')]:{
            marginTop: 15,
            marginRight: 10,
            marginBottom: 15,
            marginLeft: 10
        },
        [theme.breakpoints.only('sm')]:{
            marginTop: 20,
            marginRight: 15,
            marginBottom: 20,
            marginLeft: 15
        },
        [theme.breakpoints.only('md')]:{
            marginTop: 25,
            marginRight: 20,
            marginBottom: 25,
            marginLeft: 20
        },
        [theme.breakpoints.only('lg')]:{
            marginTop: 30,
            marginRight: 30,
            marginBottom: 30,
            marginLeft: 30
        },
        [theme.breakpoints.only('xl')]:{
            marginTop: 35,
            marginRight: 45,
            marginBottom: 35,
            marginLeft: 45
        }
    },

    mEfont: {
        [theme.breakpoints.only('xs')]: {
            fontSize: 13,
            paddingLeft: 10,
            paddingTop: 25,
            paddingBottom: 15
        },

        fontSize: 15,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 22.
    },

    mEbut: {
        backgroundColor: '#f9de46',
        width: 125,
        height: 45,
        borderRadius: 10,
        [theme.breakpoints.only('xs')]:{
            width: 80,
            height: 50,
            marginLeft: 20,
        }
    },

    mEend: {
        color: '#7e847d',

        [theme.breakpoints.only('xs')]:{
            marginTop: 20
            
        },

        [theme.breakpoints.only('sm')]:{
            marginTop: 22
            
        },
        [theme.breakpoints.only('md')]:{
            marginTop: 24
            
        },
        [theme.breakpoints.only('lg')]:{
            marginTop: 26
            
        },
        [theme.breakpoints.only('xl')]:{
            marginTop: 28
            
        }
    }
});

export default ChallengeCardStyles;