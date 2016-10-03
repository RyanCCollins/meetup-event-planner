5.times do
  Host.create(name: FFaker::Name.name)
end

10.times do
  name = [
    FFaker::BaconIpsum.word,
    FFaker::BaconIpsum.word
  ].map(&:capitalize).join(' ')
  type = [0, 1, 2, 3, 4]
  event = Event.create(
    name: name,
    event_type: type.sample,
    start_date: FFaker::Time.date,
    end_date: FFaker::Time.date,
    location: FFaker::Address.street_address,
    host: Host.all.sample,
    message: FFaker::BaconIpsum.paragraph
  )
  10.times do
    Guest.create(event: event, name: FFaker::Name.name)
  end
end
