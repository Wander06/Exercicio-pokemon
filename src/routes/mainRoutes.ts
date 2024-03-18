import express from 'express'
import { getPokemon } from '../controllers/PokemonController'

const router = express.Router();

router.get('/:name', getPokemon)

export { router as mainRoutes }
