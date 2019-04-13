const ProblemInputStyles = theme=>({
    mPImain:{
        [theme.breakpoints.only('xs')]: {
            paddingLeft: 10,
            paddingRight: 10
        },

        [theme.breakpoints.only('sm')]: {
            paddingLeft: 25,
            paddingRight: 25
        },

        [theme.breakpoints.only('md')]: {
            paddingLeft: 50,
            paddingRight: 50
        },

        [theme.breakpoints.only('lg')]: {
            paddingLeft: 100,
            paddingRight: 100
        },

        [theme.breakpoints.only('xl')]: {
            paddingLeft: 200,
            paddingRight: 200
        }
    },

    mPh : {
        backgroundColor: '#F2F2F2',
        paddingTop: '15px',
        fontSize: 16,
    },

    mPIbut: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',  

        [theme.breakpoints.only('xs')]: {
            width: 55,
            height: 25,
            marginBottom: 16,
            marginLeft: 18
        },
        [theme.breakpoints.only('sm')]: {
            width: 60,
            height: 27,
            marginBottom: 12,
            marginLeft: 25
        },
        [theme.breakpoints.only('md')]: {
            width: 70,
            height: 30,
            marginBottom: 15,
            marginLeft: 35
        },
        [theme.breakpoints.only('lg')]: {
            width: 75,
            height: 35,
            marginBottom: 14,
            marginLeft: 45
        },
        [theme.breakpoints.only('xl')]: {
            width: 80,
            height: 40,
            marginBottom: 14,
            marginLeft: 50
        }
    },

    mPIhd: {
        [theme.breakpoints.only('xs')]: {
            fontSize: 16,
            marginTop: 6
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 16,
            marginTop: 8
        },
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
            marginTop: 11,
            marginLeft: 30
        },
        [theme.breakpoints.only('lg')]: {
            fontSize: 19,
            marginTop: 12,
            marginLeft: 110
        },
        [theme.breakpoints.only('xl')]: {
            fontSize: 20,
            marginTop: 12,
            marginLeft: 100
        },
    },

    inputt: {
        display: 'none !important',
    },

    mLb: {
        marginBottom: '0px',
    },

    mPIimgbut :{
        

        [theme.breakpoints.only('xs')]: {
            width: 140,
            height: 30,
            marginBottom: 16,
        },
        [theme.breakpoints.only('sm')]: {
            width: 145,
            height: 35,
            marginBottom: 12,
        },
        [theme.breakpoints.only('md')]: {
            width: 150,
            height: 38,
            marginBottom: 15,
        },
        [theme.breakpoints.only('lg')]: {
            width: 155,
            height: 42,
            marginBottom: 14,
        },
        [theme.breakpoints.only('xl')]: {
            width: 155,
            height: 45,
            marginBottom: 14,
        }
    },

    mPItf: {
        [theme.breakpoints.only('xs')]: {
            marginLeft:15,
            marginRight: 15
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 16,
            marginLeft:10,
            marginRight: 10
        },
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
            marginLeft:10,
            marginRight: 10
        },
        [theme.breakpoints.only('lg')]: {
            fontSize: 19,
            marginLeft:10,
            marginRight: 10
        },
        [theme.breakpoints.only('xl')]: {
            fontSize: 20,
            marginLeft:10,
            marginRight: 10
        },
    },  
    
    mPIcoin : {
        [theme.breakpoints.only('xs')]: {
            width: 85,
            height: 85,
        },

        [theme.breakpoints.only('sm')]: {
            width: 100,
            height: 100,
        },

        [theme.breakpoints.only('md')]: {
            width: 110,
            height: 110,
        },

        [theme.breakpoints.only('lg')]: {
            width: 115,
            height: 115,
        },

        [theme.breakpoints.only('xl')]: {
            width: 120,
            height: 120,
        },
    },

    mPItext: {
        textAlign: 'center',
        color: 'darkgray',
        marginTop:30,
        marginBottom: 30,

        [theme.breakpoints.only('xs')]: {
            paddingLeft: 16,
            paddingRight: 16,
            fontSize: 12
        },

        [theme.breakpoints.only('sm')]: {
            paddingLeft: 30,
            paddingRight: 30,
            fontSize: 15
        },

        [theme.breakpoints.only('md')]: {
            paddingLeft: 45,
            paddingRight: 45,
            fontSize: 17
        },

        [theme.breakpoints.only('lg')]: {
            paddingLeft: 50,
            paddingRight: 50,
            fontSize: 18
        },

        [theme.breakpoints.only('xl')]: {
            paddingLeft: 60,
            paddingRight: 60,
            fontSize: 19
        },
    },

    mPImeter : {
        [theme.breakpoints.only('xs')]: {
            width: 97,
            height: 85,
        },

        [theme.breakpoints.only('sm')]: {
            width: 115,
            height: 100,
        },

        [theme.breakpoints.only('md')]: {
            width: 130,
            height: 110,
        },

        [theme.breakpoints.only('lg')]: {
            width: 135,
            height: 115,
        },

        [theme.breakpoints.only('xl')]: {
            width: 140,
            height: 120,
        },
    },

    mPIlbt :{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',  

        [theme.breakpoints.only('xs')]: {
            width: 114,
            height: 30,
        },
        [theme.breakpoints.only('sm')]: {
            width: 125,
            height: 35,
        },
        [theme.breakpoints.only('md')]: {
            width: 130,
            height: 38,
        },
        [theme.breakpoints.only('lg')]: {
            width: 140,
            height: 40,
        },
        [theme.breakpoints.only('xl')]: {
            width: 145,
            height: 40,
        }
    },

    mPIldv: {
        display: 'flex',
        justifyContent: 'center',

        [theme.breakpoints.only('xs')]: {
            marginTop: 40
        },

        [theme.breakpoints.only('sm')]: {
            marginTop: 45
        },

        [theme.breakpoints.only('md')]: {
            marginTop: 50
        },

        [theme.breakpoints.only('lg')]: {
            marginTop: 55
        },

        [theme.breakpoints.only('xl')]: {
            marginTop: 60
        },
    }
});

export default ProblemInputStyles;