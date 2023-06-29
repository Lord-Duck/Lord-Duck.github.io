const periodicTable = [
  {
    "symbol": "H",
    "name": "Hydrogen",
    "atomicNumber": 1,
    "atomicWeight": 2,
    "electronConfiguration": [1],
    "description": "Hydrogen is the lightest and most abundant element in the universe, commonly found in water and organic compounds."
  },
  {
    "symbol": "He",
    "name": "Helium",
    "atomicNumber": 2,
    "atomicWeight": 4.0026,
    "electronConfiguration": [2],
    "description": "Helium is a colorless, odorless, and non-reactive gas known for its low density and high thermal conductivity."
  },
  {
    "symbol": "Li",
    "name": "Lithium",
    "atomicNumber": 3,
    "atomicWeight": 6.94,
    "electronConfiguration": [2, 1],
    "description": "Lithium is a soft, silvery-white alkali metal known for its high reactivity and low density."
  },
  {
    "symbol": "Be",
    "name": "Beryllium",
    "atomicNumber": 4,
    "atomicWeight": 9.0122,
    "electronConfiguration": [2, 2],
    "description": "Beryllium is a hard, grayish metal known for its exceptional stiffness, high melting point, and low density."
  },
  {
    "symbol": "B",
    "name": "Boron",
    "atomicNumber": 5,
    "atomicWeight": 10.81,
    "electronConfiguration": [2, 3],
    "description": "Boron is a metalloid known for its diverse chemical compounds and its role in strengthening materials like borosilicate glass."
  },
  {
    "symbol": "C",
    "name": "Carbon",
    "atomicNumber": 6,
    "atomicWeight": 12.011,
    "electronConfiguration": [2, 4],
    "description": "Carbon is a nonmetallic element known for its ability to form a vast number of compounds due to its bonding versatility."
  },
  {
    "symbol": "N",
    "name": "Nitrogen",
    "atomicNumber": 7,
    "atomicWeight": 14.007,
    "electronConfiguration": [2, 5],
    "description": "Nitrogen is a diatomic nonmetal known for its role in the Earth's atmosphere and its abundance in organic compounds."
  },
  {
    "symbol": "O",
    "name": "Oxygen",
    "atomicNumber": 8,
    "atomicWeight": 15.999,
    "electronConfiguration": [2, 6],
    "description": "Oxygen is a highly reactive nonmetal that supports combustion and is a crucial component of many organic and inorganic compounds."
  },
  {
    "symbol": "F",
    "name": "Fluorine",
    "atomicNumber": 9,
    "atomicWeight": 18.998,
    "electronConfiguration": [2, 7],
    "description": "Fluorine is a highly reactive and corrosive nonmetal known for its ability to form strong bonds with other elements."
  },
  {
    "symbol": "Ne",
    "name": "Neon",
    "atomicNumber": 10,
    "atomicWeight": 20.180,
    "electronConfiguration": [2, 8],
    "description": "Neon is a colorless, odorless, and inert noble gas commonly used in lighting and advertising signs."
  },
  {
    "symbol": "Na",
    "name": "Sodium",
    "atomicNumber": 11,
    "atomicWeight": 22.990,
    "electronConfiguration": [2, 8, 1],
    "description": "Sodium is a highly reactive alkali metal known for its role in maintaining fluid balance in the body and its use in various applications."
  },
  {
    "symbol": "Mg",
    "name": "Magnesium",
    "atomicNumber": 12,
    "atomicWeight": 24.305,
    "electronConfiguration": [2, 8, 2],
    "description": "Magnesium is a lightweight and highly reactive alkaline earth metal known for its strong structural properties and its presence in chlorophyll."
  },
  {
    "symbol": "Al",
    "name": "Aluminum",
    "atomicNumber": 13,
    "atomicWeight": 26.982,
    "electronConfiguration": [2, 8, 3],
    "description": "Aluminum is a silvery-white, lightweight, and highly malleable metal known for its corrosion resistance and widespread use in various industries."
  },
  {
    "symbol": "Si",
    "name": "Silicon",
    "atomicNumber": 14,
    "atomicWeight": 28.085,
    "electronConfiguration": [2, 8, 4],
    "description": "Silicon is a metalloid known for its semiconducting properties and its abundance in the Earth's crust in the form of various minerals."
  },
  {
    "symbol": "P",
    "name": "Phosphorus",
    "atomicNumber": 15,
    "atomicWeight": 30.974,
    "electronConfiguration": [2, 8, 5],
    "description": "Phosphorus is a highly reactive nonmetal known for its role in biological processes, such as DNA and energy transfer."
  },
  {
    "symbol": "S",
    "name": "Sulfur",
    "atomicNumber": 16,
    "atomicWeight": 32.06,
    "electronConfiguration": [2, 8, 6],
    "description": "Sulfur is a multivalent nonmetal known for its distinctive yellow color and its presence in many minerals and organic compounds."
  },
  {
    "symbol": "Cl",
    "name": "Chlorine",
    "atomicNumber": 17,
    "atomicWeight": 35.45,
    "electronConfiguration": [2, 8, 7],
    "description": "Chlorine is a highly reactive nonmetal known for its role in disinfection, water treatment, and the production of many everyday products."
  },
  {
    "symbol": "Ar",
    "name": "Argon",
    "atomicNumber": 18,
    "atomicWeight": 39.948,
    "electronConfiguration": [2, 8, 8],
    "description": "Argon is an inert noble gas known for its abundance in the Earth's atmosphere and its use in various applications, such as welding."
  },
  {
    "symbol": "K",
    "name": "Potassium",
    "atomicNumber": 19,
    "atomicWeight": 39.098,
    "electronConfiguration": [2, 8, 8, 1],
    "description": "Potassium is a highly reactive alkali metal known for its role in maintaining fluid balance, nerve function, and muscle contractions in the body."
  },
  {
    "symbol": "Ca",
    "name": "Calcium",
    "atomicNumber": 20,
    "atomicWeight": 40.078,
    "electronConfiguration": [2, 8, 8, 2],
    "description": "Calcium is an alkaline earth metal known for its role in bone and teeth formation, nerve function, and muscle contractions."
  },
  {
    "symbol": "Sc",
    "name": "Scandium",
    "atomicNumber": 21,
    "atomicWeight": 44.956,
    "electronConfiguration": [2, 8, 9, 2],
    "description": "Scandium is a silvery-white transition metal known for its lightness, high melting point, and its use in various alloys and electronic devices."
  },
  {
    "symbol": "Ti",
    "name": "Titanium",
    "atomicNumber": 22,
    "atomicWeight": 47.867,
    "electronConfiguration": [2, 8, 10, 2],
    "description": "Titanium is a strong, lightweight transition metal known for its corrosion resistance, high strength-to-weight ratio, and its use in various industries."
  },
  {
    "symbol": "V",
    "name": "Vanadium",
    "atomicNumber": 23,
    "atomicWeight": 50.942,
    "electronConfiguration": [2, 8, 11, 2],
    "description": "Vanadium is a hard, silvery-gray transition metal known for its high strength, low density, and its use in the production of steel and other alloys."
  },
  {
    "symbol": "Cr",
    "name": "Chromium",
    "atomicNumber": 24,
    "atomicWeight": 51.996,
    "electronConfiguration": [2, 8, 13, 1],
    "description": "Chromium is a lustrous, hard, and corrosion-resistant transition metal known for its role in producing various colorful compounds and alloys."
  },
  {
    "symbol": "Mn",
    "name": "Manganese",
    "atomicNumber": 25,
    "atomicWeight": 54.938,
    "electronConfiguration": [2, 8, 13, 2],
    "description": "Manganese is a silvery-gray transition metal known for its role in steel production, as well as its presence in various minerals and biological systems."
  },
  {
    "symbol": "Fe",
    "name": "Iron",
    "atomicNumber": 26,
    "atomicWeight": 55.845,
    "electronConfiguration": [2, 8, 14, 2],
    "description": "Iron is a strong, silvery-gray transition metal known for its widespread use in construction, manufacturing, and its importance in biological systems."
  },
  {
    "symbol": "Co",
    "name": "Cobalt",
    "atomicNumber": 27,
    "atomicWeight": 58.933,
    "electronConfiguration": [2, 8, 15, 2],
    "description": "Cobalt is a hard, lustrous, and bluish-gray transition metal known for its strength, corrosion resistance, and its use in various alloys and batteries."
  },
  {
    "symbol": "Ni",
    "name": "Nickel",
    "atomicNumber": 28,
    "atomicWeight": 58.693,
    "electronConfiguration": [2, 8, 16, 2],
    "description": "Nickel is a silvery-white transition metal known for its corrosion resistance, high melting point, and its use in various alloys and plating."
  },
  {
    "symbol": "Cu",
    "name": "Copper",
    "atomicNumber": 29,
    "atomicWeight": 63.546,
    "electronConfiguration": [2, 8, 18, 1],
    "description": "Copper is a reddish-brown transition metal known for its excellent electrical conductivity, malleability, and its use in various applications."
  },
  {
    "symbol": "Zn",
    "name": "Zinc",
    "atomicNumber": 30,
    "atomicWeight": 65.38,
    "electronConfiguration": [2, 8, 18, 2],
    "description": "Zinc is a bluish-white transition metal known for its corrosion resistance, malleability, and its use in various alloys and galvanizing processes."
  },
  {
    "symbol": "Ga",
    "name": "Gallium",
    "atomicNumber": 31,
    "atomicWeight": 69.723,
    "electronConfiguration": [2, 8, 18, 3],
    "description": "Gallium is a soft, silvery-blue metal known for its low melting point, high boiling point, and its use in various electronics and alloys."
  },
  {
    "symbol": "Ge",
    "name": "Germanium",
    "atomicNumber": 32,
    "atomicWeight": 72.630,
    "electronConfiguration": [2, 8, 18, 4],
    "description": "Germanium is a hard, grayish-white metalloid known for its semiconductor properties and its use in various electronic devices and fiber optics."
  },
  {
    "symbol": "As",
    "name": "Arsenic",
    "atomicNumber": 33,
    "atomicWeight": 74.922,
    "electronConfiguration": [2, 8, 18, 5],
    "description": "Arsenic is a metalloid known for its toxicity and its use in various applications, such as wood preservatives and semiconductor materials."
  },
  {
    "symbol": "Se",
    "name": "Selenium",
    "atomicNumber": 34,
    "atomicWeight": 78.971,
    "electronConfiguration": [2, 8, 18, 6],
    "description": "Selenium is a nonmetal known for its semiconductor properties, its role in various biological processes, and its presence in some minerals."
  },
  {
    "symbol": "Br",
    "name": "Bromine",
    "atomicNumber": 35,
    "atomicWeight": 79.904,
    "electronConfiguration": [2, 8, 18, 7],
    "description": "Bromine is a reddish-brown liquid halogen known for its strong oxidizing properties, its role in flame retardants, and its presence in seawater."
  },
  {
    "symbol": "Kr",
    "name": "Krypton",
    "atomicNumber": 36,
    "atomicWeight": 83.798,
    "electronConfiguration": [2, 8, 18, 8],
    "description": "Krypton is an inert noble gas known for its use in lighting, lasers, and as a filling gas in certain types of electric lamps."
  },
  {
    "symbol": "Rb",
    "name": "Rubidium",
    "atomicNumber": 37,
    "atomicWeight": 85.468,
    "electronConfiguration": [2, 8, 18, 8, 1],
    "description": "Rubidium is a highly reactive alkali metal known for its role in certain medical treatments, its use in research, and its presence in some minerals."
  },
  {
    "symbol": "Sr",
    "name": "Strontium",
    "atomicNumber": 38,
    "atomicWeight": 87.62,
    "electronConfiguration": [2, 8, 18, 8, 2],
    "description": "Strontium is an alkaline earth metal known for its bright red flame color, its role in fireworks, and its use in certain medical applications."
  },
  {
    "symbol": "Y",
    "name": "Yttrium",
    "atomicNumber": 39,
    "atomicWeight": 88.906,
    "electronConfiguration": [2, 8, 18, 9, 2],
    "description": "Yttrium is a silvery-metallic transition metal known for its high melting point, its use in various alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Zr",
    "name": "Zirconium",
    "atomicNumber": 40,
    "atomicWeight": 91.224,
    "electronConfiguration": [2, 8, 18, 10, 2],
    "description": "Zirconium is a lustrous, gray-white transition metal known for its corrosion resistance, its use in nuclear reactors, and its presence in certain minerals."
  },
  {
    "symbol": "Nb",
    "name": "Niobium",
    "atomicNumber": 41,
    "atomicWeight": 92.906,
    "electronConfiguration": [2, 8, 18, 12, 1],
    "description": "Niobium is a soft, gray, and ductile transition metal known for its superconducting properties, its use in alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Mo",
    "name": "Molybdenum",
    "atomicNumber": 42,
    "atomicWeight": 95.95,
    "electronConfiguration": [2, 8, 18, 13, 1],
    "description": "Molybdenum is a silvery-white transition metal known for its high melting point, its strength, and its use in various alloys and industrial applications."
  },
  {
    "symbol": "Tc",
    "name": "Technetium",
    "atomicNumber": 43,
    "atomicWeight": 98,
    "electronConfiguration": [2, 8, 18, 13, 2],
    "description": "Technetium is a silvery-gray radioactive metal known for its synthetic production, its use in medical imaging, and its presence in certain minerals."
  },
  {
    "symbol": "Ru",
    "name": "Ruthenium",
    "atomicNumber": 44,
    "atomicWeight": 101.07,
    "electronConfiguration": [2, 8, 18, 15, 1],
    "description": "Ruthenium is a hard, silvery-white transition metal known for its corrosion resistance, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Rh",
    "name": "Rhodium",
    "atomicNumber": 45,
    "atomicWeight": 102.91,
    "electronConfiguration": [2, 8, 18, 16, 1],
    "description": "Rhodium is a rare, silvery-white transition metal known for its high reflectance, its use in catalytic converters, and its presence in certain minerals."
  },
  {
    "symbol": "Pd",
    "name": "Palladium",
    "atomicNumber": 46,
    "atomicWeight": 106.42,
    "electronConfiguration": [2, 8, 18, 18],
    "description": "Palladium is a lustrous, silvery-white transition metal known for its excellent catalytic properties, its use in jewelry, and its presence in certain minerals."
  },
  {
    "symbol": "Ag",
    "name": "Silver",
    "atomicNumber": 47,
    "atomicWeight": 107.87,
    "electronConfiguration": [2, 8, 18, 18, 1],
    "description": "Silver is a shiny, white metal known for its excellent electrical conductivity, malleability, and its use in jewelry, coins, and various applications."
  },
  {
    "symbol": "Cd",
    "name": "Cadmium",
    "atomicNumber": 48,
    "atomicWeight": 112.41,
    "electronConfiguration": [2, 8, 18, 18, 2],
    "description": "Cadmium is a soft, bluish-white metal known for its low melting point, its toxicity, and its use in various alloys, batteries, and pigments."
  },
  {
    "symbol": "In",
    "name": "Indium",
    "atomicNumber": 49,
    "atomicWeight": 114.82,
    "electronConfiguration": [2, 8, 18, 18, 3],
    "description": "Indium is a soft, silvery-white metal known for its low melting point, its use in electronic devices, and its presence in certain minerals."
  },
  {
    "symbol": "Sn",
    "name": "Tin",
    "atomicNumber": 50,
    "atomicWeight": 118.71,
    "electronConfiguration": [2, 8, 18, 18, 4],
    "description": "Tin is a silvery-white metal known for its low toxicity, its use in various alloys, and its presence in certain minerals, such as cassiterite."
  },
  {
    "symbol": "Sb",
    "name": "Antimony",
    "atomicNumber": 51,
    "atomicWeight": 121.76,
    "electronConfiguration": [2, 8, 18, 18, 5],
    "description": "Antimony is a brittle, silvery-white metalloid known for its use in flame retardants, its presence in some minerals, and its toxic properties."
  },
  {
    "symbol": "Te",
    "name": "Tellurium",
    "atomicNumber": 52,
    "atomicWeight": 127.60,
    "electronConfiguration": [2, 8, 18, 18, 6],
    "description": "Tellurium is a brittle, silvery-white metalloid known for its semiconductor properties, its use in certain alloys, and its presence in some minerals."
  },
  {
    "symbol": "I",
    "name": "Iodine",
    "atomicNumber": 53,
    "atomicWeight": 126.90,
    "electronConfiguration": [2, 8, 18, 18, 7],
    "description": "Iodine is a shiny, violet-black solid halogen known for its use as a disinfectant, its role in thyroid hormone synthesis, and its presence in seawater."
  },
  {
    "symbol": "Xe",
    "name": "Xenon",
    "atomicNumber": 54,
    "atomicWeight": 131.29,
    "electronConfiguration": [2, 8, 18, 18, 8],
    "description": "Xenon is an inert noble gas known for its use in lighting, lasers, and as a filling gas in certain types of electric lamps and ion thrusters."
  },
  {
    "symbol": "Cs",
    "name": "Cesium",
    "atomicNumber": 55,
    "atomicWeight": 132.91,
    "electronConfiguration": [2, 8, 18, 18, 8, 1],
    "description": "Cesium is a soft, silvery-gold alkali metal known for its high reactivity, its use in atomic clocks, and its presence in certain minerals."
  },
  {
    "symbol": "Ba",
    "name": "Barium",
    "atomicNumber": 56,
    "atomicWeight": 137.33,
    "electronConfiguration": [2, 8, 18, 18, 8, 2],
    "description": "Barium is an alkaline earth metal known for its reactivity with water, its use in various industrial applications, and its presence in certain minerals."
  },
  {
    "symbol": "La",
    "name": "Lanthanum",
    "atomicNumber": 57,
    "atomicWeight": 138.91,
    "electronConfiguration": [2, 8, 18, 18, 9, 2],
    "description": "Lanthanum is a silvery-white metallic element known for its high ductility, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Ce",
    "name": "Cerium",
    "atomicNumber": 58,
    "atomicWeight": 140.12,
    "electronConfiguration": [2, 8, 18, 19, 9, 2],
    "description": "Cerium is a soft, silvery-white metallic element known for its role in catalytic converters, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Pr",
    "name": "Praseodymium",
    "atomicNumber": 59,
    "atomicWeight": 140.91,
    "electronConfiguration": [2, 8, 18, 21, 8, 2],
    "description": "Praseodymium is a soft, silvery-gray metallic element known for its use in certain alloys, its presence in certain minerals, and its role in magnets."
  },
  {
    "symbol": "Nd",
    "name": "Neodymium",
    "atomicNumber": 60,
    "atomicWeight": 144.24,
    "electronConfiguration": [2, 8, 18, 22, 8, 2],
    "description": "Neodymium is a soft, silvery-white metallic element known for its use in magnets, lasers, and its presence in certain minerals."
  },
  {
    "symbol": "Pm",
    "name": "Promethium",
    "atomicNumber": 61,
    "atomicWeight": 145,
    "electronConfiguration": [2, 8, 18, 23, 8, 2],
    "description": "Promethium is a radioactive metallic element that has no stable isotopes, and it is primarily used for research purposes and not found naturally."
  },
  {
    "symbol": "Sm",
    "name": "Samarium",
    "atomicNumber": 62,
    "atomicWeight": 150.36,
    "electronConfiguration": [2, 8, 18, 24, 8, 2],
    "description": "Samarium is a silvery-white rare earth metal known for its use in magnets, its presence in certain minerals, and its radioactive isotopes."
  },
  {
    "symbol": "Eu",
    "name": "Europium",
    "atomicNumber": 63,
    "atomicWeight": 151.96,
    "electronConfiguration": [2, 8, 18, 25, 8, 2],
    "description": "Europium is a silvery-white rare earth metal known for its phosphorescent properties, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Gd",
    "name": "Gadolinium",
    "atomicNumber": 64,
    "atomicWeight": 157.25,
    "electronConfiguration": [2, 8, 18, 25, 9, 2],
    "description": "Gadolinium is a silvery-white rare earth metal known for its high magnetic susceptibility, its use in medical imaging, and its presence in certain minerals."
  },
  {
    "symbol": "Tb",
    "name": "Terbium",
    "atomicNumber": 65,
    "atomicWeight": 158.93,
    "electronConfiguration": [2, 8, 18, 27, 8, 2],
    "description": "Terbium is a silvery-gray rare earth metal known for its use in certain alloys, its presence in certain minerals, and its phosphorescent properties."
  },
  {
    "symbol": "Dy",
    "name": "Dysprosium",
    "atomicNumber": 66,
    "atomicWeight": 162.50,
    "electronConfiguration": [2, 8, 18, 28, 8, 2],
    "description": "Dysprosium is a rare earth metal with a bright, silver luster known for its high magnetic susceptibility, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Ho",
    "name": "Holmium",
    "atomicNumber": 67,
    "atomicWeight": 164.93,
    "electronConfiguration": [2, 8, 18, 29, 8, 2],
    "description": "Holmium is a soft, silvery-white rare earth metal known for its high magnetic susceptibility, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Er",
    "name": "Erbium",
    "atomicNumber": 68,
    "atomicWeight": 167.26,
    "electronConfiguration": [2, 8, 18, 30, 8, 2],
    "description": "Erbium is a silvery-white rare earth metal known for its pink coloration in certain compounds, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Tm",
    "name": "Thulium",
    "atomicNumber": 69,
    "atomicWeight": 168.93,
    "electronConfiguration": [2, 8, 18, 31, 8, 2],
    "description": "Thulium is a soft, silvery-gray rare earth metal known for its high magnetic susceptibility, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Yb",
    "name": "Ytterbium",
    "atomicNumber": 70,
    "atomicWeight": 173.05,
    "electronConfiguration": [2, 8, 18, 32, 8, 2],
    "description": "Ytterbium is a soft, silvery metal known for its high electrical conductivity, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Lu",
    "name": "Lutetium",
    "atomicNumber": 71,
    "atomicWeight": 174.97,
    "electronConfiguration": [2, 8, 18, 32, 9, 2],
    "description": "Lutetium is a silvery-white rare earth metal known for its high density, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Hf",
    "name": "Hafnium",
    "atomicNumber": 72,
    "atomicWeight": 178.49,
    "electronConfiguration": [2, 8, 18, 32, 10, 2],
    "description": "Hafnium is a lustrous, silvery metal known for its high melting point, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Ta",
    "name": "Tantalum",
    "atomicNumber": 73,
    "atomicWeight": 180.95,
    "electronConfiguration": [2, 8, 18, 32, 11, 2],
    "description": "Tantalum is a rare, blue-gray transition metal known for its high corrosion resistance, its use in electronic components, and its presence in certain minerals."
  },
  {
    "symbol": "W",
    "name": "Tungsten",
    "atomicNumber": 74,
    "atomicWeight": 183.84,
    "electronConfiguration": [2, 8, 18, 32, 12, 2],
    "description": "Tungsten is a hard, steel-gray metal known for its high melting point, its use in filaments for incandescent light bulbs, and its presence in certain minerals."
  },
  {
    "symbol": "Re",
    "name": "Rhenium",
    "atomicNumber": 75,
    "atomicWeight": 186.21,
    "electronConfiguration": [2, 8, 18, 32, 13, 2],
    "description": "Rhenium is a silvery-white transition metal known for its high melting point, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Os",
    "name": "Osmium",
    "atomicNumber": 76,
    "atomicWeight": 190.23,
    "electronConfiguration": [2, 8, 18, 32, 14, 2],
    "description": "Osmium is a hard, brittle, blue-gray transition metal known for its high density, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Ir",
    "name": "Iridium",
    "atomicNumber": 77,
    "atomicWeight": 192.22,
    "electronConfiguration": [2, 8, 18, 32, 15, 2],
    "description": "Iridium is a dense, corrosion-resistant, silvery-white transition metal known for its use in spark plugs, its presence in certain meteorites, and its use in certain alloys."
  },
  {
    "symbol": "Pt",
    "name": "Platinum",
    "atomicNumber": 78,
    "atomicWeight": 195.08,
    "electronConfiguration": [2, 8, 18, 32, 17, 1],
    "description": "Platinum is a dense, malleable, and highly unreactive silver-white transition metal known for its use in jewelry, catalytic converters, and various industrial applications."
  },
  {
    "symbol": "Au",
    "name": "Gold",
    "atomicNumber": 79,
    "atomicWeight": 196.97,
    "electronConfiguration": [2, 8, 18, 32, 18, 1],
    "description": "Gold is a soft, malleable, and highly ductile yellow precious metal known for its beauty, its use in jewelry and coins, and its resistance to corrosion."
  },
  {
    "symbol": "Hg",
    "name": "Mercury",
    "atomicNumber": 80,
    "atomicWeight": 200.59,
    "electronConfiguration": [2, 8, 18, 32, 18, 2],
    "description": "Mercury is a heavy, silvery-white transition metal known for its liquid state at room temperature, its use in thermometers, and its toxicity."
  },
  {
    "symbol": "Tl",
    "name": "Thallium",
    "atomicNumber": 81,
    "atomicWeight": 204.38,
    "electronConfiguration": [2, 8, 18, 32, 18, 3],
    "description": "Thallium is a soft, bluish-gray post-transition metal known for its toxicity, its use in certain medical imaging techniques, and its presence in certain minerals."
  },
  {
    "symbol": "Pb",
    "name": "Lead",
    "atomicNumber": 82,
    "atomicWeight": 207.2,
    "electronConfiguration": [2, 8, 18, 32, 18, 4],
    "description": "Lead is a dense, bluish-gray post-transition metal known for its low melting point, its use in batteries and soldering, and its toxicity."
  },
  {
    "symbol": "Bi",
    "name": "Bismuth",
    "atomicNumber": 83,
    "atomicWeight": 208.98,
    "electronConfiguration": [2, 8, 18, 32, 18, 5],
    "description": "Bismuth is a brittle, pinkish-white post-transition metal known for its low thermal and electrical conductivity, its use in certain alloys, and its presence in certain minerals."
  },
  {
    "symbol": "Po",
    "name": "Polonium",
    "atomicNumber": 84,
    "atomicWeight": 209,
    "electronConfiguration": [2, 8, 18, 32, 18, 6],
    "description": "Polonium is a rare and highly radioactive metal known for its intense radioactivity, its use in certain anti-static devices, and its presence in certain minerals."
  },
  {
    "symbol": "At",
    "name": "Astatine",
    "atomicNumber": 85,
    "atomicWeight": 210,
    "electronConfiguration": [2, 8, 18, 32, 18, 7],
    "description": "Astatine is a highly radioactive halogen element known for its extreme rarity, its intense radioactivity, and its potential uses in certain medical treatments."
  },
  {
    "symbol": "Rn",
    "name": "Radon",
    "atomicNumber": 86,
    "atomicWeight": 222,
    "electronConfiguration": [2, 8, 18, 32, 18, 8],
    "description": "Radon is a colorless, odorless, and highly radioactive noble gas known for its presence in certain rocks and soils and its potential health hazards."
  },
  {
    "symbol": "Fr",
    "name": "Francium",
    "atomicNumber": 87,
    "atomicWeight": 223,
    "electronConfiguration": [2, 8, 18, 32, 18, 8, 1],
    "description": "Francium is an extremely rare and highly radioactive alkali metal known for its extreme rarity, its intense radioactivity, and its short half-life."
  },
  {
    "symbol": "Ra",
    "name": "Radium",
    "atomicNumber": 88,
    "atomicWeight": 226,
    "electronConfiguration": [2, 8, 18, 32, 18, 8, 2],
    "description": "Radium is a highly radioactive alkaline earth metal known for its luminescent properties, its use in certain medical treatments, and its presence in certain minerals."
  },
  {
    "symbol": "Ac",
    "name": "Actinium",
    "atomicNumber": 89,
    "atomicWeight": 227,
    "electronConfiguration": [2, 8, 18, 32, 18, 9, 2],
    "description": "Actinium is a radioactive metallic element that is part of the actinide series, known for its intense radioactivity, and its potential uses in certain medical treatments."
  },
  {
    "symbol": "Th",
    "name": "Thorium",
    "atomicNumber": 90,
    "atomicWeight": 232.04,
    "electronConfiguration": [2, 8, 18, 32, 18, 10, 2],
    "description": "Thorium is a radioactive metallic element that is part of the actinide series, known for its potential use as a nuclear fuel, and its presence in certain minerals."
  },
  {
    "symbol": "Pa",
    "name": "Protactinium",
    "atomicNumber": 91,
    "atomicWeight": 231.04,
    "electronConfiguration": [2, 8, 18, 32, 20, 9, 2],
    "description": "Protactinium is a radioactive metallic element that is part of the actinide series, known for its intense radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "U",
    "name": "Uranium",
    "atomicNumber": 92,
    "atomicWeight": 238.03,
    "electronConfiguration": [2, 8, 18, 32, 21, 9, 2],
    "description": "Uranium is a radioactive metallic element that is part of the actinide series, known for its use as a nuclear fuel, and its presence in certain minerals."
  },
  {
    "symbol": "Np",
    "name": "Neptunium",
    "atomicNumber": 93,
    "atomicWeight": 237,
    "electronConfiguration": [2, 8, 18, 32, 22, 9, 2],
    "description": "Neptunium is a radioactive metallic element that is part of the actinide series, known for its intense radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Pu",
    "name": "Plutonium",
    "atomicNumber": 94,
    "atomicWeight": 244,
    "electronConfiguration": [2, 8, 18, 32, 24, 8, 2],
    "description": "Plutonium is a radioactive metallic element that is part of the actinide series, known for its use as a nuclear fuel, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Am",
    "name": "Americium",
    "atomicNumber": 95,
    "atomicWeight": 243,
    "electronConfiguration": [2, 8, 18, 32, 25, 8, 2],
    "description": "Americium is a radioactive metallic element that is part of the actinide series, known for its intense radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Cm",
    "name": "Curium",
    "atomicNumber": 96,
    "atomicWeight": 247,
    "electronConfiguration": [2, 8, 18, 32, 25, 9, 2],
    "description": "Curium is a radioactive metallic element that is part of the actinide series, known for its intense radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Bk",
    "name": "Berkelium",
    "atomicNumber": 97,
    "atomicWeight": 247,
    "electronConfiguration": [2, 8, 18, 32, 27, 8, 2],
    "description": "Berkelium is a radioactive metallic element that is part of the actinide series, known for its intense radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Cf",
    "name": "Californium",
    "atomicNumber": 98,
    "atomicWeight": 251,
    "electronConfiguration": [2, 8, 18, 32, 28, 8, 2],
    "description": "Californium is a radioactive metallic element that is part of the actinide series, known for its intense radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Es",
    "name": "Einsteinium",
    "atomicNumber": 99,
    "atomicWeight": 252,
    "electronConfiguration": [2, 8, 18, 32, 29, 8, 2],
    "description": "Einsteinium is a synthetic radioactive metallic element that is part of the actinide series, known for its intense radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Fm",
    "name": "Fermium",
    "atomicNumber": 100,
    "atomicWeight": 257,
    "electronConfiguration": [2, 8, 18, 32, 30, 8, 2],
    "description": "Fermium is a synthetic radioactive metallic element that is part of the actinide series, known for its intense radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Md",
    "name": "Mendelevium",
    "atomicNumber": 101,
    "atomicWeight": 258,
    "electronConfiguration": [2, 8, 18, 32, 31, 8, 2],
    "description": "Mendelevium is a synthetic radioactive metallic element that is part of the actinide series, known for its intense radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "No",
    "name": "Nobelium",
    "atomicNumber": 102,
    "atomicWeight": 259,
    "electronConfiguration": [2, 8, 18, 32, 32, 8, 2],
    "description": "Nobelium is a synthetic radioactive metallic element that is part of the actinide series, known for its intense radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Lr",
    "name": "Lawrencium",
    "atomicNumber": 103,
    "atomicWeight": 266,
    "electronConfiguration": [2, 8, 18, 32, 32, 8, 3],
    "description": "Lawrencium is a synthetic radioactive metallic element that is part of the actinide series, known for its intense radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Rf",
    "name": "Rutherfordium",
    "atomicNumber": 104,
    "atomicWeight": 267,
    "electronConfiguration": [2, 8, 18, 32, 32, 10, 2],
    "description": "Rutherfordium is a synthetic radioactive metallic element that is part of the transition metals, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Db",
    "name": "Dubnium",
    "atomicNumber": 105,
    "atomicWeight": 270,
    "electronConfiguration": [2, 8, 18, 32, 32, 11, 2],
    "description": "Dubnium is a synthetic radioactive metallic element that is part of the transition metals, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Sg",
    "name": "Seaborgium",
    "atomicNumber": 106,
    "atomicWeight": 271,
    "electronConfiguration": [2, 8, 18, 32, 32, 12, 2],
    "description": "Seaborgium is a synthetic radioactive metallic element that is part of the transition metals, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Bh",
    "name": "Bohrium",
    "atomicNumber": 107,
    "atomicWeight": 270,
    "electronConfiguration": [2, 8, 18, 32, 32, 13, 2],
    "description": "Bohrium is a synthetic radioactive metallic element that is part of the transition metals, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Hs",
    "name": "Hassium",
    "atomicNumber": 108,
    "atomicWeight": 277,
    "electronConfiguration": [2, 8, 18, 32, 32, 14, 2],
    "description": "Hassium is a synthetic radioactive metallic element that is part of the transition metals, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Mt",
    "name": "Meitnerium",
    "atomicNumber": 109,
    "atomicWeight": 276,
    "electronConfiguration": [2, 8, 18, 32, 32, 15, 2],
    "description": "Meitnerium is a synthetic radioactive metallic element that is part of the transition metals, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Ds",
    "name": "Darmstadtium",
    "atomicNumber": 110,
    "atomicWeight": 281,
    "electronConfiguration": [2, 8, 18, 32, 32, 17, 2],
    "description": "Darmstadtium is a synthetic radioactive metallic element that is part of the transition metals, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Rg",
    "name": "Roentgenium",
    "atomicNumber": 111,
    "atomicWeight": 280,
    "electronConfiguration": [2, 8, 18, 32, 32, 18, 2],
    "description": "Roentgenium is a synthetic radioactive metallic element that is part of the transition metals, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Cn",
    "name": "Copernicium",
    "atomicNumber": 112,
    "atomicWeight": 285,
    "electronConfiguration": [2, 8, 18, 32, 32, 18, 2],
    "description": "Copernicium is a synthetic radioactive metallic element that is part of the transition metals, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Nh",
    "name": "Nihonium",
    "atomicNumber": 113,
    "atomicWeight": 284,
    "electronConfiguration": [2, 8, 18, 32, 32, 18, 3],
    "description": "Nihonium is a synthetic radioactive metallic element that is part of the p-block, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Fl",
    "name": "Flerovium",
    "atomicNumber": 114,
    "atomicWeight": 289,
    "electronConfiguration": [2, 8, 18, 32, 32, 18, 4],
    "description": "Flerovium is a synthetic radioactive metallic element that is part of the p-block, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Mc",
    "name": "Moscovium",
    "atomicNumber": 115,
    "atomicWeight": 288,
    "electronConfiguration": [2, 8, 18, 32, 32, 18, 5],
    "description": "Moscovium is a synthetic radioactive metallic element that is part of the p-block, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Lv",
    "name": "Livermorium",
    "atomicNumber": 116,
    "atomicWeight": 293,
    "electronConfiguration": [2, 8, 18, 32, 32, 18, 6],
    "description": "Livermorium is a synthetic radioactive metallic element that is part of the p-block, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Ts",
    "name": "Tennessine",
    "atomicNumber": 117,
    "atomicWeight": 294,
    "electronConfiguration": [2, 8, 18, 32, 32, 18, 7],
    "description": "Tennessine is a synthetic radioactive metallic element that is part of the p-block, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  },
  {
    "symbol": "Og",
    "name": "Oganesson",
    "atomicNumber": 118,
    "atomicWeight": 294,
    "electronConfiguration": [2, 8, 18, 32, 32, 18, 8],
    "description": "Oganesson is a synthetic radioactive metallic element that is part of the p-block, known for its high radioactivity, and its potential uses in certain nuclear reactions."
  }
];

warn = document.getElementById("warning")
info = document.getElementById("intresting")

if (localStorage.getItem("ele") === null) {
  localStorage.setItem("ele","Li")
}
console.log(ele)
var Colors = {
  red: 0xf25346,
  white: 0xd8d0d1,
  brown: 0x59332e,
  pink: 0xF5986E,
  brownDark: 0x23190f,
  blue: 0x68c3c0,
  black: 0x000000,
  yellow: 0xfdd835
};

// Rest of the code remains the same...

function myAtom() {
  localStorage.clear();
  ele = document.getElementById("myText").value;
  localStorage.setItem("ele",ele)
  location.reload();
} 

var ele = localStorage.getItem("ele");

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var width = window.innerWidth;
var height = window.innerHeight;
var camera = new THREE.OrthographicCamera(
  width / -2,
  width / 2,
  height / 2,
  height / -2,
  -1000,
  1000
);
camera.position.z = 2;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});

