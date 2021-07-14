import Person from '@interfaces/Person'
import Client from '@interfaces/Client'
import Action from '@interfaces/Action'
import CustomFieldValues from '@interfaces/CustomFieldValues'

export default interface Ticket {
  id?: string
  type: 2
  subject?: string
  category?: string
  urgency?: string
  status: string
  baseStatus?: string
  justification?: string
  origin?: 8
  createdDate: Date
  owner?: Person,
  ownerTeam?: string
  createdBy: Person
  serviceFull?: []
  serviceFirstLevelId?: number
  serviceFirstLevel?: string
  serviceSecondaryLevel?: string
  serviceThirdLevel?: string
  contactForm?: string
  tags?: []
  cc?: string
  resolvedIn?: Date
  reopenedIn?: Date
  lastActionDate?: Date
  actionCount?: number
  lastUpdate?: Date
  lifetimeWorkingTime?: number
  stoppedTime?: number
  stoppedTimeWorkingTime?: number
  resolvedInFirstCall?: boolean
  chatWidget?: string
  chatGroup?: string
  chatTalkTime?: number
  chatWaitingTime?: number
  sequence?: number
  slaAgreement?: string
  slaAgreementRule?: string
  slaSolutionTime?: number
  slaResponseTime?: number
  slaSolutionChangedByUser?: boolean
  slaSolutionChangedBy?: Person
  slaSolutionDate?: Date
  slaSolutionDateIsPaused?: boolean
  slaResponseDate?: Date
  slaRealResponseDate?: Date
  jiralssueKey?: string
  redmineIssueId?: number
  clients: Client[]
  actions: Action[]
  parentTickets?: any[]
  ownerHistories?: any[]
  statusHistories?: any[]
  satisfactionSurveyResponses?: any[]
  customFieldValues?: CustomFieldValues[]
  assets?: []
}
