EventInputType = GraphQL::InputObjectType.define do
  name 'EventInput'
  description 'Input type for an event'
  input_field :name, !types.String
  input_field :message, types.String
  input_field :start_date, !types.String
  input_field :end_date, !types.String
  input_field :type, !types.String
  input_field :host, HostInputType
  input_field :location, !types.String
  input_field :guests, types[GuestInputType]
end
