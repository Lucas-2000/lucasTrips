import { Container, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import criador from '../imagens/criador.jpg'

const useStyles = makeStyles({
    container: {
        marginTop: '100px'
    },
    paper: {
        marginTop: '50px',
        maxWidth: "160px",
        maxHeight: "175px",
    },
    img: {
        width: "160px",
        height: "175px",
        '&:hover': {
            borderStyle: 'solid',
            color: 'black',
        }
    }
})

const Sobre = () => {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Grid container justifyContent="center">
                <Typography variant="h4" color="textPrimary">
                    Sobre a Lucas Trips
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h5" color="textSecondary">
                    <p>
                        A Lucas Trips é uma empresa que busca oferecer
                        o melhor serviço para seus clientes
                    </p>
                    <p>
                        Com uma interface simples e fácil nosso site apresenta
                        diversas opções de destino
                    </p>
                    <p>
                        Para voce e sua familia
                        poderem curtir uma viagem com momentos inesqueciveis
                    </p>
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Paper className={classes.paper}>
                    <img src={criador} className={classes.img} />
                </Paper>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h5" color="textSecondary">
                    Criador do site Lucas Marchesoni
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h6" color="textSecondary">
                    Desenvolvedor Web
                </Typography>
            </Grid>
        </Container>
    )
}

export default Sobre