// Configure renderer clear color
renderer.setClearColor("#fff", 0);

// Configure renderer size
renderer.setSize(window.innerWidth, window.innerHeight);

// Append Renderer to DOM
document.body.appendChild(renderer.domElement);

// Light
var ambientLight = new THREE.AmbientLight(0x000000);
scene.add(ambientLight);

var lights = [];

lights[0] = new THREE.PointLight(0xffffff, 0.5, 0);
lights[0].position.set(200, 0, 0);

lights[1] = new THREE.PointLight(0xffffff, 0.5, 0);
lights[1].position.set(0, 200, 0);

lights[2] = new THREE.PointLight(0xffffff, 0.5, 0);
lights[2].position.set(0, 100, 100);

lights[3] = new THREE.AmbientLight(0xffffff, 0.6);

lights.forEach(function (light) {
  scene.add(light);
});

/*
Geometry
*/
function createTorus(r, tubeD, radialSegs, tubularSegs, arc, color, rotationX) {
  var geometry = new THREE.TorusGeometry(
    r,
    tubeD,
    radialSegs,
    tubularSegs,
    arc
  );
  var material = new THREE.MeshLambertMaterial({
    color: color || "#ff7171"
  });
  var torus = new THREE.Mesh(geometry, material);
  torus.rotation.x = rotationX;

  return torus;
}

