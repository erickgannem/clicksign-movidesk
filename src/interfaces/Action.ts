import Person from '@interfaces/Person'

export default interface Action {
  id: number
  type: number
  origin: number
  description: string
  htmlDescription: string
  status: string
  justification: string
  createdDate: Date
  createdBy: Person
  isDeleted: boolean
  timeAppointments: any[]
  expenses: any[]
  attachments: any[]
  tags: string[]
}
