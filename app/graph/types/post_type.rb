PostType = GraphQL::ObjectType.define do
  name 'Post'
  description 'A post entry'
  field :id, types.ID, 'The id of this post'
  field :title, types.String, 'The title of this post'
  field :text, types.String, 'The text content of the post'
end
