import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    card: {
        marginTop: '250px',
    },
    button: {
        width: '100px',
        borderStyle: 'solid',
        borderRadius: '16px',
        backgroundColor: 'violet',
        marginBottom: '10px',
        ' &:hover': {
            backgroundColor: 'purple',
            color: "white"
        },
    },
    textField: {
        marginBottom: '10px',
        ' &:hover': {
            backgroundColor: 'violet',
        },
    },
})

const Login = () => {
    const classes = useStyles()
 
    return (
        <Container>
            <Grid container justifyContent="center">
                <Card elevation={8} className={classes.card}>
                    <CardHeader
                        title="Entre no Lucas Trips"
                        subheader="Digite abaixo os dados para entrar no Lucas Trips"
                    />
                    <CardContent>
                        <TextField
                            label="Login"
                            variant="outlined"
                            required
                            fullWidth
                            className={classes.textField}
                        />
                        <TextField
                            label="Senha"
                            variant="outlined"
                            type="password"
                            required
                            fullWidth
                            className={classes.textField}
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            style={{ marginRight: 'auto' }}
                            className={classes.button}
                            component={Link}
                            to="/cadastrar">
                            Cadastrar
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.button}
                            component={Link}
                            to="/home">
                            Entrar
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Container>
    )
}

export default Login
