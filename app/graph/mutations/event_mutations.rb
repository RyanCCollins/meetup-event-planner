module EventMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreateEvent'
    input_field :name, !types.String
    input_field :message, types.String
    input_field :start_date, !types.String
    input_field :end_date, !types.String
    input_field :type, !types.String
    input_field :host, HostInputType
    input_field :auth_token, !types.String
    input_field :guests, types[GuestInputType]

    return_field :event, EventType
    resolve -> (inputs, ctx) do
      event = Event.new(
        name: inputs[:name],
        start_date: inputs[:start_date],
        end_date: inputs[:end_date],
        event_type: inputs[:type],
        message: inputs[:message],
      )
      inputs[:guests].to_a.each do |guest|
        event.guests << Guest.new(name: guest.to_h["name"])
      end
      host = Host.find_by(name: inputs[:host].to_h["name"])
      event.user = User.find_by(auth_token: inputs[:auth_token])
      event.host = if host
                     host
                   else
                     Host.new(name: inputs[:host].to_h["name"])
                   end
      event.save
      {
        event: event
      }
    end
  end
end
