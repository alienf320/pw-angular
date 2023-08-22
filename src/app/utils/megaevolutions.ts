export interface MegaObj {
  [key: string]: Mega[];
}

export interface Mega {
  name: string;
  stats?: number[];
  ability?: string;
}

export const MEGAEVOLUTIONS: MegaObj = {
  venusaur: [
    {
      name: 'Mega Venusaur',
      stats: [80, 100, 123, 80, 122, 120],
      ability: 'THICKFAT',
    },
    {
      name: 'Gigantamax Venusaur',
      stats: [112, 120, 103, 60, 100, 120],
      ability: 'GRAZE',
    },
  ],
  venusauri: [
    {
      name: 'Mega Venusaur',
      stats: [80, 100, 123, 80, 122, 120],
      ability: 'THICKFAT',
    },
    {
      name: 'Gigantamax Venusaur',
      stats: [112, 120, 103, 60, 100, 120],
      ability: 'GRAZE',
    },
  ],
  charizard: [
    {
      name: 'Mega Charizard X',
      stats: [78, 130, 111, 100, 130, 85],
      ability: 'TOUGHCLAWS',
    },
    {
      name: 'Mega Charizard Y',
      stats: [78, 104, 78, 100, 159, 115],
      ability: 'DROUGHT',
    },
    {
      name: 'Mega Charizard Z',
      stats: [78, 130, 111, 100, 130, 85],
      ability: 'NOGUARD',
    },
    {
      name: 'Mega Charizard S',
      stats: [78, 130, 111, 95, 130, 90],
      ability: 'CONSTRICTOR',
    },
    {
      name: 'Mega Charizard G',
      stats: [78, 140, 151, 80, 100, 85],
      ability: 'SANDFORCE',
    },
    {
      name: 'Mega Charizard R',
      stats: [78, 104, 78, 100, 159, 115],
      ability: 'SANDSTREAM',
    },
    {
      name: 'Gigantamax Charizard',
      stats: [123, 129, 88, 70, 129, 95],
      ability: 'BLAZE',
    },
    {
      name: 'Mega Charizard I',
      stats: [78, 104, 78, 100, 159, 115],
      ability: 'SNOWWARNING',
    },
    {
      name: 'Mega Charizard W',
      stats: [78, 130, 78, 100, 143, 105],
      ability: 'SWIFTSWIM',
    },
    {
      name: 'Mega Charizard F',
      stats: [78, 78, 104, 100, 115, 159],
      ability: 'SERENEGRACE',
    },
    {
      name: 'Mega Charizard B',
      stats: [78, 140, 78, 119, 104, 115],
      ability: 'COMPOUNDEYES',
    },
    {
      name: 'Mega Charizard E',
      stats: [78, 130, 111, 100, 130, 85],
      ability: 'MAGICGUARD',
    },
    { name: 'Mega Charizard C' },
  ],
  blastoise: [
    {
      name: 'Mega Blastoise',
      stats: [79, 103, 120, 78, 135, 115],
      ability: 'MEGALAUNCHER',
    },
    {
      name: 'Gigantamax Blastoise',
      stats: [109, 113, 130, 58, 105, 115],
      ability: 'FILTER',
    },
  ],
  gyarados: [
    {
      name: 'Mega Gyarados',
      stats: [95, 155, 109, 81, 70, 130],
      ability: 'MOLDBREAKER',
    },
  ],
  bgyarados: [
    {
      name: 'Mega Gyarados',
      stats: [95, 155, 109, 81, 70, 130],
      ability: 'MOLDBREAKER',
    },
  ],
  houndoom: [
    {
      name: 'Mega Houndoom',
      stats: [75, 90, 90, 115, 140, 90],
      ability: 'SOLARPOWER',
    },
  ],
  alakazam: [
    {
      name: 'Mega Alakazam',
      stats: [55, 50, 65, 150, 175, 95],
      ability: 'TRACE',
    },
  ],
  alakatana: [
    {
      name: 'Mega Alakatana',
      stats: [55, 175, 95, 150, 50, 65],
      ability: 'MOXIE',
    },
  ],
  eternatus: [
    {
      name: 'Eternamax Eternatus',
      stats: [255, 115, 250, 130, 125, 250],
      ability: 'PRESSURE',
    },
  ],
  chaossonic: [
    {
      name: 'Perfect Chaos',
      stats: [130, 125, 100, 50, 125, 110],
      ability: 'ADAPTABILITY',
    },
  ],
  grimmsnarl: [
    {
      name: 'GIGANTAMAX GRIMMSNARL',
      stats: [120, 150, 85, 70, 110, 95],
      ability: 'MOXIE',
    },
  ],
  sadakoring: [
    {
      name: 'GIGANTAMAX SADAKORING',
      stats: [130, 110, 95, 60, 120, 120],
      ability: 'CURSEDBODY',
    },
  ],
  stonjourner: [
    {
      name: 'GIGANTAMAX STONJOURNER',
      stats: [145, 145, 145, 70, 20, 55],
      ability: 'VICTORYSTAR',
    },
  ],
  giantwoman: [
    {
      name: 'GIGANTAMAX GIANT WOMAN',
      stats: [150, 85, 110, 100, 110, 110],
      ability: 'HUGEPOWER',
    },
  ],
  coalossal: [
    { name: 'GIGANTAMAX COALOSSAL', stats: [151, 110, 158, 20, 106, 116] },
  ],
  bcurry: [
    {
      name: 'GIGANTAMAX CURRY',
      stats: [165, 105, 120, 40, 105, 120],
      ability: 'MAGMAARMOR',
    },
  ],
  gengar: [
    {
      name: 'Mega Gengar',
      stats: [60, 65, 80, 130, 170, 95],
      ability: 'SHADOWTAG',
    },
    {
      name: 'Gigantamax Gengar',
      stats: [100, 65, 95, 70, 150, 110],
      ability: 'SOULEATER',
    },
  ],
  kangaskhan: [
    {
      name: 'Mega Kangaskhan',
      stats: [105, 125, 100, 100, 60, 100],
      ability: 'PARENTALBOND',
    },
  ],
  jungrilla: [{ name: 'Mega Jungrilla', stats: [80, 60, 100, 110, 70, 100] }],
  cramorant: [
    {
      name: 'Mega Cramorant',
      stats: [110, 100, 85, 100, 135, 85],
      ability: 'PARENTALBOND',
    },
  ],
  wailord: [
    {
      name: 'Mega Wailord',
      stats: [200, 125, 55, 40, 125, 55],
      ability: 'PRESSURE',
    },
  ],
  pinsir: [
    {
      name: 'Mega Pinsir',
      stats: [65, 155, 105, 120, 65, 90],
      ability: 'AERILATE',
    },
  ],
  aerodactyl: [
    {
      name: 'Mega Aerodactyl',
      stats: [80, 135, 85, 150, 70, 95],
      ability: 'TOUGHCLAWS',
    },
  ],
  mewtwo: [
    {
      name: 'Mega Mewtwo X',
      stats: [106, 190, 100, 130, 154, 100],
      ability: 'STEADFAST',
    },
    {
      name: 'Mega Mewtwo Y',
      stats: [106, 150, 70, 140, 194, 120],
      ability: 'INSOMNIA',
    },
  ],
  smewtwo: [
    {
      name: 'Mega Mewtwo X',
      stats: [106, 190, 100, 130, 154, 100],
      ability: 'STEADFAST',
    },
    {
      name: 'Mega Mewtwo Y',
      stats: [106, 150, 70, 140, 194, 120],
      ability: 'INSOMNIA',
    },
  ],
  ampharos: [
    {
      name: 'Mega Ampharos',
      stats: [90, 95, 105, 45, 165, 110],
      ability: 'MOLDBREAKER',
    },
  ],
  scizor: [
    {
      name: 'Mega Scizor',
      stats: [70, 150, 140, 75, 65, 100],
      ability: 'TECHNICIAN',
    },
  ],
  heracross: [
    {
      name: 'Mega Heracross',
      stats: [80, 185, 115, 75, 40, 105],
      ability: 'SKILLLINK',
    },
  ],
  tyranitar: [
    {
      name: 'Mega Tyranitar',
      stats: [100, 164, 150, 71, 95, 120],
      ability: 'SANDSTREAM',
    },
  ],
  blaziken: [
    {
      name: 'Mega Blaziken',
      stats: [80, 160, 80, 100, 130, 80],
      ability: 'SPEEDBOOST',
    },
  ],
  gardevoir: [
    {
      name: 'Mega Gardevoir',
      stats: [68, 85, 65, 100, 165, 135],
      ability: 'PIXILATE',
    },
  ],
  zgardevoir: [
    {
      name: 'Mega Gardevoir',
      stats: [68, 85, 65, 100, 165, 135],
      ability: 'PIXILATE',
    },
  ],
  dgardevoir: [
    {
      name: 'Mega Gardevoir',
      stats: [68, 85, 65, 100, 165, 135],
      ability: 'PIXILATE',
    },
  ],
  mawile: [
    {
      name: 'Mega Mawile',
      stats: [50, 105, 125, 50, 55, 95],
      ability: 'HUGEPOWER',
    },
  ],
  mylph: [
    {
      name: 'Mega Mylph',
      stats: [75, 60, 100, 120, 145, 150],
      ability: 'MAGICBOUNCE',
    },
  ],
  lustubust: [
    {
      name: 'Mega Lustubust',
      stats: [70, 145, 90, 95, 135, 120],
      ability: 'SHEERFORCE',
    },
  ],
  torappu: [
    {
      name: 'Mega Torappu',
      stats: [80, 130, 140, 120, 105, 80],
      ability: 'CONSTRICTOR',
    },
  ],
  gothot: [
    {
      name: 'Mega Gothot',
      stats: [80, 95, 80, 125, 140, 125],
      ability: 'SHADOWCALL',
    },
  ],
  elsnow: [
    {
      name: 'Mega Elsnow',
      stats: [70, 145, 100, 145, 110, 90],
      ability: 'SNOWWARNING',
    },
  ],
  aggron: [
    {
      name: 'Mega Aggron',
      stats: [70, 140, 230, 50, 60, 80],
      ability: 'FILTER',
    },
  ],
  medicham: [
    {
      name: 'Mega Medicham',
      stats: [60, 100, 85, 100, 80, 85],
      ability: 'HUGEPOWER',
    },
  ],
  manectric: [
    {
      name: 'Mega Manectric',
      stats: [70, 75, 80, 135, 135, 80],
      ability: 'INTIMIDATE',
    },
  ],
  banette: [
    {
      name: 'Mega Banette',
      stats: [64, 165, 75, 75, 93, 83],
      ability: 'PRANKSTER',
    },
  ],
  fbanette: [
    {
      name: 'Mega Banette',
      stats: [64, 165, 75, 75, 93, 83],
      ability: 'PRANKSTER',
    },
  ],
  absol: [
    {
      name: 'Mega Absol',
      stats: [65, 150, 60, 115, 115, 60],
      ability: 'MAGICBOUNCE',
    },
  ],
  gabsol: [
    {
      name: 'Mega Absol',
      stats: [65, 150, 60, 115, 115, 60],
      ability: 'MAGICBOUNCE',
    },
  ],
  garchomp: [
    {
      name: 'Mega Garchomp',
      stats: [108, 170, 115, 92, 120, 95],
      ability: 'SANDFORCE',
    },
  ],
  lucario: [
    {
      name: 'Mega Lucario',
      stats: [70, 145, 88, 112, 140, 70],
      ability: 'ADAPTABILITY',
    },
  ],
  abomasnow: [
    {
      name: 'Mega Abomasnow',
      stats: [90, 132, 105, 40, 132, 105],
      ability: 'SNOWRUSH',
    },
  ],
  wabomasnow: [
    {
      name: 'Mega Abomasnow',
      stats: [90, 132, 105, 40, 132, 105],
      ability: 'SNOWRUSH',
    },
  ],
  beedrill: [
    {
      name: 'Mega Beedrill',
      stats: [65, 150, 40, 145, 15, 80],
      ability: 'ADAPTABILITY',
    },
  ],
  pidgeot: [
    {
      name: 'Mega Pidgeot',
      stats: [83, 80, 80, 121, 135, 80],
      ability: 'NOGUARD',
    },
  ],
  slowbro: [
    {
      name: 'Mega Slowbro',
      stats: [95, 75, 180, 30, 130, 80],
      ability: 'BATTLEARMOR',
    },
  ],
  steelix: [
    {
      name: 'Mega Steelix',
      stats: [75, 125, 230, 30, 55, 95],
      ability: 'SANDFORCE',
    },
  ],
  fearow: [
    {
      name: 'Mega Fearow',
      stats: [75, 155, 95, 135, 51, 91],
      ability: 'SNIPER',
    },
  ],
  nidoqueen: [
    {
      name: 'Mega Nidoqueen',
      stats: [100, 132, 110, 96, 75, 108],
      ability: 'MOXIE',
    },
  ],
  sceptile: [
    {
      name: 'Mega Sceptile',
      stats: [70, 110, 70, 145, 145, 85],
      ability: 'LIGHTNINGROD',
    },
  ],
  swampert: [
    {
      name: 'Mega Swampert',
      stats: [100, 150, 110, 70, 85, 110],
      ability: 'SWIFTSWIM',
    },
  ],
  sableye: [
    {
      name: 'Mega Sableye',
      stats: [60, 85, 125, 20, 85, 115],
      ability: 'MAGICBOUNCE',
    },
  ],
  asableye: [
    {
      name: 'Mega Sableye',
      stats: [50, 85, 125, 20, 85, 115],
      ability: 'MAGICBOUNCE',
    },
  ],
  sharpedo: [
    {
      name: 'Mega Sharpedo',
      stats: [70, 140, 70, 105, 110, 65],
      ability: 'STRONGJAW',
    },
  ],
  narwhar: [
    {
      name: 'Mega Narwhar',
      stats: [90, 120, 85, 110, 120, 141],
      ability: 'FURCOAT',
    },
  ],
  camerupt: [
    {
      name: 'Mega Camerupt',
      stats: [70, 120, 100, 20, 145, 105],
      ability: 'SHEERFORCE',
    },
  ],
  altaria: [
    {
      name: 'Mega Altaria',
      stats: [75, 110, 100, 80, 110, 105],
      ability: 'PIXILATE',
    },
  ],
  glalie: [
    {
      name: 'Mega Glalie',
      stats: [80, 120, 80, 100, 120, 80],
      ability: 'REFRIGERATE',
    },
  ],
  hglalie: [
    {
      name: 'Mega Glalie',
      stats: [80, 120, 80, 100, 120, 80],
      ability: 'IMMOLATE',
    },
  ],
  dglalie: [
    {
      name: 'Mega Glalie',
      stats: [80, 120, 80, 100, 120, 80],
      ability: 'FILTER',
    },
  ],
  salamence: [
    {
      name: 'Mega Salamence',
      stats: [95, 145, 130, 120, 120, 90],
      ability: 'AERILATE',
    },
  ],
  metagross: [
    {
      name: 'Mega Metagross',
      stats: [80, 145, 150, 110, 105, 110],
      ability: 'TOUGHCLAWS',
    },
  ],
  latias: [],
  latios: [
    {
      name: 'Mega Latios',
      stats: [80, 130, 100, 110, 160, 120],
      ability: 'LEVITATE',
    },
  ],
  lopunny: [
    {
      name: 'Mega Lopunny',
      stats: [65, 136, 94, 135, 54, 96],
      ability: 'SCRAPPY',
    },
  ],
  hlopunny: [
    {
      name: 'Mega Lopunny',
      stats: [65, 136, 94, 135, 54, 96],
      ability: 'SCRAPPY',
    },
  ],
  gallade: [
    {
      name: 'Mega Gallade',
      stats: [68, 165, 95, 110, 65, 115],
      ability: 'HYPERCUTTER',
    },
  ],
  dgallade: [
    {
      name: 'Mega Gallade',
      stats: [68, 165, 95, 110, 65, 115],
      ability: 'HYPERCUTTER',
    },
  ],
  audino: [
    {
      name: 'Mega Audino',
      stats: [105, 92, 146, 26, 102, 146],
      ability: 'HEALER',
    },
  ],
  diancie: [
    {
      name: 'Mega Diancie',
      stats: [50, 160, 110, 110, 160, 110],
      ability: 'MAGICBOUNCE',
    },
  ],
  rayquaza: [
    {
      name: 'Mega Rayquaza',
      stats: [105, 180, 100, 115, 180, 100],
      ability: 'FILTER',
    },
  ],
  regigigas: [
    {
      name: 'Primal Regigigas',
      stats: [110, 185, 135, 120, 100, 120],
      ability: 'PRESSURE',
    },
  ],
  avalugg: [
    {
      name: 'Mega Avalugg',
      stats: [100, 122, 200, 17, 84, 106],
      ability: 'FILTER',
    },
  ],
  butterfree: [
    {
      name: 'Mega Butterfree',
      stats: [80, 35, 95, 107, 133, 90],
      ability: 'FURCOAT',
    },
    {
      name: 'Gigantamax Butterfree',
      stats: [120, 35, 95, 90, 100, 140],
      ability: 'SERENEGRACE',
    },
  ],
  abutterfree: [
    {
      name: 'Mega Butterfree',
      stats: [80, 45, 95, 107, 123, 90],
      ability: 'FURCOAT',
    },
    {
      name: 'Gigantamax Butterfree',
      stats: [120, 45, 95, 90, 90, 140],
      ability: 'SERENEGRACE',
    },
  ],
  rubberfly: [
    {
      name: 'Mega Rubberfly',
      stats: [72, 138, 90, 135, 136, 95],
      ability: 'INFILTRATOR',
    },
    {
      name: 'Corrupt Rubberfly',
      stats: [72, 138, 90, 135, 136, 95],
      ability: 'INFILTRATOR',
    },
  ],
  bouncect: [
    {
      name: 'Armored Bouncect',
      stats: [89, 89, 109, 79, 89, 109],
      ability: 'INFILTRATOR',
    },
  ],
  haicaw: [
    {
      name: 'Mega Haicaw',
      stats: [49, 149, 103, 93, 35, 100],
      ability: 'SPEEDBOOST',
    },
  ],
  shattarate: [
    {
      name: 'Mega Shattarate',
      stats: [40, 162, 30, 135, 58, 100],
      ability: 'TOUGHCLAWS',
    },
  ],
  borosu: [
    {
      name: 'Meteoric Borosu',
      stats: [153, 157, 144, 134, 123, 134],
      ability: 'MAGICGUARD',
    },
  ],
  genosu: [
    {
      name: 'G4nosu',
      stats: [116, 115, 110, 110, 115, 110],
      ability: 'SHEERFORCE',
    },
  ],
  pripriprisoner: [{ name: 'Angel Style' }],
  machinedramon: [
    {
      name: 'Chaosdramon',
      stats: [110, 50, 105, 85, 135, 105],
      ability: 'CHAOSCRUSHER',
    },
  ],
  groovy: [
    {
      name: 'Deadite Groovy',
      stats: [105, 120, 97, 97, 75, 95],
      ability: 'INFECTED',
    },
  ],
  sweetooth: [
    {
      name: 'Sweet Truck',
      stats: [105, 127, 104, 94, 80, 104],
      ability: 'SADIST',
    },
  ],
  bendy: [
    { name: 'Ink Bendy', stats: [90, 105, 88, 90, 90, 103], ability: 'SADIST' },
  ],
  inkbendy: [
    {
      name: 'Beast Bendy',
      stats: [120, 135, 113, 80, 90, 123],
      ability: 'IRONFIST',
    },
  ],
  beelzemon: [
    {
      name: 'BeelzemonBM',
      stats: [106, 86, 116, 116, 136, 106],
      ability: 'MEGALAUNCHER',
    },
  ],
  grasstacles: [
    {
      name: 'Mega Grasstacles',
      stats: [70, 85, 110, 122, 140, 135],
      ability: 'BERSERK',
    },
  ],
  chillzie: [
    {
      name: 'Mega Chillzie',
      stats: [30, 128, 100, 80, 112, 100],
      ability: 'SNOWRUSH',
    },
    {
      name: 'Corrupt Chillzie',
      stats: [30, 128, 100, 80, 112, 100],
      ability: 'FILTER',
    },
  ],
  lunighton: [
    {
      name: 'Mega Lunighton',
      stats: [81, 70, 122, 80, 140, 130],
      ability: 'RAINDISH',
    },
  ],
  solaioss: [
    {
      name: 'Mega Solaioss',
      stats: [80, 145, 85, 101, 94, 80],
      ability: 'SOLARFORCE',
    },
  ],
  vanilluxe: [
    {
      name: 'Mega Vanilluxe',
      stats: [71, 110, 95, 79, 148, 105],
      ability: 'SKILLLINK',
    },
  ],
  blizzlam: [
    {
      name: 'Mega Blizzlam',
      stats: [70, 146, 105, 107, 146, 93],
      ability: 'SNIPER',
    },
  ],
  synthite: [
    {
      name: 'Mega Synthite',
      stats: [63, 145, 85, 112, 145, 95],
      ability: 'ADAPTABILITY',
    },
    {
      name: 'Corrupt Synthite',
      stats: [63, 135, 85, 100, 135, 95],
      ability: 'FILTER',
    },
  ],
  mousee: [
    {
      name: 'Mega Mousee',
      stats: [84, 106, 85, 125, 125, 107],
      ability: 'HUGEPOWER',
    },
  ],
  chokolit: [
    {
      name: 'Mega Chokolit',
      stats: [72, 144, 75, 130, 61, 101],
      ability: 'SHEERFORCE',
    },
  ],
  hoverot: [
    {
      name: 'Mega Hoverot',
      stats: [86, 30, 119, 115, 130, 155],
      ability: 'MAGICBOUNCE',
    },
    {
      name: 'Corrupt Hoverot',
      stats: [86, 30, 119, 115, 130, 155],
      ability: 'MAGICBOUNCE',
    },
  ],
  namino: [
    {
      name: 'Mega Namino',
      stats: [76, 114, 70, 105, 118, 88],
      ability: 'ADAPTABILITY',
    },
  ],
  gorale: [
    {
      name: 'Mega Gorale',
      stats: [89, 140, 120, 110, 85, 115],
      ability: 'IONATE',
    },
  ],
  drumgheist: [
    {
      name: 'Mega Drumgheist',
      stats: [72, 85, 106, 85, 131, 100],
      ability: 'DRUMROLL',
    },
  ],
  dongorilla: [
    {
      name: 'Mega Dongorilla',
      stats: [85, 135, 100, 101, 135, 87],
      ability: 'DRUMROLL',
    },
  ],
  hulklear: [
    {
      name: 'Mega Hulklear',
      stats: [90, 160, 85, 120, 74, 105],
      ability: 'RECKLESS',
    },
  ],
  godzillus: [
    {
      name: 'Burning Godzillus',
      stats: [80, 147, 106, 93, 147, 106],
      ability: 'MOODY',
    },
    {
      name: 'Corrupt Godzillus',
      stats: [80, 147, 106, 93, 147, 106],
      ability: 'FLAREBOOST',
    },
  ],
  snatan: [
    {
      name: 'Mega Snatan',
      stats: [66, 131, 86, 122, 130, 131],
      ability: 'SHEERFORCE',
    },
  ],
  swanaper: [
    {
      name: 'Mega Swanaper',
      stats: [75, 140, 99, 120, 81, 102],
      ability: 'STAMINA',
    },
  ],
  encyclodia: [
    {
      name: 'Mega Encyclodia',
      stats: [110, 50, 125, 88, 90, 130],
      ability: 'VASTKNOWLEDGE',
    },
  ],
  robox: [
    {
      name: 'Mega Robox',
      stats: [70, 147, 110, 110, 141, 91],
      ability: 'SHEERFORCE',
    },
  ],
  boxtress: [
    {
      name: 'Mega Boxtress',
      stats: [95, 107, 190, 59, 67, 151],
      ability: 'HEATPROOF',
    },
  ],
  bookly: [
    {
      name: 'Mega Bookly',
      stats: [100, 155, 110, 120, 105, 110],
      ability: 'MAGICGUARD',
    },
  ],
  rodactyl: [
    {
      name: 'Fire Rodactyl',
      stats: [67, 120, 116, 150, 120, 120],
      ability: 'MAGMAARMOR',
    },
  ],
  muchoshot: [
    {
      name: 'Mega Muchoshot',
      stats: [68, 145, 80, 103, 145, 100],
      ability: 'SKILLLINK',
    },
  ],
  miracact: [
    {
      name: 'Mega Miracact',
      stats: [88, 106, 115, 79, 105, 120],
      ability: 'CACTUS',
    },
  ],
  hitmonlee: [
    {
      name: 'Mega Hitmonlee',
      stats: [80, 150, 60, 137, 35, 120],
      ability: 'NOGUARD',
    },
  ],
  hitmonchan: [
    {
      name: 'Mega Hitmonchan',
      stats: [80, 135, 89, 126, 35, 120],
      ability: 'PROTEAN',
    },
  ],
  hitmontop: [
    {
      name: 'Mega Hitmontop',
      stats: [80, 125, 105, 120, 35, 120],
      ability: 'CONTRARY',
    },
  ],
  sudowoodo: [
    {
      name: 'Woodo',
      stats: [80, 140, 155, 95, 5, 100],
      ability: 'CHLOROPHYLL',
    },
  ],
  plusle: [
    {
      name: 'Mega Plusle',
      stats: [60, 1, 80, 104, 130, 100],
      ability: 'NEUTRAL',
    },
  ],
  minun: [
    {
      name: 'Mega Minun',
      stats: [60, 1, 80, 104, 100, 130],
      ability: 'NEUTRAL',
    },
  ],
  snofistor: [
    {
      name: 'Mega Snofistor',
      stats: [65, 150, 103, 111, 87, 105],
      ability: 'IRONFIST',
    },
    {
      name: 'Corrupt Snofistor',
      stats: [65, 130, 103, 100, 87, 85],
      ability: 'WINTERFORCE',
    },
  ],
  drubber: [
    {
      name: 'Mega Drubber',
      stats: [60, 44, 73, 20, 34, 68],
      ability: 'RUBBERBOOST',
    },
  ],
  neonazi: [
    {
      name: 'Mega Neonazi',
      stats: [87, 40, 105, 106, 129, 100],
      ability: 'PROTEAN',
    },
  ],
  pikachu: [
    {
      name: 'Mega Pikachu',
      stats: [60, 100, 65, 110, 100, 90],
      ability: 'STATIC',
    },
    {
      name: 'Gigantamax Pikachu',
      stats: [140, 100, 65, 50, 100, 90],
      ability: 'THICKFAT',
    },
  ],
  snapchost: [
    {
      name: 'Mega Snapchost',
      stats: [50, 127, 80, 130, 130, 91],
      ability: 'MOODY',
    },
  ],
  steamercom: [
    {
      name: 'Mega Steamercom',
      stats: [110, 115, 85, 68, 130, 100],
      ability: 'TECHNICIAN',
    },
  ],
  tweeter: [
    {
      name: 'Mega Tweeter',
      stats: [70, 129, 89, 130, 133, 98],
      ability: 'TRIGGERED',
    },
  ],
  myosmic: [
    {
      name: 'Mega Myosmic',
      stats: [79, 83, 105, 105, 147, 128],
      ability: 'SHEERFORCE',
    },
  ],
  feborius: [
    {
      name: 'Mega Feborius',
      stats: [88, 145, 88, 100, 144, 88],
      ability: 'PRIDE',
    },
    {
      name: 'Corrupt Feborius',
      stats: [78, 156, 50, 130, 156, 80],
      ability: 'PRIDE',
    },
  ],
  arbrood: [
    {
      name: 'Mega Arbrood',
      stats: [80, 140, 130, 105, 70, 105],
      ability: 'ROCKHEAD',
    },
  ],
  steamboatle: [
    {
      name: 'Mega Steamboatle',
      stats: [76, 135, 95, 95, 145, 107],
      ability: 'SPEEDBOOST',
    },
  ],
  lavagun: [
    {
      name: 'Mega Lavagun',
      stats: [80, 135, 106, 90, 140, 108],
      ability: 'SHEERFORCE',
    },
  ],
  marbrood: [
    {
      name: 'Corrupt Arbrood',
      stats: [81, 140, 115, 105, 67, 109],
      ability: 'ROCKHEAD',
    },
    {
      name: 'WACK Arbrood',
      stats: [80, 150, 160, 125, 80, 135],
      ability: 'WACKY',
    },
  ],
  msteamboatle: [
    {
      name: 'Corrupt Steamboatle',
      stats: [90, 120, 110, 95, 130, 107],
      ability: 'ADAPTABILITY',
    },
    {
      name: 'WACK Steamboatle',
      stats: [76, 165, 115, 105, 165, 127],
      ability: 'WACKY',
    },
  ],
  mlavagun: [
    {
      name: 'Corrupt Lavagun',
      stats: [97, 95, 112, 90, 145, 125],
      ability: 'SHEERFORCE',
    },
    {
      name: 'WACK Lavagun',
      stats: [80, 165, 121, 100, 165, 128],
      ability: 'WACKY',
    },
  ],
  gummi: [
    {
      name: 'Mega Gummi',
      stats: [86, 129, 115, 60, 129, 121],
      ability: 'ADAPTABILITY',
    },
    {
      name: 'Corrupt Gummi',
      stats: [86, 129, 101, 50, 129, 101],
      ability: 'LIQUIDOOZE',
    },
  ],
  warshin: [
    {
      name: 'Mega Warshin',
      stats: [76, 135, 107, 96, 135, 120],
      ability: 'SWIFTSWIM',
    },
  ],
  crucibelle: [
    {
      name: 'Mega Crucibelle',
      stats: [106, 135, 75, 114, 85, 125],
      ability: 'MAGICGUARD',
    },
  ],
  gachamber: [
    {
      name: 'Mega Gachamber',
      stats: [80, 64, 136, 86, 130, 120],
      ability: 'EVAPORATE',
    },
  ],
  steamist: [
    {
      name: 'Mega Steamist',
      stats: [72, 17, 145, 104, 128, 101],
      ability: 'BERSERK',
    },
  ],
  stweams: [
    {
      name: 'Mega Stweams',
      stats: [110, 125, 105, 95, 120, 80],
      ability: 'PARENTALBOND',
    },
  ],
  steamnie: [
    {
      name: 'Mega Steamnie',
      stats: [100, 145, 110, 105, 85, 90],
      ability: 'IRONFIST',
    },
  ],
  gigasvyre: [
    {
      name: 'Mega Gigasvyre',
      stats: [89, 118, 125, 100, 170, 170],
      ability: 'MOODY',
    },
    {
      name: 'Corrupt Gigasvyre',
      stats: [89, 170, 170, 100, 170, 170],
      ability: 'GLITCHBOOST',
    },
  ],
  cummunculus: [
    {
      name: 'Mega Cummunculus',
      stats: [80, 104, 87, 105, 146, 130],
      ability: 'THUNDERSTORM',
    },
    {
      name: 'Corrupt Cummunculus',
      stats: [80, 104, 87, 105, 146, 130],
      ability: 'THUNDERSTORM',
    },
  ],
  baumine: [
    {
      name: 'Mega Baumine',
      stats: [78, 79, 110, 117, 128, 135],
      ability: 'BURNINGDISEASE',
    },
  ],
  buglitch: [
    {
      name: 'Mega Buglitch',
      stats: [90, 64, 86, 115, 145, 135],
      ability: 'COMPUTERBUG',
    },
  ],
  trojorse: [
    {
      name: 'Mega Trojorse',
      stats: [85, 120, 125, 125, 42, 142],
      ability: 'BEASTBOOST',
    },
  ],
  jirachi: [
    {
      name: 'Corrupt Jirachi',
      stats: [100, 120, 120, 120, 120, 120],
      ability: 'WISHMAKER',
    },
  ],
  otyash: [
    {
      name: 'Mega Otyash',
      stats: [96, 122, 118, 43, 123, 100],
      ability: 'TRASHPILE',
    },
  ],
  mladee: [
    {
      name: 'Mega Mladee',
      stats: [78, 137, 80, 109, 137, 116],
      ability: 'SCEPTIC',
    },
  ],
  malworm: [
    {
      name: 'Mega Malworm',
      stats: [70, 130, 120, 100, 54, 96],
      ability: 'COMPUTERBUG',
    },
  ],
  pinnister: [
    {
      name: 'Mega Pinnister',
      stats: [80, 126, 100, 75, 110, 119],
      ability: 'SKILLLINK',
    },
  ],
  rootspook: [
    {
      name: 'Mega Rootspook',
      stats: [68, 128, 76, 168, 70, 85],
      ability: 'SHADOWTAG',
    },
  ],
  panthannon: [
    {
      name: 'Mega Panthannon',
      stats: [69, 132, 93, 121, 127, 97],
      ability: 'SHEERFORCE',
    },
  ],
  delibird: [
    {
      name: 'Deli Delibird',
      stats: [70, 105, 45, 129, 105, 100],
      ability: 'MOODY',
    },
  ],
  gueriest: [
    {
      name: 'Mega Gueriest',
      stats: [90, 143, 105, 107, 143, 92],
      ability: 'RATTLED',
    },
  ],
  prismolis: [
    {
      name: 'Mega Prismolis',
      stats: [81, 32, 75, 59, 155, 185],
      ability: 'MAGICBOUNCE',
    },
  ],
  dusknoir: [
    {
      name: 'Deli Dusknoir',
      stats: [70, 150, 165, 45, 65, 155],
      ability: 'SADIST',
    },
  ],
  mismagius: [
    {
      name: 'Mega Mismagius',
      stats: [65, 55, 85, 125, 155, 155],
      ability: 'MAGICBOUNCE',
    },
  ],
  gourgeist: [
    {
      name: 'Mega Gourgeist',
      stats: [85, 130, 152, 94, 58, 75],
      ability: 'FLASHFIRE',
    },
  ],
  frankenspook: [
    {
      name: 'Mega Frankenspook',
      stats: [69, 156, 110, 60, 146, 106],
      ability: 'REGENERATOR',
    },
  ],
  zangoose: [
    {
      name: 'Mega Zangoose Sponsored by Monster Energy Drink',
      stats: [73, 118, 65, 120, 77, 60],
      ability: 'TOXICBOOST',
    },
  ],
  viriv: [
    {
      name: 'Mega Viriv',
      stats: [86, 152, 71, 87, 152, 104],
      ability: 'MOODY',
    },
  ],
  rubbero: [
    {
      name: 'Mega Rubbero',
      stats: [130, 125, 130, 60, 31, 130],
      ability: 'THICKFAT',
    },
  ],
  bottleodrake: [
    {
      name: "Mega Bottle'o'Drake",
      stats: [67, 114, 35, 70, 114, 35],
      ability: 'WONDERGUARD',
    },
  ],
  dargouille: [
    {
      name: 'Mega Dargouille',
      stats: [74, 147, 98, 110, 147, 88],
      ability: 'SHEERFORCE',
    },
  ],
  sonotech: [
    {
      name: 'Mega Sonotech',
      stats: [63, 70, 116, 111, 159, 111],
      ability: 'SOUNDPROOF',
    },
  ],
  arbok: [
    {
      name: 'Mega Arbok',
      stats: [60, 125, 109, 50, 65, 139],
      ability: 'SIMPLE',
    },
  ],
  shiftry: [
    {
      name: 'Mega Shiftry',
      stats: [80, 100, 97, 106, 155, 97],
      ability: 'TECHNICIAN',
    },
  ],
  ashiftry: [
    {
      name: 'Mega Shiftry',
      stats: [80, 100, 97, 106, 155, 97],
      ability: 'TECHNICIAN',
    },
  ],
  ludicolo: [
    {
      name: 'Mega Ludicolo',
      stats: [90, 70, 100, 100, 115, 160],
      ability: 'RAINDISH',
    },
  ],
  lunaticolo: [
    {
      name: 'Mega Ludicolo',
      stats: [80, 142, 70, 131, 142, 70],
      ability: 'SADIST',
    },
  ],
  pelipper: [
    {
      name: 'Mega Pelipper',
      stats: [70, 25, 130, 105, 130, 100],
      ability: 'SWIFTSWIM',
    },
  ],
  shedinja: [
    {
      name: 'Mega Shedinja',
      stats: [1, 105, 50, 95, 105, 50],
      ability: 'STURDY',
    },
  ],
  lynchost: [
    {
      name: 'Mega Lynchost',
      stats: [70, 130, 108, 101, 98, 110],
      ability: 'CONSTRICTOR',
    },
  ],
  seviper: [
    {
      name: 'Sprite Sponsorship Seviper',
      stats: [73, 140, 70, 130, 140, 70],
      ability: 'MERCILESS',
    },
  ],
  volcarona: [
    {
      name: 'Mega Volcarona',
      stats: [85, 60, 115, 120, 155, 115],
      ability: 'MAGICGUARD',
    },
  ],
  agyarados: [
    {
      name: 'Mega Gyarados',
      stats: [95, 155, 109, 81, 70, 130],
      ability: 'MOLDBREAKER',
    },
  ],
  feraligatr: [
    {
      name: 'Mega Feraligatr',
      stats: [85, 140, 110, 100, 89, 106],
      ability: 'SPEEDBOOST',
    },
  ],
  meganium: [
    {
      name: 'Mega Meganium',
      stats: [80, 82, 140, 100, 83, 140],
      ability: 'MAGICBOUNCE',
    },
  ],
  typhlosion: [
    {
      name: 'Mega Typhlosion',
      stats: [78, 93, 98, 120, 140, 105],
      ability: 'DRYSKIN',
    },
  ],
  torterra: [
    {
      name: 'Mega Torterra',
      stats: [95, 130, 145, 55, 75, 125],
      ability: 'FILTER',
    },
  ],
  infernape: [
    {
      name: 'Mega Infernape',
      stats: [76, 134, 81, 128, 134, 81],
      ability: 'SHEERFORCE',
    },
  ],
  empoleon: [
    {
      name: 'Mega Empoleon',
      stats: [84, 133, 108, 66, 133, 106],
      ability: 'SWIFTSWIM',
    },
  ],
  serperior: [
    {
      name: 'Mega Serperior',
      stats: [75, 104, 115, 115, 104, 115],
      ability: 'ADAPTABILITY',
    },
  ],
  emboar: [
    {
      name: 'Mega Emboar',
      stats: [110, 123, 125, 95, 100, 75],
      ability: 'BERSERKER',
    },
  ],
  samurott: [
    {
      name: 'Mega Samurott',
      stats: [95, 125, 115, 105, 108, 80],
      ability: 'GUTS',
    },
  ],
  rillaboom: [
    {
      name: 'Gigantamax Rillaboom',
      stats: [125, 140, 110, 30, 145, 80],
      ability: 'CACOPHONY',
    },
  ],
  cinderace: [
    {
      name: 'Gigantamax Cinderace',
      stats: [100, 146, 90, 130, 75, 90],
      ability: 'PROTEAN',
    },
  ],
  inteleon: [
    {
      name: 'Gigantamax Inteleon',
      stats: [90, 115, 75, 120, 155, 75],
      ability: 'SNIPER',
    },
  ],
  rsurshifu: [
    {
      name: 'Gigantamax Urshifu',
      stats: [120, 150, 120, 97, 63, 70],
      ability: 'SKILLLINK',
    },
  ],
  ssurshifu: [
    {
      name: 'Gigantamax Urshifu',
      stats: [120, 150, 120, 97, 63, 70],
      ability: 'SHEERFORCE',
    },
  ],
  garbodor: [
    {
      name: 'Mega Garbodor',
      stats: [90, 116, 130, 50, 108, 130],
      ability: 'TRASHPILE',
    },
    {
      name: 'Gigantamax Garbodor',
      stats: [120, 125, 127, 65, 60, 127],
      ability: 'STAMINA',
    },
  ],
  plasbul: [
    {
      name: 'Mega Plasbul',
      stats: [75, 90, 125, 60, 107, 140],
      ability: 'ACTIVECURRENT',
    },
  ],
  lightulb: [
    {
      name: 'Mega Lightulb',
      stats: [60, 119, 67, 105, 110, 110],
      ability: 'PRIDE',
    },
  ],
  johnspleena: [
    {
      name: 'Mega Johnspleena',
      stats: [67, 165, 115, 119, 146, 30],
      ability: 'PRO',
    },
  ],
  heatran: [
    {
      name: 'Primal Heatran',
      stats: [91, 130, 127, 75, 150, 127],
      ability: 'FLASHFIRE',
    },
  ],
  lumineon: [
    {
      name: 'Mega Lumineon',
      stats: [100, 25, 110, 127, 119, 120],
      ability: 'GRAZE',
    },
  ],
  behemist: [
    {
      name: 'Mega Behemist',
      stats: [78, 140, 110, 107, 76, 97],
      ability: 'RECKLESS',
    },
  ],
  hundead: [
    {
      name: 'Mega Hundead',
      stats: [65, 165, 79, 145, 70, 66],
      ability: 'TOUGHCLAWS',
    },
  ],
  zomboom: [
    {
      name: 'Mega Zomboom',
      stats: [89, 115, 135, 30, 120, 145],
      ability: 'ROUGHSKIN',
    },
  ],
  smobill: [
    {
      name: 'Mega Smobill',
      stats: [85, 130, 75, 125, 130, 75],
      ability: 'INFECTED',
    },
  ],
  wendigore: [
    {
      name: 'Mega Wendigore',
      stats: [84, 135, 95, 117, 105, 110],
      ability: 'MOXIE',
    },
  ],
  berserguts: [
    {
      name: 'Mega Berserguts',
      stats: [80, 130, 125, 140, 13, 110],
      ability: 'BERSERKER',
    },
  ],
  flygon: [
    {
      name: 'Mega Flygon',
      stats: [80, 130, 100, 120, 90, 100],
      ability: 'TINTEDLENS',
    },
  ],
  chesnaught: [
    {
      name: 'Mega Chesnaught',
      stats: [88, 137, 162, 44, 74, 115],
      ability: 'FILTER',
    },
  ],
  delphox: [
    {
      name: 'Mega Delphox',
      stats: [75, 79, 72, 134, 164, 110],
      ability: 'ADAPTABILITY',
    },
  ],
  greninja: [
    {
      name: 'Mega Greninja',
      stats: [72, 120, 67, 157, 133, 71],
      ability: 'PROTEAN',
    },
  ],
  chatot: [
    {
      name: 'Mega Chatot',
      stats: [76, 20, 85, 127, 139, 100],
      ability: 'SERENEGRACE',
    },
  ],
  gowen: [
    { name: '???', stats: [120, 120, 120, 125, 120, 120], ability: 'DEFIANT' },
  ],
  groudon: [
    {
      name: 'Primal Groudon',
      stats: [100, 180, 160, 90, 150, 90],
      ability: 'WATERABSORB',
    },
  ],
  kyogre: [
    {
      name: 'Primal Kyogre',
      stats: [100, 150, 90, 90, 180, 160],
      ability: 'DRIZZLE',
    },
  ],
  sloggeroth: [
    {
      name: 'Mega Sloggeroth',
      stats: [90, 125, 100, 70, 145, 152],
      ability: 'FILTER',
    },
    {
      name: 'Corrupt Sloggeroth',
      stats: [75, 120, 120, 90, 120, 130],
      ability: 'FILTER',
    },
  ],
  archango: [
    {
      name: 'Mega Archango',
      stats: [93, 120, 100, 116, 103, 95],
      ability: 'SERENEGRACE',
    },
  ],
  ledevilain: [
    {
      name: 'Mega Ledevilain',
      stats: [74, 138, 130, 122, 78, 91],
      ability: 'SHEERFORCE',
    },
  ],
  sateli: [
    {
      name: 'Mega Sateli',
      stats: [80, 65, 118, 98, 135, 164],
      ability: 'BERSERK',
    },
  ],
  sphinxiant: [
    {
      name: 'Mega Sphinxiant',
      stats: [80, 125, 130, 95, 60, 125],
      ability: 'BALANCE',
    },
  ],
  clefable: [
    {
      name: 'Mega Clefable',
      stats: [95, 75, 88, 95, 145, 95],
      ability: 'SHEERFORCE',
    },
  ],
  chairy: [
    {
      name: 'Mega Chairy',
      stats: [90, 127, 70, 103, 127, 120],
      ability: 'SKILLLINK',
    },
  ],
  leafeon: [
    {
      name: 'A FUCKING LEAFeon',
      stats: [65, 160, 150, 50, 100, 100],
      ability: 'STALL',
    },
  ],
  eevee: [
    {
      name: 'Gigantamax Eevee',
      stats: [115, 95, 85, 45, 85, 95],
      ability: 'FURCOAT',
    },
  ],
  flareon: [
    {
      name: 'Mega Flareon',
      stats: [65, 150, 90, 105, 105, 110],
      ability: 'IMMOLATE',
    },
  ],
  vaporeon: [
    {
      name: 'Mega Vaporeon',
      stats: [130, 45, 90, 105, 130, 125],
      ability: 'WATERVEIL',
    },
  ],
  jolteon: [
    {
      name: 'Mega Jolteon',
      stats: [65, 125, 60, 155, 130, 90],
      ability: 'IONATE',
    },
  ],
  umbreon: [
    {
      name: 'Mega Umbreon',
      stats: [95, 95, 130, 95, 60, 150],
      ability: 'SHADOWCALL',
    },
  ],
  espeon: [
    {
      name: 'Mega Espeon',
      stats: [65, 75, 80, 130, 140, 135],
      ability: 'PRIDE',
    },
  ],
  glaceon: [
    {
      name: 'Mega Glaceon',
      stats: [65, 90, 65, 140, 165, 100],
      ability: 'WINTERFORCE',
    },
  ],
  sylveon: [
    {
      name: 'Mega Sylveon',
      stats: [95, 75, 85, 90, 135, 145],
      ability: 'PIXILATE',
    },
  ],
  comistorin: [
    {
      name: 'Mega Comistorin',
      stats: [65, 155, 70, 130, 155, 70],
      ability: 'MOLDBREAKER',
    },
  ],
  heruptin: [
    {
      name: 'Mega Heruptin',
      stats: [85, 120, 145, 45, 125, 140],
      ability: 'VAPORIZE',
    },
  ],
  fonighton: [
    {
      name: 'Mega Fonighton',
      stats: [81, 77, 115, 80, 140, 130],
      ability: 'MAGICBOUNCE',
    },
  ],
  brickor: [
    {
      name: 'Mega Brickor',
      stats: [86, 100, 144, 90, 42, 109],
      ability: 'SIMPLE',
    },
  ],
  frostear: [
    {
      name: 'Mega Frostear',
      stats: [60, 81, 100, 105, 143, 140],
      ability: 'PRIDE',
    },
  ],
  stantler: [
    {
      name: 'Mega Stantler',
      stats: [100, 115, 105, 105, 115, 106],
      ability: 'GRAZE',
    },
  ],
  melonvile: [
    {
      name: 'Mega Melonvile',
      stats: [103, 35, 119, 85, 120, 132],
      ability: 'GRAZE',
    },
  ],
  csteelix: [
    {
      name: 'Mega Steelix',
      stats: [75, 125, 230, 30, 55, 95],
      ability: 'FILTER',
    },
  ],
  delcatty: [
    {
      name: 'Mega Delcatty',
      stats: [97, 65, 105, 110, 115, 105],
      ability: 'PRANKSTER',
    },
  ],
  jumpluff: [
    {
      name: 'Mega Jumpluff X',
      stats: [105, 140, 70, 140, 70, 85],
      ability: 'TOUGHCLAWS',
    },
    {
      name: 'Mega Jumpluff Y',
      stats: [105, 50, 90, 130, 100, 135],
      ability: 'FURCOAT',
    },
  ],
  rapidash: [
    {
      name: 'Mega Rapidash Y',
      stats: [85, 130, 70, 130, 124, 93],
      ability: 'LEVITATE',
    },
    {
      name: 'Mega Rapidash X',
      stats: [85, 142, 100, 125, 80, 100],
      ability: 'REGENERATOR',
    },
  ],
  grapidash: [
    {
      name: 'Mega Rapidash Y',
      stats: [85, 130, 70, 130, 124, 93],
      ability: 'LEVITATE',
    },
    {
      name: 'Mega Rapidash X',
      stats: [85, 142, 100, 125, 80, 100],
      ability: 'REGENERATOR',
    },
  ],
  pizzaurex: [
    {
      name: 'Mega Pizzaurex X',
      stats: [90, 165, 130, 45, 100, 60],
      ability: 'TOUGHCLAWS',
    },
    {
      name: 'Mega Pizzaurex Y',
      stats: [90, 140, 80, 115, 70, 100],
      ability: 'CHLOROPHYLL',
    },
  ],
  luvdisc: [
    {
      name: 'Mega Luvdisc X',
      stats: [100, 115, 90, 140, 50, 90],
      ability: 'BERSERKER',
    },
    {
      name: 'Mega Luvdisc Y',
      stats: [100, 30, 102, 121, 130, 102],
      ability: 'PRIDE',
    },
  ],
  tangrowth: [
    {
      name: 'Mega Tangrowth X',
      stats: [100, 120, 155, 40, 135, 85],
      ability: 'THICKFAT',
    },
    {
      name: 'Mega Tangrowth Y',
      stats: [100, 90, 175, 30, 100, 140],
      ability: 'OWNTEMPO',
    },
    {
      name: 'Mega Tangrowth Z',
      stats: [100, 130, 85, 105, 130, 85],
      ability: 'CONSTRICTOR',
    },
  ],
  sunflora: [
    {
      name: 'Mega Sunflora',
      stats: [100, 135, 90, 115, 135, 95],
      ability: 'SOLARFORCE',
    },
  ],
  victreebel: [
    {
      name: 'Mega Victreebel',
      stats: [80, 140, 85, 80, 135, 90],
      ability: 'ARENATRAP',
    },
  ],
  poliwrath: [
    {
      name: 'Mega Poliwrath',
      stats: [90, 150, 110, 110, 55, 100],
      ability: 'IRONFIST',
    },
  ],
  necrozma: [
    {
      name: 'Ultra Necrozma',
      stats: [127, 137, 97, 129, 197, 97],
      ability: 'PRO',
    },
  ],
  griffisen: [
    {
      name: 'Mega Griffisen',
      stats: [95, 125, 110, 125, 110, 115],
      ability: 'MOXIE',
    },
  ],
  electrode: [
    {
      name: 'Mega Electrode',
      stats: [60, 110, 70, 150, 125, 80],
      ability: 'SPEEDBOOST',
    },
  ],
  octillery: [
    {
      name: 'Mega Octillery',
      stats: [75, 132, 70, 101, 132, 70],
      ability: 'MEGALAUNCHER',
    },
  ],
  jetcraft: [
    {
      name: 'Mega Jetcraft',
      stats: [75, 133, 89, 130, 133, 100],
      ability: 'TINTEDLENS',
    },
  ],
  crobat: [
    {
      name: 'Mega Crobat',
      stats: [85, 120, 100, 140, 90, 100],
      ability: 'MOXIE',
    },
  ],
  golem: [
    {
      name: 'Mega Golem',
      stats: [90, 130, 255, 5, 35, 90],
      ability: 'STAMINA',
    },
  ],
  cgolem: [
    {
      name: 'Mega Golem',
      stats: [90, 130, 255, 5, 35, 90],
      ability: 'CLEARBODY',
    },
  ],
  persian: [
    {
      name: 'Mega Persian',
      stats: [75, 150, 85, 153, 80, 95],
      ability: 'SUPERLUCK',
    },
  ],
  apersian: [
    {
      name: 'Mega Persian',
      stats: [75, 60, 81, 135, 107, 107],
      ability: 'FURCOAT',
    },
  ],
  primeape: [
    {
      name: 'Mega Primeape',
      stats: [65, 155, 60, 145, 60, 70],
      ability: 'BERSERKER',
    },
  ],
  teskare: [
    {
      name: 'Mega Teskare',
      stats: [81, 138, 110, 121, 93, 110],
      ability: 'TOUGHCLAWS',
    },
  ],
  hypno: [
    {
      name: 'Mega Hypno',
      stats: [85, 103, 90, 87, 103, 115],
      ability: 'BADDREAMS',
    },
  ],
  capsileau: [
    {
      name: 'Mega Capsileau',
      stats: [71, 115, 125, 100, 118, 90],
      ability: 'WATERVEIL',
    },
  ],
  canyou: [
    {
      name: 'Mega Canyou',
      stats: [80, 140, 105, 120, 80, 115],
      ability: 'STAMINA',
    },
  ],
  tenablerus: [
    {
      name: 'Mega Tenablerus',
      stats: [75, 128, 156, 40, 114, 113],
      ability: 'SCRAPPY',
    },
  ],
  magmocket: [
    {
      name: 'Mega Magmocket',
      stats: [75, 132, 100, 88, 135, 113],
      ability: 'MAGMAARMOR',
    },
  ],
  facarveel: [
    {
      name: 'Mega Facarveel',
      stats: [79, 134, 100, 118, 120, 117],
      ability: 'PARENTALBOND',
    },
  ],
  dolphottle: [
    {
      name: 'Mega Dolphottle',
      stats: [85, 144, 70, 135, 121, 92],
      ability: 'TECHNICIAN',
    },
  ],
  saplom: [
    {
      name: 'Mega Saplom',
      stats: [90, 140, 150, 87, 45, 105],
      ability: 'SANDRUSH',
    },
  ],
  absorsponge: [
    {
      name: 'Mega Absorsponge',
      stats: [121, 108, 130, 30, 108, 118],
      ability: 'FILTER',
    },
  ],
  floweyrst: [
    {
      name: 'Tusk Act 4',
      stats: [100, 140, 114, 99, 98, 104],
      ability: 'MOLDBREAKER',
    },
    {
      name: 'Omega Floweyrst',
      stats: [124, 115, 95, 80, 125, 92],
      ability: 'UNNERVE',
    },
  ],
  standoger: [
    {
      name: 'Gold Experience Requiem',
      stats: [100, 140, 100, 90, 140, 90],
      ability: 'PRESSURE',
    },
  ],
  floller: [
    {
      name: 'Mega Floller',
      stats: [78, 150, 90, 120, 52, 82],
      ability: 'SPEEDBOOST',
    },
  ],
  okinaseason: [
    {
      name: 'Okinaseason EX',
      stats: [80, 125, 100, 100, 140, 140],
      ability: 'PROTEAN',
    },
  ],
  shionhobo: [
    {
      name: 'Shionhobo EX',
      stats: [70, 35, 90, 105, 160, 125],
      ability: 'PRIDE',
    },
  ],
  rosemon: [
    {
      name: 'Rosemon Burst Mode',
      stats: [75, 140, 110, 135, 140, 135],
      ability: 'SADIST',
    },
  ],
  smtmemaleph: [
    { name: 'EMPTY', stats: [120, 145, 125, 40, 145, 125], ability: 'PROTEAN' },
  ],
  smtalbion: [
    {
      name: 'LINE-UP-THE-FLEET-TIME-FOR-SOME-HEAT',
      stats: [125, 140, 135, 60, 100, 105],
      ability: 'PARENTALBOND',
    },
  ],
  smtbael: [
    {
      name: 'Perfect Bael',
      stats: [205, 145, 160, 60, 145, 120],
      ability: 'HUGEPOWER',
    },
  ],
  yamcha: [
    { name: 'Mega Yamcha', stats: [52, 65, 57, 58, 58, 60], ability: 'SADIST' },
  ],
  undyrate: [
    {
      name: 'Undyrate the Undying',
      stats: [86, 145, 105, 125, 90, 80],
      ability: 'GRAZE',
    },
  ],
  torkoal: [
    {
      name: 'Mega Torkoal',
      stats: [70, 105, 145, 70, 105, 75],
      ability: 'ISOLATION',
    },
  ],
  atorkoal: [
    {
      name: 'Mega Torkoal',
      stats: [70, 105, 145, 70, 105, 75],
      ability: 'ISOLATION',
    },
  ],
  khezear: [
    {
      name: 'Zenith Khezear',
      stats: [100, 126, 110, 60, 135, 95],
      ability: 'BERSERK',
    },
  ],
  novais: [
    {
      name: 'Mega Novais',
      stats: [90, 56, 100, 102, 150, 125],
      ability: 'SOLARFORCE',
    },
  ],
  darkole: [
    {
      name: 'Mega Darkole',
      stats: [69, 49, 110, 101, 130, 125],
      ability: 'ISOLATION',
    },
  ],
  smolstron: [
    {
      name: 'Mega Smolstron',
      stats: [57, 46, 95, 85, 90, 115],
      ability: 'ETHEREAL',
    },
  ],
  lagannech: [
    {
      name: "Gurren Lagann! We brawlers are sustained by willpower even when mocked as crazy and reckless! If there's a wall in our way, we smash it down! If there isn't a path, we carve one out ourselves! The magma of our souls burns with a mighty flame! Super Ultra Combining Gurren Lagann! WHO... THE HELL... DO YOU THINK WE ARE???",
      stats: [100, 105, 120, 90, 88, 110],
      ability: 'MOXIE',
    },
  ],
  bowser: [
    {
      name: 'Giga Bowser',
      stats: [110, 135, 170, 30, 125, 100],
      ability: 'FILTER',
    },
  ],
  vivillon: [
    {
      name: 'Mega Vivillon',
      stats: [83, 12, 106, 129, 114, 98],
      ability: 'ISOLATION',
    },
  ],
  ariados: [
    {
      name: 'Mega Ariados',
      stats: [70, 127, 110, 135, 79, 75],
      ability: 'MERCILESS',
    },
  ],
  moltres: [
    { name: 'MOZART', stats: [90, 130, 110, 95, 150, 105], ability: 'MOZART' },
  ],
  zapdos: [
    { name: 'MOZART', stats: [90, 110, 90, 140, 150, 100], ability: 'MOZART' },
  ],
  articuno: [
    { name: 'MOZART', stats: [90, 90, 110, 110, 140, 140], ability: 'MOZART' },
  ],
  rumiarkness: [
    {
      name: 'EX Rumiarkness',
      stats: [60, 141, 70, 127, 130, 70],
      ability: 'MOLDBREAKER',
    },
  ],
  archlanta: [
    {
      name: 'Archlanta: Boar of Divine Punishment',
      stats: [95, 130, 85, 143, 126, 100],
      ability: 'DEFEATIST',
    },
  ],
  vladpire: [
    {
      name: 'Legend of Dracula: The Succession of Blood',
      stats: [115, 125, 100, 125, 120, 115],
      ability: 'INFECTED',
    },
  ],
  kiarayoin: [
    {
      name: "Heaven's Hole",
      stats: [120, 75, 100, 90, 125, 145],
      ability: 'PRIDE',
    },
  ],
  heliolisk: [
    {
      name: 'Mega Heliolisk',
      stats: [62, 95, 72, 130, 130, 114],
      ability: 'IONATE',
    },
  ],
  donphan: [
    {
      name: 'Mega Donphan',
      stats: [90, 145, 155, 80, 75, 90],
      ability: 'SCRAPPY',
    },
  ],
  herculeagon: [
    {
      name: 'Mega Herculeagon',
      stats: [90, 150, 145, 110, 90, 70],
      ability: 'BERSERKER',
    },
  ],
  edash: [
    {
      name: 'Deadite Ash',
      stats: [105, 120, 97, 97, 75, 95],
      ability: 'INFECTED',
    },
  ],
  reactiox: [
    {
      name: 'Mega Reactiox',
      stats: [80, 53, 130, 80, 123, 145],
      ability: 'IRRADIATED',
    },
  ],
  jynx: [
    { name: 'Mega Jynx', stats: [65, 30, 95, 134, 145, 135], ability: 'FOCUS' },
  ],
  ajynx: [
    { name: 'Mega Jynx', stats: [65, 30, 154, 55, 165, 130], ability: 'FOCUS' },
  ],
  farfetchd: [
    {
      name: "Nuclear Farfetch'd",
      stats: [62, 195, 50, 110, 58, 62],
      ability: 'HYPERCUTTER',
    },
  ],
  dragonite: [
    {
      name: 'Mega Dragonite',
      stats: [91, 144, 115, 90, 144, 116],
      ability: 'SERENEGRACE',
    },
  ],
  ndragonite: [
    {
      name: 'Mega Dragonite',
      stats: [91, 144, 115, 90, 144, 116],
      ability: 'FILTER',
    },
  ],
  corsola: [
    {
      name: 'Mega Corsola',
      stats: [100, 65, 150, 35, 110, 150],
      ability: 'GRAZE',
    },
  ],
  carnivine: [
    {
      name: 'Mega Carnivine',
      stats: [84, 135, 112, 46, 95, 112],
      ability: 'FLYTRAP',
    },
  ],
  alcremie: [
    {
      name: 'Gigantamax Alcremie',
      stats: [125, 80, 90, 62, 120, 145],
      ability: 'STAMINA',
    },
  ],
  duraludon: [
    {
      name: 'Gigantamax Duraludon',
      stats: [110, 105, 135, 65, 150, 85],
      ability: 'SHEERFORCE',
    },
  ],
  corviknight: [
    {
      name: 'Gigantamax Corviknight',
      stats: [135, 90, 125, 75, 85, 95],
      ability: 'PARENTALBOND',
    },
  ],
  drednaw: [{ name: 'Gigantamax Drednaw', stats: [119, 154, 121, 67, 44, 94] }],
  hatterene: [
    { name: 'Gigantamax Hatterene', stats: [101, 90, 106, 44, 156, 133] },
  ],
  copperajah: [
    { name: 'Gigantamax Copperajah', stats: [152, 140, 110, 30, 80, 88] },
  ],
  lapras: [
    {
      name: 'Gigantamax Lapras',
      stats: [170, 125, 90, 40, 125, 125],
      ability: 'SERENEGRACE',
    },
  ],
  melmetal: [
    {
      name: 'Gigantamax Melmetal',
      stats: [165, 163, 143, 55, 100, 85],
      ability: 'SHEERFORCE',
    },
  ],
  centiskorch: [
    {
      name: 'Gigantamax Centiskorch',
      stats: [127, 129, 103, 122, 124, 116],
      ability: 'WHITESMOKE',
    },
  ],
  flapple: [
    {
      name: 'Gigantamax Flapple',
      stats: [116, 113, 62, 108, 111, 109],
      ability: 'BERSERKER',
    },
  ],
  appletun: [
    {
      name: 'Gigantamax Appletun',
      stats: [148, 91, 116, 32, 113, 119],
      ability: 'STAMINA',
    },
  ],
  sandaconda: [
    {
      name: 'Gigantamax Sandaconda',
      stats: [103, 131, 139, 83, 119, 100],
      ability: 'SPEEDBOOST',
    },
  ],
  toxtricity: [
    {
      name: 'Gigantamax Toxtricity',
      stats: [106, 129, 75, 120, 140, 80],
      ability: 'PRIDE',
    },
  ],
  lktoxtricity: [
    {
      name: 'Gigantamax Toxtricity',
      stats: [106, 129, 75, 120, 140, 80],
      ability: 'CACOPHONY',
    },
  ],
  orbeetle: [
    { name: 'Gigantamax Orbeetle', stats: [94, 38, 111, 118, 132, 164] },
  ],
  machamp: [
    {
      name: 'Gigantamax Machamp',
      stats: [110, 170, 100, 75, 65, 85],
      ability: 'GUTS',
    },
  ],
  kingler: [
    {
      name: 'Gigantamax Kingler',
      stats: [100, 165, 115, 95, 50, 70],
      ability: 'SHEERFORCE',
    },
  ],
  meowth: [
    {
      name: 'Gigantamax Meowth',
      stats: [100, 105, 95, 90, 90, 85],
      ability: 'SUPERLUCK',
    },
  ],
  ameowth: [
    {
      name: 'Gigantamax Meowth',
      stats: [100, 85, 70, 90, 110, 80],
      ability: 'SUPERLUCK',
    },
  ],
  cultulzu: [
    {
      name: 'Mega Cultulzu',
      stats: [80, 129, 140, 50, 125, 135],
      ability: 'WATERVEIL',
    },
  ],
  kingellow: [
    {
      name: 'Mega Kingellow',
      stats: [80, 50, 110, 105, 130, 150],
      ability: 'MOLDBREAKER',
    },
  ],
  gorebyss: [
    {
      name: 'Mega Gorebyss',
      stats: [85, 112, 110, 103, 137, 85],
      ability: 'SIPHON',
    },
  ],
  huntail: [
    {
      name: 'Mega Huntail',
      stats: [65, 128, 125, 122, 85, 94],
      ability: 'BERSERKER',
    },
  ],
  cocaiturd: [
    {
      name: 'Mega Cocaiturd',
      stats: [81, 141, 99, 132, 43, 120],
      ability: 'FURCOAT',
    },
  ],
  kecleon: [
    {
      name: 'Mega Kecleon',
      stats: [65, 125, 90, 120, 125, 120],
      ability: 'PROTEAN',
    },
  ],
  pengemperor: [
    {
      name: 'Mega Pengemperor',
      stats: [98, 127, 105, 116, 127, 90],
      ability: 'WINTERFORCE',
    },
  ],
  albinguin: [
    {
      name: 'Mega Albinguin',
      stats: [95, 130, 125, 110, 95, 90],
      ability: 'TOUGHCLAWS',
    },
  ],
  magnezone: [
    {
      name: 'Mega Magnezone',
      stats: [70, 70, 140, 90, 155, 110],
      ability: 'LEVITATE',
    },
  ],
  tropilightning: [
    {
      name: 'Mega Tropilightning',
      stats: [87, 135, 94, 94, 140, 102],
      ability: 'SHEERFORCE',
    },
  ],
  nukreep: [
    {
      name: 'Mega Nukreep',
      stats: [85, 148, 70, 100, 120, 110],
      ability: 'DETONATOR',
    },
  ],
  tutterfly: [
    {
      name: 'Mega Tutterfly',
      stats: [75, 130, 85, 115, 130, 100],
      ability: 'PRIDE',
    },
  ],
  swoobat: [
    {
      name: 'Mega Swoobat',
      stats: [97, 40, 105, 124, 125, 127],
      ability: 'FURCOAT',
    },
  ],
  paintip: [
    {
      name: 'Mega Paintip',
      stats: [60, 40, 70, 115, 140, 140],
      ability: 'PROTEAN',
    },
  ],
  horrorux: [
    {
      name: 'Mega Horrorux',
      stats: [75, 130, 92, 109, 140, 92],
      ability: 'DEFIANT',
    },
  ],
  eyeluminid: [
    {
      name: 'Mega Eyeluminid',
      stats: [88, 32, 115, 70, 130, 185],
      ability: 'STAMINA',
    },
  ],
  chaosemple: [
    {
      name: 'Mega Chaosemple',
      stats: [70, 138, 80, 98, 138, 137],
      ability: 'MOODY',
    },
  ],
  orderymid: [
    {
      name: 'Mega Orderymid',
      stats: [99, 81, 144, 50, 100, 190],
      ability: 'MARVELSCALE',
    },
  ],
  parasect: [
    {
      name: 'Mega Parasect',
      stats: [80, 125, 150, 40, 65, 155],
      ability: 'PRANKSTER',
    },
  ],
  omastar: [
    {
      name: 'Mega Omastar',
      stats: [70, 50, 175, 55, 145, 100],
      ability: 'ADAPTABILITY',
    },
  ],
  kabutops: [
    {
      name: 'Mega Kabutops',
      stats: [60, 150, 125, 120, 60, 80],
      ability: 'TOUGHCLAWS',
    },
  ],
  cradily: [
    {
      name: 'Mega Cradily',
      stats: [90, 103, 130, 40, 103, 144],
      ability: 'GRAZE',
    },
  ],
  armaldo: [
    {
      name: 'Mega Armaldo',
      stats: [75, 140, 145, 70, 60, 120],
      ability: 'TOUGHCLAWS',
    },
  ],
  relicanth: [
    {
      name: 'Mega Relicanth',
      stats: [100, 130, 155, 110, 40, 80],
      ability: 'ROCKHEAD',
    },
  ],
  whiscash: [
    {
      name: 'Mega Whiscash',
      stats: [100, 122, 105, 92, 116, 133],
      ability: 'SIMPLE',
    },
  ],
  wwhiscash: [
    {
      name: 'Mega Whiscash',
      stats: [100, 116, 133, 92, 122, 105],
      ability: 'SIMPLE',
    },
  ],
  magcargo: [
    {
      name: 'Mega Magcargo',
      stats: [80, 75, 185, 20, 125, 120],
      ability: 'MAGMAARMOR',
    },
  ],
  amagcargo: [
    {
      name: 'Mega Magcargo',
      stats: [50, 30, 50, 142, 140, 120],
      ability: 'PRIDE',
    },
  ],
  mienshao: [
    {
      name: 'Mega Mienshao',
      stats: [65, 145, 70, 135, 130, 65],
      ability: 'REGENERATOR',
    },
  ],
  ninetales: [
    {
      name: 'Mega Ninetales',
      stats: [73, 73, 95, 105, 127, 132],
      ability: 'SOULEATER',
    },
  ],
  arcanine: [
    {
      name: 'Mega Arcanine',
      stats: [90, 150, 90, 125, 110, 90],
      ability: 'IMMOLATE',
    },
  ],
  probopass: [
    {
      name: 'Mega Probopass',
      stats: [60, 60, 170, 45, 115, 175],
      ability: 'LODESTONE',
    },
  ],
  golurk: [
    {
      name: 'Mega Golurk',
      stats: [105, 155, 155, 55, 65, 100],
      ability: 'BEASTBOOST',
    },
  ],
  jgolurk: [
    {
      name: 'Mega Golurk',
      stats: [105, 155, 100, 55, 65, 155],
      ability: 'BEASTBOOST',
    },
  ],
  magmortar: [
    {
      name: 'Mega Magmortar',
      stats: [75, 105, 97, 94, 155, 114],
      ability: 'MEGALAUNCHER',
    },
  ],
  pyroar: [
    {
      name: 'Mega Pyroar',
      stats: [86, 75, 100, 131, 142, 90],
      ability: 'ADAPTABILITY',
    },
  ],
  rectreem: [
    {
      name: 'Mega Rectreem',
      stats: [90, 137, 143, 60, 78, 117],
      ability: 'GRAZE',
    },
  ],
  lizakbar: [
    {
      name: 'Mega Lizakbar',
      stats: [85, 105, 95, 110, 145, 85],
      ability: 'MAGICGUARD',
    },
  ],
  hazmate: [
    {
      name: 'Mega Hazmate',
      stats: [90, 140, 120, 65, 85, 95],
      ability: 'REGENERATOR',
    },
  ],
  ebolable: [
    {
      name: 'Mega Ebolable',
      stats: [70, 65, 100, 125, 110, 120],
      ability: 'PROTEAN',
    },
  ],
  piguson: [
    {
      name: 'Mega Piguson',
      stats: [95, 130, 120, 45, 50, 100],
      ability: 'JUSTIFIED',
    },
  ],
  vandash: [
    {
      name: 'Mega Vandash',
      stats: [70, 120, 75, 130, 70, 75],
      ability: 'DARKAURA',
    },
  ],
  haremit: [
    {
      name: 'Mega Haremit',
      stats: [105, 95, 170, 75, 50, 130],
      ability: 'SOLIDROCK',
    },
  ],
  krokizon: [
    {
      name: 'Mega Krokizon',
      stats: [110, 160, 130, 50, 85, 85],
      ability: 'SUPERLUCK',
    },
  ],
  mozzamazel: [],
  snorlax: [
    {
      name: 'Mega Snorlax',
      stats: [160, 155, 65, 110, 60, 90],
      ability: 'INSOMNIA',
    },
    {
      name: 'Gigantamax Snorlax',
      stats: [200, 125, 90, 30, 65, 130],
      ability: 'GRAZE',
    },
  ],
  slaking: [
    {
      name: 'Mega Slaking',
      stats: [155, 160, 120, 125, 115, 100],
      ability: 'INSOMNIA',
    },
  ],
  heatmor: [
    { name: 'Mega Heatmor', stats: [90, 135, 81, 95, 135, 81], ability: 'PRO' },
  ],
  spinda: [
    {
      name: 'Mega Spinda',
      stats: [85, 130, 75, 115, 130, 75],
      ability: 'MOODY',
    },
  ],
  bruxish: [
    {
      name: 'Mega Bruxish',
      stats: [70, 145, 105, 125, 70, 105],
      ability: 'STRONGJAW',
    },
  ],
  drampa: [
    {
      name: 'Mega Drampa',
      stats: [78, 100, 105, 26, 165, 111],
      ability: 'FOCUS',
    },
  ],
  tsareena: [
    {
      name: 'Mega Tsareena',
      stats: [78, 155, 115, 122, 70, 108],
      ability: 'FURIOUSFEET',
    },
  ],
  dtsareena: [
    {
      name: 'Mega Tsareena',
      stats: [78, 70, 98, 127, 145, 130],
      ability: 'SHADOWCALL',
    },
  ],
  venustoise: [
    {
      name: 'Mega Venustoise V',
      stats: [80, 100, 123, 80, 122, 120],
      ability: 'THICKFAT',
    },
    {
      name: 'Mega Venustoise B',
      stats: [79, 103, 120, 78, 135, 115],
      ability: 'MEGALAUNCHER',
    },
  ],
  femaledot: [
    {
      name: 'NULL DREAM ♀ .',
      stats: [155, 145, 160, 155, 125, 100],
      ability: 'SCRAPPY',
    },
  ],
  thrukoto: [
    {
      name: 'Mega Rukoto',
      stats: [60, 105, 40, 80, 105, 180],
      ability: 'ROCKHEAD',
    },
  ],
  scoob: [
    {
      name: 'Ballyhoo Scoob',
      stats: [105, 105, 125, 130, 125, 105],
      ability: 'SCRAPPY',
    },
  ],
  smtlucifera: [
    {
      name: 'Lord of Hell',
      stats: [155, 155, 155, 155, 155, 155],
      ability: 'BALANCE',
    },
  ],
  dialga: [
    {
      name: 'Primal Dialga',
      stats: [100, 140, 130, 80, 160, 80],
      ability: 'NOGUARD',
    },
  ],
  palkia: [
    {
      name: 'Primal Palkia',
      stats: [90, 140, 100, 100, 160, 100],
      ability: 'NOGUARD',
    },
  ],
  gcharizard: [
    {
      name: 'Mega Charizard X',
      stats: [78, 130, 111, 100, 130, 85],
      ability: 'TOUGHCLAWS',
    },
    {
      name: 'Mega Charizard Y',
      stats: [78, 104, 78, 100, 159, 115],
      ability: 'SANDSTREAM',
    },
    {
      name: 'Mega Charizard Z',
      stats: [78, 130, 111, 100, 130, 85],
      ability: 'NOGUARD',
    },
    {
      name: 'Mega Charizard S',
      stats: [78, 130, 111, 95, 130, 90],
      ability: 'CONSTRICTOR',
    },
    { name: 'Gigantamax Charizard', stats: [108, 124, 88, 90, 129, 95] },
  ],
};
