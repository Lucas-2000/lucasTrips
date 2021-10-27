import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles({
    container: {
        marginTop: '100px'
    },
    card: {
        marginTop: '100px'
    },
    button: {
        width: '400px',
        borderStyle: 'solid',
        borderRadius: '16px',
        backgroundColor: 'violet',
        marginBottom: '20px',
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

const Contato = () => {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Grid container justifyContent="center">
                <Card elevation={8} className={classes.card}>
                    <CardHeader
                        title="Fale conosco"
                        subheader="Deixe sua mensagem referente ao site"
                    />
                    <CardContent>
                        <Grid>
                            <TextField
                                label="Nome completo"
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
                                label="Mensagem"
                                variant="outlined"
                                required
                                fullWidth
                                multiline
                                rows={4}
                                className={classes.textField}
                            />
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container justifyContent="center">
                            <Button
                                variant="contained"
                                className={classes.button}
                            >
                                Enviar
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </Container>
    )
}

export default Contato
