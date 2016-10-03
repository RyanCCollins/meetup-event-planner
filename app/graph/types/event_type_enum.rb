EventTypeEnum = GraphQL::EnumType.define do
  name 'EventType'
  description 'The type of the event'
  value 'birthday'
  value 'conference'
  value 'office'
  value 'wedding'
  value 'other'
end
