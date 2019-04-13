const XPstyles = theme =>({
    flx:{
        display: 'flex',
        position: 'relative',
    },

    avatar: {
        position: 'absolute',
        zIndex : 3,

        [theme.breakpoints.only('xs')]: {
            maxWidth: '20px',
            maxHeight: '20px',
            top: '10px',
        },

        [theme.breakpoints.only('sm')]: {
            maxWidth: '25px',
            maxHeight: '25px',
            top: '10px',
        },

        [theme.breakpoints.only('md')]: {
            maxWidth: '30px',
            maxHeight: '30px',
            top: '9px',
        },

        [theme.breakpoints.only('lg')]: {
            maxWidth: '37px',
            maxHeight: '37px',
            top: '5px',
        },

        [theme.breakpoints.only('xl')]: {
            maxWidth: '42px',
            maxHeight: '42px',
            top: '4px',
        },
    },

    mH4: {
        position: 'absolute',
        left:'14px',
        zIndex: 4,
        [theme.breakpoints.only('xs')]: {
            top: '-5px',
            fontSize: '13px',
            left: '6px',
        },

        [theme.breakpoints.only('sm')]: {
            top: '-8px',
            fontSize: '15px',
            left: '8px',
        },

        [theme.breakpoints.only('md')]: {
            top: '-12px',
            fontSize: '18px',
            left: '9px',
        },

        [theme.breakpoints.only('lg')]: {
            top: '-17px',
            fontSize: '20px',
            left: '12px',
        },

        [theme.breakpoints.only('xl')]: {
            top: '-20px',
            fontSize: '22px',
            left: '14px',
        },
    },

    progress: {
        zIndex: 2,
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,.1)',

        [theme.breakpoints.only('xs')]: {
            minWidth: '50px',
            height: '13px',
            marginBottom: '15px',
            marginTop: '14px',
            marginLeft:'17px',
        },

        [theme.breakpoints.only('sm')]: {
            minWidth: '110px',
            height: '13px',
            marginBottom: '17px',
            marginTop: '16px',
            marginLeft:'20px',
        },

        [theme.breakpoints.only('md')]: {
            minWidth: '150px',
            height: '16px',
            marginBottom: '20px',
            marginTop: '15px',
            marginLeft:'25px',
        },

        [theme.breakpoints.only('lg')]: {
            minWidth: '180px',
            height: '18px',
            marginBottom: '20px',
            marginTop: '14px',
            marginLeft:'32px',
        },

        [theme.breakpoints.only('xl')]: {
            minWidth: '200px',
            height: '20px',
            marginBottom: '20px',
            marginTop: '14px',
            marginLeft:'35px',
        },
    },

    mT :{
        [theme.breakpoints.only('xs')]:{
            fontSize: '10px',
        },

        [theme.breakpoints.only('sm')]:{
            fontSize: '12px'
        },

        [theme.breakpoints.only('md')]:{
            fontSize: '14px'
        },

        [theme.breakpoints.only('lg')]:{
            fontSize: '16px'
        },

        [theme.breakpoints.only('xl')]:{
            fontSize: '18px'
        }
    }
});

export default XPstyles;