
import axios from 'axios';

const OMDB_URL = "http://www.omdbapi.com/";

//searchMovies
 export const searchMovies =async (req,res) =>{
 const {title} = req.query;

 if (!title){
    return res.status(400)
    .json({ "error": "Title query parameter is required"});


 }

 try{
    const response = await axios.get(OMDB_URL, {
        params :{
            s:title,
            apikey: process.env.OMDB_API_KEY,
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

 export const getMovieDetails =async (req,res) =>{
  const {id} = req.params;

  try{
    const response = await axios.get(OMDB_URL, {
        params: {
            i :id,
            apikey: process.env.OMDB_API_KEY,
        },
        
    });
     res.json(response.data);
  }catch(error){

    res.status(500).json({
        error:"Failed to fetch movie details",
    });

  }
};


