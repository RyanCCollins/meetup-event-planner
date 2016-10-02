module PostMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreatePost'
    input_field :title, !types.String
    input_field :text, !types.String
    return_field :post, PostType
    resolve -> (inputs, ctx) do
      post = Post.create(
        title: inputs[:title],
        text: inputs[:text]
      )
      {
        post
      }
    end
  end
end
