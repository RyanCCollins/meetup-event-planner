EventTypeEnum = GraphQL::EnumType.define do
  name 'EventType'
  description 'The type of the event'
  value 'birthday', value: 0
  value 'conference', value: 1
  value 'office', value: 2
  value 'wedding', value: 3
  value 'other', value: 4
end
