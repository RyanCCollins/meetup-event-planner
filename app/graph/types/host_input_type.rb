HostInputType = GraphQL::InputObjectType.define do
  name 'HostInput'
  description 'Input for hosts'
  input_field :name, !types.String
end
