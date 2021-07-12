import Email from '@interfaces/Email'
import Relationship from '@interfaces/Relationship'
import CustomFieldValues from '@interfaces/CustomFieldValues'
import AtAssets from '@interfaces/AtAssets'
import Contact from '@interfaces/Contact'
import Address from '@interfaces/Address'
export default interface Person {
  id?: string
  codeReferenceAdditional?: string | number | null
  isActive: boolean
  personType: 1
  profileType: 2
  accessProfile?: string
  businessName: string
  businessBranch?: string | null
  corporateName?: string | null
  cpfCnpj: string
  userName: string
  password?: string
  role?: null
  bossId?: null
  bossName?: null
  classification?: null
  cultureId?: string
  timeZoneId?: string
  createdDate?: Date
  createdBy?: string
  changedDate?: null
  changedBy?: null
  observations?: null
  authenticateOn?: null
  addresses?: Address[],
  contacts?: Contact[],
  emails?: Email[]
  teams: []
  relationships?: Relationship[]
  customFieldValues?: CustomFieldValues[]
  atAssets?: AtAssets[]
}
