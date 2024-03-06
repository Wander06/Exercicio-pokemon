export interface PokemonType {
    id: number,
    name: string,
    types: string[],
    weakness?: string[]
}

export interface WeaknessType {
    types: string,
    weaknesses: string[]
}

