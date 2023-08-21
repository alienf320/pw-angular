export interface Encounter {
  name: string;
  levels: [number | null, number | null];
}

export interface LocationEncounters {
  location: string;
  [key: string]: Encounter[] | string; // Agregamos la firma de índice aquí
}


export const ENCOUNTERS: LocationEncounters[] = [
  {
    "location": "Route 1",
    "LandDay": [
      {
        "name": "PAGIE",
        "levels": [
          2,
          null
        ]
      },
      {
        "name": "NIXOX",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "PLAYNE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "FLUFAMB",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "NIXOX",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "NEONEE",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "NEONEE",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "PAGIE",
        "levels": [
          2,
          null
        ]
      },
      {
        "name": "FLUFAMB",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "PLAYNE",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "NIXOX",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "PAGIE",
        "levels": [
          2,
          5
        ]
      }
    ],
    "LandNight": [
      {
        "name": "NEONEE",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "UNCROW",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "PAGIE",
        "levels": [
          3,
          null
        ]
      },
      {
        "name": "NIXOX",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "FLUFAMB",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "FLUFAMB",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "UNCROW",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "PAGIE",
        "levels": [
          2,
          null
        ]
      },
      {
        "name": "NIXOX",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "NEONEE",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "UNCROW",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "NEONEE",
        "levels": [
          5,
          null
        ]
      }
    ]
  },
  {
    "location": "Frosty Forest",
    "Land": [
      {
        "name": "SMOBALL",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "ICEIS",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "SNOWDOGE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "SNUGGICE",
        "levels": [
          3,
          6
        ]
      },
      {
        "name": "ICEIS",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "VANILLITE",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "SMOBALL",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "SNOWDOGE",
        "levels": [
          5,
          6
        ]
      },
      {
        "name": "ICEIS",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "SNUGGICE",
        "levels": [
          3,
          6
        ]
      },
      {
        "name": "SMOBALL",
        "levels": [
          5,
          6
        ]
      },
      {
        "name": "PENGUI",
        "levels": [
          10,
          null
        ]
      }
    ]
  },
  {
    "location": "Route 2",
    "LandDay": [
      {
        "name": "ELASTIM",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "NIXOX",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "DOIT",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "ARTSY",
        "levels": [
          9,
          12
        ]
      },
      {
        "name": "FLUFAMB",
        "levels": [
          9,
          12
        ]
      },
      {
        "name": "RUBBERO",
        "levels": [
          10,
          11
        ]
      },
      {
        "name": "DOIT",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "FLUFAMB",
        "levels": [
          11,
          null
        ]
      },
      {
        "name": "ELASTIM",
        "levels": [
          9,
          12
        ]
      },
      {
        "name": "ELASTIM",
        "levels": [
          9,
          12
        ]
      },
      {
        "name": "BRICO",
        "levels": [
          11,
          null
        ]
      },
      {
        "name": "BRICO",
        "levels": [
          9,
          13
        ]
      }
    ],
    "LandNight": [
      {
        "name": "UNDLOUIS",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "UNCROW",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "UNCROW",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "UNDLOUIS",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "EARRING",
        "levels": [
          9,
          12
        ]
      },
      {
        "name": "NEONEE",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "NEONEE",
        "levels": [
          11,
          null
        ]
      },
      {
        "name": "UNDLOUIS",
        "levels": [
          9,
          12
        ]
      },
      {
        "name": "UNCROW",
        "levels": [
          9,
          12
        ]
      },
      {
        "name": "GUTTSU",
        "levels": [
          10,
          11
        ]
      },
      {
        "name": "EARRING",
        "levels": [
          11,
          null
        ]
      },
      {
        "name": "ENDERITE",
        "levels": [
          9,
          13
        ]
      }
    ]
  },
  {
    "location": "Miam Cavern",
    "Cave": [
      {
        "name": "COSMOCK",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "CHIPIT",
        "levels": [
          8,
          11
        ]
      },
      {
        "name": "GOOM",
        "levels": [
          8,
          11
        ]
      },
      {
        "name": "CUPLET",
        "levels": [
          8,
          11
        ]
      },
      {
        "name": "VANILLITE",
        "levels": [
          8,
          11
        ]
      },
      {
        "name": "STEAMEA",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "LICKITUNG",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "FARFETCHD",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "GOOM",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "SWIRLIX",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "CHIPIT",
        "levels": [
          8,
          11
        ]
      },
      {
        "name": "COSMOCK",
        "levels": [
          10,
          12
        ]
      }
    ]
  },
  {
    "location": "Miam Cavern BF",
    "Cave": [
      {
        "name": "COSMOCK",
        "levels": [
          7,
          12
        ]
      },
      {
        "name": "SWIRLIX",
        "levels": [
          7,
          12
        ]
      },
      {
        "name": "STEAMEA",
        "levels": [
          7,
          12
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          7,
          14
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          7,
          12
        ]
      },
      {
        "name": "VANILLITE",
        "levels": [
          7,
          11
        ]
      },
      {
        "name": "LICKITUNG",
        "levels": [
          7,
          11
        ]
      },
      {
        "name": "CUPLET",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "CUPLET",
        "levels": [
          7,
          11
        ]
      },
      {
        "name": "COSMOCK",
        "levels": [
          7,
          11
        ]
      },
      {
        "name": "CHIPIT",
        "levels": [
          7,
          11
        ]
      },
      {
        "name": "CHIPIT",
        "levels": [
          9,
          11
        ]
      }
    ]
  },
  {
    "location": "Miam Cavern 2",
    "Cave": [
      {
        "name": "CUPLET",
        "levels": [
          9,
          13
        ]
      },
      {
        "name": "GOOM",
        "levels": [
          9,
          13
        ]
      },
      {
        "name": "CHIPIT",
        "levels": [
          9,
          13
        ]
      },
      {
        "name": "LICKITUNG",
        "levels": [
          9,
          12
        ]
      },
      {
        "name": "GOOM",
        "levels": [
          9,
          12
        ]
      },
      {
        "name": "CUPLET",
        "levels": [
          9,
          12
        ]
      },
      {
        "name": "GOOM",
        "levels": [
          9,
          13
        ]
      },
      {
        "name": "COSMOCK",
        "levels": [
          9,
          13
        ]
      },
      {
        "name": "CUPLET",
        "levels": [
          9,
          13
        ]
      },
      {
        "name": "BRICO",
        "levels": [
          9,
          13
        ]
      },
      {
        "name": "CHIPIT",
        "levels": [
          9,
          15
        ]
      },
      {
        "name": "CHIPIT",
        "levels": [
          9,
          14
        ]
      }
    ]
  },
  {
    "location": "Seaside Village",
    "Land": [
      {
        "name": "RUBADUBB",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "BAIRY",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "RUBADUBB",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "TIDENO",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "RUBADUBB",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "BAIRY",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "BAIRY",
        "levels": [
          10,
          14
        ]
      },
      {
        "name": "RUBADUBB",
        "levels": [
          10,
          14
        ]
      },
      {
        "name": "DOIT",
        "levels": [
          10,
          14
        ]
      },
      {
        "name": "NEONEE",
        "levels": [
          10,
          15
        ]
      },
      {
        "name": "DOIT",
        "levels": [
          10,
          16
        ]
      },
      {
        "name": "GOOSELING",
        "levels": [
          10,
          16
        ]
      }
    ],
    "OldRod": [
      {
        "name": "BOTTLEO",
        "levels": [
          12,
          13
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          12,
          14
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "CARVANHA",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "CARVANHA",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "LOTAD",
        "levels": [
          20,
          23
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "CARVANHA",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "SHARPEDO",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "LOMBRE",
        "levels": [
          33,
          38
        ]
      },
      {
        "name": "FRILLISH",
        "levels": [
          36,
          null
        ]
      },
      {
        "name": "CANYOU",
        "levels": [
          36,
          null
        ]
      }
    ]
  },
  {
    "location": "Seas",
    "Land": [
      {
        "name": "RUBADUBB",
        "levels": [
          9,
          13
        ]
      },
      {
        "name": "BAIRY",
        "levels": [
          9,
          13
        ]
      },
      {
        "name": "RUBADUBB",
        "levels": [
          9,
          14
        ]
      },
      {
        "name": "NEONEE",
        "levels": [
          9,
          13
        ]
      },
      {
        "name": "RUBADUBB",
        "levels": [
          9,
          13
        ]
      },
      {
        "name": "BAIRY",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "NEONEE",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "TIDENO",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "TIDENO",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "NIXOX",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "BAIRY",
        "levels": [
          10,
          15
        ]
      },
      {
        "name": "TIDENO",
        "levels": [
          14,
          16
        ]
      }
    ],
    "Water": [
      {
        "name": "FLOATUBE",
        "levels": [
          19,
          23
        ]
      },
      {
        "name": "BATTIE",
        "levels": [
          19,
          22
        ]
      },
      {
        "name": "RUBADUBB",
        "levels": [
          17,
          21
        ]
      },
      {
        "name": "STARYU",
        "levels": [
          18,
          21
        ]
      },
      {
        "name": "BUIZEL",
        "levels": [
          19,
          21
        ]
      }
    ],
    "OldRod": [
      {
        "name": "FINNEON",
        "levels": [
          12,
          13
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          12,
          14
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "OREGI",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "CARVANHA",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          20,
          23
        ]
      }
    ]
  },
  {
    "location": "Route 3",
    "Land": [
      {
        "name": "MOPOCKIT",
        "levels": [
          16,
          null
        ]
      },
      {
        "name": "CLAVIES",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "CREEMO",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "MOUSEE",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "CREEMO",
        "levels": [
          12,
          16
        ]
      },
      {
        "name": "HOMPUFF",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "FLUFAMB",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "BOUNCECT",
        "levels": [
          16,
          null
        ]
      },
      {
        "name": "NIXOX",
        "levels": [
          12,
          17
        ]
      },
      {
        "name": "BULBIGHT",
        "levels": [
          13,
          15
        ]
      },
      {
        "name": "TIMBITO",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "MOPOCKIT",
        "levels": [
          13,
          17
        ]
      }
    ]
  },
  {
    "location": "Ankh Desert",
    "Cave": [
      {
        "name": "STORACTUS",
        "levels": [
          17,
          18
        ]
      },
      {
        "name": "PATIMA",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "MEXIGUST",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "BAIFRE",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "ROVEN",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "PALMETRIC",
        "levels": [
          17,
          20
        ]
      },
      {
        "name": "DUSITE",
        "levels": [
          16,
          20
        ]
      },
      {
        "name": "COYOT",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "MEXIGUST",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "BAIFRE",
        "levels": [
          17,
          20
        ]
      },
      {
        "name": "PATIMA",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "SNAKENY",
        "levels": [
          18,
          20
        ]
      }
    ]
  },
  {
    "location": "Ankh ruins",
    "Cave": [
      {
        "name": "TUTERPILL",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "HOMPUFF",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "BOXY",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "DUSITE",
        "levels": [
          17,
          null
        ]
      },
      {
        "name": "GARGIE",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "TUTERPILL",
        "levels": [
          16,
          19
        ]
      },
      {
        "name": "HOMPUFF",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "PAREYEMID",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "MUMMEEM",
        "levels": [
          16,
          19
        ]
      },
      {
        "name": "TUTERPILL",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "PAREYEMID",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "GARGIE",
        "levels": [
          17,
          null
        ]
      }
    ]
  },
  {
    "location": "Ankh  Ruins BF",
    "Cave": [
      {
        "name": "TUTERPILL",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "PAREYEMID",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "BOXY",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "DUSITE",
        "levels": [
          19,
          null
        ]
      },
      {
        "name": "GARGIE",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "TUTERPILL",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "HOMPUFF",
        "levels": [
          19,
          null
        ]
      },
      {
        "name": "PAREYEMID",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "BAIFRE",
        "levels": [
          19,
          null
        ]
      },
      {
        "name": "TUTERPILL",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "PAREYEMID",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "GARGIE",
        "levels": [
          20,
          null
        ]
      }
    ]
  },
  {
    "location": "Route 3 (2)",
    "Land": [
      {
        "name": "MOPOCKIT",
        "levels": [
          16,
          19
        ]
      },
      {
        "name": "CLAVIES",
        "levels": [
          16,
          19
        ]
      },
      {
        "name": "CREEMO",
        "levels": [
          16,
          19
        ]
      },
      {
        "name": "BRICO",
        "levels": [
          16,
          19
        ]
      },
      {
        "name": "ELEOLER",
        "levels": [
          16,
          19
        ]
      },
      {
        "name": "EARRING",
        "levels": [
          16,
          19
        ]
      },
      {
        "name": "SWANAPER",
        "levels": [
          16,
          19
        ]
      },
      {
        "name": "EARRING",
        "levels": [
          16,
          19
        ]
      },
      {
        "name": "NIXOX",
        "levels": [
          16,
          19
        ]
      },
      {
        "name": "CLAVIES",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "SWANAPER",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "MOPOCKIT",
        "levels": [
          16,
          17
        ]
      }
    ]
  },
  {
    "location": "Dewdrop Cavern",
    "Cave": [
      {
        "name": "SQUIRTLE",
        "levels": [
          15,
          16
        ]
      },
      {
        "name": "OSHAWOTT",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "TOTODILE",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "PIPLUP",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "MUDKIP",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "FROAKIE",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "FROAKIE",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "MUDKIP",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "PIPLUP",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "TOTODILE",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "OSHAWOTT",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "SQUIRTLE",
        "levels": [
          15,
          null
        ]
      }
    ]
  },
  {
    "location": "Safari Zone",
    "Land": [
      {
        "name": "JUZT",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "NAMINO",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "CHAIRY",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "TAUROS",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "MILTANK",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "JETCRAFT",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "JETCRAFT",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "CLAVIES",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "CLAVIES",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "CHAIRY",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "NAMINO",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "JUZT",
        "levels": [
          21,
          26
        ]
      }
    ]
  },
  {
    "location": "Safari Zone",
    "Land": [
      {
        "name": "BONGORILLA",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "RHYHORN",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "PYROAR",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "BONGORILLA",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "ORANGURU",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "PASSIMIAN",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "GORDRARM",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "PALMETRIC",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "KANGASKHAN",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "PYROAR",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "ELEOLER",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "CHANSEY",
        "levels": [
          21,
          26
        ]
      }
    ],
    "Water": [
      {
        "name": "MANTYKE",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "BATTIE",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          21,
          26
        ]
      }
    ],
    "OldRod": [
      {
        "name": "DRATINI",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          21,
          26
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "DRATINI",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "CUTEHULHU",
        "levels": [
          21,
          26
        ]
      }
    ]
  },
  {
    "location": "Route 4",
    "OldRod": [
      {
        "name": "CARVANHA",
        "levels": [
          19,
          null
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          19,
          24
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "CUTEHULHU",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "CUTEHULHU",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          20,
          23
        ]
      }
    ],
    "LandDay": [
      {
        "name": "CLAVIES",
        "levels": [
          21,
          22
        ]
      },
      {
        "name": "SPOTNI",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "NAMINO",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "MACHETIT",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "CREEMO",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "SPOTNI",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "RUBBERO",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "CLAVIES",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "MACHETIT",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "CREEMO",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "BAIRY",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "NAMINO",
        "levels": [
          21,
          23
        ]
      }
    ],
    "LandNight": [
      {
        "name": "EARRING",
        "levels": [
          21,
          22
        ]
      },
      {
        "name": "SPOTNI",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "ZOMBY",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "MACHETIT",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "CREEMO",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "SPOTNI",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "UNCROW",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "EARRING",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "MACHETIT",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "CREEMO",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "ZOMBY",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "ZOMBY",
        "levels": [
          21,
          23
        ]
      }
    ]
  },
  {
    "location": "Scorching Cavern",
    "Cave": [
      {
        "name": "CHARMANDER",
        "levels": [
          15,
          16
        ]
      },
      {
        "name": "CYNDAQUIL",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "TEPIG",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "TORCHIC",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "CHIMCHAR",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "FENNEKIN",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "FENNEKIN",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "CHIMCHAR",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "TORCHIC",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "TEPIG",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "CYNDAQUIL",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "CHARMANDER",
        "levels": [
          15,
          null
        ]
      }
    ]
  },
  {
    "location": "Petal Grove",
    "Cave": [
      {
        "name": "SNIVY",
        "levels": [
          14,
          null
        ]
      },
      {
        "name": "CHIKORITA",
        "levels": [
          14,
          null
        ]
      },
      {
        "name": "CHESPIN",
        "levels": [
          14,
          null
        ]
      },
      {
        "name": "BULBASAUR",
        "levels": [
          14,
          null
        ]
      },
      {
        "name": "SNIVY",
        "levels": [
          14,
          null
        ]
      },
      {
        "name": "BULBASAUR",
        "levels": [
          14,
          null
        ]
      },
      {
        "name": "TREECKO",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "TREECKO",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "TURTWIG",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "CHESPIN",
        "levels": [
          14,
          null
        ]
      },
      {
        "name": "SNIVY",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "CHIKORITA",
        "levels": [
          15,
          null
        ]
      }
    ]
  },
  {
    "location": "Flock Grotto",
    "Cave": [
      {
        "name": "PIDGEY",
        "levels": [
          4,
          null
        ]
      },
      {
        "name": "TAILLOW",
        "levels": [
          3,
          null
        ]
      },
      {
        "name": "TAILLOW",
        "levels": [
          3,
          null
        ]
      },
      {
        "name": "STARLY",
        "levels": [
          3,
          null
        ]
      },
      {
        "name": "HOOTHOOT",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "HOOTHOOT",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "FLETCHLING",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "PIDOVE",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "PIDOVE",
        "levels": [
          5,
          null
        ]
      }
    ]
  },
  {
    "location": "Rodent Grotto",
    "Cave": [
      {
        "name": "RATTATA",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "ZIGZAGOON",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "ZIGZAGOON",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "BIDOOF",
        "levels": [
          3,
          null
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "BUNNELBY",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "BUNNELBY",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "BIDOOF",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "PATRAT",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "PATRAT",
        "levels": [
          4,
          null
        ]
      }
    ]
  },
  {
    "location": "Crawly Grotto",
    "Cave": [
      {
        "name": "CATERPIE",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "WURMPLE",
        "levels": [
          3,
          null
        ]
      },
      {
        "name": "KRICKETOT",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SEWADDLE",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "SCATTERBUG",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WURMPLE",
        "levels": [
          2,
          null
        ]
      },
      {
        "name": "CATERPIE",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "KRICKETOT",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "SCATTERBUG",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "VENIPEDE",
        "levels": [
          4,
          null
        ]
      }
    ]
  },
  {
    "location": "Misty Cavern",
    "Cave": [
      {
        "name": "MAWILE",
        "levels": [
          21,
          22
        ]
      },
      {
        "name": "SPRITZEE",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "SABLEYE",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "FLABEBE",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "AUDINO",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "ABSOL",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "FLABEBE",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "KIRLIA",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "MAWILE",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "SABLEYE",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "KIRLIA",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "SPRITZEE",
        "levels": [
          21,
          23
        ]
      }
    ]
  },
  {
    "location": "Rocky Crevase",
    "Cave": [
      {
        "name": "ONIX",
        "levels": [
          21,
          22
        ]
      },
      {
        "name": "RHYHORN",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "DIGLETT",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "CARBINK",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "ROGGENROLA",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "ARON",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "ARON",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "RHYHORN",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "DIGLETT",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "ONIX",
        "levels": [
          21,
          23
        ]
      }
    ]
  },
  {
    "location": "Witch Island",
    "Land": [
      {
        "name": "HIGUKASAI",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "AKANEZAKI",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "HIGURACHIE",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "HIGUIRIE",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "TOMITAKE",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "OISHIGURASHI",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "NATSUMIYOSHI",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "HIGUKEIICHI",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "HIGUSATOKO",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "MIONZAKI",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "AKASAKA",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "SHIONZAKI",
        "levels": [
          21,
          23
        ]
      }
    ]
  },
  {
    "location": "Arid Cavern",
    "Cave": [
      {
        "name": "CACNEA",
        "levels": [
          17,
          21
        ]
      },
      {
        "name": "DARUMAKA",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "HIPPOPOTAS",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "YAMASK",
        "levels": [
          19,
          null
        ]
      },
      {
        "name": "TRAPINCH",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "YAMASK",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "BALTOY",
        "levels": [
          19,
          20
        ]
      },
      {
        "name": "SANDSHREW",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "SKORUPI",
        "levels": [
          19,
          21
        ]
      },
      {
        "name": "TRAPINCH",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "SIGILYPH",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "CACNEA",
        "levels": [
          20,
          null
        ]
      }
    ]
  },
  {
    "location": "Route 5",
    "Land": [
      {
        "name": "CLAVIES",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "FEDORAZ",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "IJUSGETSBIGGER",
        "levels": [
          20,
          null
        ]
      },
      {
        "name": "IJUSGETSBIGGER",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "CREEMO",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "FEDORAZ",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "GRASSES",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "CLAVIES",
        "levels": [
          20,
          21
        ]
      },
      {
        "name": "GRASSES",
        "levels": [
          20,
          21
        ]
      },
      {
        "name": "MICROETTE",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "GRASSES",
        "levels": [
          20,
          23
        ]
      },
      {
        "name": "NAMINO",
        "levels": [
          20,
          23
        ]
      }
    ],
    "OldRod": [
      {
        "name": "FEEBAS",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          23,
          25
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          20,
          25
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      }
    ]
  },
  {
    "location": "Sea Salt Cave",
    "Cave": [
      {
        "name": "KRABBY",
        "levels": [
          15,
          16
        ]
      },
      {
        "name": "SPHEAL",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "CORPHISH",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "CORPHISH",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "SEEL",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "WINGULL",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "WINGULL",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "SEEL",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "SHELLDER",
        "levels": [
          15,
          null
        ]
      }
    ]
  },
  {
    "location": "Graveyard",
    "Land": [
      {
        "name": "UNCROW",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "DUSKULL",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "DUSKULL",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "FEDORAZ",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "MURKROW",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "SHUPPET",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "MISDREAVUS",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "SHUPPET",
        "levels": [
          21,
          26
        ]
      }
    ]
  },
  {
    "location": "Graveyard 1F",
    "Cave": [
      {
        "name": "UNCROW",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "UNDLOUIS",
        "levels": [
          24,
          25
        ]
      },
      {
        "name": "ZOMBY",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "ZOMBY",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "DRUMMIN",
        "levels": [
          25,
          26
        ]
      },
      {
        "name": "UNDLOUIS",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "SPOOKSHEET",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "DRUMMIN",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "GUERIEST",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "DRUMMIN",
        "levels": [
          24,
          27
        ]
      },
      {
        "name": "HAICAW",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "HAICAW",
        "levels": [
          24,
          26
        ]
      }
    ]
  },
  {
    "location": "Graveyard 2F",
    "Cave": [
      {
        "name": "UNCROW",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "UNDLOUIS",
        "levels": [
          24,
          25
        ]
      },
      {
        "name": "TVIRUSBY",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "TVIRUSBY",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "TVIRUSBY",
        "levels": [
          25,
          26
        ]
      },
      {
        "name": "TVIRUSBY",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "TVIRUSBY",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "ZOMBY",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "TVIRUSBY",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "DRUMMIN",
        "levels": [
          24,
          27
        ]
      },
      {
        "name": "HAICAW",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "MACAT",
        "levels": [
          24,
          26
        ]
      }
    ]
  },
  {
    "location": "Graveyard 3F",
    "Cave": [
      {
        "name": "UNCROW",
        "levels": [
          24,
          27
        ]
      },
      {
        "name": "DIEBBUK",
        "levels": [
          24,
          27
        ]
      },
      {
        "name": "ZOMBY",
        "levels": [
          24,
          27
        ]
      },
      {
        "name": "DRUMMIN",
        "levels": [
          24,
          27
        ]
      },
      {
        "name": "DRUMMIN",
        "levels": [
          25,
          27
        ]
      },
      {
        "name": "UNDLOUIS",
        "levels": [
          24,
          27
        ]
      },
      {
        "name": "UNDLOUIS",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "DIEBBUK",
        "levels": [
          24,
          27
        ]
      },
      {
        "name": "GUERIEST",
        "levels": [
          24,
          27
        ]
      },
      {
        "name": "DRUMMIN",
        "levels": [
          24,
          27
        ]
      },
      {
        "name": "UNDLOUIS",
        "levels": [
          24,
          27
        ]
      },
      {
        "name": "DIEBBUK",
        "levels": [
          24,
          27
        ]
      }
    ]
  },
  {
    "location": "Romero City",
    "OldRod": [
      {
        "name": "BOTTLEO",
        "levels": [
          12,
          13
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          12,
          14
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "BOTTLEO",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "DEDFISHE",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "DEDFISHE",
        "levels": [
          20,
          23
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "DEDFISHE",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "DEDFISHE",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          33,
          38
        ]
      },
      {
        "name": "DEDFISHE",
        "levels": [
          36,
          null
        ]
      },
      {
        "name": "CANYOU",
        "levels": [
          31,
          36
        ]
      }
    ]
  },
  {
    "location": "Spooky Woods",
    "Land": [
      {
        "name": "PUMPKABOO",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "PHANTUMP",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "DRIFLOON",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "DUSKULL",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "LITWICK",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "LITWICK",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "MURKROW",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "DRIFLOON",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "MISDREAVUS",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "MURKROW",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "PHANTUMP",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "PUMPKABOO",
        "levels": [
          21,
          26
        ]
      }
    ]
  },
  {
    "location": "Route 6",
    "Land": [
      {
        "name": "AROD",
        "levels": [
          29,
          null
        ]
      },
      {
        "name": "AROD",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "JUZT",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "JUZT",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "PRISY",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "SPEAKERRO",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "CANVAST",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "CANVAST",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "ANOL",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "ANOL",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "PRISY",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          28,
          29
        ]
      }
    ]
  },
  {
    "location": "Route 7",
    "Water": [
      {
        "name": "PLASTOLPHIN",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "FLOATUBE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "BATTIE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          30,
          32
        ]
      }
    ],
    "OldRod": [
      {
        "name": "LUVDISC",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "LUVDISC",
        "levels": [
          33,
          35
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "SHELLOS",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "SHELLOS",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "GASTRODON",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "MANTYKE",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "FRILLISH",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "ALOMOMOLA",
        "levels": [
          33,
          38
        ]
      },
      {
        "name": "FRILLISH",
        "levels": [
          36,
          null
        ]
      },
      {
        "name": "MANTYKE",
        "levels": [
          36,
          null
        ]
      }
    ]
  },
  {
    "location": "Route 8",
    "Land": [
      {
        "name": "MAGHAT",
        "levels": [
          29,
          null
        ]
      },
      {
        "name": "MELLOWN",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "ARTSY",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "PRISY",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "GRASSES",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "MELLOWN",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "LAMCOUD",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "LAMCOUD",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "PRISY",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "MELONBOY",
        "levels": [
          28,
          29
        ]
      }
    ],
    "OldRod": [
      {
        "name": "FEEBAS",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          23,
          25
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          20,
          25
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      }
    ]
  },
  {
    "location": "Route 9",
    "Water": [
      {
        "name": "PLASTOLPHIN",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "BASCULIN",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "PLASTOLPHIN",
        "levels": [
          30,
          31
        ]
      }
    ],
    "OldRod": [
      {
        "name": "REMORAID",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "REMORAID",
        "levels": [
          29,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          20,
          25
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      }
    ]
  },
  {
    "location": "Surfin City",
    "Water": [
      {
        "name": "PLASTOLPHIN",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "FLOATUBE",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "BATTIE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          30,
          32
        ]
      }
    ],
    "OldRod": [
      {
        "name": "FEEBAS",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          23,
          25
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          20,
          25
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          25,
          null
        ]
      },
      {
        "name": "INKAY",
        "levels": [
          25,
          null
        ]
      }
    ]
  },
  {
    "location": "Southern Island",
    "Land": [
      {
        "name": "SWABLU",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "NATU",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "DROWZEE",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "MUNNA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "ESPURR",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "NATU",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "MUNNA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "SWABLU",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "KADABRA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "GOTHITA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "KADABRA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "DROWZEE",
        "levels": [
          30,
          null
        ]
      }
    ]
  },
  {
    "location": "Seaside Cavern",
    "Cave": [
      {
        "name": "FLOWJAW",
        "levels": [
          29,
          32
        ]
      },
      {
        "name": "SPONGEE",
        "levels": [
          29,
          32
        ]
      },
      {
        "name": "FLOWJAW",
        "levels": [
          29,
          32
        ]
      },
      {
        "name": "ZYKLAS",
        "levels": [
          29,
          32
        ]
      },
      {
        "name": "SPONGEE",
        "levels": [
          29,
          32
        ]
      },
      {
        "name": "SPONGEE",
        "levels": [
          29,
          32
        ]
      },
      {
        "name": "ZYKLAS",
        "levels": [
          29,
          32
        ]
      },
      {
        "name": "SPONGEE",
        "levels": [
          29,
          32
        ]
      },
      {
        "name": "FLOWJAW",
        "levels": [
          29,
          32
        ]
      },
      {
        "name": "SPONGEE",
        "levels": [
          29,
          32
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          32,
          34
        ]
      }
    ],
    "Water": [
      {
        "name": "PLASTOLPHIN",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          30,
          32
        ]
      }
    ],
    "OldRod": [
      {
        "name": "FEEBAS",
        "levels": [
          32,
          36
        ]
      },
      {
        "name": "FEEBAS",
        "levels": [
          33,
          35
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "POLIWAG",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "POLIWAG",
        "levels": [
          30,
          35
        ]
      },
      {
        "name": "POLIWHIRL",
        "levels": [
          35,
          37
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "SHELLDER",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          35,
          null
        ]
      },
      {
        "name": "SHELLDER",
        "levels": [
          35,
          null
        ]
      }
    ]
  },
  {
    "location": "Frosty Forest 2",
    "Land": [
      {
        "name": "SNOVER",
        "levels": [
          5,
          7
        ]
      },
      {
        "name": "BERGMITE",
        "levels": [
          5,
          6
        ]
      },
      {
        "name": "SMOOCHUM",
        "levels": [
          3,
          6
        ]
      },
      {
        "name": "SEEL",
        "levels": [
          6,
          7
        ]
      },
      {
        "name": "SMOOCHUM",
        "levels": [
          3,
          7
        ]
      },
      {
        "name": "VANILLITE",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "CUBCHOO",
        "levels": [
          7,
          8
        ]
      },
      {
        "name": "SNOVER",
        "levels": [
          5,
          7
        ]
      },
      {
        "name": "CUBCHOO",
        "levels": [
          6,
          null
        ]
      },
      {
        "name": "BERGMITE",
        "levels": [
          5,
          6
        ]
      },
      {
        "name": "DELIBIRD",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "WOLFMAN",
        "levels": [
          5,
          7
        ]
      }
    ]
  },
  {
    "location": "Shock Island",
    "Land": [
      {
        "name": "ELEKID",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "PIKACHU",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "JOLTIK",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "JOLTIK",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "BLITZLE",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "TYNAMO",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "TYNAMO",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "PLUSLE",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "PACHIRISU",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "DEDENNE",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "MINUN",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "BLITZLE",
        "levels": [
          30,
          null
        ]
      }
    ]
  },
  {
    "location": "Flare Island",
    "Land": [
      {
        "name": "MAGBY",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "PONYTA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "HOUNDOUR",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "VULPIX",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "GROWLITHE",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "FLETCHINDER",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "PANSEAR",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "GROWLITHE",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "NUMEL",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "TORKOAL",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "PONYTA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "SLUGMA",
        "levels": [
          30,
          null
        ]
      }
    ]
  },
  {
    "location": "Frost Island",
    "Land": [
      {
        "name": "CUBCHOO",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "BERGMITE",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "CRYOGONAL",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "SWINUB",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "PILOSWINE",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "SNEASEL",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "GLALIE",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "SNORUNT",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "SNEASEL",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "AMAURA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "CUBCHOO",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "CLOYSTER",
        "levels": [
          30,
          null
        ]
      }
    ]
  },
  {
    "location": "Seaside Cavern",
    "Cave": [
      {
        "name": "FLOWJAW",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "ICEIS",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "SMOMAN",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "COOLOR",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "COOLOR",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "COCAITURD",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SMOMAN",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "COCAITURD",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "COOLOR",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "FLOWJAW",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SMOMAN",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "ICEIS",
        "levels": [
          32,
          34
        ]
      }
    ],
    "Water": [
      {
        "name": "PLASTOLPHIN",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          30,
          32
        ]
      }
    ],
    "OldRod": [
      {
        "name": "CHINCHOU",
        "levels": [
          30,
          35
        ]
      },
      {
        "name": "CHINCHOU",
        "levels": [
          33,
          35
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "WOOPER",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "WOOPER",
        "levels": [
          30,
          35
        ]
      },
      {
        "name": "QUAGSIRE",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "REMORAID",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "WAILMER",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "QWILFISH",
        "levels": [
          33,
          38
        ]
      },
      {
        "name": "WAILMER",
        "levels": [
          36,
          null
        ]
      },
      {
        "name": "REMORAID",
        "levels": [
          36,
          null
        ]
      }
    ]
  },
  {
    "location": "Echo Cavern",
    "Cave": [
      {
        "name": "BUDSEE",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "WHISMUR",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "MICROETTE",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "CHIMECHO",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "CHIMECHO",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "MICROETTE",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "NOIBAT",
        "levels": [
          24,
          25
        ]
      },
      {
        "name": "BUDSEE",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "KRICKETUNE",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "WHISMUR",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "JIGGLYPUFF",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "NOIBAT",
        "levels": [
          23,
          25
        ]
      }
    ]
  },
  {
    "location": "Grass Place",
    "Cave": [
      {
        "name": "ODDISH",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "EXEGGCUTE",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "HOPPIP",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "SUNKERN",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "SUNKERN",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "HOPPIP",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "EXEGGCUTE",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          15,
          null
        ]
      }
    ]
  },
  {
    "location": "Grass Place",
    "Cave": [
      {
        "name": "SEEDOT",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "SHROOMISH",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "BUDEW",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "CHERUBI",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "PANSAGE",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "PETILIL",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "PETILIL",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "CHERUBI",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "BUDEW",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "TROPIUS",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "SHROOMISH",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "SEEDOT",
        "levels": [
          15,
          null
        ]
      }
    ]
  },
  {
    "location": "Grass Place",
    "Cave": [
      {
        "name": "FOONGUS",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "COTTONEE",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "FERROSEED",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "SKIDDO",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "PANSAGE",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "SKIDDO",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "FERROSEED",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "FOONGUS",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "COTTONEE",
        "levels": [
          14,
          15
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "CARNIVINE",
        "levels": [
          15,
          null
        ]
      }
    ]
  },
  {
    "location": "The Ranch",
    "Land": [
      {
        "name": "MAREEP",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "BELCALF",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "SHINX",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "SPOINK",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "FURFROU",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "POOCHYENA",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "BELCALF",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "POOCHYENA",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "SHINX",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "SPOINK",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "YEERBY",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "FURFROU",
        "levels": [
          9,
          10
        ]
      }
    ]
  },
  {
    "location": "Field",
    "Land": [
      {
        "name": "NIDORANfE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "NIDORANmA",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "PURRLOIN",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "STANTLER",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "NIDORANfE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "SKITTY",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "SEVIPER",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "ZANGOOSE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "NIDORANmA",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "SKITTY",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "PURRLOIN",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "STANTLER",
        "levels": [
          9,
          10
        ]
      }
    ]
  },
  {
    "location": "The Cave Cave",
    "Cave": [
      {
        "name": "ZUBAT",
        "levels": [
          21,
          22
        ]
      },
      {
        "name": "GLIGAR",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "PHANPY",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "WOOBAT",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "DRILBUR",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "SANDILE",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "SANDILE",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "DRILBUR",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "WOOBAT",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "PHANPY",
        "levels": [
          22,
          23
        ]
      },
      {
        "name": "GLIGAR",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "WYNAUT",
        "levels": [
          21,
          23
        ]
      }
    ]
  },
  {
    "location": "Faroff Town",
    "Land": [
      {
        "name": "NIXOX",
        "levels": [
          18,
          24
        ]
      },
      {
        "name": "PLAYNE",
        "levels": [
          18,
          24
        ]
      },
      {
        "name": "BAIRY",
        "levels": [
          18,
          24
        ]
      },
      {
        "name": "NIXOX",
        "levels": [
          18,
          24
        ]
      },
      {
        "name": "PLAYNE",
        "levels": [
          19,
          24
        ]
      },
      {
        "name": "NIXOX",
        "levels": [
          18,
          24
        ]
      },
      {
        "name": "SPOTNI",
        "levels": [
          19,
          24
        ]
      },
      {
        "name": "BAIRY",
        "levels": [
          18,
          24
        ]
      },
      {
        "name": "HOMPUFF",
        "levels": [
          18,
          24
        ]
      },
      {
        "name": "SPOTNI",
        "levels": [
          18,
          24
        ]
      },
      {
        "name": "PLAYNE",
        "levels": [
          19,
          24
        ]
      },
      {
        "name": "ARTSY",
        "levels": [
          19,
          24
        ]
      }
    ]
  },
  {
    "location": "Seaside Cavern",
    "Cave": [
      {
        "name": "FLOWJAW",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SPONGEE",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "FLOWJAW",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SMOMAN",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "COOLOR",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "FLOWJAW",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SPONGEE",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "COOLOR",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SPONGEE",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          32,
          34
        ]
      }
    ],
    "Water": [
      {
        "name": "FABREEL",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          30,
          32
        ]
      }
    ],
    "OldRod": [
      {
        "name": "GOLDEEN",
        "levels": [
          30,
          35
        ]
      },
      {
        "name": "GOLDEEN",
        "levels": [
          33,
          35
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "HORSEA",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          30,
          35
        ]
      },
      {
        "name": "SEADRA",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "BARBOACH",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "STARYU",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "STARMIE",
        "levels": [
          33,
          38
        ]
      },
      {
        "name": "STARYU",
        "levels": [
          36,
          null
        ]
      },
      {
        "name": "BARBOACH",
        "levels": [
          36,
          null
        ]
      }
    ]
  },
  {
    "location": "Route 7",
    "Water": [
      {
        "name": "FLOATUBE",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "FLOATUBE",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "BATTIE",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "BATTIE",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          31,
          35
        ]
      }
    ],
    "OldRod": [
      {
        "name": "LUVDISC",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "LUVDISC",
        "levels": [
          33,
          35
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "SHELLOS",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "SHELLOS",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "GASTRODON",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "MANTYKE",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "FRILLISH",
        "levels": [
          33,
          36
        ]
      },
      {
        "name": "ALOMOMOLA",
        "levels": [
          33,
          38
        ]
      },
      {
        "name": "FRILLISH",
        "levels": [
          36,
          null
        ]
      },
      {
        "name": "MANTYKE",
        "levels": [
          36,
          null
        ]
      }
    ]
  },
  {
    "location": "Synth City",
    "OldRod": [
      {
        "name": "BOTTLEO",
        "levels": [
          37,
          null
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          36,
          38
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "PLASTOLPHIN",
        "levels": [
          37,
          38
        ]
      },
      {
        "name": "ALOMOMOLA",
        "levels": [
          37,
          38
        ]
      },
      {
        "name": "PLASTOLPHIN",
        "levels": [
          37,
          38
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "DRATINI",
        "levels": [
          38,
          null
        ]
      },
      {
        "name": "BASCULIN",
        "levels": [
          37,
          38
        ]
      },
      {
        "name": "DRATINI",
        "levels": [
          37,
          39
        ]
      },
      {
        "name": "BASCULIN",
        "levels": [
          37,
          null
        ]
      },
      {
        "name": "DRATINI",
        "levels": [
          37,
          39
        ]
      }
    ]
  },
  {
    "location": "Junkyard",
    "Land": [
      {
        "name": "OTYAB",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "TIROAR",
        "levels": [
          35,
          37
        ]
      },
      {
        "name": "BULBIGHT",
        "levels": [
          36,
          38
        ]
      },
      {
        "name": "BOXO",
        "levels": [
          35,
          36
        ]
      },
      {
        "name": "GUMMI",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "RECYCLAT",
        "levels": [
          37,
          38
        ]
      },
      {
        "name": "SHATTARATE",
        "levels": [
          35,
          39
        ]
      },
      {
        "name": "SYNTHITE",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "BULBIGHT",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "TIROAR",
        "levels": [
          35,
          37
        ]
      },
      {
        "name": "RUBBERO",
        "levels": [
          35,
          36
        ]
      },
      {
        "name": "OTYAB",
        "levels": [
          36,
          37
        ]
      }
    ]
  },
  {
    "location": "Store House",
    "Cave": [
      {
        "name": "GRIMER",
        "levels": [
          37,
          null
        ]
      },
      {
        "name": "KOFFING",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "STUNKY",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "GULPIN",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "TRUBBISH",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "MAGNEMITE",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "MAGNEMITE",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "TRUBBISH",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "STUNKY",
        "levels": [
          35,
          37
        ]
      },
      {
        "name": "GULPIN",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "KOFFING",
        "levels": [
          36,
          37
        ]
      },
      {
        "name": "GRIMER",
        "levels": [
          36,
          37
        ]
      }
    ]
  },
  {
    "location": "Abandoned Mansion",
    "Cave": [
      {
        "name": "CARPLA",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "SEATIE",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "JGOLETT",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "BRIGO",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "BOXO",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "MATZIO",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "EYAT",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "ELEOLER",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "SEATIE",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "DREIDELSPI",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "HANUKKORA",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "DAVISTAR",
        "levels": [
          30,
          36
        ]
      }
    ]
  },
  {
    "location": "Cybergate City",
    "Water": [
      {
        "name": "FLOATUBE",
        "levels": [
          25,
          28
        ]
      },
      {
        "name": "BATTIE",
        "levels": [
          25,
          28
        ]
      },
      {
        "name": "RUBADUBB",
        "levels": [
          28,
          null
        ]
      },
      {
        "name": "BATTIE",
        "levels": [
          25,
          28
        ]
      },
      {
        "name": "FLOATUBE",
        "levels": [
          25,
          28
        ]
      }
    ]
  },
  {
    "location": "Abandone Town",
    "Land": [
      {
        "name": "LARVITAR",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "GOOMY",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "BRONZOR",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "TYMPOLE",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "BRICKEN",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "PINSIR",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "BRICKEN",
        "levels": [
          34,
          36
        ]
      },
      {
        "name": "PINSIR",
        "levels": [
          34,
          36
        ]
      },
      {
        "name": "TYMPOLE",
        "levels": [
          34,
          36
        ]
      },
      {
        "name": "BRONZOR",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "STUNFISK",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "LARVITAR",
        "levels": [
          30,
          36
        ]
      }
    ]
  },
  {
    "location": "Abandoned gym",
    "Cave": [
      {
        "name": "MACHOP",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "MAKUHITA",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "MEDITITE",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "CROAGUNK",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "HERACROSS",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "SAWK",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "HERACROSS",
        "levels": [
          39,
          42
        ]
      },
      {
        "name": "THROH",
        "levels": [
          30,
          36
        ]
      },
      {
        "name": "CROAGUNK",
        "levels": [
          40,
          41
        ]
      },
      {
        "name": "MEDITITE",
        "levels": [
          40,
          41
        ]
      },
      {
        "name": "MAKUHITA",
        "levels": [
          40,
          41
        ]
      },
      {
        "name": "MACHOP",
        "levels": [
          40,
          null
        ]
      }
    ]
  },
  {
    "location": "Abandoned Gym BF",
    "Cave": [
      {
        "name": "SCRAGGY",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "TIMBURR",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "MIENFOO",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "PANCHAM",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "HAWLUCHA",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "HITMONCHAN",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "HAWLUCHA",
        "levels": [
          39,
          42
        ]
      },
      {
        "name": "HITMONLEE",
        "levels": [
          39,
          42
        ]
      },
      {
        "name": "PANCHAM",
        "levels": [
          40,
          41
        ]
      },
      {
        "name": "MIENFOO",
        "levels": [
          40,
          41
        ]
      },
      {
        "name": "TIMBURR",
        "levels": [
          40,
          41
        ]
      },
      {
        "name": "SCRAGGY",
        "levels": [
          40,
          null
        ]
      }
    ]
  },
  {
    "location": "Upgrade Cave",
    "Cave": [
      {
        "name": "FANIN",
        "levels": [
          42,
          44
        ]
      },
      {
        "name": "ESPIONOT",
        "levels": [
          42,
          43
        ]
      },
      {
        "name": "SONOTECH",
        "levels": [
          42,
          45
        ]
      },
      {
        "name": "NANOS",
        "levels": [
          42,
          44
        ]
      },
      {
        "name": "TWEETER",
        "levels": [
          42,
          43
        ]
      },
      {
        "name": "MYOSMIC",
        "levels": [
          42,
          44
        ]
      },
      {
        "name": "NANOS",
        "levels": [
          42,
          44
        ]
      },
      {
        "name": "FEBORIUS",
        "levels": [
          42,
          43
        ]
      },
      {
        "name": "SYNTHITE",
        "levels": [
          42,
          44
        ]
      },
      {
        "name": "SONOTECH",
        "levels": [
          42,
          44
        ]
      },
      {
        "name": "ESPIONOT",
        "levels": [
          41,
          45
        ]
      },
      {
        "name": "FANIN",
        "levels": [
          42,
          45
        ]
      }
    ]
  },
  {
    "location": "Upgrade Cave BF",
    "Cave": [
      {
        "name": "FANIN",
        "levels": [
          44,
          45
        ]
      },
      {
        "name": "ESPIONOT",
        "levels": [
          43,
          45
        ]
      },
      {
        "name": "SONOTECH",
        "levels": [
          43,
          45
        ]
      },
      {
        "name": "NANOS",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "TWEETER",
        "levels": [
          43,
          null
        ]
      },
      {
        "name": "MOUSEE",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "NANOS",
        "levels": [
          44,
          45
        ]
      },
      {
        "name": "MOUSEE",
        "levels": [
          43,
          null
        ]
      },
      {
        "name": "SYNTHITE",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "SONOTECH",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "ESPIONOT",
        "levels": [
          44,
          45
        ]
      },
      {
        "name": "FANIN",
        "levels": [
          44,
          45
        ]
      }
    ]
  },
  {
    "location": "Upgrade Cave BF",
    "Cave": [
      {
        "name": "PORYGON",
        "levels": [
          44,
          45
        ]
      },
      {
        "name": "BELDUM",
        "levels": [
          43,
          45
        ]
      },
      {
        "name": "KLINK",
        "levels": [
          43,
          45
        ]
      },
      {
        "name": "MAGNETON",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "ELECTRODE",
        "levels": [
          43,
          null
        ]
      },
      {
        "name": "BELDUM",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "PORYGON2",
        "levels": [
          44,
          45
        ]
      },
      {
        "name": "ELECTRODE",
        "levels": [
          43,
          null
        ]
      },
      {
        "name": "MAGNETON",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "KLINK",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "BELDUM",
        "levels": [
          44,
          45
        ]
      },
      {
        "name": "PORYGON",
        "levels": [
          44,
          45
        ]
      }
    ]
  },
  {
    "location": "Field",
    "Land": [
      {
        "name": "LITLEO",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "LILLIPUP",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "EKANS",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "ELECTRIKE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "DEERLING",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "BUNEARY",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "BUNEARY",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "DEERLING",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "ELECTRIKE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "EKANS",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "LILLIPUP",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "LITLEO",
        "levels": [
          9,
          10
        ]
      }
    ]
  },
  {
    "location": "Field",
    "Land": [
      {
        "name": "MEOWTH",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "AIPOM",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "SNUBBULL",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "TEDDIURSA",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "RIOLU",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "RIOLU",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "TEDDIURSA",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "SNUBBULL",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "AIPOM",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          9,
          10
        ]
      }
    ]
  },
  {
    "location": "Hive",
    "Cave": [
      {
        "name": "COMBEE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "DURANT",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "LEDYBA",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "SPINARAK",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "PINECO",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "SCYTHER",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "SCYTHER",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "PINECO",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "SPINARAK",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "LEDYBA",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "DURANT",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "COMBEE",
        "levels": [
          10,
          null
        ]
      }
    ]
  },
  {
    "location": "Hive BF",
    "Cave": [
      {
        "name": "YANMA",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "SURSKIT",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "NINCADA",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "VOLBEAT",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "BURMY",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "SHUCKLE",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "SHUCKLE",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "BURMY",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "ILLUMISE",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "NINCADA",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "SURSKIT",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "YANMA",
        "levels": [
          10,
          null
        ]
      }
    ]
  },
  {
    "location": "Hive BF",
    "Cave": [
      {
        "name": "DWEBBLE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "LARVESTA",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "SKORUPI",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "KARRABLAST",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "SHELMET",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "SHELMET",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "KARRABLAST",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "SKORUPI",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "LARVESTA",
        "levels": [
          10,
          null
        ]
      },
      {
        "name": "DWEBBLE",
        "levels": [
          10,
          null
        ]
      }
    ]
  },
  {
    "location": "Thunder Shrine",
    "Land": [
      {
        "name": "ELECTABUZZ",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "MANECTRIC",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "GALVANTULA",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "GALVANTULA",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "ZEBSTRIKA",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "EELEKTRIK",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "EELEKTRIK",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "PIKACHU",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "PIKACHU",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "ZEBSTRIKA",
        "levels": [
          39,
          41
        ]
      },
      {
        "name": "MANECTRIC",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "ELECTABUZZ",
        "levels": [
          39,
          40
        ]
      }
    ]
  },
  {
    "location": "Volcano Shrine",
    "Land": [
      {
        "name": "MAGMAR",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "HOUNDOOM",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "CAMERUPT",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "MAGCARGO",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "LARVESTA",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "JUZT",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "JUZT",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "LARVESTA",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "MAGCARGO",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "CAMERUPT",
        "levels": [
          39,
          41
        ]
      },
      {
        "name": "HOUNDOOM",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "MAGMAR",
        "levels": [
          39,
          40
        ]
      }
    ]
  },
  {
    "location": "Three Lake Island",
    "Land": [
      {
        "name": "MRMIME",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "GIRAFARIG",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "SPINDA",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "CASTFORM",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "ZORUA",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "KLEFKI",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "KLEFKI",
        "levels": [
          40,
          null
        ]
      },
      {
        "name": "ZORUA",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "CASTFORM",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "SPINDA",
        "levels": [
          39,
          41
        ]
      },
      {
        "name": "GIRAFARIG",
        "levels": [
          39,
          40
        ]
      },
      {
        "name": "MRMIME",
        "levels": [
          39,
          40
        ]
      }
    ]
  },
  {
    "location": "Liberty Island",
    "Land": [
      {
        "name": "SKWOVET",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "MIMEJR",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "BONSLY",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "GLAMEOW",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "MINCCINO",
        "levels": [
          3,
          7
        ]
      },
      {
        "name": "HELIOPTILE",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "HELIOPTILE",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "MINCCINO",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "GLAMEOW",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "MUNCHLAX",
        "levels": [
          3,
          7
        ]
      },
      {
        "name": "MIMEJR",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          3,
          7
        ]
      }
    ]
  },
  {
    "location": "Victory Chamber",
    "Cave": [
      {
        "name": "SOLOSIS",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "GOTHITA",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "MINUN",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "PLUSLE",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "PACHIRISU",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "EMOLGA",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "EMOLGA",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "ELGYEM",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "ELGYEM",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "ZORUA",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "HONEDGE",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "AXEW",
        "levels": [
          3,
          8
        ]
      }
    ]
  },
  {
    "location": "Prehistoric Island Gate",
    "Land": [
      {
        "name": "AMAURA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "ARCHEN",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "SHIELDON",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "YANMA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "ARCHEN",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "SHIELDON",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "YANMA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "SHIELDON",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ARCHEN",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "AMAURA",
        "levels": [
          29,
          30
        ]
      }
    ]
  },
  {
    "location": "Shallows Cave",
    "Cave": [
      {
        "name": "KABUTO",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "ANORITH",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "LILEEP",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "OMANYTE",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "KABUTO",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "ANORITH",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "LILEEP",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "KABUTO",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "OMANYTE",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "LILEEP",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "ANORITH",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "KABUTO",
        "levels": [
          29,
          30
        ]
      }
    ],
    "Water": [
      {
        "name": "OMANYTE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "TIRTOUGA",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "RELICANTH",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "TIRTOUGA",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "ANORITH",
        "levels": [
          30,
          32
        ]
      }
    ],
    "OldRod": [
      {
        "name": "RELICANTH",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "RELICANTH",
        "levels": [
          29,
          30
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "RELICANTH",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "RELICANTH",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ELDING",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "ELDING",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ELDING",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ELDING",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "RELICANTH",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ELDING",
        "levels": [
          29,
          30
        ]
      }
    ]
  },
  {
    "location": "The Slums",
    "Cave": [
      {
        "name": "RATICATE",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "UNFEZANT",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "HOVEROT",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "BEETARP",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "GUMMI",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "GUMMI",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "BEETARP",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "HOVEROT",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "MUK",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "HAICAW",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "PRATICATE",
        "levels": [
          53,
          54
        ]
      }
    ]
  },
  {
    "location": "Volcano Interior",
    "Cave": [
      {
        "name": "CAMERUPT",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "SKARMORY",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "MAGMOCKET",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "JUZT",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "DRUDDIGON",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "SABLEYE",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "DRUDDIGON",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "SABLEYE",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "JUZT",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "MAGMOCKET",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "SKARMORY",
        "levels": [
          53,
          54
        ]
      },
      {
        "name": "FIREPIRE",
        "levels": [
          53,
          54
        ]
      }
    ]
  },
  {
    "location": "Windy Plateau",
    "Land": [
      {
        "name": "DRIFBLIM",
        "levels": [
          52,
          54
        ]
      },
      {
        "name": "BOUFFALANT",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "JUMPLUFF",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "VULLABY",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "RUFFLET",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "TROPIUS",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "TROPIUS",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "RUFFLET",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "VULLABY",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "JUMPLUFF",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "BOUFFALANT",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "DRIFBLIM",
        "levels": [
          52,
          53
        ]
      }
    ]
  },
  {
    "location": "Sewers",
    "Cave": [
      {
        "name": "PRATICATE",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "SWOOBAT",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "MUK",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "BOTTLEODRAKE",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "OTYASH",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "TESKARE",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "TESKARE",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "OTYASH",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "BOTTLEODRAKE",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "MUK",
        "levels": [
          53,
          null
        ]
      },
      {
        "name": "SWOOBAT",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "PRATICATE",
        "levels": [
          51,
          null
        ]
      }
    ]
  },
  {
    "location": "Route 10",
    "Land": [
      {
        "name": "SOLA",
        "levels": [
          52,
          54
        ]
      },
      {
        "name": "ANOL",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "GRINIX",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "BEHEMIST",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "LAMCOUD",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "EUPHOREYE",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "EUPHOREYE",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "LAMCOUD",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "BEHEMIST",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "GRINIX",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "ANOL",
        "levels": [
          52,
          53
        ]
      },
      {
        "name": "SOLA",
        "levels": [
          52,
          53
        ]
      }
    ]
  },
  {
    "location": "Liberty Cavern",
    "Cave": [
      {
        "name": "KECLEON",
        "levels": [
          3,
          7
        ]
      },
      {
        "name": "GLIGAR",
        "levels": [
          3,
          7
        ]
      },
      {
        "name": "GOLETT",
        "levels": [
          7,
          8
        ]
      },
      {
        "name": "BAGON",
        "levels": [
          6,
          7
        ]
      },
      {
        "name": "KECLEON",
        "levels": [
          6,
          7
        ]
      },
      {
        "name": "DUNSPARCE",
        "levels": [
          6,
          7
        ]
      },
      {
        "name": "DUNSPARCE",
        "levels": [
          6,
          7
        ]
      },
      {
        "name": "KECLEON",
        "levels": [
          6,
          7
        ]
      },
      {
        "name": "BAGON",
        "levels": [
          3,
          7
        ]
      },
      {
        "name": "GOLETT",
        "levels": [
          3,
          7
        ]
      },
      {
        "name": "PAWNIARD",
        "levels": [
          3,
          7
        ]
      },
      {
        "name": "GIBLE",
        "levels": [
          3,
          7
        ]
      }
    ]
  },
  {
    "location": "Misty Beach",
    "Water": [
      {
        "name": "BATTIE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "FLOATUBE",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "BATTIE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          30,
          32
        ]
      }
    ],
    "OldRod": [
      {
        "name": "SUSHISH",
        "levels": [
          15,
          null
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          15,
          16
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "CLAUNCHER",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "SKRELP",
        "levels": [
          20,
          25
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          25,
          null
        ]
      },
      {
        "name": "SUSHISH",
        "levels": [
          25,
          null
        ]
      }
    ]
  },
  {
    "location": "Sewers (Drained)",
    "Cave": [
      {
        "name": "PRATICATE",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "SWOOBAT",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "MUK",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "BOTTLEODRAKE",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "OTYASH",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "TESKARE",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "TESKARE",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "OTYASH",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "BOTTLEODRAKE",
        "levels": [
          50,
          52
        ]
      },
      {
        "name": "MUK",
        "levels": [
          53,
          null
        ]
      },
      {
        "name": "SWOOBAT",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          51,
          null
        ]
      }
    ]
  },
  {
    "location": "Nuclear Forest",
    "Land": [
      {
        "name": "BARAB",
        "levels": [
          50,
          54
        ]
      },
      {
        "name": "RADIEN",
        "levels": [
          48,
          53
        ]
      },
      {
        "name": "ZILLY",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "CREEPOSS",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "ZILLY",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "BANOR",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "RADIEN",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "BANOR",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "CREEPOSS",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "WDEINO",
        "levels": [
          49,
          53
        ]
      },
      {
        "name": "RODAC",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "DORATGON",
        "levels": [
          52,
          53
        ]
      }
    ],
    "Water": [
      {
        "name": "RAYDIAT",
        "levels": [
          53,
          null
        ]
      },
      {
        "name": "RAYDIAT",
        "levels": [
          53,
          null
        ]
      },
      {
        "name": "RAYDIAT",
        "levels": [
          53,
          null
        ]
      },
      {
        "name": "RAYDIAT",
        "levels": [
          53,
          null
        ]
      },
      {
        "name": "RAYDIAT",
        "levels": [
          53,
          null
        ]
      }
    ]
  },
  {
    "location": "Misty Cavern",
    "Cave": [
      {
        "name": "PSYDUCK",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "MARILL",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "WOOPER",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "BINACLE",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "CLAMPERL",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "SHELLOS",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "SHELLOS",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "CLAMPERL",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "CORSOLA",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "WOOPER",
        "levels": [
          10,
          13
        ]
      },
      {
        "name": "MARILL",
        "levels": [
          10,
          14
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          10,
          14
        ]
      }
    ],
    "OldRod": [
      {
        "name": "LOTAD",
        "levels": [
          14,
          null
        ]
      },
      {
        "name": "POLIWAG",
        "levels": [
          14,
          null
        ]
      }
    ]
  },
  {
    "location": "The Library",
    "Cave": [
      {
        "name": "ENCYCLODIA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "GARGIE",
        "levels": [
          31,
          null
        ]
      },
      {
        "name": "WILLISP",
        "levels": [
          31,
          null
        ]
      },
      {
        "name": "CARPLA",
        "levels": [
          31,
          null
        ]
      },
      {
        "name": "UNOWN",
        "levels": [
          15,
          31
        ]
      },
      {
        "name": "COSMIX",
        "levels": [
          31,
          null
        ]
      },
      {
        "name": "COSMIX",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "CHATOT",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "CARPLA",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "WILLISP",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "GARGIE",
        "levels": [
          31,
          null
        ]
      },
      {
        "name": "ENCYCLODIA",
        "levels": [
          31,
          33
        ]
      }
    ]
  },
  {
    "location": "Ocean",
    "Water": [
      {
        "name": "BATTIE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "FLOATUBE",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "BATTIE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          30,
          32
        ]
      }
    ],
    "OldRod": [
      {
        "name": "FEEBAS",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          23,
          25
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "CLAUNCHER",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "SKRELP",
        "levels": [
          20,
          25
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          25,
          null
        ]
      },
      {
        "name": "SUSHISH",
        "levels": [
          25,
          null
        ]
      }
    ]
  },
  {
    "location": "Cherno City",
    "Water": [
      {
        "name": "MUK",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "RAYDIAT",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "SUSHISH",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "RAYDIAT",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "MUK",
        "levels": [
          53,
          55
        ]
      }
    ],
    "OldRod": [
      {
        "name": "RAYDIAT",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "RAYDIAT",
        "levels": [
          55,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "SUSHISH",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "RAYDIAT",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "RAYDIAT",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "SUSHISH",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "RAYDIAT",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "SUSHISH",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "MILOTIC",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "RAYDIAT",
        "levels": [
          55,
          null
        ]
      }
    ]
  },
  {
    "location": "Humid Forest",
    "Land": [
      {
        "name": "SLAKOTH",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "DUCKLETT",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "PANPOUR",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "PANSAGE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "PANSEAR",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "EEVEE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "EEVEE",
        "levels": [
          9,
          11
        ]
      },
      {
        "name": "EEVEE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "PANSEAR",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "PANPOUR",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "DUCKLETT",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "SLAKOTH",
        "levels": [
          9,
          10
        ]
      }
    ]
  },
  {
    "location": "Power Plant",
    "Cave": [
      {
        "name": "ATTOT",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "NUKOMB",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "NUKOMB",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "BARAB",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "BARAB",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "ATTOT",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "BARAB",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "ATTOT",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "NUKOMB",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "ATTOT",
        "levels": [
          54,
          56
        ]
      }
    ]
  },
  {
    "location": "Pagan Woods",
    "Land": [
      {
        "name": "WILLOST",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "DEVIO",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "ANGUAR",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "BUSHIN",
        "levels": [
          54,
          55
        ]
      },
      {
        "name": "GUBLIN",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "ACIES",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "LUN",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "WILLOST",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "BUSHIN",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "ANGUAR",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "DEVIO",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "GOATKUN",
        "levels": [
          53,
          55
        ]
      }
    ]
  },
  {
    "location": "Iron Works",
    "Cave": [
      {
        "name": "STEELIX",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "MAGNETON",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "TURBIND",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "LIGHTULB",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "AMPHAROS",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "AMPHAROS",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "PLASBUL",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "TURBIND",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "SCIZOR",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "STEELIX",
        "levels": [
          57,
          59
        ]
      }
    ]
  },
  {
    "location": "Moon Island",
    "LandDay": [
      {
        "name": "ALTARIA",
        "levels": [
          56,
          57
        ]
      },
      {
        "name": "KLEFKI",
        "levels": [
          55,
          56
        ]
      },
      {
        "name": "VOLCARONA",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "SUNFLORA",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "HELIOLISK",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "SOLROCK",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "SOLROCK",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "HELIOLISK",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "SUNFLORA",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "KLEFKI",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "VOLCARONA",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "ALTARIA",
        "levels": [
          55,
          57
        ]
      }
    ],
    "LandNight": [
      {
        "name": "NOCTOWL",
        "levels": [
          56,
          57
        ]
      },
      {
        "name": "HYPNO",
        "levels": [
          56,
          57
        ]
      },
      {
        "name": "DEINO",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "HONCHKROW",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "CLEFAIRY",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "LUNATONE",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "LUNATONE",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "CLEFAIRY",
        "levels": [
          56,
          57
        ]
      },
      {
        "name": "HONCHKROW",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "DEINO",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "HYPNO",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "NOCTOWL",
        "levels": [
          55,
          57
        ]
      }
    ]
  },
  {
    "location": "Gold Tower F2",
    "Cave": [
      {
        "name": "UNOWN",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "HAUNTER",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "MURKROW",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "MISDREAVUS",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "XATU",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "AMPHAROS",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "AMPHAROS",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "XATU",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "MISDREAVUS",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "MURKROW",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "HAUNTER",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "UNOWN",
        "levels": [
          57,
          59
        ]
      }
    ]
  },
  {
    "location": "Gold Tower F3",
    "Cave": [
      {
        "name": "UNOWN",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "HAUNTER",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "MURKROW",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "MISDREAVUS",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "XATU",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "AMPHAROS",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "AMPHAROS",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "XATU",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "MISDREAVUS",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "MURKROW",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "HAUNTER",
        "levels": [
          57,
          59
        ]
      },
      {
        "name": "UNOWN",
        "levels": [
          57,
          59
        ]
      }
    ]
  },
  {
    "location": "Route 11",
    "Land": [
      {
        "name": "GORALE",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "DOITA",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "LUN",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "ACIES",
        "levels": [
          54,
          55
        ]
      },
      {
        "name": "JETCRAFT",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "ONIGI",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "LIGHTSY",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "JETCRAFT",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "ACIES",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "LUN",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "DOITA",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "GORALE",
        "levels": [
          53,
          55
        ]
      }
    ],
    "Water": [
      {
        "name": "DRUBBER",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "SPLISSPLASH",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "SPLISSPLASH",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "CAROLDEN",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "CAROLDEN",
        "levels": [
          53,
          55
        ]
      }
    ],
    "OldRod": [
      {
        "name": "SUSHISH",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "SUSHISH",
        "levels": [
          55,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "SUSHISH",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "BOTTLEODRAKE",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "DRAGONAIR",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "MILOTIC",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "WARSHIN",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "MILOTIC",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          55,
          null
        ]
      }
    ]
  },
  {
    "location": "Route 12",
    "Land": [
      {
        "name": "ATMOSRO",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "MELLOWN",
        "levels": [
          56,
          57
        ]
      },
      {
        "name": "SATELI",
        "levels": [
          55,
          58
        ]
      },
      {
        "name": "MAGMOCKET",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "CHAIRY",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "WHEELUS",
        "levels": [
          56,
          57
        ]
      },
      {
        "name": "WHEELUS",
        "levels": [
          55,
          58
        ]
      },
      {
        "name": "CHAIRY",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "MAGMOCKET",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "SATELI",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "MELLOWN",
        "levels": [
          55,
          57
        ]
      },
      {
        "name": "ATMOSRO",
        "levels": [
          55,
          57
        ]
      }
    ]
  },
  {
    "location": "Data Fields",
    "Cave": [
      {
        "name": "PIXALL",
        "levels": [
          58,
          59
        ]
      },
      {
        "name": "PORYGON",
        "levels": [
          58,
          59
        ]
      },
      {
        "name": "COMBUG",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "SMIRTSNEK",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "FEBORIUS",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "SMIRTSNEK",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "COMBUG",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "FIREALL",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "PORYGON",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "PORYGON2",
        "levels": [
          59,
          60
        ]
      }
    ]
  },
  {
    "location": "Social Media",
    "Cave": [
      {
        "name": "PIXALL",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "PORYGON",
        "levels": [
          58,
          59
        ]
      },
      {
        "name": "COMBUG",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "SMIRTSNEK",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "FEBORIUS",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "SMIRTSNEK",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "COMBUG",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "PIXALL",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "PORYGON",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "PORYGON2",
        "levels": [
          59,
          60
        ]
      }
    ]
  },
  {
    "location": "Data Mines",
    "Cave": [
      {
        "name": "PIXALL",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "PORYGON",
        "levels": [
          58,
          59
        ]
      },
      {
        "name": "COMBUG",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "SMIRTSNEK",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "FEBORIUS",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "SMIRTSNEK",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "COMBUG",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "PIXALL",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "PORYGON",
        "levels": [
          59,
          60
        ]
      },
      {
        "name": "PORYGON2",
        "levels": [
          59,
          60
        ]
      }
    ]
  },
  {
    "location": "DEEP WEB",
    "Cave": [
      {
        "name": "PIXENSION",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "FEBORIUS",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "BUGLITCH",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "SMIRTRSNEKEK",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "FEBORIUS",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "DRAGURVE",
        "levels": [
          60,
          65
        ]
      },
      {
        "name": "DRAGURVE",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "SMIRTRSNEKEK",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "BUGLITCH",
        "levels": [
          60,
          null
        ]
      },
      {
        "name": "PIXENSION",
        "levels": [
          60,
          null
        ]
      },
      {
        "name": "PORYGON",
        "levels": [
          60,
          null
        ]
      },
      {
        "name": "PORYGON2",
        "levels": [
          60,
          null
        ]
      }
    ]
  },
  {
    "location": "Corrupted Crags",
    "Cave": [
      {
        "name": "VIRURM",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "PORYRUS",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "VIRURM",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "VIRURM",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "PORYRUS",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          60,
          65
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "DRAGURVE",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "VIRURM",
        "levels": [
          60,
          null
        ]
      },
      {
        "name": "PIXENSION",
        "levels": [
          60,
          null
        ]
      },
      {
        "name": "PORYRUSZ",
        "levels": [
          60,
          null
        ]
      },
      {
        "name": "PORYRUS",
        "levels": [
          60,
          null
        ]
      }
    ]
  },
  {
    "location": "Forgotten Depths",
    "Cave": [
      {
        "name": "THEREISONLYHELL",
        "levels": [
          64,
          null
        ]
      },
      {
        "name": "ALLISWELL",
        "levels": [
          64,
          null
        ]
      },
      {
        "name": "TROJORSE",
        "levels": [
          64,
          null
        ]
      },
      {
        "name": "MALWORM",
        "levels": [
          64,
          null
        ]
      },
      {
        "name": "THEREISONLYHELL",
        "levels": [
          64,
          null
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          60,
          65
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "ALLISWELL",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          64,
          null
        ]
      },
      {
        "name": "TROJORSE",
        "levels": [
          64,
          null
        ]
      },
      {
        "name": "THEREISONLYHELL",
        "levels": [
          64,
          null
        ]
      },
      {
        "name": "VIRURM",
        "levels": [
          64,
          null
        ]
      }
    ]
  },
  {
    "location": "Glitch",
    "Cave": [
      {
        "name": "ALLISWELL",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "ALLISWELL",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "BUGLITCH",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "BUGLITCH",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "PORYRUS",
        "levels": [
          62,
          null
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          60,
          65
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "ALLISWELL",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          60,
          null
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          60,
          null
        ]
      },
      {
        "name": "PORYRUSZ",
        "levels": [
          60,
          null
        ]
      },
      {
        "name": "PORYRUS",
        "levels": [
          60,
          null
        ]
      }
    ]
  },
  {
    "location": "Carnivorous Exhibit",
    "Land": [
      {
        "name": "TYRUNT",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "ARCHEN",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "CRANIDOS",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "TYRUNT",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "TYRUNT",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "AERODACTYL",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "AERODACTYL",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "ARCHEN",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "CRANIDOS",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "CRANIDOS",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ARCHEN",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "TYRUNT",
        "levels": [
          29,
          30
        ]
      }
    ]
  },
  {
    "location": "Beneath the Camp",
    "Cave": [
      {
        "name": "GACHAMBER",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "GACHAMBER",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "INFERNACE",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "NUKREEP",
        "levels": [
          61,
          64
        ]
      },
      {
        "name": "OTYASH",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "THEREISONLYHELL",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "TENABLERUS",
        "levels": [
          60,
          65
        ]
      },
      {
        "name": "TENABLERUS",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "CHANDELURE",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "NUKREEP",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "GACHAMBER",
        "levels": [
          62,
          64
        ]
      },
      {
        "name": "WDEINO",
        "levels": [
          63,
          64
        ]
      }
    ]
  },
  {
    "location": "Pagan Woods",
    "Land": [
      {
        "name": "GOATKUN",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "WIZCAP",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "ANGUAR",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "SIXSNEK",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "WILLOST",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "WIZCAP",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "BARGEAR",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "WILLOST",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "SIXSNEK",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "ANGUAR",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "DARKYO",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "GOATKUN",
        "levels": [
          65,
          67
        ]
      }
    ]
  },
  {
    "location": "Arcania City",
    "Land": [
      {
        "name": "LAMCOUD",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "WIZCAP",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "ANGUAR",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "LAMCOUD",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "WILLOST",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "WIZCAP",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "BARGEAR",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "WILLOST",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "WILLOST",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "LIGHTSY",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "LIGHTSY",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "LAMCOUD",
        "levels": [
          65,
          67
        ]
      }
    ]
  },
  {
    "location": "Arcania Gym BF1",
    "Cave": [
      {
        "name": "WIZCAP",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "GOATKUN",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "SNATAN",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "WIZCAP",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "CUMMUNCULUS",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "CUMMUNCULUS",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "SNATAN",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "GOATKUN",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "WIZCAP",
        "levels": [
          67,
          69
        ]
      }
    ]
  },
  {
    "location": "Arcania Gym BF3",
    "Cave": [
      {
        "name": "WIZCAP",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "GOATKUN",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "SNATAN",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "WIZCAP",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "CUMMUNCULUS",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "CUMMUNCULUS",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "SNATAN",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "GOATKUN",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "WIZCAP",
        "levels": [
          67,
          69
        ]
      }
    ]
  },
  {
    "location": "Arcania Gym BF4",
    "Cave": [
      {
        "name": "WIZCAP",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "GOATKUN",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "SNATAN",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          65,
          67
        ]
      },
      {
        "name": "WIZCAP",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "CUMMUNCULUS",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "CUMMUNCULUS",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "SNATAN",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "GOATKUN",
        "levels": [
          67,
          69
        ]
      },
      {
        "name": "WIZCAP",
        "levels": [
          67,
          69
        ]
      }
    ]
  },
  {
    "location": "Route Victor",
    "Water": [
      {
        "name": "BATTIE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "FLOATUBE",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "BATTIE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          30,
          32
        ]
      }
    ],
    "OldRod": [
      {
        "name": "FEEBAS",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          23,
          25
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "SUSHISH",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "SUSHISH",
        "levels": [
          20,
          25
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "SUSHISH",
        "levels": [
          70,
          null
        ]
      }
    ]
  },
  {
    "location": "Victory Road",
    "Cave": [
      {
        "name": "UNIVAX",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "HORRORUX",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "BRICKOR",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "BRICKOR",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "HORRORUX",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "HORRORUX",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "BRICKOR",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "WHEELUS",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          70,
          null
        ]
      }
    ]
  },
  {
    "location": "Eternal Forest",
    "Land": [
      {
        "name": "MELONBOY",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "HOOTHOOT",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "COSMIX",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "HOOTHOOT",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "FLOETTE",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "BRICO",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "ANOL",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "FLOETTE",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "URSARING",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "ARTSY",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "PIDGEOT",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "MELONBOY",
        "levels": [
          20,
          22
        ]
      }
    ]
  },
  {
    "location": "Victory Road",
    "Cave": [
      {
        "name": "DIEBBYUK",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "RYULUNG",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "ELDRAGON",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "WHEELUS",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "HORRORUX",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "HORRORUX",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "HORRORUX",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "WHEELUS",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "ELDRAGON",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "RYULUNG",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          70,
          null
        ]
      }
    ]
  },
  {
    "location": "Victory Road",
    "Land": [
      {
        "name": "ANGEIST",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "STANDO",
        "levels": [
          71,
          null
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "CORAUT",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "STANDO",
        "levels": [
          70,
          null
        ]
      },
      {
        "name": "BRICKOR",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "BRICKOR",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "STANDO",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "CORAUT",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          70,
          71
        ]
      },
      {
        "name": "STANDO",
        "levels": [
          70,
          72
        ]
      },
      {
        "name": "ANGEIST",
        "levels": [
          70,
          72
        ]
      }
    ]
  },
  {
    "location": "Cave",
    "Cave": [
      {
        "name": "DIEBBYUK",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "ELDCRAFTIAN",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "SPIRITOMB",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "ELDCRAFTIAN",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          74,
          null
        ]
      }
    ]
  },
  {
    "location": "RuinsRuinsRuinsRuinsRuinsRuinsRuinsRuins",
    "Cave": [
      {
        "name": "ELDCRAFTIAN",
        "levels": [
          76,
          null
        ]
      },
      {
        "name": "ELDCRAFTIAN",
        "levels": [
          76,
          null
        ]
      },
      {
        "name": "SPHINXIANT",
        "levels": [
          76,
          null
        ]
      },
      {
        "name": "NITEGANT",
        "levels": [
          76,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          76,
          null
        ]
      },
      {
        "name": "SPHINXIANT",
        "levels": [
          76,
          null
        ]
      },
      {
        "name": "NITEGANT",
        "levels": [
          76,
          null
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          76,
          null
        ]
      },
      {
        "name": "NITEGANT",
        "levels": [
          76,
          null
        ]
      },
      {
        "name": "SPHINXIANT",
        "levels": [
          76,
          null
        ]
      },
      {
        "name": "ELDCRAFTIAN",
        "levels": [
          76,
          null
        ]
      },
      {
        "name": "SPHINXIANT",
        "levels": [
          76,
          null
        ]
      }
    ]
  },
  {
    "location": "Alola Island",
    "Land": [
      {
        "name": "AEXEGGUTOR",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "ARATTATA",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "AMEOWTH",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "ASANDSHREW",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "AVULPIX",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "AGRIMER",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "AGRIMER",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "AVULPIX",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "ASANDSHREW",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "AMEOWTH",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "ARATTATA",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "AEXEGGUTOR",
        "levels": [
          13,
          16
        ]
      }
    ]
  },
  {
    "location": "Underwater",
    "Cave": [
      {
        "name": "CUTEHULHU",
        "levels": [
          17,
          21
        ]
      },
      {
        "name": "HUNTAIL",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "GOREBYSS",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          19,
          null
        ]
      },
      {
        "name": "DEDFISHE",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "CUTEHULHU",
        "levels": [
          19,
          20
        ]
      },
      {
        "name": "LANTURN",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          19,
          21
        ]
      },
      {
        "name": "GOREBYSS",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "HUNTAIL",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "CUTEHULHU",
        "levels": [
          20,
          null
        ]
      }
    ],
    "Water": [
      {
        "name": "CUTEHULHU",
        "levels": [
          19,
          23
        ]
      },
      {
        "name": "HUNTAIL",
        "levels": [
          19,
          22
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          17,
          21
        ]
      },
      {
        "name": "GOREBYSS",
        "levels": [
          18,
          21
        ]
      },
      {
        "name": "CUTEHULHU",
        "levels": [
          19,
          21
        ]
      }
    ]
  },
  {
    "location": "Underwater",
    "Cave": [
      {
        "name": "CUTEHULHU",
        "levels": [
          17,
          21
        ]
      },
      {
        "name": "HUNTAIL",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "GOREBYSS",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          19,
          null
        ]
      },
      {
        "name": "DEDFISHE",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "HOMPUFF",
        "levels": [
          19,
          20
        ]
      },
      {
        "name": "LANTURN",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          19,
          21
        ]
      },
      {
        "name": "GOREBYSS",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "HUNTAIL",
        "levels": [
          18,
          19
        ]
      },
      {
        "name": "CUTEHULHU",
        "levels": [
          20,
          null
        ]
      }
    ],
    "Water": [
      {
        "name": "CUTEHULHU",
        "levels": [
          19,
          23
        ]
      },
      {
        "name": "HUNTAIL",
        "levels": [
          19,
          22
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          17,
          21
        ]
      },
      {
        "name": "GOREBYSS",
        "levels": [
          18,
          21
        ]
      },
      {
        "name": "CUTEHULHU",
        "levels": [
          19,
          21
        ]
      }
    ]
  },
  {
    "location": "Hallow's Woods",
    "Land": [
      {
        "name": "WPHANTUMP",
        "levels": [
          6,
          10
        ]
      },
      {
        "name": "PUMPKABOO",
        "levels": [
          6,
          10
        ]
      },
      {
        "name": "PHANTUMP",
        "levels": [
          6,
          10
        ]
      },
      {
        "name": "PUMPKABOO",
        "levels": [
          6,
          10
        ]
      },
      {
        "name": "TWICKOTWEET",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "TWICKOTWEET",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "PUMPKABOO",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "TWICKOTWEET",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "WPHANTUMP",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "PUMPKABOO",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "PHANTUMP",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "MIMIKYU",
        "levels": [
          3,
          11
        ]
      }
    ]
  },
  {
    "location": "Haunted Mansion",
    "Cave": [
      {
        "name": "TWICKOTWEET",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "SEATIE",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "TWICKOTWEET",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "SPOOKSHEET",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "MIMIKYU",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "MIMIKYU",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "SPOOKSHEET",
        "levels": [
          7,
          11
        ]
      },
      {
        "name": "SEATIE",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "SPOOKSHEET",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "MISDREAVUS",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "SEATIE",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "SEATIE",
        "levels": [
          7,
          10
        ]
      }
    ]
  },
  {
    "location": "Arctic Ocean",
    "Water": [
      {
        "name": "AMAGIKARP",
        "levels": [
          19,
          23
        ]
      },
      {
        "name": "NINGICE",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "AMAGIKARP",
        "levels": [
          17,
          21
        ]
      },
      {
        "name": "NINGICE",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "DEWGONG",
        "levels": [
          76,
          80
        ]
      }
    ]
  },
  {
    "location": "Arctic Ocean",
    "Water": [
      {
        "name": "ADRATINI",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "NINGICE",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "AMAGIKARP",
        "levels": [
          17,
          21
        ]
      },
      {
        "name": "NINGICE",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "ADRATINI",
        "levels": [
          30,
          32
        ]
      }
    ],
    "OldRod": [
      {
        "name": "AMAGIKARP",
        "levels": [
          12,
          13
        ]
      },
      {
        "name": "AMAGIKARP",
        "levels": [
          12,
          14
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "AMAGIKARP",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "AMAGIKARP",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          20,
          23
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "AMAGIKARP",
        "levels": [
          20,
          23
        ]
      },
      {
        "name": "ADRATINI",
        "levels": [
          25,
          29
        ]
      },
      {
        "name": "ADRATINI",
        "levels": [
          24,
          30
        ]
      },
      {
        "name": "ADRATINI",
        "levels": [
          24,
          30
        ]
      },
      {
        "name": "AMAGIKARP",
        "levels": [
          20,
          23
        ]
      }
    ]
  },
  {
    "location": "Arctic",
    "Cave": [
      {
        "name": "WENDIGI",
        "levels": [
          70,
          74
        ]
      },
      {
        "name": "SNOWPIL",
        "levels": [
          70,
          74
        ]
      },
      {
        "name": "BURGITE",
        "levels": [
          70,
          74
        ]
      },
      {
        "name": "WALREIN",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "PRINPLUP",
        "levels": [
          67,
          74
        ]
      },
      {
        "name": "PENGEMPEROR",
        "levels": [
          70,
          75
        ]
      },
      {
        "name": "BURGITE",
        "levels": [
          70,
          75
        ]
      },
      {
        "name": "FROSKOON",
        "levels": [
          72,
          75
        ]
      },
      {
        "name": "RHEMORICE",
        "levels": [
          72,
          77
        ]
      },
      {
        "name": "EMPOLEON",
        "levels": [
          74,
          75
        ]
      },
      {
        "name": "AURORUS",
        "levels": [
          69,
          74
        ]
      },
      {
        "name": "BEARTIC",
        "levels": [
          70,
          74
        ]
      }
    ],
    "Water": [
      {
        "name": "PENGUI",
        "levels": [
          20,
          31
        ]
      },
      {
        "name": "NINGICE",
        "levels": [
          30,
          67
        ]
      },
      {
        "name": "AMAGIKARP",
        "levels": [
          17,
          21
        ]
      },
      {
        "name": "NINGICE",
        "levels": [
          39,
          66
        ]
      },
      {
        "name": "ADRATINI",
        "levels": [
          30,
          60
        ]
      }
    ],
    "OldRod": [
      {
        "name": "AMAGIKARP",
        "levels": [
          12,
          13
        ]
      },
      {
        "name": "AMAGIKARP",
        "levels": [
          12,
          14
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "AMAGIKARP",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "AMAGIKARP",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          20,
          23
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "AMAGIKARP",
        "levels": [
          20,
          23
        ]
      },
      {
        "name": "ADRATINI",
        "levels": [
          25,
          29
        ]
      },
      {
        "name": "ADRATINI",
        "levels": [
          24,
          30
        ]
      },
      {
        "name": "ADRATINI",
        "levels": [
          24,
          30
        ]
      },
      {
        "name": "ADRATINI",
        "levels": [
          24,
          30
        ]
      }
    ]
  },
  {
    "location": "Mountains of Insanity",
    "Cave": [
      {
        "name": "ELDING",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ELDCRAFTIAN",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ELDING",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "OMEGNOWN",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "WENDIGI",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ICENDLESS",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ELDONE",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "WENDIGI",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "KINGELLOW",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ALBINGUIN",
        "levels": [
          73,
          76
        ]
      },
      {
        "name": "ELDCRAFTIAN",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "ELDONE",
        "levels": [
          74,
          76
        ]
      }
    ]
  },
  {
    "location": "Mountains of Insanity",
    "Cave": [
      {
        "name": "ELDING",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ELDCRAFTIAN",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ELDING",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "WENDIGORE",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ELDRI",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ICENDLESS",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ELDONE",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ELDRI",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ELDING",
        "levels": [
          74,
          76
        ]
      },
      {
        "name": "ELDING",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "ELDCRAFTIAN",
        "levels": [
          74,
          null
        ]
      },
      {
        "name": "ELDONE",
        "levels": [
          74,
          76
        ]
      }
    ]
  },
  {
    "location": "Solorun Arena I",
    "Land": [
      {
        "name": "HAPPINY",
        "levels": [
          1,
          5
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          1,
          5
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          1,
          5
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          1,
          10
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          1,
          10
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          1,
          10
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          1,
          15
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          5,
          20
        ]
      }
    ]
  },
  {
    "location": "Alolan Cave",
    "Cave": [
      {
        "name": "YUNGOOS",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "MORELULL",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "CRABRAWLER",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "PIKIPEK",
        "levels": [
          3,
          null
        ]
      },
      {
        "name": "WISHIWASHI",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "GRUBBIN",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "GRUBBIN",
        "levels": [
          3,
          null
        ]
      },
      {
        "name": "WISHIWASHI",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "PIKIPEK",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "CRABRAWLER",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "MORELULL",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "YUNGOOS",
        "levels": [
          4,
          null
        ]
      }
    ]
  },
  {
    "location": "Solorun Arena II",
    "Land": [
      {
        "name": "HAPPINY",
        "levels": [
          10,
          25
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          10,
          25
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          10,
          25
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          10,
          30
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          10,
          30
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          10,
          30
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          10,
          35
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          20,
          50
        ]
      }
    ]
  },
  {
    "location": "Alolan Cave",
    "Cave": [
      {
        "name": "CUTIEFLY",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "ROCKRUFF",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "STUFFUL",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "MUDBRAY",
        "levels": [
          3,
          null
        ]
      },
      {
        "name": "BOUNSWEET",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "FOMANTIS",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "FOMANTIS",
        "levels": [
          3,
          null
        ]
      },
      {
        "name": "BOUNSWEET",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "MUDBRAY",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "STUFFUL",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "ROCKRUFF",
        "levels": [
          3,
          4
        ]
      },
      {
        "name": "CUTIEFLY",
        "levels": [
          4,
          null
        ]
      }
    ]
  },
  {
    "location": "Alola Cave",
    "Cave": [
      {
        "name": "ADIGLETT",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "AGEODUDE",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "AKOFFING",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "APARAS",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "AGEODUDE",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "ADIGLETT",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "APARAS",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "AKOFFING",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "AGEODUDE",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "ADIGLETT",
        "levels": [
          13,
          16
        ]
      }
    ]
  },
  {
    "location": "Alola Cave",
    "Cave": [
      {
        "name": "MAREANIE",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "SALANDIT",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "DEWPIDER",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "COMFEY",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "ORANGURU",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "PASSIMIAN",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "PASSIMIAN",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "ORANGURU",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "COMFEY",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "DEWPIDER",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "SALANDIT",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "MAREANIE",
        "levels": [
          8,
          9
        ]
      }
    ]
  },
  {
    "location": "Alola Cave",
    "Cave": [
      {
        "name": "WIMPOD",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "SANDYGAST",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "PYUKUMUKU",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "ORICORIO",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "MINIOR",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "KOMALA",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "KOMALA",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "MINIOR",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "ORICORIO",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "PYUKUMUKU",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "SANDYGAST",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "WIMPOD",
        "levels": [
          8,
          9
        ]
      }
    ]
  },
  {
    "location": "Alola Cave",
    "Cave": [
      {
        "name": "TURTONATOR",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "DRAMPA",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "DHELMISE",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "JANGMOO",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "TOGEDEMARU",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "TOGEDEMARU",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "JANGMOO",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "DHELMISE",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "DRAMPA",
        "levels": [
          8,
          9
        ]
      },
      {
        "name": "TURTONATOR",
        "levels": [
          8,
          9
        ]
      }
    ]
  },
  {
    "location": "Solorun Arena IV",
    "Land": [
      {
        "name": "HAPPINY",
        "levels": [
          30,
          45
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          30,
          45
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          30,
          45
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          30,
          50
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          30,
          50
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          30,
          50
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          30,
          55
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          35,
          60
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          35,
          60
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          35,
          60
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          35,
          60
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          35,
          70
        ]
      }
    ]
  },
  {
    "location": "Sloggoth Pits",
    "Cave": [
      {
        "name": "ELDONE",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "ICENDLESS",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "ELDONE",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "INDHEAD",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "STEAMIST",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "RHEMORICE",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "RHEMORICE",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "STEAMIST",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "INDHEAD",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "ICENDLESS",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "BAXBAK",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "ELDONE",
        "levels": [
          80,
          null
        ]
      }
    ]
  },
  {
    "location": "Ancient Temple",
    "Cave": [
      {
        "name": "WARSHIN",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "DOITA",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "CAMERUPT",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "SHARPEDO",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "DOITA",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "STEAMIST",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "STEAMIST",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "WARSHIN",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "TORKOAL",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "BGYARADOS",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "DOITA",
        "levels": [
          80,
          null
        ]
      },
      {
        "name": "WARSHIN",
        "levels": [
          80,
          null
        ]
      }
    ]
  },
  {
    "location": "Temple of Sea",
    "Cave": [
      {
        "name": "WARSHIN",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "CANYOU",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "CULTULZU",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "WARSHIN",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "SEAHOG",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "ABSORSPONGE",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "STEAMIST",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "DRAGONITE",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "SEAHOG",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "CULTULZU",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "CANYOU",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "WARSHIN",
        "levels": [
          80,
          81
        ]
      }
    ],
    "Water": [
      {
        "name": "BGYARADOS",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "NINGICE",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "BGYARADOS",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "NINGICE",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "GAGHOCEAN",
        "levels": [
          80,
          81
        ]
      }
    ]
  },
  {
    "location": "Temple of Land",
    "Cave": [
      {
        "name": "DOITA",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "CAMERUPT",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "MAGCARGO",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "HERUPTIN",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "MAGMOCKET",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "SANDOLCANO",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "MAGMOCKET",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "DRAGONITE",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "HERUPTIN",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "MAGCARGO",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "CAMERUPT",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "DOITA",
        "levels": [
          80,
          81
        ]
      }
    ]
  },
  {
    "location": "Sky Pillar",
    "Cave": [
      {
        "name": "ALTARIA",
        "levels": [
          80,
          82
        ]
      },
      {
        "name": "FLYGON",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "CLAYDOL",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "SALAMENCE",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "ANGEIST",
        "levels": [
          80,
          82
        ]
      },
      {
        "name": "HYDREIGON",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "HYDREIGON",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "DRAGONITE",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "SALAMENCE",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "CLAYDOL",
        "levels": [
          80,
          83
        ]
      },
      {
        "name": "FLYGON",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "ALTARIA",
        "levels": [
          80,
          81
        ]
      }
    ]
  },
  {
    "location": "Sky Pillar",
    "Cave": [
      {
        "name": "ALTARIA",
        "levels": [
          80,
          83
        ]
      },
      {
        "name": "FLYGON",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "CLAYDOL",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "METAGROSS",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "ARCHANGO",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "RYULUNG",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "ELDRAGON",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "DRAGONITE",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "SALAMENCE",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "CLAYDOL",
        "levels": [
          80,
          83
        ]
      },
      {
        "name": "FLYGON",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "ALTARIA",
        "levels": [
          80,
          81
        ]
      }
    ]
  },
  {
    "location": "Sky Pillar",
    "Cave": [
      {
        "name": "ALTARIA",
        "levels": [
          80,
          83
        ]
      },
      {
        "name": "ANGEIST",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "CLAYDOL",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "SALAMENCE",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "ARCHANGO",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "RYULUNG",
        "levels": [
          80,
          83
        ]
      },
      {
        "name": "ELDRAGON",
        "levels": [
          80,
          83
        ]
      },
      {
        "name": "ARCHANGO",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "ORDERYMID",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "CLAYDOL",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "ANGEIST",
        "levels": [
          80,
          81
        ]
      },
      {
        "name": "ORDERYMID",
        "levels": [
          80,
          84
        ]
      }
    ]
  },
  {
    "location": "Solorun Arena III",
    "Land": [
      {
        "name": "HAPPINY",
        "levels": [
          20,
          35
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          20,
          35
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          20,
          35
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          20,
          45
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          30,
          50
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          30,
          50
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          30,
          50
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          30,
          50
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          30,
          60
        ]
      }
    ]
  },
  {
    "location": "Solorun Arena V",
    "Land": [
      {
        "name": "HAPPINY",
        "levels": [
          40,
          55
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          40,
          55
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          40,
          55
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          40,
          60
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          40,
          60
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          40,
          60
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          40,
          65
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          45,
          70
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          45,
          70
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          45,
          70
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          45,
          70
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          45,
          80
        ]
      }
    ]
  },
  {
    "location": "The Moon",
    "Cave": [
      {
        "name": "SPIRUS",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "CLEFABLE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "AZUMARILL",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNOUND",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "CLEFABLE",
        "levels": [
          80,
          83
        ]
      },
      {
        "name": "SOLAIOSS",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNIGHTON",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "CLEFABLE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNOUND",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "AZUMARILL",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "CLEFABLE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "SPIRUS",
        "levels": [
          81,
          83
        ]
      }
    ]
  },
  {
    "location": "Solorun Arena VI",
    "Land": [
      {
        "name": "HAPPINY",
        "levels": [
          60,
          85
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          60,
          85
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          60,
          85
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          70,
          90
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          70,
          90
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          70,
          90
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          70,
          95
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          75,
          95
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          75,
          95
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          75,
          95
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          75,
          95
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          80,
          100
        ]
      }
    ]
  },
  {
    "location": "Solorun Arena VII",
    "Land": [
      {
        "name": "HAPPINY",
        "levels": [
          90,
          100
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          90,
          100
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          90,
          100
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          90,
          100
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          95,
          100
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          95,
          100
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          95,
          100
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          95,
          100
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          95,
          100
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          95,
          100
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          99,
          100
        ]
      },
      {
        "name": "HAPPINY",
        "levels": [
          99,
          100
        ]
      }
    ]
  },
  {
    "location": "The Moon",
    "Cave": [
      {
        "name": "SPIRUS",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "CLEFABLE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONSE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNOUND",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "CLEFABLE",
        "levels": [
          80,
          83
        ]
      },
      {
        "name": "SOLAIOSS",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNIGHTON",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "ROGODO",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNOUND",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONSE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "CLEFABLE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "SPIRUS",
        "levels": [
          81,
          83
        ]
      }
    ]
  },
  {
    "location": "The Moon",
    "Cave": [
      {
        "name": "LUNAFAKE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "CLEFABLE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONSE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNOUND",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "CLEFABLE",
        "levels": [
          80,
          83
        ]
      },
      {
        "name": "LUNAFAKE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNAFAKE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "CLEFABLE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNOUND",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONSE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "ROGODO",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONSE",
        "levels": [
          81,
          83
        ]
      }
    ]
  },
  {
    "location": "The Moon",
    "Cave": [
      {
        "name": "LUNAFAKE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONEAST",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONSE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNOUND",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONEAST",
        "levels": [
          80,
          83
        ]
      },
      {
        "name": "LUNAFAKE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNAFAKE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONEAST",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNOUND",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "ROGODO",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "FONIGHTON",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONSE",
        "levels": [
          81,
          83
        ]
      }
    ]
  },
  {
    "location": "The Moon?",
    "Cave": [
      {
        "name": "LUNAFAKE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONEAST",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONSE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNOUND",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONEAST",
        "levels": [
          80,
          83
        ]
      },
      {
        "name": "LUNAFAKE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNAFAKE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONEAST",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "LUNOUND",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONSE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "FONIGHTON",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MOONSE",
        "levels": [
          81,
          83
        ]
      }
    ]
  },
  {
    "location": "Route -1",
    "Land": [
      {
        "name": "BUBBLET",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "SLINKA",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "DRAFLY",
        "levels": [
          2,
          null
        ]
      },
      {
        "name": "NOTHYP",
        "levels": [
          2,
          null
        ]
      },
      {
        "name": "CONEET",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "PAINTIP",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "NYMPHAD",
        "levels": [
          2,
          null
        ]
      },
      {
        "name": "CONEET",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "NOTHYP",
        "levels": [
          2,
          null
        ]
      },
      {
        "name": "NYMPHAD",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "DRAFLY",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "CORNIRD",
        "levels": [
          2,
          3
        ]
      }
    ],
    "Water": [
      {
        "name": "ANGUILLE",
        "levels": [
          19,
          23
        ]
      },
      {
        "name": "BUBBLET",
        "levels": [
          19,
          22
        ]
      },
      {
        "name": "BUBBLET",
        "levels": [
          17,
          21
        ]
      },
      {
        "name": "ANGUILLE",
        "levels": [
          18,
          21
        ]
      },
      {
        "name": "ANGUILLE",
        "levels": [
          19,
          21
        ]
      }
    ],
    "OldRod": [
      {
        "name": "BAITISH",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "ANGUILLE",
        "levels": [
          2,
          4
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "ANGUILLE",
        "levels": [
          2,
          null
        ]
      },
      {
        "name": "PMAGIKARP",
        "levels": [
          8,
          null
        ]
      },
      {
        "name": "PMAGIKARP",
        "levels": [
          8,
          null
        ]
      }
    ]
  },
  {
    "location": "Life",
    "Land": [
      {
        "name": "CHAIRY",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "RIBOMBEE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "NYMPHAD",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "WHIMSICOTT",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "SHIINOTIC",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "GOBLORD",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "GOBLORD",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "SHIINOTIC",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "WHIMSICOTT",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "NYMPHAD",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "RIBOMBEE",
        "levels": [
          83,
          86
        ]
      },
      {
        "name": "CHAIRY",
        "levels": [
          81,
          83
        ]
      }
    ]
  },
  {
    "location": "Death",
    "Cave": [
      {
        "name": "CORAUT",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "GENGAR",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "WILLOST",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "STEAMIST",
        "levels": [
          80,
          83
        ]
      },
      {
        "name": "MLADEE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "MLADEE",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "STEAMIST",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "WILLOST",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "GENGAR",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          81,
          83
        ]
      },
      {
        "name": "CORAUT",
        "levels": [
          81,
          83
        ]
      }
    ]
  },
  {
    "location": "Solar System",
    "Cave": [
      {
        "name": "SPIRUS",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "SATELI",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "NOVAIS",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "DARKOLE",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "MAWCAR",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "MAWCAR",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "DARKOLE",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "NOVAIS",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "SATELI",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          84,
          86
        ]
      }
    ]
  },
  {
    "location": "Mars",
    "Cave": [
      {
        "name": "TRIDLER",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          87
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "BIRBLEY",
        "levels": [
          5,
          15
        ]
      }
    ]
  },
  {
    "location": "Something Cave",
    "Cave": [
      {
        "name": "CRAGITE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "STALIG",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WOCK",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "CRISTO",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WOCK",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "CRAGITE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WOCK",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "STALIG",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "CRISTO",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WOCK",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "STALIG",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "CRAGITE",
        "levels": [
          3,
          5
        ]
      }
    ]
  },
  {
    "location": "Mars",
    "Cave": [
      {
        "name": "TRIDLER",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          87
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "TIWISONE",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "FACEFUGGER",
        "levels": [
          84,
          86
        ]
      }
    ]
  },
  {
    "location": "Regi Isles",
    "Water": [
      {
        "name": "ORSCINE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "FLOWJAW",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "FLOWJAW",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "FACARVEEL",
        "levels": [
          29,
          30
        ]
      }
    ],
    "OldRod": [
      {
        "name": "BMAGIKARP",
        "levels": [
          12,
          13
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          12,
          14
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "BMAGIKARP",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "DRATINI",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          20,
          23
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "TIRTOUGA",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "BGYARADOS",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "BGYARADOS",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "DRATINI",
        "levels": [
          29,
          30
        ]
      }
    ]
  },
  {
    "location": "Temple of the Stone Age",
    "Cave": [
      {
        "name": "PAREYEMID",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "MINIOR",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "BRICKEN",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "CRUSTLE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "EYELUMINID",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "EYELUMINID",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "CRUSTLE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "BRICKEN",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "MINIOR",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "PAREYEMID",
        "levels": [
          29,
          30
        ]
      }
    ]
  },
  {
    "location": "Temple of the Iron Age",
    "Cave": [
      {
        "name": "DUSITE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ARON",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "MACHETIT",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ELEOLER",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "MAGNETON",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "BUSHIN",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "BUSHIN",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "STEELIX",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ELEOLER",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "MACHETIT",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ARON",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "DUSITE",
        "levels": [
          29,
          30
        ]
      }
    ]
  },
  {
    "location": "Temple of the Ice Age",
    "Cave": [
      {
        "name": "SNOWDOGE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "SNOWDOGE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "VANILLISH",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "PILOSWINE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "SMOMAN",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ICEIS",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ICEIS",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "SMOMAN",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "PILOSWINE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "VANILLISH",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "SNOWPIL",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ELDING",
        "levels": [
          29,
          30
        ]
      }
    ]
  },
  {
    "location": "Temple of the Stone Age",
    "Cave": [
      {
        "name": "PAREYEMID",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "MINIOR",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "BRICKOR",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "CRUSTLE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "EYELUMINID",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "EYELUMINID",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "CRUSTLE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "BRICKOR",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "MINIOR",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "PAREYEMID",
        "levels": [
          80,
          86
        ]
      }
    ]
  },
  {
    "location": "Temple of the Stone Age",
    "Cave": [
      {
        "name": "KABUTOPS",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "MINIOR",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "BRICKOR",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "OMASTAR",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "EYELUMINID",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "EYELUMINID",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "ARMALDO",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "BRICKOR",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "MINIOR",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "AERODACTYL",
        "levels": [
          80,
          86
        ]
      }
    ]
  },
  {
    "location": "Temple of the Iron Age",
    "Cave": [
      {
        "name": "STEELIX",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "AGGRON",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "WARCHON",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "BEHEMIST",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "MAGNEZONE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "BUSHIDON",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "BUSHIDON",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "MAGNEZONE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "BEHEMIST",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "WARCHON",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "AGGRON",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "STEELIX",
        "levels": [
          80,
          86
        ]
      }
    ]
  },
  {
    "location": "Temple of the Ice Age",
    "Cave": [
      {
        "name": "CRYOGONAL",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "SNOFISTOR",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "FROSTEAR",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "VANILLUXE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "MAMOSWINE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "COCAITURD",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "COCAITURD",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "MAMOSWINE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "VANILLUXE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "AURORUS",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "AURORUS",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "ELDONE",
        "levels": [
          80,
          86
        ]
      }
    ]
  },
  {
    "location": "Temple of the Ages",
    "Cave": [
      {
        "name": "GUERIEST",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "RYULUNG",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "ELDRAGON",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "HAXORUS",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "AEGISLASH",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "GOBLORD",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "BUSHIDON",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "AEGISLASH",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "HAXORUS",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "GORALE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "GORALE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "GUERIEST",
        "levels": [
          80,
          86
        ]
      }
    ]
  },
  {
    "location": "Temple of the Ages",
    "Cave": [
      {
        "name": "GUERIEST",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "RYULUNG",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "ELDRAGON",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "HAXORUS",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "AEGISLASH",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "GOBLORD",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "BUSHIDON",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "AEGISLASH",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "HAXORUS",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "GORALE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "GORALE",
        "levels": [
          80,
          86
        ]
      },
      {
        "name": "GUERIEST",
        "levels": [
          80,
          86
        ]
      }
    ]
  },
  {
    "location": "Chamber of the Ages",
    "Cave": [
      {
        "name": "GUERIEST",
        "levels": [
          83,
          87
        ]
      },
      {
        "name": "RYULUNG",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "ELDRAGON",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "HAXORUS",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "AEGISLASH",
        "levels": [
          82,
          86
        ]
      },
      {
        "name": "GOBLORD",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "BUSHIDON",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "AEGISLASH",
        "levels": [
          82,
          86
        ]
      },
      {
        "name": "HAXORUS",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "GORALE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "GORALE",
        "levels": [
          83,
          86
        ]
      },
      {
        "name": "GUERIEST",
        "levels": [
          84,
          86
        ]
      }
    ]
  },
  {
    "location": "Temple of the Dark Age",
    "Cave": [
      {
        "name": "MLADEE",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "MALAMAR",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "HAICAW",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "CORAUT",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "NUKREEP",
        "levels": [
          82,
          86
        ]
      },
      {
        "name": "HYDREIGON",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "HYDREIGON",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "NUKREEP",
        "levels": [
          82,
          86
        ]
      },
      {
        "name": "CORAUT",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "MAJIN",
        "levels": [
          84,
          86
        ]
      }
    ]
  },
  {
    "location": "Temple of the Dark Age",
    "Cave": [
      {
        "name": "MLADEE",
        "levels": [
          83,
          89
        ]
      },
      {
        "name": "MALAMAR",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "HAICAW",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "CORAUT",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "NUKREEP",
        "levels": [
          82,
          86
        ]
      },
      {
        "name": "HYDREIGON",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "HYDREIGON",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "NUKREEP",
        "levels": [
          82,
          86
        ]
      },
      {
        "name": "CORAUT",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "MLADEE",
        "levels": [
          84,
          88
        ]
      }
    ]
  },
  {
    "location": "Temple of the Dark Age",
    "Cave": [
      {
        "name": "MLADEE",
        "levels": [
          83,
          89
        ]
      },
      {
        "name": "MALAMAR",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "HAICAW",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "CORAUT",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "NUKREEP",
        "levels": [
          82,
          86
        ]
      },
      {
        "name": "HYDREIGON",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "HYDREIGON",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "NUKREEP",
        "levels": [
          82,
          86
        ]
      },
      {
        "name": "CORAUT",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          83,
          88
        ]
      },
      {
        "name": "MLADEE",
        "levels": [
          84,
          88
        ]
      }
    ]
  },
  {
    "location": "Something Cave",
    "Cave": [
      {
        "name": "CRAGITE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "DIOG",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WOCK",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "CRISTO",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "MARIR",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "MARIR",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WOCK",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "DIOG",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "CRISTO",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "MARIR",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "DIOG",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "CRAGITE",
        "levels": [
          3,
          5
        ]
      }
    ]
  },
  {
    "location": "Mars",
    "Cave": [
      {
        "name": "TRIDLER",
        "levels": [
          85,
          88
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TIWISONE",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "FACEFUGGER",
        "levels": [
          84,
          89
        ]
      }
    ]
  },
  {
    "location": "Mars",
    "Cave": [
      {
        "name": "TRIDLER",
        "levels": [
          85,
          88
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      }
    ]
  },
  {
    "location": "Mars",
    "Cave": [
      {
        "name": "TRIDLER",
        "levels": [
          85,
          88
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "SEARICE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "SEARICE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "SEARICE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TIWISONE",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      }
    ]
  },
  {
    "location": "Mars",
    "Cave": [
      {
        "name": "TRIDLER",
        "levels": [
          85,
          88
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "SEARICE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "SEARICE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "SEARICE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      }
    ]
  },
  {
    "location": "ROUTE 2",
    "LandDay": [
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "CATERPIE",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "CATERPIE",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "LEDYBA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "LEDYBA",
        "levels": [
          2,
          5
        ]
      }
    ],
    "LandNight": [
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "HOOTHOOT",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "SPINARAK",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "SPINARAK",
        "levels": [
          2,
          5
        ]
      }
    ]
  },
  {
    "location": "VIRIDIAN FOREST",
    "LandDay": [
      {
        "name": "CATERPIE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "CATERPIE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "KAKUNA",
        "levels": [
          4,
          6
        ]
      },
      {
        "name": "KAKUNA",
        "levels": [
          4,
          6
        ]
      },
      {
        "name": "METAPOD",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "WURMPLE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "METAPOD",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "PIKACHU",
        "levels": [
          3,
          5
        ]
      }
    ],
    "LandNight": [
      {
        "name": "CATERPIE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "CATERPIE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "WEEDLE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "METAPOD",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "KAKUNA",
        "levels": [
          4,
          6
        ]
      },
      {
        "name": "KAKUNA",
        "levels": [
          4,
          6
        ]
      },
      {
        "name": "METAPOD",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "WURMPLE",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "PIKACHU",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "PIKACHU",
        "levels": [
          3,
          5
        ]
      }
    ]
  },
  {
    "location": "ROUTE 3",
    "Land": [
      {
        "name": "PIDGEY",
        "levels": [
          6,
          7
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          6,
          8
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          6,
          7
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          7,
          null
        ]
      },
      {
        "name": "JIGGLYPUFF",
        "levels": [
          3,
          7
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          6,
          8
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          6,
          8
        ]
      },
      {
        "name": "NIDORANmA",
        "levels": [
          6,
          7
        ]
      },
      {
        "name": "NIDORANmA",
        "levels": [
          6,
          7
        ]
      },
      {
        "name": "NIDORANfE",
        "levels": [
          6,
          null
        ]
      },
      {
        "name": "NIDORANfE",
        "levels": [
          6,
          null
        ]
      },
      {
        "name": "NIDORANfE",
        "levels": [
          6,
          null
        ]
      }
    ]
  },
  {
    "location": "MT. MOON",
    "Cave": [
      {
        "name": "ZUBAT",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          7,
          9
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "SANDSHREW",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          7,
          9
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          8,
          null
        ]
      },
      {
        "name": "CLEFAIRY",
        "levels": [
          8,
          null
        ]
      },
      {
        "name": "ONIX",
        "levels": [
          8,
          12
        ]
      }
    ]
  },
  {
    "location": "MT. MOON",
    "Cave": [
      {
        "name": "PARAS",
        "levels": [
          5,
          10
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          5,
          10
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          5,
          10
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          5,
          10
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          5,
          10
        ]
      },
      {
        "name": "SANDSHREW",
        "levels": [
          7,
          10
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          5,
          10
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          5,
          10
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          5,
          10
        ]
      },
      {
        "name": "SANDSHREW",
        "levels": [
          5,
          10
        ]
      },
      {
        "name": "CHINGLING",
        "levels": [
          7,
          12
        ]
      }
    ]
  },
  {
    "location": "MT. MOON",
    "Cave": [
      {
        "name": "ZUBAT",
        "levels": [
          8,
          11
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          8,
          11
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          9,
          10
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          10,
          12
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          10,
          12
        ]
      },
      {
        "name": "CLEFAIRY",
        "levels": [
          10,
          12
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          8,
          11
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          8,
          11
        ]
      },
      {
        "name": "CLEFAIRY",
        "levels": [
          8,
          11
        ]
      },
      {
        "name": "ONIX",
        "levels": [
          10,
          12
        ]
      }
    ]
  },
  {
    "location": "ROUTE 4",
    "Land": [
      {
        "name": "RATTATA",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "EKANS",
        "levels": [
          6,
          12
        ]
      },
      {
        "name": "SANDSHREW",
        "levels": [
          6,
          12
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          10,
          12
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "EKANS",
        "levels": [
          6,
          12
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "EKANS",
        "levels": [
          6,
          12
        ]
      }
    ],
    "Water": [
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "HORSEA",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "ROUTE 24",
    "LandDay": [
      {
        "name": "BELLSPROUT",
        "levels": [
          7,
          null
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          7,
          null
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "ABRA",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "SUNKERN",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "ABRA",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "SUNKERN",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          8,
          null
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          8,
          14
        ]
      }
    ],
    "LandNight": [
      {
        "name": "VENONAT",
        "levels": [
          7,
          null
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          7,
          null
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "ABRA",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "ABRA",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          8,
          null
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          8,
          14
        ]
      }
    ],
    "Water": [
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "HORSEA",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "ROUTE 25",
    "LandDay": [
      {
        "name": "BELLSPROUT",
        "levels": [
          7,
          null
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          7,
          null
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "ABRA",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "ABRA",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          8,
          null
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          8,
          14
        ]
      }
    ],
    "LandNight": [
      {
        "name": "VENONAT",
        "levels": [
          7,
          null
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          7,
          null
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "ABRA",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "ABRA",
        "levels": [
          8,
          12
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          8,
          null
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          8,
          14
        ]
      }
    ],
    "Water": [
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "POLIWAG",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "GOLDEEN",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "POLIWAG",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "POLIWHIRL",
        "levels": [
          20,
          30
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          15,
          35
        ]
      }
    ]
  },
  {
    "location": "Mars",
    "Cave": [
      {
        "name": "CUBAOOP",
        "levels": [
          90,
          91
        ]
      },
      {
        "name": "GOOPARS",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "BOULDARS",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "LIGOOP",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "BOULDARS",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "LIGOOP",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "GOOPARS",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "CUBAOOP",
        "levels": [
          90,
          91
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "CUBAOOP",
        "levels": [
          90,
          91
        ]
      }
    ]
  },
  {
    "location": "ROUTE 5",
    "Land": [
      {
        "name": "PIDGEY",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          10,
          16
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          10,
          16
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          10,
          16
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          10,
          16
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          13,
          16
        ]
      }
    ]
  },
  {
    "location": "ROUTE 9",
    "Land": [
      {
        "name": "RATTATA",
        "levels": [
          14,
          17
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          14,
          17
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "EKANS",
        "levels": [
          11,
          17
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "SANDSHREW",
        "levels": [
          11,
          17
        ]
      },
      {
        "name": "SANDSHREW",
        "levels": [
          11,
          17
        ]
      },
      {
        "name": "EKANS",
        "levels": [
          11,
          17
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          11,
          17
        ]
      },
      {
        "name": "MAGBY",
        "levels": [
          11,
          17
        ]
      }
    ]
  },
  {
    "location": "ROUTE 10",
    "Land": [
      {
        "name": "RATTATA",
        "levels": [
          14,
          17
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          14,
          17
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "EKANS",
        "levels": [
          11,
          17
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "SANDSHREW",
        "levels": [
          11,
          17
        ]
      },
      {
        "name": "SANDSHREW",
        "levels": [
          11,
          17
        ]
      },
      {
        "name": "EKANS",
        "levels": [
          11,
          17
        ]
      },
      {
        "name": "MAREEP",
        "levels": [
          11,
          17
        ]
      },
      {
        "name": "ELEKID",
        "levels": [
          11,
          17
        ]
      }
    ]
  },
  {
    "location": "Rock Tunnel",
    "Cave": [
      {
        "name": "GEODUDE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          15,
          16
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          15,
          16
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "MACHOP",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "MACHOP",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "ONIX",
        "levels": [
          13,
          15
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          15,
          17
        ]
      }
    ]
  },
  {
    "location": "Rock Tunnel",
    "Cave": [
      {
        "name": "GEODUDE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          15,
          16
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          15,
          16
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "MACHOP",
        "levels": [
          17,
          null
        ]
      },
      {
        "name": "MACHOP",
        "levels": [
          17,
          null
        ]
      },
      {
        "name": "ONIX",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          16,
          17
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "RockSmash",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          25,
          40
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          25,
          40
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          25,
          40
        ]
      }
    ]
  },
  {
    "location": "ROUTE 8",
    "Land": [
      {
        "name": "PIDGEY",
        "levels": [
          18,
          20
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          18,
          20
        ]
      },
      {
        "name": "EKANS",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "GROWLITHE",
        "levels": [
          15,
          18
        ]
      },
      {
        "name": "SANDSHREW",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "VULPIX",
        "levels": [
          15,
          18
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          18,
          20
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          18,
          20
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          18,
          20
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          18,
          20
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          18,
          20
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          18,
          20
        ]
      }
    ]
  },
  {
    "location": "ROUTE 11 left",
    "Land": [
      {
        "name": "EKANS",
        "levels": [
          12,
          15
        ]
      },
      {
        "name": "SANDSHREW",
        "levels": [
          12,
          15
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "DROWZEE",
        "levels": [
          11,
          15
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          13,
          17
        ]
      },
      {
        "name": "DROWZEE",
        "levels": [
          11,
          15
        ]
      },
      {
        "name": "DROWZEE",
        "levels": [
          11,
          15
        ]
      },
      {
        "name": "DROWZEE",
        "levels": [
          11,
          15
        ]
      },
      {
        "name": "DROWZEE",
        "levels": [
          11,
          15
        ]
      },
      {
        "name": "DROWZEE",
        "levels": [
          11,
          15
        ]
      }
    ],
    "Water": [
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "HORSEA",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "ROUTE 12 lavender",
    "Land": [
      {
        "name": "ODDISH",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          23,
          27
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          23,
          27
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "WEEPINBELL",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "GLOOM",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      }
    ],
    "Water": [
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "HORSEA",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "ROUTE 12",
    "Land": [
      {
        "name": "ODDISH",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          23,
          27
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          23,
          27
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "WEEPINBELL",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "GLOOM",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      }
    ],
    "Water": [
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "WOOPER",
        "levels": [
          5,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "HORSEA",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "QWILFISH",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "VERMILION CITY",
    "Water": [
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "CORSOLA",
        "levels": [
          5,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SHELLDER",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "CHINCHOU",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "CHINCHOU",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "SHELLDER",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "LANTURN",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "TENTACRUEL",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "ROUTE 6",
    "Land": [
      {
        "name": "PIDGEY",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          10,
          16
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          10,
          16
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          10,
          16
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          10,
          16
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          13,
          16
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          13,
          16
        ]
      }
    ],
    "Water": [
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "POLIWAG",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "GOLDEEN",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "POLIWAG",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "POLIWHIRL",
        "levels": [
          20,
          30
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          15,
          35
        ]
      }
    ]
  },
  {
    "location": "Diglett's Cave B",
    "Cave": [
      {
        "name": "DIGLETT",
        "levels": [
          15,
          22
        ]
      },
      {
        "name": "DIGLETT",
        "levels": [
          15,
          22
        ]
      },
      {
        "name": "DIGLETT",
        "levels": [
          15,
          22
        ]
      },
      {
        "name": "DIGLETT",
        "levels": [
          15,
          22
        ]
      },
      {
        "name": "DIGLETT",
        "levels": [
          15,
          22
        ]
      },
      {
        "name": "DIGLETT",
        "levels": [
          15,
          22
        ]
      },
      {
        "name": "DIGLETT",
        "levels": [
          15,
          22
        ]
      },
      {
        "name": "DUGTRIO",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "DIGLETT",
        "levels": [
          15,
          22
        ]
      },
      {
        "name": "DIGLETT",
        "levels": [
          15,
          22
        ]
      },
      {
        "name": "DIGLETT",
        "levels": [
          15,
          22
        ]
      },
      {
        "name": "DIGLETT",
        "levels": [
          15,
          22
        ]
      }
    ]
  },
  {
    "location": "ROUTE 7",
    "Land": [
      {
        "name": "MEOWTH",
        "levels": [
          17,
          20
        ]
      },
      {
        "name": "MEOWTH",
        "levels": [
          17,
          20
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          19,
          22
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          19,
          22
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          19,
          22
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          19,
          22
        ]
      },
      {
        "name": "GROWLITHE",
        "levels": [
          18,
          20
        ]
      },
      {
        "name": "VULPIX",
        "levels": [
          18,
          20
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          19,
          22
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          19,
          22
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          19,
          22
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          19,
          22
        ]
      }
    ]
  },
  {
    "location": "ROUTE 16",
    "Land": [
      {
        "name": "DODUO",
        "levels": [
          18,
          22
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          18,
          22
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          18,
          22
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          18,
          22
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          18,
          22
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          18,
          22
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          18,
          22
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          18,
          22
        ]
      }
    ]
  },
  {
    "location": "ROUTE 1",
    "LandDay": [
      {
        "name": "RATTATA",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "ZIGZAGOON",
        "levels": [
          2,
          5
        ]
      }
    ],
    "LandNight": [
      {
        "name": "RATTATA",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "HOOTHOOT",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "HOOTHOOT",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "HOOTHOOT",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "HOOTHOOT",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          5
        ]
      }
    ]
  },
  {
    "location": "ROUTE 17",
    "Land": [
      {
        "name": "DODUO",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          25,
          29
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          25,
          29
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          25,
          29
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "FEAROW",
        "levels": [
          25,
          27
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "FEAROW",
        "levels": [
          25,
          27
        ]
      }
    ]
  },
  {
    "location": "ROUTE 18",
    "Land": [
      {
        "name": "DODUO",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          25,
          29
        ]
      },
      {
        "name": "FEAROW",
        "levels": [
          25,
          29
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          20,
          22
        ]
      },
      {
        "name": "FEAROW",
        "levels": [
          25,
          29
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          25,
          29
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          25,
          29
        ]
      }
    ]
  },
  {
    "location": "ROUTE 13",
    "Land": [
      {
        "name": "PIDGEY",
        "levels": [
          25,
          27
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "PIDGEOTTO",
        "levels": [
          29,
          null
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          25,
          29
        ]
      },
      {
        "name": "GLOOM",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "WEEPINBELL",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "HOPPIP",
        "levels": [
          22,
          26
        ]
      }
    ],
    "Water": [
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "KRABBY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "ROUTE 14",
    "Land": [
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          27,
          null
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          23,
          null
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          23,
          null
        ]
      },
      {
        "name": "PIDGEOTTO",
        "levels": [
          29,
          null
        ]
      },
      {
        "name": "WEEPINBELL",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "GLOOM",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      }
    ]
  },
  {
    "location": "ROUTE 15 right",
    "Land": [
      {
        "name": "PIDGEY",
        "levels": [
          25,
          27
        ]
      },
      {
        "name": "ODDISH",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          24,
          26
        ]
      },
      {
        "name": "PIDGEOTTO",
        "levels": [
          29,
          null
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          25,
          null
        ]
      },
      {
        "name": "WEEPINBELL",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "GLOOM",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "BELLSPROUT",
        "levels": [
          22,
          26
        ]
      }
    ]
  },
  {
    "location": "ROUTE 19",
    "Water": [
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "HORSEA",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SEADRA",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "KINGLER",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "ROUTE 20 Right",
    "Water": [
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "KRABBY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "KINGLER",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "SEADRA",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "ROUTE 20 Left",
    "Water": [
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "KRABBY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "KINGLER",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "SEADRA",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "ROUTE 21",
    "Land": [
      {
        "name": "TANGELA",
        "levels": [
          17,
          28
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          17,
          28
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          17,
          28
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          17,
          28
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          17,
          28
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          17,
          28
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          17,
          28
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          17,
          28
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          17,
          28
        ]
      },
      {
        "name": "TANGELA",
        "levels": [
          17,
          28
        ]
      },
      {
        "name": "MRMIME",
        "levels": [
          17,
          28
        ]
      },
      {
        "name": "MRMIME",
        "levels": [
          22,
          30
        ]
      }
    ],
    "Water": [
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "TENTACOOL",
        "levels": [
          5,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "KRABBY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SEADRA",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "KINGLER",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "Pokemon Tower Floor 3",
    "Cave": [
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "HAUNTER",
        "levels": [
          20,
          null
        ]
      }
    ]
  },
  {
    "location": "Pokemon Tower Floor 4",
    "Cave": [
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "HAUNTER",
        "levels": [
          20,
          null
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      }
    ]
  },
  {
    "location": "Pokemon Tower Floor 5",
    "Cave": [
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      },
      {
        "name": "HAUNTER",
        "levels": [
          20,
          null
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          15,
          17
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          13,
          19
        ]
      }
    ]
  },
  {
    "location": "Pokemon Tower Floor 6",
    "Cave": [
      {
        "name": "GASTLY",
        "levels": [
          14,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          14,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          14,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          14,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          14,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          14,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          14,
          19
        ]
      },
      {
        "name": "HAUNTER",
        "levels": [
          21,
          23
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "HAUNTER",
        "levels": [
          21,
          23
        ]
      }
    ]
  },
  {
    "location": "Pokemon Tower Floor 7",
    "Cave": [
      {
        "name": "GASTLY",
        "levels": [
          15,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          15,
          19
        ]
      },
      {
        "name": "CUBONE",
        "levels": [
          17,
          19
        ]
      },
      {
        "name": "HAUNTER",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          15,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          15,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          15,
          19
        ]
      },
      {
        "name": "HAUNTER",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          15,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          15,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          15,
          19
        ]
      },
      {
        "name": "GASTLY",
        "levels": [
          15,
          19
        ]
      }
    ]
  },
  {
    "location": "Pokemon Mansion 1F",
    "Cave": [
      {
        "name": "PONYTA",
        "levels": [
          32,
          36
        ]
      },
      {
        "name": "GRIMER",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          32,
          36
        ]
      },
      {
        "name": "GROWLITHE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "KOFFING",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          26,
          28
        ]
      },
      {
        "name": "VULPIX",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          26,
          28
        ]
      },
      {
        "name": "MUK",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "WEEZING",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "MUK",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "WEEZING",
        "levels": [
          32,
          null
        ]
      }
    ]
  },
  {
    "location": "Pokemon Mansion 2F",
    "Cave": [
      {
        "name": "PONYTA",
        "levels": [
          32,
          36
        ]
      },
      {
        "name": "GRIMER",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          32,
          36
        ]
      },
      {
        "name": "GROWLITHE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "KOFFING",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          26,
          28
        ]
      },
      {
        "name": "VULPIX",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          26,
          28
        ]
      },
      {
        "name": "MUK",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "WEEZING",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "MUK",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "WEEZING",
        "levels": [
          32,
          null
        ]
      }
    ]
  },
  {
    "location": "Pokemon Mansion 3F",
    "Cave": [
      {
        "name": "PONYTA",
        "levels": [
          32,
          36
        ]
      },
      {
        "name": "GRIMER",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          32,
          36
        ]
      },
      {
        "name": "GROWLITHE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "KOFFING",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "MAGMAR",
        "levels": [
          34,
          null
        ]
      },
      {
        "name": "VULPIX",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          26,
          28
        ]
      },
      {
        "name": "MUK",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "WEEZING",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "MUK",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "WEEZING",
        "levels": [
          32,
          null
        ]
      }
    ]
  },
  {
    "location": "Pokemon Mansion BF",
    "Cave": [
      {
        "name": "RATICATE",
        "levels": [
          34,
          38
        ]
      },
      {
        "name": "KOFFING",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          34,
          38
        ]
      },
      {
        "name": "VULPIX",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "GRIMER",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "GROWLITHE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          26,
          null
        ]
      },
      {
        "name": "MUK",
        "levels": [
          34,
          null
        ]
      },
      {
        "name": "MAGMAR",
        "levels": [
          38,
          null
        ]
      },
      {
        "name": "MUK",
        "levels": [
          34,
          null
        ]
      },
      {
        "name": "WEEZING",
        "levels": [
          34,
          null
        ]
      }
    ]
  },
  {
    "location": "Mars",
    "Cave": [
      {
        "name": "TRINVASIO",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "DRAKOSM",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "CUBAOOP",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "CUBAOOP",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "UFOWOAH",
        "levels": [
          84,
          87
        ]
      },
      {
        "name": "LIGOOP",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "CUBAOOP",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "DRAKOSM",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "DRAKOSM",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "SEARICE",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "SEARICE",
        "levels": [
          84,
          86
        ]
      }
    ]
  },
  {
    "location": "Seafoam Islands",
    "Cave": [
      {
        "name": "ZUBAT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          26,
          33
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          26,
          30
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          26,
          33
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          26,
          33
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          26,
          33
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          26,
          33
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          26,
          33
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          26,
          30
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          26,
          33
        ]
      }
    ]
  },
  {
    "location": "Seafoam Islands 2",
    "Cave": [
      {
        "name": "ZUBAT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "SEEL",
        "levels": [
          28,
          null
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          26,
          30
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          29,
          31
        ]
      },
      {
        "name": "SLOWBRO",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "GOLDUCK",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          22,
          26
        ]
      },
      {
        "name": "GOLDUCK",
        "levels": [
          33,
          35
        ]
      },
      {
        "name": "JYNX",
        "levels": [
          26,
          30
        ]
      }
    ]
  },
  {
    "location": "Seafoam Islands 3",
    "Cave": [
      {
        "name": "SEEL",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          22,
          24
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          26,
          30
        ]
      },
      {
        "name": "GOLDUCK",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SLOWBRO",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          30,
          32
        ]
      }
    ]
  },
  {
    "location": "Seafoam Islands 4",
    "Cave": [
      {
        "name": "SEEL",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "SEEL",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          26,
          30
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          24,
          null
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "GOLDUCK",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "DEWGONG",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SLOWBRO",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "SLOWBRO",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "GOLDUCK",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "GOLDUCK",
        "levels": [
          30,
          32
        ]
      }
    ],
    "Water": [
      {
        "name": "SEEL",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          25,
          30
        ]
      },
      {
        "name": "DEWGONG",
        "levels": [
          35,
          40
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          25,
          30
        ]
      },
      {
        "name": "SLOWBRO",
        "levels": [
          35,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "KRABBY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          15,
          30
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          30
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          15,
          25
        ]
      }
    ]
  },
  {
    "location": "Seafoam Islands 5",
    "Cave": [
      {
        "name": "SEEL",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "SEEL",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "SEEL",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          26,
          30
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "DEWGONG",
        "levels": [
          34,
          36
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          26,
          30
        ]
      },
      {
        "name": "GOLDUCK",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SLOWBRO",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "GOLDUCK",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SLOWBRO",
        "levels": [
          32,
          34
        ]
      }
    ],
    "Water": [
      {
        "name": "SEEL",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          25,
          30
        ]
      },
      {
        "name": "DEWGONG",
        "levels": [
          35,
          40
        ]
      },
      {
        "name": "SLOWBRO",
        "levels": [
          35,
          40
        ]
      },
      {
        "name": "GOLDUCK",
        "levels": [
          35,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "KRABBY",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "HORSEA",
        "levels": [
          15,
          30
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          15,
          30
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          15,
          25
        ]
      }
    ]
  },
  {
    "location": "Bill's Garden",
    "Land": [
      {
        "name": "VENUSAUR",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "BLASTOISE",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "CHARIZARD",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "EEVEE",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "ENTEI",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "RAIKOU",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "SUICUNE",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "ARTICUNO",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "ZAPDOS",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "MOLTRES",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "LUGIA",
        "levels": [
          50,
          null
        ]
      },
      {
        "name": "HOOH",
        "levels": [
          50,
          null
        ]
      }
    ]
  },
  {
    "location": "ROUTE 22",
    "Land": [
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          5
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          3,
          5
        ]
      },
      {
        "name": "PONYTA",
        "levels": [
          3,
          5
        ]
      }
    ],
    "Water": [
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "POLIWAG",
        "levels": [
          20,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          20,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          20,
          null
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "POLIWAG",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "POLIWHIRL",
        "levels": [
          20,
          30
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          15,
          35
        ]
      }
    ]
  },
  {
    "location": "Route 23 down",
    "Land": [
      {
        "name": "MANKEY",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "FEAROW",
        "levels": [
          40,
          44
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "EKANS",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SANDSHREW",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "SPEAROW",
        "levels": [
          32,
          34
        ]
      },
      {
        "name": "FEAROW",
        "levels": [
          40,
          44
        ]
      },
      {
        "name": "PRIMEAPE",
        "levels": [
          42,
          null
        ]
      },
      {
        "name": "SANDSLASH",
        "levels": [
          44,
          null
        ]
      },
      {
        "name": "PRIMEAPE",
        "levels": [
          42,
          null
        ]
      },
      {
        "name": "ARBOK",
        "levels": [
          44,
          null
        ]
      }
    ],
    "Water": [
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "POLIWAG",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "GOLDEEN",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "POLIWAG",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "POLIWHIRL",
        "levels": [
          20,
          30
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          15,
          35
        ]
      }
    ]
  },
  {
    "location": "VICTORY ROAD 1",
    "Cave": [
      {
        "name": "ONIX",
        "levels": [
          40,
          46
        ]
      },
      {
        "name": "MACHOP",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "ONIX",
        "levels": [
          40,
          46
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          44,
          null
        ]
      },
      {
        "name": "MACHOKE",
        "levels": [
          44,
          46
        ]
      },
      {
        "name": "MAROWAK",
        "levels": [
          44,
          46
        ]
      },
      {
        "name": "SANDSLASH",
        "levels": [
          44,
          null
        ]
      },
      {
        "name": "ARBOK",
        "levels": [
          44,
          null
        ]
      },
      {
        "name": "MAROWAK",
        "levels": [
          44,
          46
        ]
      }
    ]
  },
  {
    "location": "VICTORY ROAD 2",
    "Cave": [
      {
        "name": "MACHOP",
        "levels": [
          34,
          null
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          34,
          null
        ]
      },
      {
        "name": "ONIX",
        "levels": [
          45,
          48
        ]
      },
      {
        "name": "ONIX",
        "levels": [
          45,
          48
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          34,
          null
        ]
      },
      {
        "name": "PRIMEAPE",
        "levels": [
          42,
          null
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          46,
          null
        ]
      },
      {
        "name": "MACHOKE",
        "levels": [
          46,
          48
        ]
      },
      {
        "name": "MAROWAK",
        "levels": [
          46,
          48
        ]
      },
      {
        "name": "ARBOK",
        "levels": [
          46,
          null
        ]
      },
      {
        "name": "SANDSLASH",
        "levels": [
          46,
          null
        ]
      },
      {
        "name": "MAROWAK",
        "levels": [
          46,
          48
        ]
      }
    ]
  },
  {
    "location": "VICTORY ROAD 3",
    "Cave": [
      {
        "name": "ONIX",
        "levels": [
          40,
          46
        ]
      },
      {
        "name": "MACHOP",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "ONIX",
        "levels": [
          40,
          46
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "ZUBAT",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          44,
          null
        ]
      },
      {
        "name": "MACHOKE",
        "levels": [
          44,
          46
        ]
      },
      {
        "name": "MAROWAK",
        "levels": [
          44,
          46
        ]
      },
      {
        "name": "SANDSLASH",
        "levels": [
          44,
          null
        ]
      },
      {
        "name": "ARBOK",
        "levels": [
          44,
          null
        ]
      },
      {
        "name": "MAROWAK",
        "levels": [
          44,
          46
        ]
      }
    ]
  },
  {
    "location": "Safari zone 1",
    "Land": [
      {
        "name": "EXEGGCUTE",
        "levels": [
          24,
          25
        ]
      },
      {
        "name": "RHYHORN",
        "levels": [
          25,
          null
        ]
      },
      {
        "name": "NIDORANmA",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "NIDORANfE",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "NIDORINO",
        "levels": [
          31,
          null
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "PARASECT",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "SCYTHER",
        "levels": [
          23,
          null
        ]
      },
      {
        "name": "PINSIR",
        "levels": [
          23,
          null
        ]
      },
      {
        "name": "NIDORINA",
        "levels": [
          31,
          null
        ]
      },
      {
        "name": "CHANSEY",
        "levels": [
          23,
          null
        ]
      }
    ],
    "Water": [
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "GOLDEEN",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "POLIWAG",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "SEAKING",
        "levels": [
          20,
          30
        ]
      },
      {
        "name": "GOLDEEN",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "DRATINI",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "DRAGONAIR",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "Safari zone 2",
    "Land": [
      {
        "name": "EXEGGCUTE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "DODUO",
        "levels": [
          26,
          null
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "NIDORANmA",
        "levels": [
          24,
          null
        ]
      },
      {
        "name": "NIDORANfE",
        "levels": [
          24,
          null
        ]
      },
      {
        "name": "NIDORINO",
        "levels": [
          33,
          null
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "PARASECT",
        "levels": [
          25,
          null
        ]
      },
      {
        "name": "NIDORINA",
        "levels": [
          33,
          null
        ]
      },
      {
        "name": "KANGASKHAN",
        "levels": [
          25,
          null
        ]
      },
      {
        "name": "SCYTHER",
        "levels": [
          28,
          null
        ]
      },
      {
        "name": "PINSIR",
        "levels": [
          28,
          null
        ]
      }
    ],
    "Water": [
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "GOLDEEN",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "POLIWAG",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "GOLDEEN",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SEAKING",
        "levels": [
          20,
          30
        ]
      },
      {
        "name": "DRATINI",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "DRAGONAIR",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "Safari zone 3",
    "Land": [
      {
        "name": "EXEGGCUTE",
        "levels": [
          25,
          27
        ]
      },
      {
        "name": "RHYHORN",
        "levels": [
          26,
          null
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          23,
          null
        ]
      },
      {
        "name": "NIDORANfE",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "NIDORANmA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "NIDORINA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "PARAS",
        "levels": [
          23,
          null
        ]
      },
      {
        "name": "VENOMOTH",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "NIDORINO",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "CHANSEY",
        "levels": [
          26,
          null
        ]
      },
      {
        "name": "NIDORINO",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "TAUROS",
        "levels": [
          28,
          null
        ]
      }
    ],
    "Water": [
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "GOLDEEN",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "POLIWAG",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "GOLDEEN",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SEAKING",
        "levels": [
          20,
          30
        ]
      },
      {
        "name": "DRATINI",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "DRAGONAIR",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "Safari zone 4",
    "Land": [
      {
        "name": "DODUO",
        "levels": [
          26,
          null
        ]
      },
      {
        "name": "EXEGGCUTE",
        "levels": [
          25,
          27
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          23,
          null
        ]
      },
      {
        "name": "NIDORANmA",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "NIDORANfE",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "NIDORINO",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "VENONAT",
        "levels": [
          23,
          null
        ]
      },
      {
        "name": "VENOMOTH",
        "levels": [
          32,
          null
        ]
      },
      {
        "name": "NIDORINA",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "TAUROS",
        "levels": [
          25,
          null
        ]
      },
      {
        "name": "KANGASKHAN",
        "levels": [
          28,
          null
        ]
      },
      {
        "name": "NIDORINA",
        "levels": [
          30,
          null
        ]
      }
    ],
    "Water": [
      {
        "name": "SLOWPOKE",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          20,
          40
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "GOLDEEN",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "POLIWAG",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "GOLDEEN",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SEAKING",
        "levels": [
          20,
          30
        ]
      },
      {
        "name": "DRATINI",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          25,
          35
        ]
      },
      {
        "name": "DRAGONAIR",
        "levels": [
          25,
          35
        ]
      }
    ]
  },
  {
    "location": "Safari Zone",
    "Land": [
      {
        "name": "BONGORILLA",
        "levels": [
          23,
          24
        ]
      },
      {
        "name": "RHYHORN",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "PYROAR",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "KANGASKHAN",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "ORANGURU",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "GORDRARM",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "ELEOLER",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "PALMETRIC",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "KANGASKHAN",
        "levels": [
          23,
          26
        ]
      },
      {
        "name": "WRUFFLET",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "CHANSEY",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "DONGORILLA",
        "levels": [
          21,
          26
        ]
      }
    ],
    "Water": [
      {
        "name": "MANTYKE",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "FABREEL",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "OREGI",
        "levels": [
          21,
          26
        ]
      }
    ],
    "OldRod": [
      {
        "name": "DRATINI",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          15,
          26
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "DRATINI",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          15,
          26
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "DRATINI",
        "levels": [
          21,
          30
        ]
      },
      {
        "name": "DRATINI",
        "levels": [
          21,
          30
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "LUN",
        "levels": [
          15,
          35
        ]
      }
    ]
  },
  {
    "location": "Safari Zone",
    "Cave": [
      {
        "name": "RHYHORN",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "NIDORINO",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "NIDORINA",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "RHYHORN",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "WRUFFLET",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "RHYHORN",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "WRUFFLET",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "SCYTHER",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "VELOPREY",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "RATHY",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "CTHONIURM",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "VELOPREY",
        "levels": [
          23,
          27
        ]
      }
    ]
  },
  {
    "location": "Burning Tower",
    "Cave": [
      {
        "name": "RINRING",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "GOHNG",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "GOHNG",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "RINRING",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "KIRINRIKI",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "TWINZ",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "SPIDETTE",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "SUNMOLA",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "SUNMOLA",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "RAYLEEP",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "RAYLEEP",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "BLOSSOMOLE",
        "levels": [
          4,
          8
        ]
      }
    ]
  },
  {
    "location": "Burning Tower",
    "Cave": [
      {
        "name": "LEFMEW",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "TIGRETTE",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "TIGRETTE",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "LEFMEW",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "KURSTRAW",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "KURSTRAW",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "TAEL",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "WOLFMAN",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "WOLFMAN",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "BMURKROW",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "BOMSEEL",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "BOMSEEL",
        "levels": [
          4,
          8
        ]
      }
    ]
  },
  {
    "location": "Cerulean Cave 1",
    "Cave": [
      {
        "name": "PARASECT",
        "levels": [
          49,
          58
        ]
      },
      {
        "name": "MAGNETON",
        "levels": [
          49,
          null
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          46,
          55
        ]
      },
      {
        "name": "PRIMEAPE",
        "levels": [
          52,
          61
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          52,
          61
        ]
      },
      {
        "name": "MACHOKE",
        "levels": [
          46,
          null
        ]
      },
      {
        "name": "PARASECT",
        "levels": [
          49,
          58
        ]
      },
      {
        "name": "ELECTRODE",
        "levels": [
          58,
          null
        ]
      },
      {
        "name": "WOBBUFFET",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          46,
          55
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          52,
          61
        ]
      },
      {
        "name": "PRIMEAPE",
        "levels": [
          52,
          61
        ]
      }
    ],
    "Water": [
      {
        "name": "PSYDUCK",
        "levels": [
          30,
          50
        ]
      },
      {
        "name": "SLOWBRO",
        "levels": [
          40,
          55
        ]
      },
      {
        "name": "GOLDUCK",
        "levels": [
          40,
          55
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          30,
          50
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          30,
          50
        ]
      },
      {
        "name": "RockSmash",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          30,
          50
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          40,
          55
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          30,
          50
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          40,
          55
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          40,
          55
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "POLIWAG",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "GOLDEEN",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "POLIWAG",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "POLIWHIRL",
        "levels": [
          20,
          30
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          15,
          35
        ]
      }
    ]
  },
  {
    "location": "Cerulean Cave 2",
    "Cave": [
      {
        "name": "GOLBAT",
        "levels": [
          49,
          58
        ]
      },
      {
        "name": "MACHOKE",
        "levels": [
          49,
          null
        ]
      },
      {
        "name": "PARASECT",
        "levels": [
          52,
          61
        ]
      },
      {
        "name": "KADABRA",
        "levels": [
          55,
          64
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          55,
          64
        ]
      },
      {
        "name": "MAGNETON",
        "levels": [
          52,
          null
        ]
      },
      {
        "name": "WOBBUFFET",
        "levels": [
          58,
          null
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          49,
          58
        ]
      },
      {
        "name": "ELECTRODE",
        "levels": [
          61,
          null
        ]
      },
      {
        "name": "PARASECT",
        "levels": [
          52,
          61
        ]
      },
      {
        "name": "KADABRA",
        "levels": [
          55,
          64
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          55,
          64
        ]
      },
      {
        "name": "RockSmash",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          35,
          55
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          45,
          60
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          45,
          60
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          35,
          55
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          35,
          55
        ]
      }
    ]
  },
  {
    "location": "Cerulean Cave 3",
    "Cave": [
      {
        "name": "KADABRA",
        "levels": [
          58,
          67
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          58,
          67
        ]
      },
      {
        "name": "PARASECT",
        "levels": [
          55,
          64
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          52,
          61
        ]
      },
      {
        "name": "MACHOKE",
        "levels": [
          52,
          null
        ]
      },
      {
        "name": "MAGNETON",
        "levels": [
          55,
          null
        ]
      },
      {
        "name": "KADABRA",
        "levels": [
          58,
          67
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          58,
          67
        ]
      },
      {
        "name": "PARASECT",
        "levels": [
          55,
          64
        ]
      },
      {
        "name": "ELECTRODE",
        "levels": [
          64,
          null
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          52,
          61
        ]
      },
      {
        "name": "WOBBUFFET",
        "levels": [
          61,
          null
        ]
      }
    ],
    "Water": [
      {
        "name": "SLOWPOKE",
        "levels": [
          40,
          60
        ]
      },
      {
        "name": "SLOWBRO",
        "levels": [
          50,
          65
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          40,
          60
        ]
      },
      {
        "name": "GOLDUCK",
        "levels": [
          50,
          65
        ]
      },
      {
        "name": "GOLDUCK",
        "levels": [
          50,
          65
        ]
      },
      {
        "name": "RockSmash",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          40,
          60
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          50,
          65
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          40,
          60
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          50,
          65
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          50,
          65
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          null
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "POLIWAG",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "GOLDEEN",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          15
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "POLIWAG",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "POLIWHIRL",
        "levels": [
          20,
          30
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          15,
          35
        ]
      },
      {
        "name": "PSYDUCK",
        "levels": [
          15,
          25
        ]
      },
      {
        "name": "SLOWPOKE",
        "levels": [
          15,
          25
        ]
      }
    ]
  },
  {
    "location": "Route 1 BJ",
    "Land": [
      {
        "name": "COCOOBAG",
        "levels": [
          2,
          null
        ]
      },
      {
        "name": "QUAILNOTE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "PUPPEE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "COCOOBAG",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "QUAILNOTE",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "SNEKINDIAN",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "QUAILNOTE",
        "levels": [
          2,
          null
        ]
      },
      {
        "name": "SPIDETTE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SNEKINDIAN",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "SPIDETTE",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "SPIDETTE",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "FLOXO",
        "levels": [
          2,
          5
        ]
      }
    ]
  },
  {
    "location": "Mysterious Dungeon",
    "Cave": [
      {
        "name": "PIKACHUTWO",
        "levels": [
          68,
          80
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          68,
          93
        ]
      },
      {
        "name": "PIKACHUTWO",
        "levels": [
          65,
          94
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          52,
          91
        ]
      },
      {
        "name": "CBULBASAUR",
        "levels": [
          52,
          96
        ]
      },
      {
        "name": "CSQUIRTLE",
        "levels": [
          55,
          95
        ]
      },
      {
        "name": "CCHARMANDER",
        "levels": [
          58,
          94
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          58,
          93
        ]
      },
      {
        "name": "PARASECT",
        "levels": [
          55,
          84
        ]
      },
      {
        "name": "ELECTRODE",
        "levels": [
          54,
          85
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          52,
          81
        ]
      },
      {
        "name": "WOBBUFFET",
        "levels": [
          51,
          83
        ]
      }
    ]
  },
  {
    "location": "Mysterious Dungeon",
    "Cave": [
      {
        "name": "PIKACHUTWO",
        "levels": [
          78,
          94
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          78,
          93
        ]
      },
      {
        "name": "PIKACHUTWO",
        "levels": [
          75,
          94
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          72,
          91
        ]
      },
      {
        "name": "CIVYSAUR",
        "levels": [
          72,
          96
        ]
      },
      {
        "name": "CWARTORTLE",
        "levels": [
          75,
          95
        ]
      },
      {
        "name": "CCHARMELEON",
        "levels": [
          78,
          97
        ]
      },
      {
        "name": "DITTO",
        "levels": [
          78,
          93
        ]
      },
      {
        "name": "PARASECT",
        "levels": [
          75,
          84
        ]
      },
      {
        "name": "ELECTRODE",
        "levels": [
          74,
          85
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          72,
          81
        ]
      },
      {
        "name": "WOBBUFFET",
        "levels": [
          71,
          83
        ]
      }
    ]
  },
  {
    "location": "Power Plant BF3",
    "Cave": [
      {
        "name": "ATTOT",
        "levels": [
          54,
          57
        ]
      },
      {
        "name": "NUKOMB",
        "levels": [
          54,
          57
        ]
      },
      {
        "name": "NUKOMB",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "BARAB",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "BARAB",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          54,
          57
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          54,
          57
        ]
      },
      {
        "name": "ATTOT",
        "levels": [
          54,
          57
        ]
      },
      {
        "name": "BARAB",
        "levels": [
          54,
          57
        ]
      },
      {
        "name": "ATTOT",
        "levels": [
          54,
          56
        ]
      },
      {
        "name": "NUKOMB",
        "levels": [
          54,
          57
        ]
      },
      {
        "name": "ATTOT",
        "levels": [
          54,
          56
        ]
      }
    ]
  },
  {
    "location": "Mars Mine",
    "Cave": [
      {
        "name": "TRARSILE",
        "levels": [
          84,
          88
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          88
        ]
      },
      {
        "name": "BOULDARS",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "AYYLIEM",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "BOULDARS",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRARSILE",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "TRARSILE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "FACEFUGGER",
        "levels": [
          84,
          89
        ]
      }
    ]
  },
  {
    "location": "Mars Mine",
    "Cave": [
      {
        "name": "TRARSILE",
        "levels": [
          84,
          90
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          88
        ]
      },
      {
        "name": "BOULDARS",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRIDLER",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRARSILE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "FACEFUGGER",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRARSILE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TORTURLENS",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "MARSYBIE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "HONARSAL",
        "levels": [
          84,
          89
        ]
      }
    ]
  },
  {
    "location": "TRIAL Island",
    "Water": [
      {
        "name": "MAREANIE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "ARAQUANID",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "PYUKUMUKU",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "GOLISOPOD",
        "levels": [
          30,
          32
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAREANIE",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          23,
          25
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "GOLISOPOD",
        "levels": [
          20,
          25
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          23,
          31
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          23,
          34
        ]
      },
      {
        "name": "GOLISOPOD",
        "levels": [
          23,
          31
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          33,
          null
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          31,
          null
        ]
      }
    ]
  },
  {
    "location": "Trial Caverns",
    "Cave": [
      {
        "name": "FOMANTIS",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "TURTONATOR",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "RIBOMBEE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "MINIOR",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "ORICORIO",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "SANDYGAST",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "STEENEE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "SALANDIT",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "RIBOMBEE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "MUDSDALE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "COMFEY",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "BEWEAR",
        "levels": [
          30,
          32
        ]
      }
    ],
    "Water": [
      {
        "name": "MAREANIE",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "ARAQUANID",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "PYUKUMUKU",
        "levels": [
          30,
          31
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "GOLISOPOD",
        "levels": [
          30,
          32
        ]
      },
      {
        "name": "RockSmash",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          24,
          31
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          24,
          31
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          24,
          31
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          24,
          31
        ]
      },
      {
        "name": "GRAVELER",
        "levels": [
          24,
          31
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAREANIE",
        "levels": [
          22,
          null
        ]
      },
      {
        "name": "BOTTLEO",
        "levels": [
          23,
          25
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "GOLISOPOD",
        "levels": [
          20,
          25
        ]
      },
      {
        "name": "ORSCINE",
        "levels": [
          23,
          25
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          23,
          31
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          23,
          34
        ]
      },
      {
        "name": "GOLISOPOD",
        "levels": [
          23,
          31
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          33,
          null
        ]
      },
      {
        "name": "BRUXISH",
        "levels": [
          31,
          null
        ]
      }
    ]
  },
  {
    "location": "Ultra Space",
    "Cave": [
      {
        "name": "SPIRUS",
        "levels": [
          62,
          65
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          62,
          65
        ]
      },
      {
        "name": "SATELI",
        "levels": [
          62,
          65
        ]
      },
      {
        "name": "NOVAIS",
        "levels": [
          62,
          65
        ]
      },
      {
        "name": "DARKOLE",
        "levels": [
          62,
          65
        ]
      },
      {
        "name": "MAWCAR",
        "levels": [
          62,
          65
        ]
      },
      {
        "name": "MAWCAR",
        "levels": [
          62,
          65
        ]
      },
      {
        "name": "DARKOLE",
        "levels": [
          62,
          65
        ]
      },
      {
        "name": "NOVAIS",
        "levels": [
          62,
          65
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          62,
          65
        ]
      },
      {
        "name": "SATELI",
        "levels": [
          62,
          65
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          62,
          65
        ]
      }
    ]
  },
  {
    "location": "Ship BF1",
    "Cave": [
      {
        "name": "KRABBY",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "MACHOP",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "SHELLDER",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "MACHOP",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "SHELLDER",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "MACHOP",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "MANKEY",
        "levels": [
          8,
          10
        ]
      },
      {
        "name": "KRABBY",
        "levels": [
          8,
          10
        ]
      }
    ]
  },
  {
    "location": "Mars Mine",
    "Cave": [
      {
        "name": "TORTURLENS",
        "levels": [
          84,
          90
        ]
      },
      {
        "name": "TORTURLENS",
        "levels": [
          84,
          88
        ]
      },
      {
        "name": "BOULDARS",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "MAIDCORESH",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "MARSYBIE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "MARSYBIE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "MARSYBIE",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "CYBIRB",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TORTURLENS",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "TRARSILE",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "HONARSAL",
        "levels": [
          84,
          89
        ]
      },
      {
        "name": "HONARSAL",
        "levels": [
          84,
          89
        ]
      }
    ]
  },
  {
    "location": "Mars Mine",
    "Cave": [
      {
        "name": "TORTURLENS",
        "levels": [
          90,
          92
        ]
      },
      {
        "name": "TORTURLENS",
        "levels": [
          90,
          94
        ]
      },
      {
        "name": "HONARSAL",
        "levels": [
          90,
          94
        ]
      },
      {
        "name": "MAIDCORESH",
        "levels": [
          90,
          92
        ]
      },
      {
        "name": "MARSYBIE",
        "levels": [
          90,
          94
        ]
      },
      {
        "name": "MARSYBIE",
        "levels": [
          90,
          92
        ]
      },
      {
        "name": "MARSYBIE",
        "levels": [
          90,
          92
        ]
      },
      {
        "name": "MAIDCORESH",
        "levels": [
          90,
          92
        ]
      },
      {
        "name": "TORTURLENS",
        "levels": [
          90,
          93
        ]
      },
      {
        "name": "TRARSILE",
        "levels": [
          90,
          93
        ]
      },
      {
        "name": "HONARSAL",
        "levels": [
          90,
          96
        ]
      },
      {
        "name": "HONARSAL",
        "levels": [
          90,
          96
        ]
      }
    ]
  },
  {
    "location": "Mars Mine",
    "Cave": [
      {
        "name": "TORTURLENS",
        "levels": [
          90,
          92
        ]
      },
      {
        "name": "TORTURLENS",
        "levels": [
          90,
          94
        ]
      },
      {
        "name": "HONARSAL",
        "levels": [
          90,
          94
        ]
      },
      {
        "name": "MAIDCORESH",
        "levels": [
          90,
          92
        ]
      },
      {
        "name": "MARSYBIE",
        "levels": [
          90,
          94
        ]
      },
      {
        "name": "MARSYBIE",
        "levels": [
          90,
          92
        ]
      },
      {
        "name": "MARSYBIE",
        "levels": [
          90,
          92
        ]
      },
      {
        "name": "MAIDCORESH",
        "levels": [
          90,
          92
        ]
      },
      {
        "name": "TORTURLENS",
        "levels": [
          90,
          93
        ]
      },
      {
        "name": "TRARSILE",
        "levels": [
          90,
          93
        ]
      },
      {
        "name": "HONARSAL",
        "levels": [
          90,
          96
        ]
      },
      {
        "name": "HONARSAL",
        "levels": [
          90,
          96
        ]
      }
    ]
  },
  {
    "location": "Venus",
    "Cave": [
      {
        "name": "DOVEART",
        "levels": [
          89,
          96
        ]
      },
      {
        "name": "HBUNEARY",
        "levels": [
          90,
          95
        ]
      },
      {
        "name": "DOVEART",
        "levels": [
          90,
          95
        ]
      },
      {
        "name": "SNAKEART",
        "levels": [
          90,
          96
        ]
      },
      {
        "name": "DOVEART",
        "levels": [
          90,
          96
        ]
      },
      {
        "name": "LUVDISC",
        "levels": [
          90,
          95
        ]
      },
      {
        "name": "LUVDISC",
        "levels": [
          90,
          95
        ]
      },
      {
        "name": "MFUNOWN",
        "levels": [
          90,
          96
        ]
      },
      {
        "name": "CARNIVINE",
        "levels": [
          90,
          97
        ]
      },
      {
        "name": "DOVEART",
        "levels": [
          90,
          95
        ]
      },
      {
        "name": "VENUSAUR",
        "levels": [
          90,
          96
        ]
      },
      {
        "name": "VENUSAUR",
        "levels": [
          90,
          96
        ]
      }
    ]
  },
  {
    "location": "ROUTE 101",
    "Land": [
      {
        "name": "POOCHYENA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "ZIGZAGOON",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "WURMPLE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "ZIGZAGOON",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "WURMPLE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "POOCHYENA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "POOCHYENA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "WURMPLE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "ZIGZAGOON",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "WURMPLE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "ZIGZAGOON",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "POOCHYENA",
        "levels": [
          2,
          3
        ]
      }
    ]
  },
  {
    "location": "The Sun",
    "Cave": [
      {
        "name": "SOLROCK",
        "levels": [
          91,
          98
        ]
      },
      {
        "name": "SOLA",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SOLROCK",
        "levels": [
          91,
          97
        ]
      },
      {
        "name": "SOLA",
        "levels": [
          92,
          97
        ]
      },
      {
        "name": "NOVAIS",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SUNFLORA",
        "levels": [
          94,
          97
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SUNFLORA",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "HELIOLISK",
        "levels": [
          92,
          98
        ]
      },
      {
        "name": "NOVAIS",
        "levels": [
          94,
          98
        ]
      },
      {
        "name": "SOLROCK",
        "levels": [
          91,
          98
        ]
      },
      {
        "name": "SOLAIOSS",
        "levels": [
          95,
          98
        ]
      }
    ]
  },
  {
    "location": "Surface of the Sun",
    "Cave": [
      {
        "name": "SOLROCK",
        "levels": [
          91,
          98
        ]
      },
      {
        "name": "SOLA",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SOLROCK",
        "levels": [
          91,
          97
        ]
      },
      {
        "name": "SALEMBER",
        "levels": [
          92,
          97
        ]
      },
      {
        "name": "NOVAIS",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SOLARESS",
        "levels": [
          94,
          97
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SUNFLORA",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SOLARESS",
        "levels": [
          92,
          98
        ]
      },
      {
        "name": "NOVAIS",
        "levels": [
          94,
          98
        ]
      },
      {
        "name": "SOLROCK",
        "levels": [
          91,
          98
        ]
      },
      {
        "name": "SOLAIOSS",
        "levels": [
          95,
          98
        ]
      }
    ]
  },
  {
    "location": "???",
    "Cave": [
      {
        "name": "SOLROCK",
        "levels": [
          91,
          98
        ]
      },
      {
        "name": "SOLA",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SOLROCK",
        "levels": [
          91,
          97
        ]
      },
      {
        "name": "SALEMBER",
        "levels": [
          92,
          97
        ]
      },
      {
        "name": "NOVAIS",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SOLARESS",
        "levels": [
          94,
          97
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SUNFLORA",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SOLARESS",
        "levels": [
          92,
          98
        ]
      },
      {
        "name": "SUNCRAB",
        "levels": [
          94,
          98
        ]
      },
      {
        "name": "SANZUCROW",
        "levels": [
          91,
          98
        ]
      },
      {
        "name": "SANZUCROW",
        "levels": [
          95,
          98
        ]
      }
    ]
  },
  {
    "location": "Surface of the Sun",
    "Cave": [
      {
        "name": "SOLROCK",
        "levels": [
          91,
          98
        ]
      },
      {
        "name": "SOLA",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SOLROCK",
        "levels": [
          91,
          97
        ]
      },
      {
        "name": "SALEMBER",
        "levels": [
          92,
          97
        ]
      },
      {
        "name": "NOVAIS",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SOLARESS",
        "levels": [
          94,
          97
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SOLARESS",
        "levels": [
          93,
          97
        ]
      },
      {
        "name": "SOLARESS",
        "levels": [
          92,
          98
        ]
      },
      {
        "name": "NOVAIS",
        "levels": [
          94,
          98
        ]
      },
      {
        "name": "SUNCRAB",
        "levels": [
          91,
          98
        ]
      },
      {
        "name": "SANZUCROW",
        "levels": [
          95,
          98
        ]
      }
    ]
  },
  {
    "location": "ROUTE 104",
    "Land": [
      {
        "name": "POOCHYENA",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "ZIGZAGOON",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "WINGULL",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "ZIGZAGOON",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "TAILLOW",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "MARILL",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "MARILL",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "TAILLOW",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "WURMPLE",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "WINGULL",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "ZIGZAGOON",
        "levels": [
          4,
          5
        ]
      },
      {
        "name": "POOCHYENA",
        "levels": [
          4,
          5
        ]
      }
    ],
    "Water": [
      {
        "name": "WINGULL",
        "levels": [
          20,
          30
        ]
      },
      {
        "name": "WINGULL",
        "levels": [
          5,
          35
        ]
      },
      {
        "name": "WINGULL",
        "levels": [
          10,
          30
        ]
      },
      {
        "name": "PELIPPER",
        "levels": [
          10,
          30
        ]
      },
      {
        "name": "PELIPPER",
        "levels": [
          25,
          30
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          10
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          5,
          10
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          10,
          30
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          10,
          30
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          10,
          30
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          20,
          45
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          20,
          45
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          25,
          45
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          25,
          45
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          25,
          45
        ]
      }
    ]
  },
  {
    "location": "Venus",
    "Cave": [
      {
        "name": "DOVEART",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "SNAKEART",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "HBUNEARY",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "SNAKEART",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "DOVEART",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "LUVDISC",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "LUVDISC",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "DOVEART",
        "levels": [
          80,
          93
        ]
      },
      {
        "name": "SNAKEART",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "DOVEART",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "VENUSAUR",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "VENUSAUR",
        "levels": [
          80,
          90
        ]
      }
    ]
  },
  {
    "location": "Mercury",
    "Cave": [
      {
        "name": "MERCARY",
        "levels": [
          79,
          90
        ]
      },
      {
        "name": "MERCARY",
        "levels": [
          70,
          90
        ]
      },
      {
        "name": "MERCARY",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "ROGODO",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "TUNACURY",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "TUNACURY",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "MERQETAL",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "MERCARY",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "MERCARY",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "TUNACURY",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "MERQETAL",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "MERQETAL",
        "levels": [
          80,
          90
        ]
      }
    ]
  },
  {
    "location": "Route 29 Copy",
    "LandDay": [
      {
        "name": "RATTATA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "LEDYBA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "LEDYBA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "PIDGEY",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "HOPPIP",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "HOPPIP",
        "levels": [
          2,
          3
        ]
      }
    ],
    "LandNight": [
      {
        "name": "RATTATA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "HOOTHOOT",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SPINARAK",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SPINARAK",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "HOOTHOOT",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SENTRET",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "HOOTHOOT",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "RATTATA",
        "levels": [
          2,
          3
        ]
      }
    ]
  },
  {
    "location": "Shocky Cavy",
    "Cave": [
      {
        "name": "TOGEDEMARU",
        "levels": [
          28,
          31
        ]
      },
      {
        "name": "CHARJABUG",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "JOLTIK",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "HELIOPTILE",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "BLITZLE",
        "levels": [
          28,
          31
        ]
      },
      {
        "name": "TYNAMO",
        "levels": [
          28,
          31
        ]
      },
      {
        "name": "TYNAMO",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "ELEKID",
        "levels": [
          28,
          31
        ]
      },
      {
        "name": "HELIOPTILE",
        "levels": [
          28,
          31
        ]
      },
      {
        "name": "DEDENNE",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "ELEKID",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "BLITZLE",
        "levels": [
          28,
          30
        ]
      }
    ]
  },
  {
    "location": "Thermal Cavern",
    "Cave": [
      {
        "name": "DOITA",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "MAGMAR",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "PYROAR",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "BARBARACLE",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "BARBARACLE",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "DOITA",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "PYROAR",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "BARBARACLE",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "BARBARACLE",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "TURTONATOR",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "MAGMAR",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "GOODRA",
        "levels": [
          53,
          55
        ]
      }
    ],
    "Water": [
      {
        "name": "CLAWITZER",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "DRAGALGE",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "CLAWITZER",
        "levels": [
          10,
          27
        ]
      },
      {
        "name": "DRAGALGE",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "CLAWITZER",
        "levels": [
          53,
          55
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          53,
          55
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "MAGIKARP",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          23,
          55
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          20,
          55
        ]
      },
      {
        "name": "MAGIKARP",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "GYARADOS",
        "levels": [
          53,
          55
        ]
      }
    ]
  },
  {
    "location": "Nuclear Forest",
    "Cave": [
      {
        "name": "ATTOT",
        "levels": [
          50,
          54
        ]
      },
      {
        "name": "NUKOMB",
        "levels": [
          50,
          54
        ]
      },
      {
        "name": "NUKOMB",
        "levels": [
          50,
          54
        ]
      },
      {
        "name": "BARAB",
        "levels": [
          50,
          54
        ]
      },
      {
        "name": "BARAB",
        "levels": [
          50,
          54
        ]
      },
      {
        "name": "ATTOT",
        "levels": [
          50,
          54
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          50,
          54
        ]
      },
      {
        "name": "ATTOT",
        "levels": [
          50,
          53
        ]
      },
      {
        "name": "BARAB",
        "levels": [
          49,
          54
        ]
      },
      {
        "name": "ATTOT",
        "levels": [
          50,
          54
        ]
      },
      {
        "name": "NUKOMB",
        "levels": [
          50,
          54
        ]
      },
      {
        "name": "ATTOT",
        "levels": [
          49,
          54
        ]
      }
    ]
  },
  {
    "location": "MAP781",
    "Land": [
      {
        "name": "SURSKIT",
        "levels": [
          80,
          94
        ]
      },
      {
        "name": "RATICATE",
        "levels": [
          80,
          94
        ]
      },
      {
        "name": "PIDGEOT",
        "levels": [
          80,
          94
        ]
      },
      {
        "name": "COMBEE",
        "levels": [
          80,
          94
        ]
      },
      {
        "name": "BARAB",
        "levels": [
          80,
          94
        ]
      },
      {
        "name": "GASTRODON",
        "levels": [
          80,
          94
        ]
      },
      {
        "name": "EKANS",
        "levels": [
          80,
          94
        ]
      },
      {
        "name": "GEODUDE",
        "levels": [
          80,
          94
        ]
      },
      {
        "name": "NOCTOWL",
        "levels": [
          80,
          94
        ]
      },
      {
        "name": "DOITA",
        "levels": [
          80,
          94
        ]
      },
      {
        "name": "ABSOL",
        "levels": [
          80,
          94
        ]
      },
      {
        "name": "SULARCL",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "R'lyeh",
    "Cave": [
      {
        "name": "CTHUSPAWN",
        "levels": [
          70,
          84
        ]
      },
      {
        "name": "DEEPONE",
        "levels": [
          70,
          84
        ]
      },
      {
        "name": "DEEPONE",
        "levels": [
          70,
          84
        ]
      },
      {
        "name": "SLOGGOTH",
        "levels": [
          70,
          84
        ]
      },
      {
        "name": "DEEPONE",
        "levels": [
          70,
          84
        ]
      },
      {
        "name": "DEEPONE",
        "levels": [
          70,
          84
        ]
      },
      {
        "name": "DEEPONE",
        "levels": [
          70,
          84
        ]
      },
      {
        "name": "DEEPONE",
        "levels": [
          70,
          84
        ]
      },
      {
        "name": "CTHUSPAWN",
        "levels": [
          70,
          84
        ]
      },
      {
        "name": "CTHUSPAWN",
        "levels": [
          70,
          84
        ]
      },
      {
        "name": "CTHUSPAWN",
        "levels": [
          70,
          84
        ]
      },
      {
        "name": "CTHUSPAWN",
        "levels": [
          70,
          84
        ]
      }
    ]
  },
  {
    "location": "Outer Outer Space",
    "Cave": [
      {
        "name": "ACASMOC",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "SPLAGUE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "INFINISTAKE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ASHGAAAAAA",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ACASMOC",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "HUNTORROR",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CTHUSPAWN",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "SPLAGUE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "INFINISTAKE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "FLOLYP",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "MIGUS",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "SEARAM",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "Outer Path",
    "Cave": [
      {
        "name": "ELDRIZ",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "BLASPHLUTE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "BLASPHLUTE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "NITEGANT",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CTHUSPAWN",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DARKYOUN",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ACASMOC",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "FIREPIRE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "SLOGGEROTH",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "STARPIRE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "BYAKLIGHT",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ELDCRAFTIAN",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "Water World",
    "Water": [
      {
        "name": "BGYARADOS",
        "levels": [
          89,
          94
        ]
      },
      {
        "name": "WHALEDRIFF",
        "levels": [
          89,
          97
        ]
      },
      {
        "name": "DROWNSKEL",
        "levels": [
          88,
          99
        ]
      },
      {
        "name": "SULARCL",
        "levels": [
          87,
          99
        ]
      },
      {
        "name": "DEEPONE",
        "levels": [
          90,
          95
        ]
      }
    ],
    "OldRod": [
      {
        "name": "BMAGIKARP",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "BMAGIKARP",
        "levels": [
          53,
          55
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "BMAGIKARP",
        "levels": [
          53,
          55
        ]
      },
      {
        "name": "WHALEDRIFF",
        "levels": [
          53,
          99
        ]
      },
      {
        "name": "WHALEDRIFF",
        "levels": [
          53,
          99
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "WHALEDRIFF",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "WHALEDRIFF",
        "levels": [
          87,
          99
        ]
      },
      {
        "name": "CRADISK",
        "levels": [
          87,
          99
        ]
      },
      {
        "name": "CRUSTOLOR",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "BGYARADOS",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "Grass World",
    "Land": [
      {
        "name": "CHAIRY",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "TROPILIGHTNING",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "MELLOWN",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "MIRACACT",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "GRASSTACLES",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "MELONVILE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DONGORILLA",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "AEXEGGUTOR",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "GOSSIFLEUR",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CACTOOS",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "TIKISQUE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "MIGOGGOTH",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "Fire World",
    "Cave": [
      {
        "name": "MAGMAR",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "BAUMINE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "RAPIDASH",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "MAGCARGO",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "TORKOAL",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DARMANITAN",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "HEATMOR",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "FIREPIRE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "AJYNX",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "SOLARESS",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DRAKOSM",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "VOLCARONA",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "Steam World",
    "Land": [
      {
        "name": "BEHEMIST",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "SGRAVELER",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ZYKLAS",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "GACHAMBER",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "SGOLEM",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "STWEAMS",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "STWEAMS",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ELEOLER",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ATORKOAL",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "BEHEMIST",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "STEAMIST",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "STEAMERCOM",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "Wood World",
    "Land": [
      {
        "name": "SAPLOM",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CHESTOX",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "TENABLERUS",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CHESTOX",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CAPSILEAU",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CANYOU",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DARKYOUN",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CAPSILEAU",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "TROJORSE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DARKYOUN",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ROTREE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ROTREE",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "Magma World",
    "Cave": [
      {
        "name": "MAGMOCKET",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DOITA",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "MAGMOCKET",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DOITA",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "MAGMOCKET",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DOITA",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "MAGMOCKET",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DOITA",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "MAGCARGO",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "SUNCRAB",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "MAGMAR",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "HERUPTIN",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "Galar Cave",
    "Cave": [
      {
        "name": "ROOKIEDIE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SKWOVET",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "BLIPBUG",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "YAMPER",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "NICKET",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "WOOLOO",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "GOSSIFLEUR",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "ARROKUDA",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "CRAMORANT",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "EISCUE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "IMPIDIMP",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "IMPIDIMP",
        "levels": [
          2,
          4
        ]
      }
    ]
  },
  {
    "location": "Galar Cave",
    "Cave": [
      {
        "name": "ROLYCOLY",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "CHEWTLE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "MILCERY",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SINISTEA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "HATTENA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SIZZLIPEDE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "CUFANT",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "APPLIN",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "TOXEL",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "SNOM",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "SNOM",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "FALINKS",
        "levels": [
          2,
          4
        ]
      }
    ]
  },
  {
    "location": "Galar Cave",
    "Cave": [
      {
        "name": "SILICOBRA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "MORPEKO",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "CLOBBOPUS",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "PINCURCHIN",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "INDEEDEE",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "GDARUMAKA",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "GFARFETCHD",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "GSTUNFISK",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "GYAMASK",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "STONJOURNER",
        "levels": [
          2,
          3
        ]
      },
      {
        "name": "DURALUDON",
        "levels": [
          2,
          4
        ]
      },
      {
        "name": "DREEPY",
        "levels": [
          2,
          4
        ]
      }
    ]
  },
  {
    "location": "Sword and Shield Temple",
    "Cave": [
      {
        "name": "DUBWOOL",
        "levels": [
          65,
          70
        ]
      },
      {
        "name": "COPPERAJAH",
        "levels": [
          65,
          70
        ]
      },
      {
        "name": "COALOSSAL",
        "levels": [
          65,
          70
        ]
      },
      {
        "name": "CORVIKNIGHT",
        "levels": [
          65,
          70
        ]
      },
      {
        "name": "DREDNAW",
        "levels": [
          65,
          70
        ]
      },
      {
        "name": "STONJOURNER",
        "levels": [
          65,
          70
        ]
      },
      {
        "name": "RUNERIGUS",
        "levels": [
          65,
          70
        ]
      },
      {
        "name": "GRAPIDASH",
        "levels": [
          65,
          70
        ]
      },
      {
        "name": "HATTERENE",
        "levels": [
          65,
          70
        ]
      },
      {
        "name": "GRIMMSNARL",
        "levels": [
          65,
          70
        ]
      },
      {
        "name": "DURALUDON",
        "levels": [
          65,
          70
        ]
      },
      {
        "name": "DRAKLOAK",
        "levels": [
          65,
          70
        ]
      }
    ]
  },
  {
    "location": "Rock World",
    "Cave": [
      {
        "name": "ONIX",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "GOLEM",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "PAREYEMID",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "GIGALITH",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "BRICKOR",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "WEEPANGEL",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ROCKODILE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "SULARCL",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CRADISK",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "AJYNX",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "TIWISONE",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "Magic World",
    "Cave": [
      {
        "name": "NAMINO",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "WIZCAP",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "WIZCAP",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CUMMUNCULUS",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CUMMUNCULUS",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "SNATAN",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "KADABRA",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "GOATEMON",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ALAKAZAM",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DTSAREENA",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "MASIGIL",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "Paper World",
    "Cave": [
      {
        "name": "PAGIE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ENCYCLODIA",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "BOXO",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "SWANAPER",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "RECYCLAT",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "BOXTRESS",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "ROBOX",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "PAGIE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DRAWBIE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "DRAWBIE",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CANVAST",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "CENCYCLODIA",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "Nuclear World",
    "Cave": [
      {
        "name": "FISSIOM",
        "levels": [
          90,
          97
        ]
      },
      {
        "name": "RADICRAB",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "GAMMARAY",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "REQIMISSILE",
        "levels": [
          87,
          95
        ]
      },
      {
        "name": "GODZILLUS",
        "levels": [
          90,
          95
        ]
      },
      {
        "name": "NUKREEP",
        "levels": [
          90,
          97
        ]
      },
      {
        "name": "RODACTYL",
        "levels": [
          90,
          95
        ]
      },
      {
        "name": "GAMMARAY",
        "levels": [
          90,
          97
        ]
      },
      {
        "name": "REACTIOX",
        "levels": [
          90,
          97
        ]
      },
      {
        "name": "NUKADOW",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "NDRAGONAIR",
        "levels": [
          90,
          99
        ]
      },
      {
        "name": "NDRAGONITE",
        "levels": [
          90,
          99
        ]
      }
    ]
  },
  {
    "location": "Divine World",
    "Cave": [
      {
        "name": "ANOL",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ORDERYMID",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ANGEIST",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ARCHANGO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ROGODO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ROGODO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "OMEGNOWN",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ARCHANGO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "TORTUAGEL",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "WEEPANGEL",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "RYERPENT",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "RYULUNG",
        "levels": [
          80,
          95
        ]
      }
    ]
  },
  {
    "location": "Chaos World",
    "Cave": [
      {
        "name": "CORAUT",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "LEDEVILAIN",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "HELPME",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "CATACE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "SPINDA",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "STEAMIST",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "GOATKUN",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "CHAOSEMPLE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "CRYONGI",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MEATCKO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "DOOMSEYE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ELDRAGON",
        "levels": [
          80,
          95
        ]
      }
    ],
    "Water": [
      {
        "name": "CORAUT",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "STEAMIST",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ELDREYE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ICENDLESS",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MAWCAR",
        "levels": [
          80,
          95
        ]
      }
    ],
    "OldRod": [
      {
        "name": "MEATCKO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MEATCKO",
        "levels": [
          80,
          95
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "MEATCKO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MEATCKO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MEATCKO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "MEATCKO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MEATCKO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MEATCKO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MEATCKO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ELDCRAFTIAN",
        "levels": [
          80,
          95
        ]
      }
    ]
  },
  {
    "location": "Digiworld",
    "Cave": [
      {
        "name": "AUGUMON",
        "levels": [
          10,
          45
        ]
      },
      {
        "name": "TSUNOMON",
        "levels": [
          5,
          25
        ]
      },
      {
        "name": "MOTIMON",
        "levels": [
          5,
          25
        ]
      },
      {
        "name": "BIYOMON",
        "levels": [
          10,
          45
        ]
      },
      {
        "name": "TENTOMON",
        "levels": [
          7,
          45
        ]
      },
      {
        "name": "PALMON",
        "levels": [
          7,
          45
        ]
      },
      {
        "name": "PENGUINMON",
        "levels": [
          7,
          45
        ]
      },
      {
        "name": "PAGUMON",
        "levels": [
          7,
          45
        ]
      },
      {
        "name": "GOMAMON",
        "levels": [
          7,
          30
        ]
      },
      {
        "name": "TOKOMON",
        "levels": [
          7,
          45
        ]
      },
      {
        "name": "GABUMON",
        "levels": [
          7,
          45
        ]
      },
      {
        "name": "SALAMON",
        "levels": [
          7,
          45
        ]
      }
    ]
  },
  {
    "location": "Fighting World",
    "Cave": [
      {
        "name": "TYROGUE",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "MACHOKE",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "CHOKOLIT",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "GURDURR",
        "levels": [
          87,
          95
        ]
      },
      {
        "name": "MIENSHAO",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MEDICHAM",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "KAPIERCE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "BEWEAR",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "BRICKOR",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "SHATTARATE",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "TONEOUT",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "ARCHANGO",
        "levels": [
          70,
          95
        ]
      }
    ]
  },
  {
    "location": "Shock Valley",
    "Cave": [
      {
        "name": "MAGNETON",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "ELECTABUZZ",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "PRIMEAPE",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "MACHOKE",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "MIENSHAO",
        "levels": [
          60,
          61
        ]
      },
      {
        "name": "LUXRAY",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "EELEKTRIK",
        "levels": [
          60,
          65
        ]
      },
      {
        "name": "GSTUNFISK",
        "levels": [
          60,
          66
        ]
      },
      {
        "name": "BRICKOR",
        "levels": [
          60,
          65
        ]
      },
      {
        "name": "SHATTARATE",
        "levels": [
          60,
          65
        ]
      },
      {
        "name": "TROPILIGHTNING",
        "levels": [
          60,
          65
        ]
      },
      {
        "name": "LIGHTULB",
        "levels": [
          60,
          65
        ]
      }
    ]
  },
  {
    "location": "Flare Valley",
    "Cave": [
      {
        "name": "MAGMAR",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "RAPIDASH",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "MAGCARGO",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "HOUNDOOM",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "BAUMINE",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "GLINOONE",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "WEEZING",
        "levels": [
          60,
          66
        ]
      },
      {
        "name": "HEATMOR",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "KROOKODILE",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "DARMANITAN",
        "levels": [
          60,
          64
        ]
      },
      {
        "name": "TORKOAL",
        "levels": [
          60,
          62
        ]
      },
      {
        "name": "SALANDIT",
        "levels": [
          60,
          63
        ]
      }
    ]
  },
  {
    "location": "Frost Valley",
    "Cave": [
      {
        "name": "PILOSWINE",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "JYNX",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "MEDICHAM",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "GLALIE",
        "levels": [
          60,
          66
        ]
      },
      {
        "name": "SNEASEL",
        "levels": [
          60,
          66
        ]
      },
      {
        "name": "GSLOWPOKE",
        "levels": [
          60,
          66
        ]
      },
      {
        "name": "GMRMIME",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "ABOMASNOW",
        "levels": [
          60,
          66
        ]
      },
      {
        "name": "FROSMOTH",
        "levels": [
          60,
          63
        ]
      },
      {
        "name": "GDARMANITAN",
        "levels": [
          60,
          66
        ]
      },
      {
        "name": "BLIZZLAM",
        "levels": [
          60,
          65
        ]
      },
      {
        "name": "COCAITURD",
        "levels": [
          60,
          65
        ]
      }
    ]
  },
  {
    "location": "Temple of the Modern Age",
    "Cave": [
      {
        "name": "MAGNEMITE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "BULBIGHT",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "AGEODUDE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "CHARJABUG",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "HELIOPTILE",
        "levels": [
          28,
          30
        ]
      },
      {
        "name": "JOLTIK",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "TYNAMO",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "FANIN",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "TOXEL",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "RADIEN",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ATTOT",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          29,
          30
        ]
      }
    ]
  },
  {
    "location": "Temple of the End Age",
    "Cave": [
      {
        "name": "ZUBAT",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "NOIBAT",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "AXEW",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "GIBLE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "SIXSNEK",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "JANGMOO",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "DEINO",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "DRUDDIGON",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "TIROAR",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "SHELGON",
        "levels": [
          30,
          null
        ]
      },
      {
        "name": "GABITE",
        "levels": [
          29,
          30
        ]
      },
      {
        "name": "ACIES",
        "levels": [
          29,
          30
        ]
      }
    ]
  },
  {
    "location": "Zodiac Temple",
    "Cave": [
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ZODIACUNOWN",
        "levels": [
          84,
          86
        ]
      }
    ]
  },
  {
    "location": "Wind World",
    "Cave": [
      {
        "name": "LAMCOUD",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "HOMPUFF",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "GORALE",
        "levels": [
          87,
          95
        ]
      },
      {
        "name": "ANUZLEAF",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "FLYONGOLYP",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "TURBIND",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "MUCHOSHOT",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MUCHOSHOT",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "TURBIND",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "WARCHON",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "CUMMUNCULUS",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "WARCHON",
        "levels": [
          70,
          95
        ]
      }
    ]
  },
  {
    "location": "Mount Voormithadreth",
    "Land": [
      {
        "name": "VOORMISAN",
        "levels": [
          75,
          86
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          75,
          86
        ]
      },
      {
        "name": "VOORMISAN",
        "levels": [
          75,
          86
        ]
      },
      {
        "name": "VOORMISAN",
        "levels": [
          75,
          86
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          75,
          86
        ]
      },
      {
        "name": "SEISMITOAD",
        "levels": [
          75,
          86
        ]
      },
      {
        "name": "ACOLITTLE",
        "levels": [
          75,
          86
        ]
      },
      {
        "name": "VOORMISAN",
        "levels": [
          75,
          86
        ]
      },
      {
        "name": "DARGOUILLE",
        "levels": [
          75,
          86
        ]
      },
      {
        "name": "HOMPUFF",
        "levels": [
          75,
          86
        ]
      },
      {
        "name": "ACULGGUA",
        "levels": [
          75,
          86
        ]
      },
      {
        "name": "FORMSPAWN",
        "levels": [
          75,
          86
        ]
      }
    ]
  },
  {
    "location": "Voormithadreth",
    "Cave": [
      {
        "name": "VOORMISAN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "VOORMISAN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "VOORMISAN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "VOORMISAN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "GOLBAT",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "VOORMISAN",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ARIADOS",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "SEISMITOAD",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ACULGGUA",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "ACULGGUA",
        "levels": [
          84,
          86
        ]
      },
      {
        "name": "FORMSPAWN",
        "levels": [
          84,
          90
        ]
      },
      {
        "name": "FORMSPAWN",
        "levels": [
          84,
          90
        ]
      }
    ]
  },
  {
    "location": "Cyber World",
    "Cave": [
      {
        "name": "PORYGON",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "MOUSEE",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "PIXENSION",
        "levels": [
          87,
          95
        ]
      },
      {
        "name": "CLAVIES",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "BUGLITCH",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "ENCHIP",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "INTROLL",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "CYPECKER",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "SONOTECH",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "FIREALL",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "BORYGON2",
        "levels": [
          70,
          95
        ]
      }
    ]
  },
  {
    "location": "Poison World",
    "Cave": [
      {
        "name": "MUK",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "OTYASH",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "COCAITURD",
        "levels": [
          87,
          95
        ]
      },
      {
        "name": "GACHAMBER",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "PRATICATE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ELINOONE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "SERPEOPLE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MALEVIA",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ARBOK",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "TRARSILE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "GARBODOR",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ELEPHYXIATION",
        "levels": [
          80,
          95
        ]
      }
    ]
  },
  {
    "location": "Tech World",
    "Cave": [
      {
        "name": "MOUSEE",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "HOVEROT",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "JETCRAFT",
        "levels": [
          87,
          95
        ]
      },
      {
        "name": "TURBIND",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "SMIRTRSNEKEK",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "BOOMBLIX",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "FISSIOM",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ROBOX",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "OHMEGA",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "INFINISTAKE",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "MT",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "STATIKMAN",
        "levels": [
          70,
          95
        ]
      }
    ]
  },
  {
    "location": "Virus World",
    "Cave": [
      {
        "name": "PORYRUS",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "BAUMINE",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "SPLAGUE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MALWORM",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "TROJORSE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "VIRIV",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "PORYRUS",
        "levels": [
          87,
          95
        ]
      },
      {
        "name": "HELPME",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "SMOBILL",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "EBOLI",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "NEXAPHAGO",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "EBOLETTE",
        "levels": [
          70,
          95
        ]
      }
    ]
  },
  {
    "location": "Ghost World",
    "Cave": [
      {
        "name": "HAUNTER",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "DRUMGHEIST",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "DUSCLOPS",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "BANETTE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "TENABLERUS",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "LYNCHOST",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "WILLOST",
        "levels": [
          87,
          95
        ]
      },
      {
        "name": "DIEBBYUK",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "PHANTOY",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "GUERIEST",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "ASHGAAAAAA",
        "levels": [
          70,
          95
        ]
      },
      {
        "name": "LILSKARS",
        "levels": [
          80,
          99
        ]
      }
    ]
  },
  {
    "location": "Ground World",
    "Cave": [
      {
        "name": "DUGTRIO",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "MUCHOSHOT",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "GLIGAR",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "COYOTEARS",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "SAPLOM",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "HIPPOWDON",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "CLAYDOL",
        "levels": [
          87,
          95
        ]
      },
      {
        "name": "SANDACONDA",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "DONPHAN",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "CTHONIURM",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "FLYGON",
        "levels": [
          70,
          95
        ]
      },
      {
        "name": "GARCHOMP",
        "levels": [
          80,
          99
        ]
      }
    ]
  },
  {
    "location": "Zombie World",
    "Cave": [
      {
        "name": "HAICAW",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "HUNDEAD",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "ZOMBOOM",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "SMOBILL",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ZOMBEAST",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "WIONDEATH",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "INDHEAD",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "BUSHIDON",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "JACKORSE",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "TESKARE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "FRANKENSPOOK",
        "levels": [
          87,
          95
        ]
      },
      {
        "name": "BAXBAK",
        "levels": [
          80,
          99
        ]
      }
    ]
  },
  {
    "location": "Food World",
    "Cave": [
      {
        "name": "BEAUCAKE",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "CHOKOLIT",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "GUMMI",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MAGMOCKET",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ONIGIRICE",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "LUNARAT",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "SASHUMISH",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "PIZZAUREX",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "MILTANK",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "ALCREMIE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "CAKEROSS",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "CURRY",
        "levels": [
          87,
          95
        ]
      }
    ]
  },
  {
    "location": "Cosmic World",
    "Cave": [
      {
        "name": "BEHEEYEM",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "SOLROCK",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "LUNATONE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "UNIVAX",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "AYYMAO",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "SATELI",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "NOVAIS",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "DARKOLE",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "MIGOGGOTH",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "SPLAGUE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "ACASMOC",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "STARPIRE",
        "levels": [
          87,
          95
        ]
      }
    ]
  },
  {
    "location": "Dragon World",
    "Cave": [
      {
        "name": "DRAMPA",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "DRUDDIGON",
        "levels": [
          87,
          95
        ]
      },
      {
        "name": "DRAGONITE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "WHEELUS",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "NOIVERN",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "HAXORUS",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "SLUGEONGOO",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "GOODRA",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "BOTTLEODRAKE",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "SALAMENCE",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "GARCHOMP",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "DRAGAPULT",
        "levels": [
          80,
          99
        ]
      }
    ]
  },
  {
    "location": "Hidden Basement",
    "Cave": [
      {
        "name": "DOOMSEYE",
        "levels": [
          90,
          null
        ]
      },
      {
        "name": "DOOMSEYE",
        "levels": [
          90,
          95
        ]
      },
      {
        "name": "DOOMSEYE",
        "levels": [
          90,
          null
        ]
      },
      {
        "name": "DOOMSEYE",
        "levels": [
          90,
          95
        ]
      },
      {
        "name": "DOOMSEYE",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "DOOMSEYE",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "DOOMSEYE",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "DOOMSEYE",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "DOOMSEYE",
        "levels": [
          80,
          97
        ]
      },
      {
        "name": "DOOMSEYE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "DOOMSEYE",
        "levels": [
          80,
          99
        ]
      },
      {
        "name": "PIKACHU",
        "levels": [
          2,
          3
        ]
      }
    ]
  },
  {
    "location": "Plastic World",
    "Cave": [
      {
        "name": "BOTTLEODRAKE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "PHANTOY",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "PHANTOY",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "RECYCLAT",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "BOTTLEODRAKE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "PHANTOY",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "SYNTHITE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "RECYCLAT",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "SYNTHITE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "CUBAOOP",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "CUBAOOP",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MANIQUESQUE",
        "levels": [
          80,
          95
        ]
      }
    ],
    "Water": [
      {
        "name": "DOLPHOTTLE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "PHANTOY",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "BOTTLEODRAKE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "SYNTHITE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "CUBAOOP",
        "levels": [
          80,
          95
        ]
      }
    ],
    "OldRod": [
      {
        "name": "DOLPHOTTLE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "DOLPHOTTLE",
        "levels": [
          80,
          95
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "DOLPHOTTLE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "DOLPHOTTLE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "BOTTLEODRAKE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "BOTTLEODRAKE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "DOLPHOTTLE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "CUBAOOP",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "DOLPHOTTLE",
        "levels": [
          80,
          95
        ]
      },
      {
        "name": "MANIQUESQUE",
        "levels": [
          80,
          95
        ]
      }
    ]
  },
  {
    "location": "Beta Cave",
    "Cave": [
      {
        "name": "ITTYBATTY",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "GYAO",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "GOSTEE",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "ECHOCHO",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "DUNSPA",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "BASHKULL",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "WOBSLIME",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "WOBBO",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "ELEKO",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "BUU",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "OHMEGA",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "SKELOSSIL",
        "levels": [
          3,
          10
        ]
      }
    ],
    "Water": [
      {
        "name": "CHEEPA",
        "levels": [
          14,
          25
        ]
      },
      {
        "name": "SUMOROG",
        "levels": [
          14,
          25
        ]
      },
      {
        "name": "BWOOPER",
        "levels": [
          14,
          25
        ]
      },
      {
        "name": "ANVIKIN",
        "levels": [
          14,
          22
        ]
      },
      {
        "name": "KEELISK",
        "levels": [
          14,
          25
        ]
      }
    ],
    "OldRod": [
      {
        "name": "FLYFISH",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "FLYFISH",
        "levels": [
          4,
          8
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "SQUI",
        "levels": [
          14,
          18
        ]
      },
      {
        "name": "CHEEPA",
        "levels": [
          14,
          18
        ]
      },
      {
        "name": "QWILSMUG",
        "levels": [
          14,
          18
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "WADGON",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "SQUI",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "BEETA",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "ANVIKIN",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "FLYFISH",
        "levels": [
          24,
          28
        ]
      }
    ]
  },
  {
    "location": "Beta Forest",
    "Land": [
      {
        "name": "PUPPEE",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "QUAILNOTE",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "BALLBU",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "FLOXO",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "BOARSTAG",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "BALLOOM",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "KACHIMATCH",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "KOALMA",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "QUAILNOTE",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "HIPPSYCHO",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "LUNABBIT",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "LUNABBIT",
        "levels": [
          3,
          8
        ]
      }
    ]
  },
  {
    "location": "Beta Forest 2",
    "Land": [
      {
        "name": "COCOOBAG",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "CHERBIM",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "SNEKINDIAN",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "KITEANA",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "VIRUALOWER",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "MISFLY",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "BEETUL",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "CACTOOS",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "STINGSCORP",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "BHOOTHOOT",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "KEEWEE",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "SNEEWII",
        "levels": [
          3,
          8
        ]
      }
    ]
  },
  {
    "location": "The Dungeon",
    "Cave": [
      {
        "name": "HAPPINY",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "CHANSEY",
        "levels": [
          77,
          100
        ]
      },
      {
        "name": "AUDINO",
        "levels": [
          70,
          100
        ]
      },
      {
        "name": "AUDINO",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "AUDINO",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "BLISSEY",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "BLISSEY",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "AUDINO",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "BLISSEY",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "BLISSEY",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "BLISSEY",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "AUDINO",
        "levels": [
          80,
          100
        ]
      }
    ]
  },
  {
    "location": "Snakewoods",
    "Land": [
      {
        "name": "ZOMBICATER",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "DECARILL",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "BRIMSHREW",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "HOUNDSOUR",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "CLEGOYLE",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "MIABY",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "ELECHARGE",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "SKINSKIN",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "IRIVATAR",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "SNKGRIMREAPER",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "YEUTDOOM",
        "levels": [
          3,
          8
        ]
      },
      {
        "name": "RUSTUM",
        "levels": [
          3,
          8
        ]
      }
    ],
    "Water": [
      {
        "name": "MOULDER",
        "levels": [
          14,
          25
        ]
      },
      {
        "name": "ROTEEN",
        "levels": [
          14,
          25
        ]
      },
      {
        "name": "POLIHAG",
        "levels": [
          14,
          25
        ]
      },
      {
        "name": "SEVICIOUS",
        "levels": [
          14,
          22
        ]
      },
      {
        "name": "ROTEEN",
        "levels": [
          14,
          25
        ]
      }
    ],
    "OldRod": [
      {
        "name": "ROTEEN",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "POLIHAG",
        "levels": [
          4,
          8
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "ROTEEN",
        "levels": [
          14,
          18
        ]
      },
      {
        "name": "EVIDISC",
        "levels": [
          14,
          18
        ]
      },
      {
        "name": "TELSON",
        "levels": [
          14,
          18
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "TELSON",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "ROTEEN",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "BLACKUTO",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "EVIDISC",
        "levels": [
          24,
          28
        ]
      },
      {
        "name": "QWILSHARK",
        "levels": [
          24,
          28
        ]
      }
    ]
  },
  {
    "location": "Anne World",
    "Cave": [
      {
        "name": "ANNESQUE",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "SCRUNRAFE",
        "levels": [
          77,
          100
        ]
      },
      {
        "name": "CONEANNE",
        "levels": [
          70,
          100
        ]
      },
      {
        "name": "SCRUNRAFE",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "LOGANNE",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "CONEANNE",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "LOGANNE",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "ANNEOO",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "VOIDANNE",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "ANNEOO",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "VOIDANNE",
        "levels": [
          80,
          100
        ]
      },
      {
        "name": "EMPTYANNE",
        "levels": [
          80,
          100
        ]
      }
    ]
  },
  {
    "location": "Temple of the Shark Age",
    "Cave": [
      {
        "name": "FLOWJAW",
        "levels": [
          43,
          47
        ]
      },
      {
        "name": "GABITE",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "SHARPEDO",
        "levels": [
          44,
          45
        ]
      },
      {
        "name": "GABITE",
        "levels": [
          43,
          45
        ]
      },
      {
        "name": "FLOWJAW",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "JAGGU",
        "levels": [
          43,
          45
        ]
      },
      {
        "name": "GABITE",
        "levels": [
          44,
          45
        ]
      },
      {
        "name": "FLOWJAW",
        "levels": [
          43,
          46
        ]
      },
      {
        "name": "FLOWJAW",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "FLOWJAW",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "GABITE",
        "levels": [
          44,
          45
        ]
      },
      {
        "name": "FLOWJAW",
        "levels": [
          44,
          45
        ]
      }
    ],
    "Water": [
      {
        "name": "SHARPEDO",
        "levels": [
          14,
          45
        ]
      },
      {
        "name": "JAGGU",
        "levels": [
          14,
          45
        ]
      },
      {
        "name": "DEDFISHE",
        "levels": [
          14,
          45
        ]
      },
      {
        "name": "SASHUMISH",
        "levels": [
          40,
          46
        ]
      },
      {
        "name": "SHARPEDO",
        "levels": [
          14,
          45
        ]
      }
    ],
    "OldRod": [
      {
        "name": "DEDFISHE",
        "levels": [
          4,
          8
        ]
      },
      {
        "name": "DEDFISHE",
        "levels": [
          4,
          8
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "JAGGU",
        "levels": [
          14,
          18
        ]
      },
      {
        "name": "SHARPEDO",
        "levels": [
          14,
          18
        ]
      },
      {
        "name": "DEDFISHE",
        "levels": [
          14,
          28
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "SHARPEDO",
        "levels": [
          40,
          45
        ]
      },
      {
        "name": "JAGGU",
        "levels": [
          40,
          45
        ]
      },
      {
        "name": "DEDFISHE",
        "levels": [
          40,
          45
        ]
      },
      {
        "name": "SHARPEDO",
        "levels": [
          40,
          45
        ]
      },
      {
        "name": "SASHUMISH",
        "levels": [
          40,
          45
        ]
      }
    ]
  },
  {
    "location": "Temple of the Extinction Age",
    "Cave": [
      {
        "name": "JUZT",
        "levels": [
          43,
          47
        ]
      },
      {
        "name": "WEXEGGCUTE",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "MAGCARGO",
        "levels": [
          44,
          45
        ]
      },
      {
        "name": "MUKMA",
        "levels": [
          43,
          45
        ]
      },
      {
        "name": "MAGMAR",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "JUZT",
        "levels": [
          43,
          45
        ]
      },
      {
        "name": "MUKMA",
        "levels": [
          44,
          45
        ]
      },
      {
        "name": "JUZT",
        "levels": [
          43,
          46
        ]
      },
      {
        "name": "MAGCARGO",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "MAGMOCKET",
        "levels": [
          43,
          44
        ]
      },
      {
        "name": "WEXEGGCUTE",
        "levels": [
          44,
          45
        ]
      },
      {
        "name": "MAGMOCKET",
        "levels": [
          44,
          45
        ]
      }
    ]
  },
  {
    "location": "Endless",
    "Cave": [
      {
        "name": "SYCLAR",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "EMBIRCH",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "BREEZI",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "REBBLE",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "PRIVATYKE",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "SMVOODOLL",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "SCRATCHET",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "NECTURINE",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "CUPRA",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "BRATTLER",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "PHALLUSAUR",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "FLAMOOZER",
        "levels": [
          2,
          90
        ]
      }
    ]
  },
  {
    "location": "Endless Floor 2",
    "Cave": [
      {
        "name": "SNUGGLOW",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "FLOATOY",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "PLUFFLE",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "MUMBAO",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "FAWNIFER",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "SMOGECKO",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "SWIRLPOOL",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "CAWDET",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "VOLKRITTER",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "CSPOINK",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "MSPAIN",
        "levels": [
          2,
          90
        ]
      },
      {
        "name": "ASSDEER",
        "levels": [
          2,
          90
        ]
      }
    ]
  },
  {
    "location": "Pokegirl Island",
    "Land": [
      {
        "name": "HUCATERPIE",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "HUPIDGEY",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "HURATTATA",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "HUWEEDLE",
        "levels": [
          3,
          40
        ]
      },
      {
        "name": "HUSPEAROW",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "HUSANDSHREW",
        "levels": [
          5,
          40
        ]
      },
      {
        "name": "HUEKANS",
        "levels": [
          3,
          40
        ]
      },
      {
        "name": "HUODDISH",
        "levels": [
          3,
          40
        ]
      },
      {
        "name": "HUPIKACHU",
        "levels": [
          3,
          41
        ]
      },
      {
        "name": "HUNIDORANFE",
        "levels": [
          3,
          40
        ]
      },
      {
        "name": "HUNIDORANMA",
        "levels": [
          3,
          40
        ]
      },
      {
        "name": "HUVULPIX",
        "levels": [
          5,
          40
        ]
      }
    ],
    "Water": [
      {
        "name": "HUPSYDUCK",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "HUPOLIWAG",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "HUTENTACOOL",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "HUSLOWPOKE",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "HUSTARYU",
        "levels": [
          21,
          26
        ]
      }
    ],
    "OldRod": [
      {
        "name": "HUMAGIKARP",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "HUGOLDEEN",
        "levels": [
          21,
          26
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "HUHORSEA",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "HUSHELLDER",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "HUGRIMER",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "HUKRABBY",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "HUOMANYTE",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "HUKABUTO",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "HUDRATINI",
        "levels": [
          5,
          60
        ]
      },
      {
        "name": "HUDRATINI",
        "levels": [
          5,
          60
        ]
      }
    ]
  },
  {
    "location": "Pokegirl Cave",
    "Cave": [
      {
        "name": "HUZUBAT",
        "levels": [
          5,
          47
        ]
      },
      {
        "name": "HUGEODUDE",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUDIGLETT",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUPARAS",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUEXEGGCUTE",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUKOFFING",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUMANKEY",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUGROWLITHE",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUMACHOP",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUABRA",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUPINSIR",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUSCYTHER",
        "levels": [
          5,
          44
        ]
      }
    ]
  },
  {
    "location": "Pokegirl Cave 2",
    "Cave": [
      {
        "name": "HUVENONAT",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUMAGNEMITE",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUPONYTA",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUBELLSPROUT",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUTANGELA",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUDROWZEE",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUONIX",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUJYNX",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUMAGMAR",
        "levels": [
          5,
          47
        ]
      },
      {
        "name": "HUELECTABUZZ",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUGASTLY",
        "levels": [
          5,
          44
        ]
      },
      {
        "name": "HUMRMIME",
        "levels": [
          5,
          44
        ]
      }
    ]
  },
  {
    "location": "Brokenace255",
    "Cave": [
      {
        "name": "BLANDA",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "MOUSTAB",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "FROSPIDEY",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "HILLARGE",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "BEANOY",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "BOEBII",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "MOLSTUB",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "ALCOHOG",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "HURANIUM",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "TROLLEL",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "LOLEYE",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "TRUMPORN",
        "levels": [
          2,
          7
        ]
      }
    ],
    "Water": [
      {
        "name": "WETLOON",
        "levels": [
          11,
          26
        ]
      },
      {
        "name": "PLOOP",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "SALSIK",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "CAPSEAL",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "CARTCAP",
        "levels": [
          21,
          26
        ]
      }
    ],
    "OldRod": [
      {
        "name": "YELLYNTH",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "TINNA",
        "levels": [
          21,
          26
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "YELLYNTH",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "SALSIK",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "SALSIK",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "EAGLASS",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "SALSIK",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "YELLYNTH",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "SALSIK",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "SODRADE",
        "levels": [
          5,
          30
        ]
      }
    ]
  },
  {
    "location": "Brokenace255",
    "Cave": [
      {
        "name": "GRUPPY",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "SPARROOF",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "GULLBAGE",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "TWIGGERD",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "PINNINT",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "SCHNOZARD",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "PANTOM",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "SLUGAR",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "PICTOJI",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "NYUVEL",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "PIZZAURO",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "SPOVUM",
        "levels": [
          2,
          7
        ]
      }
    ],
    "Water": [
      {
        "name": "SQUBBLE",
        "levels": [
          11,
          26
        ]
      },
      {
        "name": "SNOTTO",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "PENGWARN",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "MARMIN",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "CLOWNIM",
        "levels": [
          21,
          26
        ]
      }
    ],
    "OldRod": [
      {
        "name": "YELLYNTH",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "TINNA",
        "levels": [
          21,
          26
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "YELLYNTH",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "CLAGMA",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "TABBEE",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "TRICHIC",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "TRICHIC",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "TINNA",
        "levels": [
          21,
          26
        ]
      },
      {
        "name": "CLAGMA",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "CLOWNIM",
        "levels": [
          5,
          30
        ]
      }
    ]
  },
  {
    "location": "Brokenace255",
    "Cave": [
      {
        "name": "HAIRJOG",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "TEEVZ",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "TARDOUGH",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "SPLUG",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "SENTEDDI",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "PINANA",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "CUFFY",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "OYMAYT",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "FLOPPLE",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "FLEAP",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "SHLARIO",
        "levels": [
          2,
          7
        ]
      },
      {
        "name": "OVILOCK",
        "levels": [
          2,
          7
        ]
      }
    ]
  },
  {
    "location": "Mushroom Kingdom",
    "LandDay": [
      {
        "name": "GOOMLY",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "KOOPATROOPA",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "SHYGUY",
        "levels": [
          5,
          21
        ]
      },
      {
        "name": "BOBOMB",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "GOOMLY",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "KOOPATROOPA",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "GOOMLY",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "MTOAD",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "TOADETTE",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "GOOMLY",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "KOOPAPARATROOPA",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "THWOMPO",
        "levels": [
          5,
          30
        ]
      }
    ],
    "LandNight": [
      {
        "name": "GOOMLY",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "KOOPATROOPA",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "SHYGUY",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "GOOMLY",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "SHYGUY",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "BOBOMB",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "BOBOMB",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "GOOMLY",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "SHYGUY",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "SHYGUY",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "SHYGUY",
        "levels": [
          5,
          30
        ]
      },
      {
        "name": "THWOMPO",
        "levels": [
          5,
          30
        ]
      }
    ]
  },
  {
    "location": "DOOT",
    "Cave": [
      {
        "name": "DOOMIMP",
        "levels": [
          40,
          66
        ]
      },
      {
        "name": "DOOMPINKY",
        "levels": [
          40,
          66
        ]
      },
      {
        "name": "DLOSTSOUL",
        "levels": [
          40,
          66
        ]
      },
      {
        "name": "MANCUBUS",
        "levels": [
          40,
          66
        ]
      },
      {
        "name": "DOOMHELLKNIGHT",
        "levels": [
          40,
          66
        ]
      },
      {
        "name": "CACEMON",
        "levels": [
          40,
          66
        ]
      },
      {
        "name": "DOOMREVENANT",
        "levels": [
          40,
          66
        ]
      },
      {
        "name": "DARCHVILE",
        "levels": [
          40,
          66
        ]
      },
      {
        "name": "PAINELEMENTAL",
        "levels": [
          40,
          66
        ]
      },
      {
        "name": "SAWCUBUS",
        "levels": [
          40,
          66
        ]
      },
      {
        "name": "ARACHNOTRON",
        "levels": [
          40,
          66
        ]
      },
      {
        "name": "DWATCHER",
        "levels": [
          40,
          66
        ]
      }
    ]
  },
  {
    "location": "Hidden Path",
    "Land": [
      {
        "name": "BASTIODON",
        "levels": [
          80,
          89
        ]
      },
      {
        "name": "THORITA",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "TYRANTRUM",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "RAMPARDOS",
        "levels": [
          90,
          94
        ]
      },
      {
        "name": "RAMPARDOS",
        "levels": [
          80,
          84
        ]
      },
      {
        "name": "DREEPY",
        "levels": [
          80,
          84
        ]
      },
      {
        "name": "RAMPARDOS",
        "levels": [
          80,
          89
        ]
      },
      {
        "name": "TYRUNT",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "BASTIODON",
        "levels": [
          80,
          90
        ]
      },
      {
        "name": "MEGANIUM",
        "levels": [
          90,
          94
        ]
      },
      {
        "name": "BASTIODON",
        "levels": [
          90,
          94
        ]
      },
      {
        "name": "TYRANTRUM",
        "levels": [
          90,
          94
        ]
      }
    ]
  },
  {
    "location": "Sussy Forest",
    "LandDay": [
      {
        "name": "CREWMONGUS",
        "levels": [
          10,
          12
        ]
      },
      {
        "name": "CREWMONGUS",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "CRWUTEMATE",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "CREWMONGUS",
        "levels": [
          10,
          12
        ]
      },
      {
        "name": "CREWMONGUS",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "CRWUTEMATE",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "CREWMONGUS",
        "levels": [
          10,
          12
        ]
      },
      {
        "name": "CREWMONGUS",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "CRWUTEMATE",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "CREWMONGUS",
        "levels": [
          10,
          12
        ]
      },
      {
        "name": "CREWMONGUS",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "CRWUTEMATE",
        "levels": [
          12,
          14
        ]
      }
    ],
    "LandNight": [
      {
        "name": "CRWUTEMATE",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "CRWUTEMATE",
        "levels": [
          10,
          15
        ]
      },
      {
        "name": "CREWMONGUS",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "CRWUTEMATE",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "CRWUTEMATE",
        "levels": [
          10,
          15
        ]
      },
      {
        "name": "CREWMONGUS",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "CRWUTEMATE",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "CRWUTEMATE",
        "levels": [
          10,
          15
        ]
      },
      {
        "name": "CREWMONGUS",
        "levels": [
          11,
          13
        ]
      },
      {
        "name": "CRWUTEMATE",
        "levels": [
          12,
          14
        ]
      },
      {
        "name": "CRWUTEMATE",
        "levels": [
          10,
          15
        ]
      },
      {
        "name": "CREWMONGUS",
        "levels": [
          11,
          13
        ]
      }
    ]
  },
  {
    "location": "Hidden Research Area",
    "Land": [
      {
        "name": "BIBAREL",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "BIBAREL",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "CHARGRADON",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "CHARGRADON",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "BURNASAUR",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "BURNASAUR",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "BTORTERRA",
        "levels": [
          78,
          86
        ]
      },
      {
        "name": "TROPIUS",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "GTROPIUS",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "GTROPIUS",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "FURROR",
        "levels": [
          78,
          86
        ]
      },
      {
        "name": "BGARCHOMP",
        "levels": [
          78,
          86
        ]
      }
    ],
    "Water": [
      {
        "name": "ANGUILLE",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "FINISH",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "FISHEMBER",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "SQUINKY",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "JAWETECH",
        "levels": [
          70,
          79
        ]
      }
    ]
  },
  {
    "location": "Lab",
    "Cave": [
      {
        "name": "TMAGNEMITE",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "TMAGNEMITE",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "LURQUAD",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "LURQUAD",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "ARACHOE",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "ARACHOE",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "RPGIDGET",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "RPRAZOR",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "RPROCKER",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "CALCULUS",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "CALCULUS",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "NITORECH",
        "levels": [
          70,
          79
        ]
      }
    ]
  },
  {
    "location": "Lab BF1",
    "Cave": [
      {
        "name": "PUMPIRD",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "PUMPIRD",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "RPBOOMER",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "RPMOLBOT",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "SUPANINTENO",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "SUPANINTENO",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "SEWAN",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "TRAINO",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "RPMEDBOT",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "EMERL",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "BALISTAGON",
        "levels": [
          70,
          79
        ]
      },
      {
        "name": "RPSUNNY",
        "levels": [
          70,
          79
        ]
      }
    ]
  },
  {
    "location": "Lab BF2",
    "Cave": [
      {
        "name": "MECHANS",
        "levels": [
          75,
          83
        ]
      },
      {
        "name": "MECHANS",
        "levels": [
          75,
          83
        ]
      },
      {
        "name": "BITSY",
        "levels": [
          75,
          83
        ]
      },
      {
        "name": "BITSY",
        "levels": [
          75,
          83
        ]
      },
      {
        "name": "TOATER",
        "levels": [
          75,
          83
        ]
      },
      {
        "name": "LAGANNECH",
        "levels": [
          75,
          83
        ]
      },
      {
        "name": "TOATER",
        "levels": [
          75,
          83
        ]
      },
      {
        "name": "BITSY",
        "levels": [
          75,
          83
        ]
      },
      {
        "name": "TOATER",
        "levels": [
          75,
          83
        ]
      },
      {
        "name": "RPRAMJET",
        "levels": [
          75,
          83
        ]
      },
      {
        "name": "CHIBIROBO",
        "levels": [
          75,
          83
        ]
      },
      {
        "name": "FUKOUJO",
        "levels": [
          75,
          83
        ]
      }
    ]
  },
  {
    "location": "Wackissic Park",
    "Land": [
      {
        "name": "PTERO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "TREX",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "TRICE",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "OVI",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "BRACHIO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "PAERIA",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "ANKYLO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "DIMORPH",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "DIMETRODON",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "STEGO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "IGUANO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "LYSTRO",
        "levels": [
          77,
          85
        ]
      }
    ],
    "LandNight": [
      {
        "name": "VELOCI",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "COMPOSO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "PLATEO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "RODENT",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "PACHY",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "DIPLODOCUS",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "THERIZAN",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "CARNOTAURUS",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "LAGOSU",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "SIAMO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "EORAPTOR",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "LONGIS",
        "levels": [
          77,
          85
        ]
      }
    ],
    "Water": [
      {
        "name": "STRUTHIO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "DRAGONFLY",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "AMARGA",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "ARCHE",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "QUETZAL",
        "levels": [
          77,
          85
        ]
      }
    ],
    "GoodRod": [
      {
        "name": "SUCHOMI",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "PARA",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "KRONO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "SuperRod",
        "levels": [
          null,
          null
        ]
      },
      {
        "name": "PLESIO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "ICHTHYO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "PROGANO",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "AMMONITE",
        "levels": [
          77,
          85
        ]
      },
      {
        "name": "DEINOSUCHUS",
        "levels": [
          77,
          85
        ]
      }
    ]
  },
  {
    "location": "Madio Cave",
    "Cave": [
      {
        "name": "AEROMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "BONEMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "TREEMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "SOLMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "HEALMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "ZAPMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "SHADEMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "NORMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "GLUEMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "EARTHMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "BURSTMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "BUGMADIO",
        "levels": [
          40,
          42
        ]
      }
    ],
    "Water": [
      {
        "name": "SEAMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "MISTMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "OILMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "FROSTYMADIO",
        "levels": [
          40,
          42
        ]
      },
      {
        "name": "PONGMADIO",
        "levels": [
          40,
          42
        ]
      }
    ]
  },
  {
    "location": "Deep Snakewoods",
    "Land": [
      {
        "name": "GLUTE",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "IMPYCHU",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "KENCHIRA",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "DEVILCHU",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "IMPYCHU",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "CINDERCO",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "WALTS",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "COMMANOSSY",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "WALTS",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "TRICKO",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "FRANICHIC",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "GIGAWOLF",
        "levels": [
          30,
          34
        ]
      }
    ],
    "Water": [
      {
        "name": "SMOQUILL",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "FANGKIP",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "BLINODILE",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "SMOQUILL",
        "levels": [
          30,
          34
        ]
      },
      {
        "name": "FANGKIP",
        "levels": [
          30,
          34
        ]
      }
    ]
  },
  {
    "location": "Snakewood Girl Island BF1",
    "Cave": [
      {
        "name": "HUBRIMSHREW",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUNIDOBLOOD",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUMETALRAN",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUCLEGOYLE",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUMOULDER",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUSNKGRIMREAPER",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUBRIMSHREW",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUNIDOBLOOD",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUMETALRAN",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUCLEGOYLE",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUMOULDER",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUSNKGRIMREAPER",
        "levels": [
          31,
          35
        ]
      }
    ]
  },
  {
    "location": "Snakewood Girl Island",
    "Land": [
      {
        "name": "HUBOILBASAUR",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUROTMANDER",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUOOZLE",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUSLASHERPIE",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUINTESTINELA",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUZOMBICATER",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUBOILBASAUR",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUROTMANDER",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUOOZLE",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUSLASHERPIE",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUINTESTINELA",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUZOMBICATER",
        "levels": [
          31,
          35
        ]
      }
    ],
    "Water": [
      {
        "name": "HUPOLIHAG",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUPOLIHAG",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUROTEEN",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUBLACKUTO",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUSTARRUZ",
        "levels": [
          31,
          35
        ]
      }
    ]
  },
  {
    "location": "Snakewood Girl Depths",
    "Cave": [
      {
        "name": "HUPOLIHAG",
        "levels": [
          41,
          45
        ]
      },
      {
        "name": "HUROTEEN",
        "levels": [
          41,
          45
        ]
      },
      {
        "name": "HUBLACKUTO",
        "levels": [
          41,
          45
        ]
      },
      {
        "name": "HUSTARRUZ",
        "levels": [
          41,
          45
        ]
      },
      {
        "name": "DEMENTAD",
        "levels": [
          41,
          45
        ]
      },
      {
        "name": "LEVIUTO",
        "levels": [
          41,
          45
        ]
      },
      {
        "name": "NAPSEEL",
        "levels": [
          41,
          45
        ]
      },
      {
        "name": "SLEAMY",
        "levels": [
          41,
          45
        ]
      },
      {
        "name": "DGYARADOS",
        "levels": [
          41,
          45
        ]
      },
      {
        "name": "LEVIUTO",
        "levels": [
          41,
          45
        ]
      },
      {
        "name": "NAPSEEL",
        "levels": [
          41,
          45
        ]
      },
      {
        "name": "SLEAMY",
        "levels": [
          41,
          45
        ]
      }
    ]
  },
  {
    "location": "Snakewood Girl Island BF2",
    "Cave": [
      {
        "name": "HUSTABRA",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUHOMBONE",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUDEVILCHU",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUSNKEYEEYE",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUELECTABUGS",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUMIASMAR",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUSLIMEX",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUGORELAX",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUGLITCHLETT",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUTOXITUNG",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUDEVILMAR",
        "levels": [
          31,
          35
        ]
      },
      {
        "name": "HUSKYLAX",
        "levels": [
          31,
          35
        ]
      }
    ]
  }
]