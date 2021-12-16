import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button, Box } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        flex:1,
        marginBottom: theme.spacing(10),
    },
}));

function Appbar() {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="fixed">
            <Toolbar>
                
                <Box className={classes.menu}>
                    <Button color="inherit" href="./home">Home</Button>
                    <Button color="inherit" href="./product">Product</Button>
                    <Button color="inherit" href="./blog">Blog</Button>
                    <Button color="inherit" href="./about">About Me</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar