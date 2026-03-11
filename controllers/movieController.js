import express from 'express'
import { Router } from 'express'


//searchMovies
const searchMovies = (req,res) =>{
 const {title} = req.query

 if (!title){
    return res.status(400).json({ "error": "Title query parameter is required"});


 }

 try{
    const response =await axios.get(OMDB_URL{
        param:{
            s:title,
            apikey: OMDB_API_KEY,
        },
    });

    res.json(response.data);
 }catch(err){
    res.status(500).json({
         error: "Failed to fetch movies",
    });
 }
};

//getMovieDetails 

const getMovieDetails = (req,res) =>{
  const {id} = req.params;

  try{
    const response = await axios.get(OMDB_URL, {
        param: {
            i :id,
            apikey: process.env.OMDB_API_KEY,
        },
    });
  }catch(error){

    res.status(500).json({
        error:"Failed to fetch movie details",
    });

  }
};

//exporting functions
module.exports ={
    searchMovies,
    getMovieDetails,
};