// Tratamento de erros e resposta ao cliente
import { Request, Response } from 'express'
import { getPokemonWeakness } from '../service/PokemonService'
import { PokemonType } from '../types/types'

export const getPokemon = (req: Request, res: Response): void => {
    try {
        const pokemon: PokemonType | string = getPokemonWeakness(req)

        if (typeof pokemon === 'string') {
            res.status(404).send(pokemon)
        } else {
            res.send(pokemon)
        }
    } catch (error) {
        console.error('Erro ao buscar o pokemon:', error)
        res.status(500).send('Erro interno do servidor')
    }
}
