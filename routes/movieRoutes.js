import express from 'express';
import {searchMovies, getMovieDetails} from '../controllers/movieController.js'



export const router = express.Router();

//handle movie searches.
router.get('/search',searchMovies)


//This will fetch details for a specific movie.
router.get('/movies/:id', getMovieDetails)

