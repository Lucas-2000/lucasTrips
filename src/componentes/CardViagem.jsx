import { Card, CardContent, CardHeader, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles({
    card: {
        marginTop: '50px',
        maxWidth: '600px'
    },
    img: {
        height: '275px',
        width: '300px',
        marginBottom:'30px'
    }
})

const CardViagem = ({ destino }) => {
    const classes = useStyles()

    return (
        <Container>
            <Grid container justifyContent="center">
                <Card elevation={8} className={classes.card}>
                    <CardHeader
                        title={destino.pais}
                        subheader={destino.cidade}
                    />
                    <CardContent>
                        <Grid container justifyContent="center">
                            <img className={classes.img} src={destino.imagem} />
                        </Grid>
                        <Typography variant="body2" color="textSecondary">
                            {destino.descricao}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    )
}

export default CardViagem
