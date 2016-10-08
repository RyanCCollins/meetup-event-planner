module EventMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreateEvent'
    input_field :name, !types.String
    input_field :message, types.String
    input_field :start_date, !types.String
    input_field :end_date, !types.String
    input_field :type, !types.String
    input_field :host, HostInputType
    input_field :location, !types.String
    input_field :auth_token, !types.String
    input_field :guests, types[GuestInputType]

    return_field :event, EventType
    resolve -> (inputs, ctx) do
      start_date = Date.strptime(inputs[:start_date], '%m/%d/%Y').to_datetime
      end_date = Date.strptime(inputs[:end_date], '%m/%d/%Y').to_datetime
      event = Event.new(
        name: inputs[:name],
        start_date: start_date,
        end_date: end_date,
        event_type: inputs[:type].downcase!,
        message: inputs[:message],
        location: inputs[:location]
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
  RSVP = GraphQL::Relay::Mutation.define do
    input_field :event_id, types.String!
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
