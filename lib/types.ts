export type MenuItem = {
  name: string
  price: number
  desc?: string
  tags?: string[]
}

export type MenuData = Record<string, MenuItem[]>

