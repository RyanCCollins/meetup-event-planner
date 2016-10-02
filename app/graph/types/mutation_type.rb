MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :CreateEvent, field: EventMutations::Create.field
end
