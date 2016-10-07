5.times do
  Host.create(name: FFaker::Name.name)
end

5.times do
  Guest.create(
    name: FFaker::Name.name
  )
end

User.create(
  name: 'GraphQL User',
  email: 'user@graphql.org',
  password: 'GraphQLUser123'
)

Event.create(
  name: 'Alumni App Release Party',
  user: User.first,
  event_type: 4,
  start_date: '10/06/2016 5:00PM',
  end_date: '10/06/2016 7:00PM',
  host: Host.create(name: 'Ryan Collins'),
  guests: Guest.all,
  message: 'Join us to celebrate the release of the alumni web application.  We will have an online celebration as well as an in-person meetup at Udacity headquarters.',
  location: '2465 Latham Street, 3rd Floor., Mountain View, CA 94040'
)
