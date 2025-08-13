export interface Flight {
  id: string
  airline: string
  from: string
  to: string
  departure: string
  arrival: string
  duration: string
  price: number
  stops: number
}

export interface Hotel {
  id: string
  name: string
  location: string
  rating: number
  price: number
  image: string
  amenities: string[]
}

export interface Package {
  id: string
  title: string
  destination: string
  duration: string
  price: number
  image: string
  includes: string[]
}

export interface SearchParams {
  from?: string
  to?: string
  departure?: string
  return?: string
  travelers?: number
  class?: string
}
