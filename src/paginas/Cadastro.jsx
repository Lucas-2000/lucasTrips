import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    card: {
        marginTop: '150px',
        maxWidth: '500px'
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

const Cadastro = () => {
    const classes = useStyles()

    return (
        <Container>
            <Grid container justifyContent="center">
                <Card elevation={8} className={classes.card}>
                    <CardHeader
                        title="Realize o cadastro"
                        subheader="Insira os dados abaixo para realizar o cadastro"
                    />
                    <CardContent>
                        <TextField
                            label="Nome completo"
                            color="primary"
                            variant="outlined"
                            required
                            fullWidth
                            className={classes.textField}
                        />
                        <TextField
                            label="Idade"
                            type="number"
                            variant="outlined"
                            required
                            fullWidth
                            className={classes.textField}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            required
                            fullWidth
                            className={classes.textField}
                        />
                        <TextField
                            label="Usuario"
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
                            to="/">
                            Cancelar
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.button}
                            component={Link}
                            to="/">
                            Cadastrar
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Container>
    )
}

export default Cadastro
