import React, { useEffect, useState } from "react"
import {Grid, Button} from "@mui/material"
import { MyItem } from "./ProductItem"
import axios from "axios";


export const Myproduct =()=>{
    const [data,setData]=useState([])
    const [filtdata, setFiltData]= useState([])
    const [catdata, setCatData]= useState([])
    const [cat, setCat]=useState("")
    
    
const getData= async()=>{
    
const result = await axios.get("https://fakestoreapi.com/products")
setData(result.data)
setFiltData(result.data)

const resultCat= await axios.get("https://fakestoreapi.com/products/categories")
setCatData(resultCat.data)
}; 
 const handleAll=async()=>{
    const result = await axios.get("https://fakestoreapi.com/products")
setData(result.data)
setFiltData(result.data)
 }

useEffect (()=>{
    const filtered= data.filter((item)=>item.category===cat)
     setFiltData(filtered)
},[cat])



useEffect(()=>{
    getData()
},[])
    
    return(

        <div>
            <Grid container spacing={3}>

                <Grid item xs={9}>
                    <Button variant="contained" fullWidth onClick={handleAll}>All</Button>
                </Grid>
                <Grid item xs={3}>
                     </Grid><br />
                 {
                    
                    catdata.map((item)=>{
                        return(
                            
                            <Grid item xs={3}>
                                
                                <Button onClick={()=>setCat(item)} fullWidth variant="contained">{item}</Button>

                                </Grid>
                        )
                    })
                 } 
                {
               filtdata.length>0 && filtdata.map (item=> 
                <MyItem item={item}/> )
                }


            </Grid>
        </div>
    )
}