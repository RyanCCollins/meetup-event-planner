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
  field :event, EventType do
    argument :id, types.ID
    resolve -> (obj, args, ctx) do
      event = Event.find_by_id(args[:id])
      event
    end
  end
  field :hosts, types[HostType] do
    resolve -> (obj, args, ctx) do
      Host.all
    end
  end
  field :guests, types[GuestType] do
    resolve -> (obj, args, ctx) do
      Guest.all
    end
  end
  field :eventTypes, types[EventTypeEnum] do
    resolve -> (obj, args, ctx) do
      Event.defined_enums["event_type"].map { |k, _| k }.to_a
    end
  end
  field :currentUser do
    type UserType
    resolve -> (obj, args, ctx) {
      ctx[:current_user]
    }
  end
end
