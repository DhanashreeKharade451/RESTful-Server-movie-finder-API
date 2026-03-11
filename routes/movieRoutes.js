import express from 'express'
import { Router } from 'express'
import searchMovies from '../controllers/movieController'



const router = express.Router();

//handle movie searches.
router.get('/search',searchMovies)


//This will fetch details for a specific movie.
router.get('/movies/:id', getMovieDetails)

module.exports = router