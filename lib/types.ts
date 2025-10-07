export type MenuItem = {
  name: string
  price: number
  desc?: string
  tags?: string[]
  // Drinks-only: hot or cold
  type?: 'hot' | 'cold'
  image?: string
}

export type MenuData = Record<string, MenuItem[]>

