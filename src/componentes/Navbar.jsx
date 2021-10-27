import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    logo: {
        width: '100px'
    },
    grid: {
        marginRight: 'auto'
    },
    button: {
        ' &:hover': {
            width: '100px',
            color: "white",
        },
    }
})

const Navbar = () => {
    const classes = useStyles()

    return (
        <Container>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Grid className={classes.grid}>
                        <Typography variant="h5">
                            Lucas Trips
                        </Typography>
                    </Grid>
                    <Grid>
                        <Button
                            variant="text"
                            size="large"
                            component={Link}
                            to='/home'
                            className={classes.button}>
                            Home
                        </Button>
                        <Button
                            variant="text"
                            size="large"
                            component={Link}
                            to='/sobre'
                            className={classes.button}>
                            Sobre
                        </Button>
                        <Button
                            variant="text"
                            size="large"
                            component={Link}
                            to='/contato'
                            className={classes.button}>
                            Contato
                        </Button>
                        <Button
                            variant="text"
                            size="large"
                            component={Link}
                            to='/'
                            className={classes.button}>
                            Sair
                        </Button>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default Navbar
