module EventMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreateEvent'
    input_field :name, !types.String
    input_field :message, types.String
    input_field :start_date, types.String
    input_field :end_date, types.String
    input_field :type, types.Int
    input_field :host, HostInputType
    input_field :host_id, types.ID

    return_field :event, EventType
    resolve -> (inputs, ctx) do
      event = Event.new(
        name: inputs[:name],
        start_date: inputs[:start_date],
        end_date: inputs[:end_date],
        type: inputs[:type],
        message: inputs[:message]
      )
      if inputs[:host_id]
        host = Host.find_by_id(host_id)
        event.host = host
        event.save
      end
      {
        event: event
      }
    end
  end
end
