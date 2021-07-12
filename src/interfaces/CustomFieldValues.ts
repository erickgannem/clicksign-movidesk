import Item from '@interfaces/Item'

export default interface CustomFieldValues {
  customFieldId: number
  customFieldRuleId: number
  line: number
  value: string
  items: Item[]
}
