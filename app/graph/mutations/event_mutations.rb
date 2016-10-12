module EventMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreateEvent'
    input_field :event, EventInputType
    input_field :auth_token, !types.String

    return_field :event, EventType
    resolve -> (inputs, ctx) do
      event_inputs = inputs[:event]
      start_date = Date.strptime(event_inputs[:start_date], '%m/%d/%Y').to_datetime
      end_date = Date.strptime(event_inputs[:end_date], '%m/%d/%Y').to_datetime
      event = Event.new(
        name: event_inputs[:name],
        start_date: start_date,
        end_date: end_date,
        event_type: event_inputs[:type].downcase!,
        message: event_inputs[:message],
        location: event_inputs[:location]
      )
      event_inputs[:guests].to_a.each do |guest|
        event.guests << Guest.new(name: guest.to_h["name"])
      end
      host = Host.find_by(name: event[:host].to_h["name"])
      event.user = User.find_by(auth_token: inputs[:auth_token])
      event.host = if host
                     host
                   else
                     Host.new(name: event_inputs[:host].to_h["name"])
                   end
      event.save!
      {
        event: event
      }
    end
  end
  RSVP = GraphQL::Relay::Mutation.define do
    input_field :event_id, !types.Int
    input_field :auth_token, !types.String

    return_field :event, EventType
    resolve -> (inputs, ctx) do
      event = Event.find_by(id: inputs[:event_id])
      user = User.find_by(auth_token: inputs[:auth_token])
      guest = Guest.find_by(name: user.name) || Guest.create(name: user.name)
      event.guests << guest
      event.save!
      {
        event: event
      }
    end
  end
end
