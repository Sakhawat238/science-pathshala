const SubmitProblemStyles = theme => ({
    root:{
        textAlign: 'center'
    },

    mSPtf: {
        [theme.breakpoints.only('xs')]:{
            width: 270,
            height: 35,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
        },

        [theme.breakpoints.only('sm')]:{
            width: 400,
            height: 40,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
        },

        [theme.breakpoints.only('md')]:{
            width: 430,
            height: 45,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
        },

        [theme.breakpoints.only('lg')]:{
            width: 550,
            height: 50,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
        },

        [theme.breakpoints.only('xl')]:{
            width: 650,
            height: 50,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
        },  
    },

    mSPicon: {
        color: 'darkgray',

        [theme.breakpoints.only('xs')]:{
            marginTop: 10,
            width: 35,
            height: 35
        },

        [theme.breakpoints.only('sm')]:{
            marginTop: 10,
            width: 40,
            height: 40
        },

        [theme.breakpoints.only('md')]:{
            marginTop: 10,
            width: 50,
            height: 50
        },

        [theme.breakpoints.only('lg')]:{
            marginTop: 10,
            width: 55,
            height: 55
        },

        [theme.breakpoints.only('xl')]:{
            marginTop: 10,
            width: 55,
            height: 55
        }     
    }
});

export default SubmitProblemStyles;