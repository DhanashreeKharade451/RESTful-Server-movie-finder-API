import express from 'express'
import { Router } from 'express'

const router = express.Router();

//handle movie searches.
router.get('/search', (req,res) => {
    console.log("Handle Movie searches")
})


//This will fetch details for a specific movie.
router.get('/movies/:id', (req,res) => {
    console.log("Handle Movie searches")
})
