GuestType = GraphQL::ObjectType.define do
  name 'Guest'
  description 'A single guest entry'
  field :id, types.ID, 'The ID of the guest'
  field :name, types.String, 'The name of the guest'
end
