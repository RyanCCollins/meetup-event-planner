HostType = GraphQL::ObjectType.define do
  name 'Host'
  description 'A event entry'
  field :id, types.ID, 'The id of the host'
  field :name, !types.String, 'The name of the host'
end