function createLine() {
  var material = new THREE.LineBasicMaterial({
    color: 0x0000ff
  });

  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(0, 10, 0), new THREE.Vector3(0, -10, 0));

  var line = new THREE.Line(geometry, material);

  return line;
}

function createSphere(params) {
  var geometry = new THREE.SphereGeometry(
    width / (params.r || 40),
    50,
    50
  );
  var material = new THREE.MeshPhongMaterial({
    color: params.color || Colors.blue,
    transparent: true,
    opacity: 0.8
  });
  var sphere = new THREE.Mesh(geometry, material);

  sphere.position.x = params.x || 0;
  sphere.position.y = params.y || 0;

  return sphere;
}

/* create stuff */
const baseRadius = width > height ? height - 40 / 2 : width - 40 / 2;

function createValence(ringNumber, electronCount) {
  var radius = 100 + (baseRadius / 20) * ringNumber;

  var ring = createTorus(
    radius,
    baseRadius / 600,
    20,
    100,
    Math.PI * 2,
    "#ffffff",
    0
  );

  var electrons = [];

  var angleIncrement = (Math.PI * 2) / electronCount;
  var angle = 0;

  for (var i = 0; i < electronCount; i++) {
    // Solve for x and y.
    var posX = radius * Math.cos(angle);
    var posY = radius * Math.sin(angle);

    angle += angleIncrement;

    var color = i % 2 === 0 ? Colors.yellow : Colors.yellow; // Assign yellow color to electrons

    var electron = createSphere({
      r: 120,
      x: posX,
      y: posY,
      color: color
    });
    electrons.push(electron);
  }

  var group = new THREE.Group();

  group.add(ring);

  electrons.forEach(function (electron) {
    group.add(electron);
  });

  return group;
}
 
