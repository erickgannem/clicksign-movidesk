import Person from '@interfaces/Person'

export default interface Client {
  id: string
  businessName: string
  email: string
  phone: string
  personType: number
  profileType: number
  isDeleted: boolean
  organization: Person
}
