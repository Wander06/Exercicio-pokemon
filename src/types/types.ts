export interface PokemonType {
    id: number,
    name: string,
    types: string[],
    image?: string,
    weakness?: string[]
}

export interface WeaknessType {
    types: string,
    weaknesses: string[]
}

