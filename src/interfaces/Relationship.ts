import Service from '@interfaces/Service'

export default interface Relationship {
  id: string
  name: string
  slaAgreement: string
  forceChildrenToHaveSomeAgreement: boolean
  allowAllServices: boolean
  includeInParents: boolean
  loadChildOrganizations: boolean
  services: Service[]
}
