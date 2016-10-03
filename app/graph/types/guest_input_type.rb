GuestInputType = GraphQL::InputObjectType.define do
  name 'GuestInput'
  description 'Input for guests'
  input_field :name, !types.String
end
