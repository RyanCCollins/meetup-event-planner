MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :CreatePost, field: PostMutations::Create.field
end
