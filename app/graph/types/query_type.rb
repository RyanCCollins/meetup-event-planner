QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'The query root of this schema.'

  # Get Project by ID
  field :posts, types[PostType] do
    argument :limit, types.Int
    resolve -> (obj, args, ctx) {
      projects = Post.all
      args[:limit] && projects = projects.limit(args[:limit])
      projects
    }
  end
end
