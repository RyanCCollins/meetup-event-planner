5.times do
  Host.create(name: FFaker::Name.name)
end

User.create(
  name: 'GraphQL User',
  email: 'user@graphql.org',
  password: 'GraphQLUser123'
)

5.times do
  User.create(
    name: FFaker::Name.name,
    email: FFaker::Internet.email,
    password: FFaker::Internet.password
  )
end

10.times do
  name = [
    FFaker::BaconIpsum.word,
    FFaker::BaconIpsum.word
  ].map(&:capitalize).join(' ')
  type = [0, 1, 2, 3, 4]
  event = Event.create(
    name: name,
    user: User.all.sample,
    event_type: type.sample,
    start_date: FFaker::Time.date,
    end_date: FFaker::Time.date,
    location: "#{FFaker::Address.street_address}, #{FFaker::Address.city}, #{FFaker::Address.us_state_abbr} #{FFaker::Address.zip_code}",
    host: Host.all.sample,
    message: FFaker::BaconIpsum.paragraph
  )
  5.times do
    Guest.create(event: event, name: FFaker::Name.name)
  end
end
