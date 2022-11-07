import React from "react"
import {Grid, Card, CardContent, Rating} from "@mui/material"

export const MyItem= ({item})=>{

    return(
        <Grid item xs={3}>
            <Card sx={{bgcolor:"white", textalign:"center"}}>
            <CardContent>
            <h3>{item.title}</h3>
            <h1>{item.category}</h1>
            
            <img src={item.image} height={200} width={150} /><br />

             
            </CardContent>
            </Card>
        </Grid>
    )
}