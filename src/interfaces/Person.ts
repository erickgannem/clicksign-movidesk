import Email from '@interfaces/Email'

export default interface Person {
  id: string
  codeReferenceAdditional: string | number | null
  isActive: boolean
  personType: number
  profileType: number
  accessProfile: string
  businessName: string
  businessBranch: string | null
  corporateName: string | null
  cpfCnpj: string
  userName: string
  password: string
  role: null
  bossId: null
  bossName: null
  classification: null
  cultureId: string
  timeZoneId: string
  createdDate: Date
  createdBy: string
  changedDate: null
  changedBy: null
  observations: null
  authenticateOn: null
  addresses: []
  contacts: [
    {
      'contactType': 'Telefone celular'
      'contact': '+51 996 081 368'
      'isDefault': true
    }
  ]
  emails: Email[]
  teams: []
  relationships: [
    {
      'id': null
      'name': null
      'slaAgreement': 'Primeiro atendimento e tempo máximo de atendimento por vendedor.'
      'forceChildrenToHaveSomeAgreement': false
      'allowAllServices': true
      'includeInParents': null
      'loadChildOrganizations': null
      'services': []
      'idToDelete': null
      'isGetMethod': true
    }
  ]
  customFieldValues: []
  atAssets: []
}
