QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'The query root of this schema.'

  # Get all events
  field :events, types[EventType] do
    argument :limit, types.Int
    resolve -> (obj, args, ctx) {
      events = Event.all
      args[:limit] && events = events.limit(args[:limit])
      events
    }
  end
end
