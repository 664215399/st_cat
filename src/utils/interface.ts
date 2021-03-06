export interface ColumnProps {

  adaptability: number,
  affection_level: number,
  alt_names: string,
  cfa_url: string,
  child_friendly: number,
  country_code: string,
  country_codes: string,
  description: string,
  dog_friendly: number,
  energy_level: number,
  experimental: number,
  grooming: number,
  hairless: number,
  health_issues: number,
  hypoallergenic: number,
  id: string,
  image: {
    height: number,
    id: string,
    url?: string|undefined,
    width: number
  },
  indoor: number,
  intelligence: number,
  life_span: string,
  name: string,
  natural: number,
  origin: string,
  rare: number,
  reference_image_id: string,
  rex: number,
  shedding_level: number,
  short_legs: number,
  social_needs: number,
  stranger_friendly: number,
  suppressed_tail: number,
  temperament: string
  vetstreet_url: string,
  vcahospitals_url?:string,
  vocalisation: number,
  weight: {
    imperial: string,
    metric: string
  },
  wikipedia_url: string
}
export interface DetailesProps{
  adaptability: number,
  affection_level: number,
  alt_names: string,
  cfa_url: string,
  child_friendly: number,
  country_code: string,
  country_codes: string,
  description: string,
  dog_friendly: number,
  energy_level: number,
  experimental: number,
  grooming: number,
  hairless: number,
  health_issues: number,
  hypoallergenic: number,
  id: string,
  indoor: number,
  intelligence: number,
  lap: number,
  life_span: string,
  name: string,
  natural: number,
  origin: string,
  rare: number,
  reference_image_id: string,
  rex: number,
  shedding_level: number,
  short_legs: number,
  social_needs: number,
  stranger_friendly: number,
  suppressed_tail: number,
  temperament: string
  vcahospitals_url: string,
  vetstreet_url: string,
  vocalisation: number,
  weight: {
    imperial: string,
    metric: string
  },
  wikipedia_url: string
}
export interface DetailesListProps {
  height: number,
  id: string
  url: string
  width: number
  breeds: DetailesProps[]
}
interface testProps{
  id: string,
  name:string
}
export const arrToObj = <T extends {id?:string}>(arr:Array<T>) => {
  return arr.reduce((prev, current) => {
    if (current.id) {
      prev[current.id] = current
    }
    return prev
  }, {} as { [key:string]:T})
}
export const objToArr = <T>(obj: {[key:string]:T}) => {
  return Object.keys(obj).map(key => obj[key])
}
