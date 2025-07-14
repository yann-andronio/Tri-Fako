export type Retrait = {
  montant: number
  date: string
}

export type User = {
  nom: string
  prenom: string
  email: string
  telephone?: string
  dechets: number
  wallet?: number
  retraits?: Retrait[]
}

export const userData: User[] = [
  {
    nom: 'Randrianarisoa',
    prenom: 'Mialy',
    email: 'mialy@gmail.com',
    telephone: '034 12 345 67',
    dechets: 15,
    wallet: 0,
    retraits: [
      { montant: 15000, date: '08/07/2025' },
      { montant: 10000, date: '10/07/2025' },
      { montant: 15000, date: '08/07/2025' },
      { montant: 10000, date: '10/07/2025' },
      { montant: 15000, date: '08/07/2025' },
      { montant: 10000, date: '10/07/2025' },
    ]
  },
  {
    nom: 'Rakoto',
    prenom: 'Tojo',
    email: 'tojo@gmail.com',
    telephone: '034 99 876 54',
    dechets: 8,
    wallet: 0,
    retraits: [
      { montant: 15000, date: '08/07/2025' },
      { montant: 10000, date: '10/07/2025' }
    ]
  },
  {
    nom: 'Rasoa',
    prenom: 'Fanja',
    email: 'fanja@gmail.com',
    telephone: '032 45 678 90',
    dechets: 12,
    wallet: 0,
    retraits: [{ montant: 15000, date: '08/07/2025' }]
  },
  {
    nom: 'Rasoa',
    prenom: 'Fanja',
    email: 'fanja@gmail.com',
    telephone: '032 45 678 90',
    dechets: 12,
    wallet: 0,
    retraits: [
      { montant: 15000, date: '08/07/2025' },
      { montant: 10000, date: '10/07/2025' }
    ]
  },
  {
    nom: 'Rasoa',
    prenom: 'Fanja',
    email: 'fanja@gmail.com',
    telephone: '032 45 678 90',
    dechets: 12,
    wallet: 0,
    retraits: [
      { montant: 15000, date: '08/07/2025' },
      { montant: 10000, date: '10/07/2025' }
    ]
  },
  {
    nom: 'Rasoa',
    prenom: 'Fanja',
    email: 'fanja@gmail.com',
    telephone: '032 45 678 90',
    dechets: 12,
    wallet: 0,
    retraits: [
      { montant: 15000, date: '08/07/2025' },
      { montant: 10000, date: '10/07/2025' }
    ]
  }
]
