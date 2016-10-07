QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'The query root of this schema.'

  # Get all events
  field :eventsCount, types.Int do
    resolve -> (obj, args, ctx) {
      Event.all.count
    }
  end
  field :events, types[EventType] do
    argument :first, types.Int
    resolve -> (obj, args, ctx) {
      events = Event.all.sort_by(&:start_date).reverse
      if args[:first]
        events = events.first(args[:first])
      end
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
  field :authUser, AuthUserType do
    argument :auth_token, !types.String
    resolve -> (obj, args, ctx) do
      User.find_by(auth_token: args[:auth_token])
    end
  end
end