var look = periodicTable.find(element => element.symbol === ele);
if(look === undefined){
  look = periodicTable.find(element => element.symbol === "Li");
  localStorage.setItem("ele",ele)
  warn.textContent = "Thats not an Element! If it is an element use its symbol instead!";
}
else{
  info.textContent = look.description
}

var nucleus = new THREE.Group();
var atomicNumber = look.atomicNumber;
var atomicWeight = look.atomicWeight;
var particleRadius = 30; // Adjust the particle radius as needed

var protonPositions = generateRandomizedSphereDistribution(atomicNumber, particleRadius);
var neutronPositions = generateRandomizedSphereDistribution(atomicWeight - atomicNumber, particleRadius);

applyRepulsionForce(protonPositions, particleRadius);
applyRepulsionForce(neutronPositions, particleRadius);

for (var i = 0; i < atomicNumber; i++) {
  var proton = createParticle(Colors.red, particleRadius);
  proton.position.copy(protonPositions[i]);
  nucleus.add(proton);
}

for (var i = 0; i < atomicWeight - atomicNumber; i++) {
  var neutron = createParticle(Colors.black, particleRadius);
  neutron.position.copy(neutronPositions[i]);
  nucleus.add(neutron);
}

function createParticle(color, radius) {
  var particleGeometry = new THREE.SphereGeometry(radius, 32, 32);
  var particleMaterial = new THREE.MeshPhongMaterial({
    color: color,
    transparent: true,
    opacity: 0.8
  });

  var particle = new THREE.Mesh(particleGeometry, particleMaterial);
  return particle;
}

