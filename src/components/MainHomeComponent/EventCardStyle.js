const EventCardStyle = theme =>({
    mEroot: {
        border: '1px solid #BFBEBE',
        borderRadius: 8,
        [theme.breakpoints.only('xs')]:{
            marginBottom: 10,
        },
        [theme.breakpoints.only('sm')]:{
            marginBottom: 15,
        },
        [theme.breakpoints.only('md')]:{
            marginBottom: 20,
        },
        [theme.breakpoints.only('lg')]:{
            marginBottom: 25,

        },
        [theme.breakpoints.only('xl')]:{
            marginBottom: 25,
        }
    },

    mEfont: {
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
            paddingLeft: 10,
            paddingTop: 5,
            paddingBottom: 0
        },

        fontSize: 13,
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 0.
    },

    mEbut: {
        backgroundColor: '#f9de46',
        width: 125,
        height: 45,
        borderRadius: 8,
        [theme.breakpoints.only('xs')]:{
            width: 80,
            height: 50,
            marginLeft: 20,
            borderRadius: 6,
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

export default EventCardStyle;