export const colorMap: Record<string, string> = {
    "hp": "#4bf542",
    "attack": "#4251f5",
    "defense": "#f58a42",
    "special-attack": "#42eff5",
    "special-defense": "#861142",
}

export const cleanStatName = (statName: string) => {
    return statName.replace('-', ' ');
}