function generateRandomizedSphereDistribution(numPoints, radius) {
  var points = [];

  for (var i = 0; i < numPoints; i++) {
    var u = Math.random();
    var v = Math.random();
    var theta = 2 * Math.PI * u;
    var phi = Math.acos(2 * v - 1);

    var x = radius * Math.sin(phi) * Math.cos(theta);
    var y = radius * Math.sin(phi) * Math.sin(theta);
    var z = radius * Math.cos(phi);

    points.push(new THREE.Vector3(x, y, z));
  }

  return points;
}

function applyRepulsionForce(positions, radius) {
  var repulsionStrength = radius * 2.5;

  for (var i = 0; i < positions.length; i++) {
    var currentPoint = positions[i];

    for (var j = 0; j < i; j++) {
      var otherPoint = positions[j];
      var distance = currentPoint.distanceTo(otherPoint);

      if (distance < repulsionStrength) {
        var force = repulsionStrength / distance;
        var displacement = currentPoint.clone().sub(otherPoint).normalize().multiplyScalar(force);
        currentPoint.add(displacement);
        otherPoint.sub(displacement);
      }
    }
  }
}

scene.add(nucleus);


var shellCounts = look.electronConfiguration
var valenceCount = look.electronConfiguration.length
var valences = [];

for (var i = 1; i <= valenceCount; i++) {
  var shellCountIndex = (i - 1) % shellCounts.length;
  var v = createValence(i, shellCounts[shellCountIndex]);
  console.log(shellCounts[shellCountIndex]);

  valences.push(v);

  scene.add(v);
}

/*
Render
*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var render = function () {
  requestAnimationFrame(render);

  var baseRotation = 0.01;

  valences.forEach(function (v, i) {
    v.rotation.y += baseRotation - i * 0.001;
    v.rotation.x += baseRotation - i * 0.001;
    v.rotation.z += baseRotation - i * 0.001;
  });

  nucleus.rotation.x += 0.01;
  nucleus.rotation.y += 0.01;

  renderer.render(scene, camera);
};

render();

/*var h1Element = document.createElement("h1");
h1Element.setAttribute("class", "main");
h1Element.setAttribute("data-aos","fade-down")
h1Element.textContent = "Nuculear Power to The Transistor to Quantum Computing";
h1Element.style.fontSize = "3em"; 

document.body.appendChild(h1Element);*/
