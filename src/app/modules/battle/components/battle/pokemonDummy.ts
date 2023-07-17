import { myPokemon } from 'src/app/models/myPokemon.models';
import { Pokemon } from 'src/app/models/pokemon.models';

// Crea un Pokémon de ejemplo
export const pokemon1: Pokemon = {
  _id: '1',
  name: 'Pikachu',
  internalName: 'pikachu',
  type1: 'Electric',
  type2: '',
  baseStats: [35, 55, 40, 50, 50, 90],
  genderRate: 'Male: 50%, Female: 50%',
  growthRate: 'Medium Fast',
  baseExp: 112,
  effortPoints: [0, 0, 0, 0, 0, 2],
  rareness: 190,
  happiness: 70,
  abilities: ['Static', 'Lightning Rod'],
  hiddenAbility: 'Lightning Rod',
  moves: [
    {
      level: 1,
      move:     {
        id: 1,
        name: 'Thundershock',
        displayName: 'Thundershock',
        power: 40,
        accuracy: 100,
        type: 'Electric',
        category: 'Special',
        pp: 30,
        target: 1,
        effectChance: 0,
        description: 'Fires an electric charge at the target.',
      },
      _id: '1',
    },
    // ... Agrega más movimientos si es necesario
  ],
  eggMoves: ['Charm', 'Encore', 'Wish'],
  compatibility: ['Field', 'Fairy'],
  stepsToHatch: 2560,
  height: 0.4,
  weight: 6,
  color: 'Yellow',
  habitat: 'Forest',
  kind: 'Mouse',
  pokedex:
    'Pikachu is an Electric-type Pokémon. It is known as the Mouse Pokémon.',
  battlerPlayerY: 0,
  battlerEnemyY: 0,
  battlerAltitude: 0,
  evolutions: [
    {
      to: 'Raichu',
      method: 'Use Thunder Stone',
      parameter: '',
      _id: '1',
    },
    // ... Agrega más evoluciones si es necesario
  ],
  __v: 0,
  weakness: {
    weak: [],
    superResistance: [],
    resistance: [],
    superWeak: [],
    immunities: [],
  },
};

// Crea otro Pokémon de ejemplo
const pokemon2: Pokemon = {
  _id: '2',
  name: 'Charizard',
  internalName: 'charizard',
  type1: 'Fire',
  type2: 'Flying',
  baseStats: [78, 84, 78, 109, 85, 100],
  genderRate: 'Male: 87.5%, Female: 12.5%',
  growthRate: 'Slow',
  baseExp: 240,
  effortPoints: [0, 0, 0, 3, 0, 0],
  rareness: 45,
  happiness: 70,
  abilities: ['Blaze'],
  hiddenAbility: 'Solar Power',
  moves: [
    {
      level: 1,
      move:     {
        id: 1,
        name: 'Thundershock',
        displayName: 'Thundershock',
        power: 40,
        accuracy: 100,
        type: 'Electric',
        category: 'Special',
        pp: 30,
        target: 1,
        effectChance: 0,
        description: 'Fires an electric charge at the target.',
      },
      _id: '1',
    },
    // ... Agrega más movimientos si es necesario
  ],
  eggMoves: ['Air Slash', 'Belly Drum', 'Dragon Dance'],
  compatibility: ['Monster', 'Dragon'],
  stepsToHatch: 5120,
  height: 1.7,
  weight: 90.5,
  color: 'Red',
  habitat: 'Mountain',
  kind: 'Flame',
  pokedex:
    'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.',
  battlerPlayerY: 0,
  battlerEnemyY: 0,
  battlerAltitude: 0,
  evolutions: [],
  __v: 0,
  weakness: {
    weak: [],
    superResistance: [],
    resistance: [],
    superWeak: [],
    immunities: [],
  },
};

export const myPokemon1: myPokemon = {
  pokemon: pokemon1,
  level: 50,
  nature: 'Adamant',
  ability: 'Static',
  moves: [
    {
      id: 1,
      name: 'Thundershock',
      displayName: 'Thundershock',
      power: 40,
      accuracy: 100,
      type: 'Electric',
      category: 'Special',
      pp: 30,
      target: 1,
      effectChance: 0,
      description: 'Fires an electric charge at the target.',
    },

    // ... Agrega más movimientos si es necesario
  ],
  evs: {
    HP: 0,
    attack: 252,
    defense: 0,
    speed: 252,
    spAttack: 0,
    spDefense: 4,
  },
  ivs: {
    HP: 31,
    attack: 31,
    defense: 31,
    speed: 31,
    spAttack: 31,
    spDefense: 31,
  },
  _id: '1',
};

export const myPokemon2: myPokemon = {
  pokemon: pokemon2,
  level: 60,
  nature: 'Modest',
  ability: 'Blaze',
  moves: [
    {
      id: 1,
      name: 'Scratch',
      displayName: 'Scratch',
      power: 40,
      accuracy: 100,
      type: 'Normal',
      category: 'Physical',
      pp: 35,
      target: 1,
      effectChance: 0,
      description: 'Scratches the target.',
    },

    // ... Agrega más movimientos si es necesario
  ],
  evs: {
    HP: 0,
    attack: 0,
    defense: 0,
    speed: 252,
    spAttack: 252,
    spDefense: 4,
  },
  ivs: {
    HP: 31,
    attack: 31,
    defense: 31,
    speed: 31,
    spAttack: 31,
    spDefense: 31,
  },
  _id: '2',
};