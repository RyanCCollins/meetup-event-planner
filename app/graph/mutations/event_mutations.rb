module EventMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreateEvent'
    input_field :name, !types.String
    input_field :message, types.String
    input_field :start_date, types.String
    input_field :end_date, types.String
    input_field :type, types.Int
    input_field :host, HostInputType

    return_field :event, EventType
    resolve -> (inputs, ctx) do
      event = Event.new(
        name: inputs[:name],
        start_date: inputs[:start_date],
        end_date: inputs[:end_date],
        event_type: inputs[:type],
        message: inputs[:message]
      )
      host = Host.find_by(name: inputs[:host]["name"])
      event.host = if host
                     host
                   else
                     Host.new(name: inputs[:host]["name"])
                   end
      event.save
      {
        event: event
      }
    end
  end
end
