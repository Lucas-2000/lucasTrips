import { Container, Grid, IconButton, InputBase, makeStyles, Typography } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import CardViagem from '../componentes/CardViagem'

const useStyles = makeStyles({
    container: {
        marginTop: '100px'
    },
    input: {
        borderStyle: 'solid',
        borderRadius: '10px',
        borderColor: 'violet',
        width: '400px',
        marginTop: '20px',
        '&:hover': {
            backgroundColor: 'violet',
        }
    }
})

const Home = () => {
    const classes = useStyles()
    const history = useHistory()

    const destinos = [        
        {
            id: 1,
            pais:  "Italia",
            cidade: "Milão",
            imagem: "https://assistentedeviagem.com.br/blog/wp-content/uploads/2020/10/Milao-20-1410x705.jpg",
            descricao: "Milão, ou Milano (em italiano), é a capital da região da Lombardia. Conhecida como a metrópole moderna e seus quase 1,5 milhão de habitantes. " 
        },
        {
            id: 2,
            pais:  "Inglaterra",
            cidade: "Londres",
            imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/06/passagens-aereas-londres-capa2019-05-820x430.jpg",
            descricao: "As imagens são clássicas e serão procuradas por todos que põem os pés pela primeira vez – ou pela milésima – na cidade. O ônibus vermelho de dois andares. O punk solitário em frente ao Picadilly Circus. Os estilosos táxis pretos. Londres – a mais importante cidade da Inglaterra e do Reino Unido – é uma divertida mistura de tradições e maluquices, que ouve aceleradíssimas músicas em três acordes e se deleita com intermináveis partidas de críquete. Que acerta o relógio ouvindo o Big Ben e ama seu novo cartão-postal, o London Eye. Por um longo período a cidade foi a capital de um império onde o sol nunca se punha. Hoje, porém, despida de parte do poder político e econômico, mostra uma face dinâmica e divertida, com museus maravilhosos como Tate Modern e National Gallery (alguns com entradas gratuitas!), com seus pubs movimentados, lojas de roupas bacanas e o obrigatório roteiro real. Afinal, em tempos de Kate e William, mesmo os mais descolados vão dar uma espiada na Abadia de Westminster e na troca da guarda em Buckingham."
        },
        {
            id: 3,
            pais:  "Estados Unidos",
            cidade: "Nova York",
            imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-nova-york-capa2019-06.jpg",
            descricao: "Nova York é uma das cidades mais visitadas pelos brasileiros no exterior e certamente uma das mais espetaculares do mundo. São tantas coisas diferentes para ver e fazer na cidade, tanta coisa interessante para visitar, que é mais do que natural que um marinheiro de primeira viagem fique em dúvida por onde começar sua programação. Confira as nossas dicas para sua viagem à Nova York, seja essa a sua primeira vez na cidade, ou a décima — afinal, com tanto o que fazer por lá, você vai querer voltar sempre!" 
        },
    ]

    return (
        <Container className={classes.container}>
            <Grid container justifyContent="center">
                <Typography variant="h4" color="textPrimary">
                    Veja alguns possiveis destinos
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h5" color="textSecondary">
                    Antes de viajar, verifique conosco o destino
                </Typography>
            </Grid>
            <Grid>
                {destinos.map(destino => (
                    <div key={destino.id}>
                        <CardViagem destino={destino} />
                    </div>
                ))}
            </Grid>
        </Container>
    )
}

export default Home
