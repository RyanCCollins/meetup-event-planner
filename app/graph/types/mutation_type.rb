MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :CreateEvent, field: EventMutations::Create.field
  field :SignUp, field: UserMutations::SignUp.field
  field :SignIn, field: UserMutations::SignIn.field
end
