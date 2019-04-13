const UpdateProfileStyles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },

    dense: {
        marginTop: 19,
    },

    mFg: {
        flexDirection: 'row',
    },

    button: {
        margin: theme.spacing.unit,
    },

    inputt: {
        display: 'none !important',
    },

    mLb: {
        marginBottom: '0px',
    }
});

export default UpdateProfileStyles;