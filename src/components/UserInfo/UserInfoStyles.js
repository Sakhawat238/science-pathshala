const UserInfoStyles = theme=>({
    avatar: {
        [theme.breakpoints.only('xs')]: {
            width: '70px',
            height: '70px',
            marginTop: 15,
        },

        [theme.breakpoints.only('sm')]: {
            width: '90px',
            height: '90px',
            marginTop: 20,
        },

        [theme.breakpoints.only('md')]: {
            width: '110px',
            height: '110px',
            marginTop: 30
        },

        [theme.breakpoints.only('lg')]: {
            width: '140px',
            height: '140px',
            marginTop: 40
        },

        [theme.breakpoints.only('xl')]: {
            width: '200px',
            height: '200px',
            marginTop: 50
        },
    },


    mUItype: {
        [theme.breakpoints.only('xs')]: {
            marginTop: 5,
            marginBottom: 5,
            fontSize: 13
        },
        [theme.breakpoints.only('sm')]: {
            marginTop: 10,
            marginBottom: 5,
            fontSize: 14
        },
        [theme.breakpoints.only('md')]: {
            marginTop: 10,
            marginBottom: 5,
            fontSize: 15
        },
        [theme.breakpoints.only('lg')]: {
            marginTop: 15,
            marginBottom: 5,
            fontSize: 16
        },
        [theme.breakpoints.only('xl')]: {
            marginTop: 25,
            marginBottom: 5,
            fontSize: 17
        }
    },

    mUIinst: {
        [theme.breakpoints.only('xs')]: {
            marginTop: 8,
            fontSize: 14
        },
        [theme.breakpoints.only('sm')]: {
            marginTop: 5,
            fontSize: 15
        },
        [theme.breakpoints.only('md')]: {
            marginTop: 10,
            fontSize: 16
        },
        [theme.breakpoints.only('lg')]: {
            marginTop: 15,
            fontSize: 17
        },
        [theme.breakpoints.only('xl')]: {
            marginTop: 20,
            fontSize: 18
        }
    }
});

export default UserInfoStyles;